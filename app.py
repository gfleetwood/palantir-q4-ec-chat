"""Python file to serve as the frontend"""
import streamlit as st
from streamlit_chat import message
from langchain.chains import ConversationChain
from langchain.llms import OpenAI
from langchain.embeddings.openai import OpenAIEmbeddings
from os import environ
from langchain import VectorDBQA
from langchain.vectorstores import Pinecone
import pinecone
from langchain.chains.question_answering import load_qa_chain

def get_text():
    input_text = st.text_input("Enter Question: ", key = "input", on_change = submit)
    return input_text

def submit():
    st.session_state.something = st.session_state.input
    st.session_state.input = ''
  
pinecone.init(
api_key = environ['PINECONE_API_KEY'],  # find at app.pinecone.io
environment = environ['PINECONE_API_ENV']   # next to api key in console
)

index = pinecone.Index("palantir-2022-q4")
llm = OpenAI(temperature = 0.0)
embeddings = OpenAIEmbeddings(openai_api_key = environ['OPENAI_API_KEY'])
chain = load_qa_chain(llm, chain_type = "stuff")
docsearch = Pinecone(index, embeddings.embed_query, "text")

title = "Palantir Earnings Call: 2022-Q4"
st.set_page_config(page_title = title, page_icon = ":robot:")
st.header(title)

if "generated" not in st.session_state:
    st.session_state["generated"] = []
    
if 'something' not in st.session_state:
    st.session_state.something = ''

if "past" not in st.session_state:
    st.session_state["past"] = []

user_input = get_text()

if user_input:
    docs = docsearch.similarity_search(user_input, include_metadata = True)
    output = chain.run(input_documents = docs, question = user_input)

    st.session_state.past.append(user_input)
    st.session_state.generated.append(output)

if st.session_state["generated"]:
    for i in range(len(st.session_state["generated"]) - 1, -1, -1):
        message(st.session_state["past"][i], is_user = True, key = str(i) + "_user")
        message(st.session_state["generated"][i], key = str(i))

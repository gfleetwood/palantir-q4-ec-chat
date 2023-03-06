/*!For license information please see fool_mad.js.LICENSE.txt*/(()=>{var __webpack_modules__={643:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_RESULT__,definition;definition=function(){var context=this,XHR2;if("window"in context)var doc=document,byTag="getElementsByTagName",head=doc[byTag]("head")[0];else try{XHR2=__webpack_require__(676)}catch(e){throw new Error("Peer dependency `xhr2` required! Please npm install xhr2")}var httpsRe=/^http/,protocolRe=/(^\w+):\/\//,twoHundo=/^(20\d|1223)$/,readyState="readyState",contentType="Content-Type",requestedWith="X-Requested-With",uniqid=0,callbackPrefix="reqwest_"+ +new Date,lastValue,xmlHttpRequest="XMLHttpRequest",xDomainRequest="XDomainRequest",noop=function(){},isArray="function"==typeof Array.isArray?Array.isArray:function(e){return e instanceof Array},defaultHeaders={contentType:"application/x-www-form-urlencoded",requestedWith:xmlHttpRequest,accept:{"*":"text/javascript, text/html, application/xml, text/xml, */*",xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript",js:"application/javascript, text/javascript"}},xhr=function(e){if(!0===e.crossOrigin){var t=context[xmlHttpRequest]?new XMLHttpRequest:null;if(t&&"withCredentials"in t)return t;if(context[xDomainRequest])return new XDomainRequest;throw new Error("Browser does not support cross-origin requests")}return context[xmlHttpRequest]?new XMLHttpRequest:XHR2?new XHR2:new ActiveXObject("Microsoft.XMLHTTP")},globalSetupOptions={dataFilter:function(e){return e}};function succeed(e){var t=protocolRe.exec(e.url);return t=t&&t[1]||context.location.protocol,httpsRe.test(t)?twoHundo.test(e.request.status):!!e.request.response}function handleReadyState(e,t,r){return function(){return e._aborted?r(e.request):e._timedOut?r(e.request,"Request is aborted: timeout"):void(e.request&&4==e.request[readyState]&&(e.request.onreadystatechange=noop,succeed(e)?t(e.request):r(e.request)))}}function setHeaders(e,t){var r,s=t.headers||{};s.Accept=s.Accept||defaultHeaders.accept[t.type]||defaultHeaders.accept["*"];var n="undefined"!=typeof FormData&&t.data instanceof FormData;for(r in t.crossOrigin||s[requestedWith]||(s[requestedWith]=defaultHeaders.requestedWith),s[contentType]||n||(s[contentType]=t.contentType||defaultHeaders.contentType),s)s.hasOwnProperty(r)&&"setRequestHeader"in e&&e.setRequestHeader(r,s[r])}function setCredentials(e,t){void 0!==t.withCredentials&&void 0!==e.withCredentials&&(e.withCredentials=!!t.withCredentials)}function generalCallback(e){lastValue=e}function urlappend(e,t){return e+(/\?/.test(e)?"&":"?")+t}function handleJsonp(e,t,r,s){var n=uniqid++,i=e.jsonpCallback||"callback",o=e.jsonpCallbackName||reqwest.getcallbackPrefix(n),a=new RegExp("((^|\\?|&)"+i+")=([^&]+)"),l=s.match(a),c=doc.createElement("script"),p=0,u=-1!==navigator.userAgent.indexOf("MSIE 10.0");return l?"?"===l[3]?s=s.replace(a,"$1="+o):o=l[3]:s=urlappend(s,i+"="+o),context[o]=generalCallback,c.type="text/javascript",c.src=s,c.async=!0,void 0===c.onreadystatechange||u||(c.htmlFor=c.id="_reqwest_"+n),c.onload=c.onreadystatechange=function(){if(c[readyState]&&"complete"!==c[readyState]&&"loaded"!==c[readyState]||p)return!1;c.onload=c.onreadystatechange=null,c.onclick&&c.onclick(),t(lastValue),lastValue=void 0,head.removeChild(c),p=1},head.appendChild(c),{abort:function(){c.onload=c.onreadystatechange=null,r({},"Request is aborted: timeout",{}),lastValue=void 0,head.removeChild(c),p=1}}}function getRequest(e,t){var r,s=this.o,n=(s.method||"GET").toUpperCase(),i="string"==typeof s?s:s.url,o=!1!==s.processData&&s.data&&"string"!=typeof s.data?reqwest.toQueryString(s.data):s.data||null,a=!1;return"jsonp"!=s.type&&"GET"!=n||!o||(i=urlappend(i,o),o=null),"jsonp"==s.type?handleJsonp(s,e,t,i):((r=s.xhr&&s.xhr(s)||xhr(s)).open(n,i,!1!==s.async),setHeaders(r,s),setCredentials(r,s),context[xDomainRequest]&&r instanceof context[xDomainRequest]?(r.onload=e,r.onerror=t,r.onprogress=function(){},a=!0):r.onreadystatechange=handleReadyState(this,e,t),s.before&&s.before(r),a?setTimeout((function(){r.send(o)}),200):r.send(o),r)}function Reqwest(e,t){this.o=e,this.fn=t,init.apply(this,arguments)}function setType(e){if(null!==e)return e.match("json")?"json":e.match("javascript")?"js":e.match("text")?"html":e.match("xml")?"xml":void 0}function init(o,fn){this.url="string"==typeof o?o:o.url,this.timeout=null,this._fulfilled=!1,this._successHandler=function(){},this._fulfillmentHandlers=[],this._errorHandlers=[],this._completeHandlers=[],this._erred=!1,this._responseArgs={};var self=this;function complete(e){for(o.timeout&&clearTimeout(self.timeout),self.timeout=null;self._completeHandlers.length>0;)self._completeHandlers.shift()(e)}function success(resp){var type=o.type||resp&&setType(resp.getResponseHeader("Content-Type"));resp="jsonp"!==type?self.request:resp;var filteredResponse=globalSetupOptions.dataFilter(resp.responseText,type),r=filteredResponse;try{resp.responseText=r}catch(e){}if(r)switch(type){case"json":try{resp=context.JSON?context.JSON.parse(r):eval("("+r+")")}catch(e){return error(resp,"Could not parse JSON in response",e)}break;case"js":resp=eval(r);break;case"html":resp=r;break;case"xml":resp=resp.responseXML&&resp.responseXML.parseError&&resp.responseXML.parseError.errorCode&&resp.responseXML.parseError.reason?null:resp.responseXML}for(self._responseArgs.resp=resp,self._fulfilled=!0,fn(resp),self._successHandler(resp);self._fulfillmentHandlers.length>0;)resp=self._fulfillmentHandlers.shift()(resp);complete(resp)}function timedOut(){self._timedOut=!0,self.request.abort()}function error(e,t,r){for(e=self.request,self._responseArgs.resp=e,self._responseArgs.msg=t,self._responseArgs.t=r,self._erred=!0;self._errorHandlers.length>0;)self._errorHandlers.shift()(e,t,r);complete(e)}fn=fn||function(){},o.timeout&&(this.timeout=setTimeout((function(){timedOut()}),o.timeout)),o.success&&(this._successHandler=function(){o.success.apply(o,arguments)}),o.error&&this._errorHandlers.push((function(){o.error.apply(o,arguments)})),o.complete&&this._completeHandlers.push((function(){o.complete.apply(o,arguments)})),this.request=getRequest.call(this,success,error)}function reqwest(e,t){return new Reqwest(e,t)}function normalize(e){return e?e.replace(/\r?\n/g,"\r\n"):""}function serial(e,t){var r,s,n,i,o=e.name,a=e.tagName.toLowerCase(),l=function(e){e&&!e.disabled&&t(o,normalize(e.attributes.value&&e.attributes.value.specified?e.value:e.text))};if(!e.disabled&&o)switch(a){case"input":/reset|button|image|file/i.test(e.type)||(r=/checkbox/i.test(e.type),s=/radio/i.test(e.type),n=e.value,(!r&&!s||e.checked)&&t(o,normalize(r&&""===n?"on":n)));break;case"textarea":t(o,normalize(e.value));break;case"select":if("select-one"===e.type.toLowerCase())l(e.selectedIndex>=0?e.options[e.selectedIndex]:null);else for(i=0;e.length&&i<e.length;i++)e.options[i].selected&&l(e.options[i])}}function eachFormElement(){var e,t,r=this,s=function(e,t){var s,n,i;for(s=0;s<t.length;s++)for(i=e[byTag](t[s]),n=0;n<i.length;n++)serial(i[n],r)};for(t=0;t<arguments.length;t++)/input|select|textarea/i.test((e=arguments[t]).tagName)&&serial(e,r),s(e,["input","select","textarea"])}function serializeQueryString(){return reqwest.toQueryString(reqwest.serializeArray.apply(null,arguments))}function serializeHash(){var e={};return eachFormElement.apply((function(t,r){t in e?(e[t]&&!isArray(e[t])&&(e[t]=[e[t]]),e[t].push(r)):e[t]=r}),arguments),e}function buildParams(e,t,r,s){var n,i,o,a=/\[\]$/;if(isArray(t))for(i=0;t&&i<t.length;i++)o=t[i],r||a.test(e)?s(e,o):buildParams(e+"["+("object"==typeof o?i:"")+"]",o,r,s);else if(t&&"[object Object]"===t.toString())for(n in t)buildParams(e+"["+n+"]",t[n],r,s);else s(e,t)}return Reqwest.prototype={abort:function(){this._aborted=!0,this.request.abort()},retry:function(){init.call(this,this.o,this.fn)},then:function(e,t){return e=e||function(){},t=t||function(){},this._fulfilled?this._responseArgs.resp=e(this._responseArgs.resp):this._erred?t(this._responseArgs.resp,this._responseArgs.msg,this._responseArgs.t):(this._fulfillmentHandlers.push(e),this._errorHandlers.push(t)),this},always:function(e){return this._fulfilled||this._erred?e(this._responseArgs.resp):this._completeHandlers.push(e),this},fail:function(e){return this._erred?e(this._responseArgs.resp,this._responseArgs.msg,this._responseArgs.t):this._errorHandlers.push(e),this},catch:function(e){return this.fail(e)}},reqwest.serializeArray=function(){var e=[];return eachFormElement.apply((function(t,r){e.push({name:t,value:r})}),arguments),e},reqwest.serialize=function(){if(0===arguments.length)return"";var e,t=Array.prototype.slice.call(arguments,0);return(e=t.pop())&&e.nodeType&&t.push(e)&&(e=null),e&&(e=e.type),("map"==e?serializeHash:"array"==e?reqwest.serializeArray:serializeQueryString).apply(null,t)},reqwest.toQueryString=function(e,t){var r,s,n=t||!1,i=[],o=encodeURIComponent,a=function(e,t){t="function"==typeof t?t():null==t?"":t,i[i.length]=o(e)+"="+o(t)};if(isArray(e))for(s=0;e&&s<e.length;s++)a(e[s].name,e[s].value);else for(r in e)e.hasOwnProperty(r)&&buildParams(r,e[r],n,a);return i.join("&").replace(/%20/g,"+")},reqwest.getcallbackPrefix=function(){return callbackPrefix},reqwest.compat=function(e,t){return e&&(e.type&&(e.method=e.type)&&delete e.type,e.dataType&&(e.type=e.dataType),e.jsonpCallback&&(e.jsonpCallbackName=e.jsonpCallback)&&delete e.jsonpCallback,e.jsonp&&(e.jsonpCallback=e.jsonp)),new Reqwest(e,t)},reqwest.ajaxSetup=function(e){for(var t in e=e||{})globalSetupOptions[t]=e[t]},reqwest},module.exports?module.exports=definition():void 0===(__WEBPACK_AMD_DEFINE_RESULT__="function"==typeof(__WEBPACK_AMD_DEFINE_FACTORY__=definition)?__WEBPACK_AMD_DEFINE_FACTORY__.call(exports,__webpack_require__,exports,module):__WEBPACK_AMD_DEFINE_FACTORY__)||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)},912:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var reqwest__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(643),reqwest__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(reqwest__WEBPACK_IMPORTED_MODULE_0__);class AdEngine{constructor(e,t,r,s){this.observer=e,this.apiUrl=t,this.publicKey=r,this.httpClient=s||reqwest__WEBPACK_IMPORTED_MODULE_0___default()}getLocation=()=>window.location.href;getPlacementElements=()=>document.querySelectorAll("[data-pitch-placement]");getMetaParams=()=>{let e={};return document.querySelectorAll("meta[data-pitch-param]").forEach((t=>{let r=t.getAttribute("data-pitch-param");e[r]=t.getAttribute("content")})),e};collectParams=()=>{let e=this.getMetaParams();return e.page_url=this.getLocation(),e.site="fool",e};buildRequestBody=e=>{let t=[];e.forEach((e=>t.push(e.getAttribute("data-pitch-placement"))));let r=this.collectParams();return{placements:t,pitch_params:r}};executeScriptTags=element=>{try{for(var scriptTags=element.getElementsByTagName("script"),i=0;i<scriptTags.length;i++)if(""!=scriptTags[i].src){var invokeScript=document.createElement("script");invokeScript.type="text/javascript",invokeScript.async=!0,invokeScript.src=scriptTags[i].src;var firstScript=document.getElementsByTagName("script")[0];firstScript.parentNode.insertBefore(invokeScript,firstScript)}else eval(scriptTags[i].text)}catch(e){"undefined"!=typeof console&&void 0!==console.error&&console.error(e)}};handlePitchResponse=(e,t)=>{let r=this;const s=/\\n|\\r\\n|\\n\\r|\\r/g;let n=t.data;e.forEach((function(e){let t=e.getAttribute("data-pitch-placement");const i=n.find((e=>e.placement===t));i?""===i.pitch_content||(e.innerHTML=i.pitch_content.replace(s,""),r.executeScriptTags(e),r.observer.addPitchSeenEvent(e,t,i.pitch_metadata)):console.log("Ad server did not return pitch for placement: "+t);let o=n.indexOf(i);n.splice(o,1)}))};getPitches=e=>{let t=this,r=this.apiUrl+"marketing/v1/ad-server/pitches";const s=this.buildRequestBody(e);this.httpClient({contentType:"application/json",url:r,method:"POST",data:JSON.stringify(s),timeout:3e3,type:"json",crossOrigin:!0,withCredentials:!0,headers:{"x-apikey":t.publicKey},success:function(r){t.handlePitchResponse(e,r)},error:function(e){console.log(`Status code: ${e.status}`),console.log(`Error Description: ${e.responseText}`)}})};allowedCookies=()=>{let e={};return document.cookie.split(";").forEach((function(t){let r=t.slice(0,t.indexOf("=")),s=t.slice(t.indexOf("=")+1);e[r.trim()]=s})),e};handleGetPitches=e=>{if(this.attempts<3){let t=this.allowedCookies(document);t.Visit&&t._ga?(this.getPitches(e),clearInterval(this.interval)):this.attempts+=1}else this.getPitches(e),clearInterval(this.interval)};startListener(){window.addEventListener("DOMContentLoaded",(e=>{let t=this.getPlacementElements();null!=t&&t.length>0&&(this.attempts=0,this.interval=setInterval(this.handleGetPitches,1e3,t))}))}}const __WEBPACK_DEFAULT_EXPORT__=AdEngine},676:()=>{}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var r=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(r.exports,r,r.exports,__webpack_require__),r.exports}__webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=(e,t)=>{for(var r in t)__webpack_require__.o(t,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var __webpack_exports__={};(()=>{"use strict";var e=__webpack_require__(643),t=__webpack_require__.n(e);var r=__webpack_require__(912);!function(e){e.MarketingAdClient=e.MarketingAdClient||{};let s=e.MarketingAdClient;const n="public52791be3-1548-4181-b240-e1573e";let i=(()=>{let e=window.location.hostname,t=["staging","local","localhost","test","docker","feature"];for(let r=0;r<t.length;r++)if(e.indexOf(t[r])>-1)return"https://api-staging.fool.com/";return"https://api.fool.com/"})(),o=new class{troubleshooting=!1;constructor(e,r,s,n,i){this.ads={},this.cookies=e,this.observer=null,this.postUrl=r,this.marketingAdClientPublicKey=s,this.httpClient=n||t(),this.intersectionObserver=i||IntersectionObserver;let o=this;"function"==typeof this.intersectionObserver&&(this.observer=new this.intersectionObserver((function(e){e.forEach((e=>{if(e.isIntersecting){const t=e.target.getAttribute("data-pitch-placement"),r=o.ads[t].metadata;if(!o.ads[t].seen&&"undefined"!=r){const e=o.preparePayload(r);o.postTrace(e),o.ads[t].seen=!0,o.troubleshooting&&console.log("payload "+JSON.stringify(e))}}}))}),{threshold:1}))}addPitchSeenEvent(e,t,r){this.insertPlacement(t,r),"function"==typeof IntersectionObserver&&this.observer.observe(e)}insertPlacement(e,t){this.ads[e]={metadata:t,seen:!1}}postTrace(e){const t=this;this.httpClient({contentType:"application/json",url:this.postUrl,method:"POST",data:JSON.stringify(e),timeout:3e3,type:"json",crossOrigin:!0,headers:{"x-apikey":this.marketingAdClientPublicKey},success:function(e){t.troubleshooting&&console.log("trace sent"+JSON.stringify(e))},error:function(){t.troubleshooting&&console.log("trace failed")}})}preparePayload(e){const t=this.cookies.value("Visitor"),r=this.cookies.value("Visit");let s={impression_id:e.impression_id,placement_slug:e.placment,pitch_id:e.pitch_id,derby_id:e.derby_id,uid:t.uid,account_guid:t.account,session_guid:r.visit,visitor_guid:t.visitor,scroll_pixels:window.scrollY,referrer:window.location.href};return this.createTrace(s)}createTrace(e){return{event_type:"ad_seen",app_name:"marketing_ad_client",attributes:e}}}(new class{constructor(e){const t=e||document;this.data=this.retrieveCookies(t),this.data=this.formatFoolishCookies(this.data)}value(e){let t="";return e in this.data&&(t=this.data[e]),t}retrieveCookies(e){let t={};return e.cookie.split(";").forEach((function(e){let r=e.slice(0,e.indexOf("=")),s=e.slice(e.indexOf("=")+1);t[r.trim()]=s})),t}formatFoolishCookies(e){return e.Visitor=this.parseQueryString(e.Visitor),e.Visit=this.parseQueryString(e.Visit),e}parseQueryString(e){let t={};return"string"!=typeof e||e.split("&").forEach((function(e){let[r,s]=e.split("=");t[r.trim()]=s})),t}},i+"marketing/v1/insights/events",n);new r.Z(o,i,n).startListener(),s.version="1.3.0"}(window)})()})();
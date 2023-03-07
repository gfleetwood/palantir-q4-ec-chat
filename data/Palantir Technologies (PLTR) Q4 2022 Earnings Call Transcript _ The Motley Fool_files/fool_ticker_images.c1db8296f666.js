function logo_on_error(symbol,exchange,height,width,bg_color){if(this.src.indexOf("?exchange=true")!==-1){const fileName=exchange.length?`${exchange}:${symbol}.png`:`${symbol}.png`
this.src=this.src.replace(/([^\/]+)\/?$/,fileName);return;}
this.outerHTML=`<span class="logo-fallback inline-block bg-${bg_color}" style="width:${width}px;height:${height}px;"></span>`}
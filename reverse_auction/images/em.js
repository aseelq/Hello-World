function _EMeasure(e){e=typeof(e)=="undefined"?"":e;var g=document;var h=navigator;var a=window;var f=function(){var l;if(h.plugins["Shockwave Flash"]||h.plugins["Shockwave Flash 2.0"]){var k=h.plugins["Shockwave Flash 2.0"]?" 2.0":"";var o=h.plugins["Shockwave Flash"+k].description;var j=o.split(" ");var d=parseInt(j[2]);return d>=6?1:0}else{var n=0;try{l=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");n=1}catch(m){}if(n==0){try{l=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");l.AllowScriptAccess="always";n=1}catch(m){}}return n}};var b=typeof(a.innerWidth)=="number"?a:(g.documentElement&&(g.documentElement.clientWidth||g.documentElement.clientHeight)?g.documentElement:(g.body&&(g.body.clientWidth||g.body.clientHeight)?g.body:null));this.encode64=function(k){var l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var q,p,n,o,m,j=0,d="";while(j<k.length){q=k.charCodeAt(j++);if(q>127){q=88}p=k.charCodeAt(j++);if(p>127){p=88}n=k.charCodeAt(j++);if(n>127){n=88}if(isNaN(n)){m=64;n=0}else{m=n&63}if(isNaN(p)){o=64;p=0}else{o=((p<<2)|(n>>6))&63}d+=l.charAt((q>>2)&63)+l.charAt(((q<<4)|(p>>4))&63)+l.charAt(o)+l.charAt(m)}return encodeURIComponent(d)};var c=function(){if(g.referrer){var d=(g.referrer).split("//");if(String(d[1]).indexOf(g.domain)!=0){return g.referrer}}return""};this.minSvWidth=600;this.minSvHeight=200;this.maxSvWidth=700;this.maxSvHeight=620;this.surveyPos=window._em_survey_inv_pos?window._em_survey_inv_pos.split("-"):"";this.yPos=this.surveyPos?this.surveyPos[0]:"bottom";this.xPos=this.surveyPos?this.surveyPos[1]:"right";this.surveyOffset=window._em_survey_inv_offset?window._em_survey_inv_offset.split("-"):"";this.surveyDir=window._em_survey_inv_dir?window._em_survey_inv_dir:"bottom";this.yOffset=this.surveyOffset?(isNaN(this.surveyOffset[0])?"0":this.surveyOffset[0]):"0";this.xOffset=this.surveyOffset?(isNaN(this.surveyOffset[1])?"0":this.surveyOffset[1]):"0";if(this.xOffset=="0"&&this.xPos=="right"){this.xOffset="10"}this.setCookie=function(j,l,k){var d=arguments[3];var m=new Date();m.setTime(m.getTime()+k*1000);g.cookie=j+"="+escape(l)+((k==0)?"":";expires="+m.toGMTString())+";domain=."+this._domain+";path=/";return this};this.getCookie=function(j){if(g.cookie.length>0){var k=g.cookie.indexOf(j+"=");if(k!=-1){k=k+j.length+1;var d=g.cookie.indexOf(";",k);if(d==-1){d=g.cookie.length}return unescape(g.cookie.substring(k,d))}}return typeof(arguments[1])=="undefined"?"":arguments[1]};this.scroll=function(){return typeof(a.pageYOffset)=="number"?a:(g.body&&(g.body.scrollLeft||g.body.scrollTop)?g.body:(g.documentElement&&(g.documentElement.scrollLeft||g.documentElement.scrollTop)?g.documentElement:null))};this.width=function(){return b==null?0:b==a?b.innerWidth:b.clientWidth};this.height=function(){return b==null?0:b==a?b.innerHeight:b.clientHeight};this.scrollY=function(){var d=this.scroll();return d==null?0:d==a?d.pageYOffset:d.scrollTop};this.scrollX=function(){var d=this.scroll();return d==null?0:d==a?d.pageXOffset:d.scrollLeft};this._hasFlash=f();this._isIE=h.appVersion.indexOf("MSIE")>-1;this._isWin=h.appVersion.toLowerCase().indexOf("win")>-1;this._isOpera=h.userAgent.indexOf("Opera")>-1;this._isFF=h.userAgent.indexOf("Firefox")>-1;this._isChrome=h.userAgent.indexOf("Chrome")>-1;this._isOpera=h.userAgent.indexOf("Opera")>-1;this._emVersion="v4";this._emsvVersion="v5";this._emNS=e;this._emIsSecure=location.protocol.indexOf("https")==0;this._emSchema=this._emIsSecure?"https://":"http://";this._emHost=window._em_host?window._em_host:this._emSchema+"www"+(this._emIsSecure?"9":"9")+".effectivemeasure.net";this._emCdnHost=window._em_cdn_host?window._em_cdn_host:this._emIsSecure?this._emHost:this._emSchema+"www9.effectivemeasure.net";this._emsvHost=window._em_sv_host?window._em_sv_host:this._emSchema+"survey-b.effectivemeasure.net";this._emsvCdnHost=window._em_sv_cdn_host?window._em_sv_cdn_host:(this._emIsSecure?this._emsvHost:this._emSchema+"survey-cdn.effectivemeasure.net");this._emsvParams="";this._page=this.encode64(location.href);this._domain=location.hostname;this._lastPage=this.encode64(c());this._optedOut=this.getCookie("_em_opt_out",0);this._stageLoaded=0;this._jsLoaded=0;this._hlLoaded=0;this.setCkOp=function(){this.setCookie("_em_sv",0,0);this.setCookie("_em_pv",0,0);this.setCookie("_em_hl",0,0);this.setCookie("_em_vt",0,0);this.setCookie("_em_v",0,0);this.setCookie("_em_opt_out",1,86400*365*5)};this.setCkSv=function(d){this.setCookie("_em_sv",d,(d==-1?1800:86400));if(d==-2){this.set3rdCk("sv",-2)}};this.setCkV=function(d){this.setCookie("_em_v",d,1800)};this.setCkVt=function(d){this.setCookie("_em_vt",d,360*86400)};this.setCkHl=function(d){this.setCookie("_em_hl",1,2592000);if(d==1){this.set3rdCk("hl",1)}};this.setCkPn=function(d){this.setCookie("_em_pn",1,2592000);if(d==1){this.set3rdCk("pn",1)}};this.setCkPv=function(d){this.setCookie("_em_pv",1,2592000);if(d==1){this.set3rdCk("pv",1)}};this.getGlobalVarObj=function(){var d;var k=new Object();for(var j=0;j<arguments.length;j++){d=arguments[j];if((typeof a["_em_"+d])!="undefined"){k[d]=a["_em_"+d]}}return k};this.getEnvVars=function(k,j){if(_EMeasure.prototype.env&&typeof(j)=="undefined"){n=_EMeasure.prototype.env}else{var n=new Object();n.flag=typeof(k)=="undefined"?0:(k.toString().indexOf("#")==0?1:k);n.v=this.getCookie("_em_v");n.vt=this.getCookie("_em_vt");n.hl=this.getCookie("_em_hl");n.sv=this.getCookie("_em_sv",0);n.pv=this.getCookie("_em_pv");n.pn=this.getCookie("_em_pn");_EMeasure.prototype.env=n}if(typeof(k)=="undefined"||k.toString().indexOf("#")<0){n.p=this._page}else{var d=location.href.toString();if(d.indexOf("#")<0){n.p=this.encode64(d+k)}else{n.p=this.encode64(d.substr(0,d.indexOf("#"))+k)}}n.r=this._lastPage;n.f=this._hasFlash&&!(window._em_chrome_compat==1&&this._isChrome)?1:0;n.ns=e;n.rnd=Math.random();var o=this.getGlobalVarObj("panel_pn","plugin_v","partner_id","direct_mode","cat1_id","cat2_id","survey_rate","survey_countries","survey_language","rm_ssid","rm_device_type","env_computername","env_userdnsdomain","env_username","users","cuser","panel_id","section_id");var l="";for(x in o){l+=x+"="+o[x]+"&"}n.u=escape(l);n.sf=this.width()>=this.minSvWidth&&this.height()>=this.minSvHeight?1:0;n.tzos=new Date().getTimezoneOffset()/60;var m="";for(x in n){m+=x+"="+n[x]+"&"}return m};this.getVtId=function(){return this.getCookie("_em_vt").substr(19,32)};this.setVtInPlugin=function(){if(true){if(g.getElementById("_em_chrome_messenger")){g.getElementById("_em_chrome_messenger").innerText=this.getVtId()}var d=g.createEvent("Event");d.initEvent("_EM_SET_VT",true,false);g.documentElement.dispatchEvent(d)}};this.setPnInPlugin=function(){if(true){var d=g.createEvent("Event");d.initEvent("_EM_SET_PN",true,false);g.documentElement.dispatchEvent(d)}};this.voidme=function(){};this.getStage=function(){return g.getElementById("_em_stage_"+e)};this.loadStage=function(){if(!this._optedOut&&!this._stageLoaded){var d=g.createElement("div");d.setAttribute("id","_em_stage_"+e);d.setAttribute("style","display:none");var j=g.body.getElementsByTagName("script");j=j.length>0?j[j.length-1]:false;while(j&&typeof(j.parentNode)!=="undefined"&&j.parentNode!=g.body){j=j.parentNode}if(!j||typeof j.parentNode==="undefined"){g.body.appendChild(d)}else{j.parentNode.insertBefore(d,j)}this._stageLoaded=1}return this};this.loadJs=function(d){if(location.protocol.indexOf("http")==0&&!this._optedOut&&(!this._jsLoaded||d.toString().indexOf("#")==0)){var l=g.createElement("script");l.type="text/javascript";l.async=true;l.src=this._emHost+"/"+this._emVersion+"/em_js?"+this.getEnvVars(d);var j=g.getElementsByTagName("head")[0];if(j){j.appendChild(l)}else{var k=g.getElementsByTagName("script")[0];k.parentNode.insertBefore(l,k)}this._jsLoaded=1}return this};this.loadComponents=function(d){if(location.protocol.indexOf("http")==0&&!this._optedOut&&(this._jsLoaded)){if(window._em_stream_tracking){var l=g.createElement("script");l.type="text/javascript";l.async=true;l.src=this._emHost+"/em_stream.js?"+this.getEnvVars(d);var j=g.getElementsByTagName("head")[0];if(j){j.appendChild(l)}else{var k=g.getElementsByTagName("script")[0];k.parentNode.insertBefore(l,k)}this._StreamTrackingComponentLoaded=1}}return this};this.trackAjaxPageview=function(d){d=typeof(d)=="undefined"?"#":"#"+d.toString().replace(/\W/g,"_");this.loadJs(d)};this.loadHl=function(k){if(!this._optedOut&&!this._hlLoaded&&this._hasFlash){var d=this._emCdnHost+"/"+this._emVersion+"/em4.swf";k=k+"&ns="+e;var j=this.getStage();j.setAttribute("style","display:block;position:fixed;width: 1px; height: 1px;");j.innerHTML=this.getSwfHtml("src",d,"width","1","height","1","id","_em_hilex"+e,"quality","low","name","_em_hilex"+e,"flashVars",k);if(this._isIE){j.style.top=(this.scrollY()+this.height()/2)+"px";j.style.left=(this.scrollX()+this.width()/2)+"px"}this._hlLoaded=1}return this};this.hideStage=function(){var d=this.getStage();d.innerHTML='<img src="'+this._emHost+'/img.gif" />';d.style.display="none";var j=g.getElementById("_em_bg_"+e);if(j){j.setAttribute("style","display: none;")}};this.hlCallback=function(d){if(d>0&&g.images){g._em_dimg=new Image();g._em_dimg.src=this._emHost+"/"+this._emVersion+"/em_dimg?"+this.getEnvVars(d,1)}};this.set3rdCk=function(j,d){g._em_ck_img=new Image();g._em_ck_img.src=this._emHost+"/"+this._emVersion+"/em_ck_img?"+j+"="+d+"&r="+Math.random()};this.users="";this.user="";this.setUser=function(d,n){var j,r,q;r=[];for(x in d){q=[];for(var l in d[x]){if(l=="id"||l=="name"){q.push('"'+l+'":"'+d[x][l]+'"')}}r.push("{"+q.join(",")+"}")}j="["+r.join(",")+"]";this.users=j;if(typeof(n)=="undefined"){this.set3rdCk("users",this.users)}var o=this.getStage();var p="<p>Who are you ? </p>";for(x in d){if(typeof(d[x]["id"])!="undefined"){p+="<input type='button' onclick='"+e+'.submitUser("'+d[x]["id"]+":"+d[x]["name"]+"\");' ";p+=" name='u' id='"+d[x]["id"]+"' value='"+d[x]["name"]+"'><br>"}}var m=g.getElementById("_em_bg_"+e)?g.getElementById("_em_bg_"+e):g.createElement("div");m.setAttribute("id","_em_bg_"+e);m.setAttribute("style","display: block; position: absolute; top: -100%; left: -100%; width: 300%; height: 300%; background-color: black; z-index:2147483646; -moz-opacity: 0.8; opacity:.80; filter: alpha(opacity=80);");g.body.appendChild(m);o.innerHTML=p;o.setAttribute("style","display: block; position: absolute; top: 25%; left: 25%; width: 50%;  height: 50%; padding: 16px; border: 16px solid orange; background-color: white; z-index:2147483647; overflow: auto")};this.submitUser=function(d){if(typeof(d)!="undefined"){this.user=d;this.set3rdCk("users",this.users);this.set3rdCk("cuser",this.user);this.hideStage()}else{alert("Please select who you are.")}};this.optout=function(){this.setCkOp();this.set3rdCk("_em_opt_out",1)};this.getSwfHtml=function(){var j=0;var d=arguments;var k=new Object();var o=new Object();var n=new Object();for(j=0;j<d.length;j=j+2){var l=d[j].toLowerCase();switch(l){case"src":k.src=d[j+1];o.movie=d[j+1];break;case"id":case"width":case"height":case"class":case"name":k[d[j]]=n[d[j]]=d[j+1];break;default:k[d[j]]=o[d[j]]=d[j+1]}}n.classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000";n.type=k.type="application/x-shockwave-flash";k.allowScriptAccess=o.allowScriptAccess="always";k.quality=o.quality="high";k.align=n.align="middle";var m="";m+="<object ";for(j in n){m+=j+'="'+n[j]+'" '}m+=">";for(j in o){m+='<param name="'+j+'" value="'+o[j]+'" /> '}m+="<embed ";for(j in k){m+=j+'="'+k[j]+'" '}m+="> </embed>";m+="</object>";return m};this.loadInvitation=function(l){var d=this.getStage();d.setAttribute("style","display:block;width:300px;height:200px;padding:0px;margin:0px;right:10px;clear:both");d.style.backgroundColor="transparent";d.style.zIndex=2147483647;if(this._isIE){this.setPosInvIE()}else{d.style.position="fixed";if(this.xPos=="left"){d.style.left=this.xOffset+"px"}else{d.style.right=this.xOffset+"px"}if(this.yPos=="top"){d.style.top=this.yOffset+"px"}else{d.style.bottom=this.yOffset+"px"}}var k=this._emsvCdnHost+"/"+this._emsvVersion+"/eminv.swf";l.domain=this._domain;l.ns=e;l.version=this._emsvVersion;l.host=this._emsvHost;l.cdnHost=this._emsvCdnHost;l.visitor=this.getCookie("_em_vt");l.slideFrom=this.surveyDir;var j="";for(x in l){j+=x+"="+l[x]+"&"}this._emsvParams=j;d.innerHTML=this.getSwfHtml("src",k,"width","100%","height","100%","wmode","transparent","id","_em_inv"+e,"name","_em_inv"+e,"flashVars",this._emsvParams);if(this._isIE){this.posInv4IE()}};this._timeoutFlagPosInv4IE=1;this.posInv4IE=function(){if(this._timeoutFlagPosInv4IE==1){var j=this.getStage();var d=0,k=0;if(j){this.setPosInvIE()}setTimeout(this._emNS+".posInv4IE()",200)}};this.setPosInvIE=function(){var k=300,j=200;var d=this.getStage();d.style.position="absolute";d.style.width=k+"px";d.style.height=j+"px";d.style.backgroundColor="transparent";svTop=parseInt(this.height()-j+this.scrollY());svLeft=parseInt(this.width()+this.scrollX()-k-10);if(this.xPos=="left"){d.style.left=this.xOffset+"px"}else{d.style.left=svLeft>0?svLeft-this.xOffset+"px":"0px"}if(this.yPos=="top"){d.style.top=this.yOffset+"px"}else{d.style.top=svTop>0?svTop-this.yOffset+"px":"200px"}};this.hideInvitation=function(){if(this._isIE){this._timeoutFlagPosInv4IE=0}this.hideStage()};this.unloadSurvey=function(){this._timeoutFlagPosMain=0;this.hideStage();if(this._isIE){var d=g.getElementsByTagName("select");if(d!=null){for(var j=0;j<d.length;j++){d[j].style.visibility="visible"}}}};this._timeoutFlagPosMain=1;this.posMain=function(){if(this._timeoutFlagPosMain==1){var j=this.getStage();var m=this.width()-20;var o=this.height()-20;var l=m<this.minSvWidth?this.minSvWidth:(m>this.maxSvWidth?this.maxSvWidth:m);var k=o<this.minSvHeight?this.minSvHeight:(o>this.maxSvWidth?this.maxSvWidth:o);var d=0,n=0;j.style.width=l+"px";j.style.height=k+"px";n=parseInt((this.height()-k)/2+this.scrollY());d=parseInt((this.width()-l)/2);if(this._isIE){j.style.position="absolute";j.style.top=n>0?n+"px":"0px"}else{j.style.position="fixed";j.style.bottom=parseInt((this.height()-k)/2)+"px"}j.style.left=d>0?d+"px":"0px";setTimeout(this._emNS+".posMain()",200)}};this.loadSurvey=function(o,d,n,l){if(!this._isOpera){this.setStageVisible(0)}var j=this.getStage();var m="themeColor="+o+"&themeTextColor="+d+"&headerText="+n+"&rgId="+l+"&";if(this._emsvParams!=""){m=m+this._emsvParams;var k=this._emsvCdnHost+"/"+this._emsvVersion+"/emsv.swf";j.innerHTML=this.getSwfHtml("src",k,"width","100%","height","100%","id","_em_survey"+e,"name","_em_survey"+e,"wmode","opaque","flashVars",m)}};this.setStageVisible=function(d){if(!this._isIE){var j=this.getStage();j.style.visibility=d==1?"visible":"hidden"}};this.showSurvey=function(){this.setStageVisible(1);this._timeoutFlagPosInv4IE=0;if(this._isIE){var d=g.getElementsByTagName("select");if(d){for(i=0;i<d.length;i++){d[i].style.visibility="hidden"}}}this.posMain()};this.showFFArrow=function(k){var d=g.createElement("div");d.setAttribute("id","_em_ff_arrow_"+e);d.setAttribute("style","display:block;position:fixed;top:0px;right:0px;width:200px;padding:0px;margin:0;border:1px solid #bf8a01;border-top:0px;-moz-border-radius-bottomleft: 10px;-moz-border-radius-bottomright: 10px; background-color:#ffc703; background-image: -moz-linear-gradient(top, #ffc703, #ffe970, #ffd016, #ffc703 ); height:100px;");d.style.zIndex=2147483647;var j='<div style="width:100%;height:100%;background:transparent url('+this._emsvCdnHost+"/"+this._emsvVersion+'/images/plugin_arrow_bg_sm.gif) no-repeat 50px;2px;"><p style="padding:5px;width:100px;">'+k+"</p></div>";d.innerHTML=j;g.body.insertBefore(d,g.body.firstChild)}}if(document._em_is_panel){window._em_is_panel=document._em_is_panel}if(window._em_is_panel&&!window._emp){var _emp=new _EMeasure("_emp");_emp.loadStage().loadJs().voidme()}else{if(!window._em){var _em=new _EMeasure("_em");_em.loadStage().loadJs().loadComponents().voidme()}};
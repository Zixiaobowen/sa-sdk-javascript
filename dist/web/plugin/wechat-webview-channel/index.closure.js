!function(){"use strict";function e(e,t,i){if(t&&(e.plugin_name=t),i&&e.init){var n=e.init;e.init=function(t,a){function r(){n.call(e,t,a)}return t.readyState&&t.readyState.state>=3||!t.on?r():void t.on(i,r)}}return e}function t(t,i,n){return e(t,i,n),t.plugin_version=d,t}var i={};i.getPart=function(e){var t=!1,i=this.option.length;if(i)for(var n=0;n<i;n++)if(e.indexOf(this.option[n].part_url)>-1)return!0;return t},i.getPartHash=function(e){var t=this.option.length,i=!1;if(t)for(var n=0;n<t;n++)if(e.indexOf(this.option[n].part_url)>-1)return this.option[n].after_hash;return!!i},i.getCurrenId=function(){var e=this.store.getDistinctId()||"",t=this.store.getFirstId()||"";this._.urlSafeBase64&&this._.urlSafeBase64.encode?e=e?this._.urlSafeBase64.trim(this._.urlSafeBase64.encode(this._.base64Encode(e))):"":this._.rot13obfs&&(e=e?this._.rot13obfs(e):"");var i=t?"f"+e:"d"+e;return encodeURIComponent(i)},i.rewriteUrl=function(e,t){var i=this,n=/([^?#]+)(\?[^#]*)?(#.*)?/,a=n.exec(e),r="";if(a){var s,o=a[1]||"",d=a[2]||"",l=a[3]||"",_="_sasdk="+this.getCurrenId(),u=function(e){var t=e.split("&"),n=[];return i._.each(t,function(e){e.indexOf("_sasdk=")>-1?n.push(_):n.push(e)}),n.join("&")};if(this.getPartHash(e)){s=l.indexOf("_sasdk");var h=l.indexOf("?");r=h>-1?s>-1?o+d+"#"+l.substring(1,s)+u(l.substring(s,l.length)):o+d+l+"&"+_:o+d+"#"+l.substring(1)+"?"+_}else{s=d.indexOf("_sasdk");var c=/^\?(\w)+/.test(d);r=c?s>-1?o+"?"+u(d.substring(1))+l:o+d+"&"+_+l:o+"?"+_+l}return t&&(t.href=r),r}},i.getUrlId=function(){var e=location.href.match(/_sasdk=([aufd][^\?\#\&\=]+)/);if(this._.isArray(e)&&e[1]){var t=decodeURIComponent(e[1]);return!t||"f"!==t.substring(0,1)&&"d"!==t.substring(0,1)||(this._.urlSafeBase64&&this._.urlSafeBase64.isUrlSafeBase64&&this._.urlSafeBase64.isUrlSafeBase64(t)?t=t.substring(0,1)+this._.base64Decode(this._.urlSafeBase64.decode(t.substring(1))):this._.rot13defs&&(t=t.substring(0,1)+this._.rot13defs(t.substring(1)))),t}return""},i.setRefferId=function(e){var t=this.store.getDistinctId(),i=this.getUrlId();if(i&&""!==i){var n="a"===i.substring(0,1)||"d"===i.substring(0,1);i=i.substring(1),i!==t&&(n?(this.sd.identify(i,!0),this.store.getFirstId()&&this.sd.saEvent.send({original_id:i,distinct_id:t,type:"track_signup",event:"$SignUp",properties:{}},null)):this.store.getFirstId()&&!e.re_login||this.sd.login(i))}},i.addListen=function(){var e=this,t=function(t){var i,n,a=t.target,r=a.tagName.toLowerCase(),s=a.parentNode;if("a"===r&&a.href||s&&s.tagName&&"a"===s.tagName.toLowerCase()&&s.href){"a"===r&&a.href?(i=a.href,n=a):(i=s.href,n=s);var o=e._.URL(i),d=o.protocol;"http:"!==d&&"https:"!==d||e.getPart(i)&&e.rewriteUrl(i,n)}};e._.addEvent(document,"mousedown",t),window.PointerEvent&&"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>=0&&e._.addEvent(document,"pointerdown",t)},i.init=function(e,t){function i(t){for(var i=t.length,n=[],a=0;a<i;a++)/[A-Za-z0-9]+\./.test(t[a].part_url)&&"[object Boolean]"==Object.prototype.toString.call(t[a].after_hash)?n.push(t[a]):e.log("linker \u914d\u7f6e\u7684\u7b2c "+(a+1)+" \u9879\u683c\u5f0f\u4e0d\u6b63\u786e\uff0c\u8bf7\u68c0\u67e5\u53c2\u6570\u683c\u5f0f\uff01");return n}return this.sd=e,this._=e._,this.store=e.store,this.para=e.para,this._.isObject(t)&&this._.isArray(t.linker)&&t.linker.length>0?(this.setRefferId(t),this.addListen(),this.option=t.linker,void(this.option=i(this.option))):void e.log("\u8bf7\u914d\u7f6e\u6253\u901a\u57df\u540d\u53c2\u6570\uff01")};var n,a,r,s,o={event_list:[],latest_event_initial_time:null,max_save_time:2592e6,init:function(e,t){function i(){return n=a._,r=a.store,!!n.localStorage.isSupport()&&(a.para.max_string_length=1024,o.eventList.init(),o.addLatestChannelUrl(),void o.addIsChannelCallbackEvent())}if(a||!e)return!1;t=t||{},s=t.cookie_name||"sensorsdata2015jssdkchannel",a=e;var o=this;i()},addIsChannelCallbackEvent:function(){a.registerPage({$is_channel_callback_event:function(e){if(n.isObject(e)&&e.event&&"$WebClick"!==e.event&&"$pageview"!==e.event&&"$WebStay"!==e.event&&"$SignUp"!==e.event)return!o.eventList.hasEvent(e.event)&&(o.eventList.add(e.event),!0)}})},addLatestChannelUrl:function(){var e=this.getUrlDomain(),t=this.cookie.getChannel();if("url\u89e3\u6790\u5931\u8d25"===e)this.registerAndSave({_sa_channel_landing_url:"",_sa_channel_landing_url_error:"url\u7684domain\u89e3\u6790\u5931\u8d25"});else if(n.isReferralTraffic(document.referrer)){var i=n.getQueryParam(location.href,"sat_cf");n.isString(i)&&i.length>0?(this.registerAndSave({_sa_channel_landing_url:location.href}),o.channelLinkHandler()):this.registerAndSave({_sa_channel_landing_url:""})}else t?a.registerPage(t):a.registerPage({_sa_channel_landing_url:"",_sa_channel_landing_url_error:"\u53d6\u503c\u5f02\u5e38"})},registerAndSave:function(e){a.registerPage(e),this.cookie.saveChannel(e)},cookie:{getChannel:function(){var e=n.decryptIfNeeded(n.cookie.get(s));return e=n.safeJSONParse(e),!(!n.isObject(e)||!e.prop)&&e.prop},saveChannel:function(e){var t={prop:e},i=JSON.stringify(t);a.para.encrypt_cookie&&(i=n.encrypt(i)),n.cookie.set(s,i)}},channelLinkHandler:function(){this.eventList.reset(),a.track("$ChannelLinkReaching")},getUrlDomain:function(){var e=n.info.pageProp.url_domain;return""===e&&(e="url\u89e3\u6790\u5931\u8d25"),e},eventList:{init:function(){var e=this.get(),t=(new Date).getTime();if(e&&n.isNumber(e.latest_event_initial_time)&&n.isArray(e.eventList)){var i=t-e.latest_event_initial_time;i>0&&i<o.max_save_time?(o.event_list=e.eventList,o.latest_event_initial_time=e.latest_event_initial_time):this.reset()}else this.reset()},get:function(){var e={};try{e=r.readObjectVal("sawebjssdkchannel")}catch(t){a.log(t)}return e},add:function(e){o.event_list.push(e),this.save()},save:function(){var e={latest_event_initial_time:o.latest_event_initial_time,eventList:o.event_list};r.saveObjectVal("sawebjssdkchannel",e)},reset:function(){o.event_list=[],o.latest_event_initial_time=(new Date).getTime(),this.save()},hasEvent:function(e){var t=!1;return n.each(o.event_list,function(i){i===e&&(t=!0)}),t}}},d="1.24.10",l={},_={},u={};i.init=function(e){this.sd=e,this._=e._,this.store=e.store,this.para=e.para,this.setRefferId()},i.getUrlId=function(){return _.prefix+_.did},o.addLatestChannelUrl=function(){},o.saveProp=function(){o.registerAndSave({$app_id:_.aid,$ad_custom_data_type:_.adt})},o.getProp=function(){var e=this.cookie.getChannel();u.isObject(e)&&e.$app_id&&e.$ad_custom_data_type&&l.registerPage({$app_id:e.$app_id,$ad_custom_data_type:e.$ad_custom_data_type})};var h={};h.getWechatWebViewPara=function(){var e=location.href.match(/_sasdk=([aufd][^\?\#\&\=]+)/);if(l._.isArray(e)&&e[1]){var t=decodeURIComponent(e[1]);!t||"f"!==t.substring(0,1)&&"d"!==t.substring(0,1)?t=[t.substring(0,1),t.substring(1)]:l._.urlSafeBase64&&l._.urlSafeBase64.isUrlSafeBase64&&l._.urlSafeBase64.isUrlSafeBase64(t)?t=[t.substring(0,1),l._.base64Decode(l._.urlSafeBase64.decode(t.substring(1)))]:l._.rot13defs&&(t=[t.substring(0,1),l._.rot13defs(t.substring(1))]);var i=l._.safeJSONParse(t[1]);if(l._.isObject(i)&&i.did&&i.aid&&i.adt)return{prefix:t[0],did:i.did,aid:i.aid,adt:i.adt}}return""},h.init=function(e){l=e,u=e._,_=this.getWechatWebViewPara(),o.init(e,{cookie_name:"sas2015-ad-ww"}),l._.isObject(_)&&_.did&&_.aid&&_.adt?(i.init(e),o.saveProp()):o.getProp()};var c=t(h,"WechatWebviewChannel","sdkReady");return c}();
(window.SensorsDataWebJSSDKPlugin=window.SensorsDataWebJSSDKPlugin||{}).PageLeave=function(){"use strict";function t(t,e,a){if(e&&(t.plugin_name=e),a&&t.init){var i=t.init;t.init=function(e,r){function s(){i.call(t,e,r)}return e.readyState&&e.readyState.state>=3||!e.on?s():void e.on(a,s)}}return t}function e(e,a,r){return t(e,a,r),e.plugin_version=i,e}function a(){this.sd=null,this.start_time=+new Date,this.page_show_status=!0,this.page_hidden_status=!1,this._={},this.timer=null,this.current_page_url=document.referrer,this.url=location.href,this.option={},this.heartbeat_interval_time=5e3,this.heartbeat_interval_timer=null,this.page_id=null,this.storage_name="sawebjssdkpageleave",this.max_duration=s}var i="1.24.9",r=5e3,s=432e3;a.prototype.init=function(t,e){if(t){if(this.sd=t,this._=this.sd._,e){this.option=e;var a=e.heartbeat_interval_time;a&&(this._.isNumber(a)||this._.isNumber(1*a))&&1*a>0&&(this.heartbeat_interval_time=1e3*a);var i=e.max_duration;i&&(this._.isNumber(i)||this._.isNumber(1*i))&&1*i>0&&(this.max_duration=i)}this.page_id=Number(String(this._.getRandom()).slice(2,5)+String(this._.getRandom()).slice(2,4)+String((new Date).getTime()).slice(-4)),this.addEventListener(),document.hidden===!0?this.page_show_status=!1:this.addHeartBeatInterval(),this.log("PageLeave\u521d\u59cb\u5316\u5b8c\u6bd5")}else this.log("\u795e\u7b56JS SDK\u672a\u6210\u529f\u5f15\u5165")},a.prototype.log=function(t){this.sd&&this.sd.log(t)},a.prototype.refreshPageEndTimer=function(){var t=this;this.timer&&(clearTimeout(this.timer),this.timer=null),this.timer=setTimeout(function(){t.page_hidden_status=!1},r)},a.prototype.hiddenStatusHandler=function(){clearTimeout(this.timer),this.timer=null,this.page_hidden_status=!1},a.prototype.pageStartHandler=function(){this.start_time=+new Date,!document.hidden==!0?this.page_show_status=!0:this.page_show_status=!1,this.url=location.href},a.prototype.pageEndHandler=function(){if(this.page_hidden_status!==!0){var t=this.getPageLeaveProperties();this.page_show_status===!1&&delete t.event_duration,this.page_show_status=!1,this.page_hidden_status=!0,this.isCollectUrl(this.url)&&this.sd.track("$WebPageLeave",t),this.refreshPageEndTimer(),this.delHeartBeatData()}},a.prototype.addEventListener=function(){this.addPageStartListener(),this.addPageSwitchListener(),this.addSinglePageListener(),this.addPageEndListener()},a.prototype.addPageStartListener=function(){var t=this;"onpageshow"in window&&this._.addEvent(window,"pageshow",function(){t.pageStartHandler(),t.hiddenStatusHandler()})},a.prototype.isCollectUrl=function(t){return"function"!=typeof this.option.isCollectUrl||("string"!=typeof t||""===t||this.option.isCollectUrl(t))},a.prototype.addSinglePageListener=function(){var t=this;this.sd.ee&&this.sd.ee.spa.prepend("switch",function(e){e!==location.href&&(t.url=e,t.pageEndHandler(),t.stopHeartBeatInterval(),t.current_page_url=t.url,t.pageStartHandler(),t.hiddenStatusHandler(),t.startHeartBeatInterval())})},a.prototype.addPageEndListener=function(){var t=this;this._.each(["pagehide","beforeunload","unload"],function(e){"on"+e in window&&t._.addEvent(window,e,function(){t.pageEndHandler(),t.stopHeartBeatInterval()})})},a.prototype.addPageSwitchListener=function(){var t=this;this._.listenPageState({visible:function(){t.pageStartHandler(),t.hiddenStatusHandler(),t.startHeartBeatInterval()},hidden:function(){t.url=location.href,t.pageEndHandler(),t.stopHeartBeatInterval()}})},a.prototype.addHeartBeatInterval=function(){this._.localStorage.isSupport()&&this.startHeartBeatInterval()},a.prototype.startHeartBeatInterval=function(){var t=this;this.heartbeat_interval_timer&&this.stopHeartBeatInterval();var e=!0;this.isCollectUrl(this.url)||(e=!1),this.heartbeat_interval_timer=setInterval(function(){e&&t.saveHeartBeatData()},this.heartbeat_interval_time),e&&this.saveHeartBeatData("is_first_heartbeat"),this.reissueHeartBeatData()},a.prototype.stopHeartBeatInterval=function(){clearInterval(this.heartbeat_interval_timer),this.heartbeat_interval_timer=null},a.prototype.saveHeartBeatData=function(t){var e=this.getPageLeaveProperties(),a=new Date;e.$time=a,"is_first_heartbeat"===t&&(e.event_duration=3.14);var i=this.sd.kit.buildData({type:"track",event:"$WebPageLeave",properties:e});try{"success"===this.sd.bridge.bridge_info.verify_success&&(i.properties.$time=1*a)}catch(r){this.log(r.message)}i.heartbeat_interval_time=this.heartbeat_interval_time,this.sd.store.saveObjectVal(this.storage_name+"-"+this.page_id,i)},a.prototype.delHeartBeatData=function(t){this._.localStorage.remove(t||this.storage_name+"-"+this.page_id)},a.prototype.reissueHeartBeatData=function(){for(var t=window.localStorage.length,e=t-1;e>=0;e--){var a=window.localStorage.key(e);if(a&&a!==this.storage_name+"-"+this.page_id&&0===a.indexOf(this.storage_name+"-")){var i=this.sd.store.readObjectVal(a);this._.isObject(i)&&1*new Date-i.time>i.heartbeat_interval_time+5e3&&(delete i.heartbeat_interval_time,this.sd.kit.sendData(i),this.delHeartBeatData(a))}}},a.prototype.getPageLeaveProperties=function(){var t=(+new Date-this.start_time)/1e3;(isNaN(t)||t<0||t>this.max_duration)&&(t=0),t=Number(t.toFixed(3));var e=this._.getReferrer(this.current_page_url),a=document.documentElement&&document.documentElement.scrollTop||window.pageYOffset||document.body&&document.body.scrollTop||0;a=Math.round(a)||0;var i={$title:document.title,$url:this._.getURL(this.url),$url_path:this._.getURLPath(this._.URL(this.url).pathname),$referrer_host:e?this._.getHostname(e):"",$referrer:e,$viewport_position:a};return 0!==t&&(i.event_duration=t),i=this._.extend(i,this.option.custom_props)};var n=new a,o=e(n,"PageLeave","sdkReady");return o}();
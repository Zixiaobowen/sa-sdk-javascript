(window.SensorsDataWebJSSDKPlugin=window.SensorsDataWebJSSDKPlugin||{}).Amp=function(){"use strict";function t(t,i,s){if(i&&(t.plugin_name=i),s&&t.init){var n=t.init;t.init=function(i,e){function d(){n.call(t,i,e)}return i.readyState&&i.readyState.state>=3||!i.on?d():void i.on(s,d)}}return t}function i(i,n,e){return t(i,n,e),i.plugin_version=s,i}var s="1.24.9",n={sd:null,init:function(t){if(this.sd)return!1;if(this.sd=t,!this.sd||!this.sd._)return!1;var i=this.sd._.cookie.get("sensors_amp_id"),s=this.sd.store._state.distinct_id;if(i&&i.length>0){var n="amp-"===i.slice(0,4);if(i!==s){if(!n)return!1;this.sd.store._state.first_id?(this.sd.identify(i,!0),this.sd.saEvent.send({original_id:i,distinct_id:s,type:"track_signup",event:"$SignUp",properties:{}},null),this.setAmpId(s)):this.sd.identify(i,!0)}}else this.setAmpId(s);this.addListener()},addListener:function(){var t=this;this.sd.events.on("changeDistinctId",function(i){t.setAmpId(i)}),this.sd.events.isReady()},setAmpId:function(t){this.sd._.cookie.set("sensors_amp_id",t)}},e=i(n,"Amp","sdkReady");return e}();
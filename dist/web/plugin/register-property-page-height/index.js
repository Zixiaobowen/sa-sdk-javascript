(window.SensorsDataWebJSSDKPlugin=window.SensorsDataWebJSSDKPlugin||{}).RegisterPropertyPageHeight=function(){"use strict";function e(e,t,i){if(t&&(e.plugin_name=t),i&&e.init){var n=e.init;e.init=function(t,r){function o(){n.call(e,t,r)}return t.readyState&&t.readyState.state>=3||!t.on?o():void t.on(i,o)}}return e}function t(t,i,n){return e(t,i,n),t.plugin_version=o,t}function i(e){try{if("$pageview"!==e.event&&(!e.type||"profile"!==e.type.slice(0,7))){var t=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0,i=document.documentElement.scrollHeight||0,o={$page_height:Math.max(t,i)||0};e.properties=n._.extend(e.properties||{},o)}}catch(g){a("\u9875\u9762\u9ad8\u5ea6\u83b7\u53d6\u5f02\u5e38\u3002")}return r.call(n.kit,e)}var n,r,o="1.24.9",a=window.console&&window.console.log||function(){},g={init:function(e){return n=e,a=n&&n.log||a,e&&e.kit&&e.kit.buildData?(r=n.kit.buildData,n.kit.buildData=i,void a("RegisterPropertyPageHeight \u63d2\u4ef6\u521d\u59cb\u5316\u5b8c\u6210")):void a("RegisterPropertyPageHeight \u63d2\u4ef6\u521d\u59cb\u5316\u5931\u8d25,\u5f53\u524d\u4e3bsdk\u4e0d\u652f\u6301 RegisterPropertyPageHeight \u63d2\u4ef6\uff0c\u8bf7\u5347\u7ea7\u4e3bsdk")}},u=t(g,"RegisterPropertyPageHeight","sdkReady");return u}();
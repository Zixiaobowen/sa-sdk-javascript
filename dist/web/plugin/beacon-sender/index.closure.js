!function(){"use strict";function n(n,e,r){if(e&&(n.plugin_name=e),r&&n.init){var t=n.init;n.init=function(e,a){function i(){t.call(n,e,a)}return e.readyState&&e.readyState.state>=3||!e.on?i():void e.on(r,i)}}return n}function e(e,r,t){return n(e,r,t),e.plugin_version=c,e}function r(n){var e=new u.BeaconSend(n);e.start()}function t(n,e){if("beacon"===o.para.send_type){var t=n.server_url;n.data=o.kit.encodeTrackData(n.data),u.isArray(t)&&t.length?u.each(t,function(e){n.callback=null,n.server_url=e,r(n)}):"string"==typeof o.para.server_url&&""!==o.para.server_url?r(n):o.log("\u5f53\u524d server_url \u4e3a\u7a7a\u6216\u4e0d\u6b63\u786e\uff0c\u53ea\u5728\u63a7\u5236\u53f0\u6253\u5370\u65e5\u5fd7\uff0cnetwork \u4e2d\u4e0d\u4f1a\u53d1\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u6b63\u786e\u7684 server_url\uff01"),e.cancellationToken.stop()}return n}function a(){"beacon"!==o.para.send_type||u.isSupportBeaconSend()||(o.para.send_type="image")}function i(){o.on("sdkInitPara",function(){a()}),o.on("sdkAfterInitPara",function(){o.registerInterceptor("sendDataStage",{send:{priority:110,entry:t}})})}var o,u,c="1.24.9",s={plugin_name:"BeaconSender",init:function(n){o=n,u=o._,i()}},l=e(s);return l}();
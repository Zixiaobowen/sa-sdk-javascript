var sd,_,sdkversion_placeholder="1.24.10";function wrapPluginInitFn(n,a,e){if(a&&(n.plugin_name=a),e&&n.init){var t=n.init;n.init=function(a,i){if(a.readyState&&a.readyState.state>=3||!a.on)return s();function s(){t.call(n,a,i)}a.on(e,s)}}return n}function createPlugin(n,a,e){return wrapPluginInitFn(n,a,e),n.plugin_version=sdkversion_placeholder,n}function sendData(n,a){if(_.isObject(sd.para.jsapp)&&!sd.para.jsapp.isOnline&&"function"==typeof sd.para.jsapp.setData){var e=n;delete e.callback,e=JSON.stringify(e),sd.para.jsapp.setData(e),a.cancellationToken.stop()}return n}function senderInit(){sd.on("sdkAfterInitAPI",function(){_.isObject(sd.commonWays)&&(sd.commonWays.setOnlineState=setOnlineState),sd.registerInterceptor("sendDataStage",{send:{priority:40,entry:sendData}})})}function setOnlineState(n){if(!0===n&&_.isObject(sd.para.jsapp)&&"function"==typeof sd.para.jsapp.getData){sd.para.jsapp.isOnline=!0;var a=sd.para.jsapp.getData();_.isArray(a)&&a.length>0&&_.each(a,function(n){_.isJSONString(n)&&sd.kit.sendData(JSON.parse(n))})}else sd.para.jsapp.isOnline=!1}var JsappSender={plugin_name:"JsappSender",init:function(n){_=(sd=n)._,senderInit()}},index=createPlugin(JsappSender);export default index;
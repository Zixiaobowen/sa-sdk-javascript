(window.SensorsDataWebJSSDKPlugin=window.SensorsDataWebJSSDKPlugin||{}).AndroidBridge=function(){"use strict";function e(e){return b&&b.call(g,JSON.stringify(e))}function a(e){return f.call(g)&&v&&v.call(g,JSON.stringify(e))}function i(e,a){return a&&"function"==typeof a[e.callType]&&a[e.callType]()}function n(e,a,i){if(a&&(e.plugin_name=a),i&&e.init){var n=e.init;e.init=function(a,r){function s(){n.call(e,a,r)}return a.readyState&&a.readyState.state>=3||!a.on?s():void a.on(i,s)}}return e}function r(e,a,i){return n(e,a,i),e.plugin_version=m,e}function s(){if(d=window.SensorsData_APP_New_H5_Bridge,_=d&&d.sensorsdata_track,c=_&&d.sensorsdata_get_server_url&&d.sensorsdata_get_server_url(),l&&!l.bridge.activeBridge&&c){if(l.bridge.activeBridge=S,l.para.app_js_bridge&&!l.para.app_js_bridge.is_mui&&(l.bridge.is_verify_success=c&&l.bridge.validateAppUrl(c)),l.bridge.bridge_info={touch_app_bridge:!0,platform:"android",verify_success:l.bridge.is_verify_success?"success":"fail",support_two_way_call:!!d.sensorsdata_js_call_app},!l.para.app_js_bridge)return void p("app_js_bridge is not configured, data will not be sent by android bridge.");l.registerInterceptor("sendDataStage",{send:{priority:60,entry:t}}),p("Android bridge inits succeed.")}}function t(e,a){if(l.para.app_js_bridge.is_mui||"item_set"===e.data.type||"item_delete"===e.data.type)return e;var i=e.callback;return l.bridge.is_verify_success?(_&&_.call(d,JSON.stringify(u.extend({server_url:l.para.server_url},e.data))),u.isFunction(i)&&i(),a.cancellationToken.cancel(),e):l.para.app_js_bridge.is_send?(l.debug.apph5({data:e.data,step:"4.2",output:"all"}),e):(u.isFunction(i)&&i(),a.cancellationToken.cancel(),e)}function o(e){var a=e.callType;return a in y.commands?y.commands[a](e,d):void(d&&u.isFunction(d.sensorsdata_js_call_app)&&d.sensorsdata_js_call_app(JSON.stringify(e)))}var d,_,c,l,u,p,g=window.SensorsData_App_Visual_Bridge,f=g&&g.sensorsdata_visualized_mode,b=g&&g.sensorsdata_visualized_alert_info,v=g&&g.sensorsdata_hover_web_nodes,y={isVerify:function(){return f&&(f===!0||f.call(g))},commands:{app_alert:e,visualized_track:a,page_info:a,sensorsdata_get_app_visual_config:i}},m="1.24.13",S={init:function(e){l=e,u=l&&l._,p=l&&l.log||console&&console.log||function(){},s()},handleCommand:o},w=r(S,"AndroidBridge","sdkAfterInitPara");return w}();
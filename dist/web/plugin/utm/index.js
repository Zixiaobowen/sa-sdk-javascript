(window.SensorsDataWebJSSDKPlugin=window.SensorsDataWebJSSDKPlugin||{}).Utm=function(){"use strict";function n(n,t,e){if(t&&(n.plugin_name=t),e&&n.init){var r=n.init;n.init=function(t,i){function a(){r.call(n,t,i)}return t.readyState&&t.readyState.state>=3||!t.on?a():void t.on(e,a)}}return n}function t(t,e,r){return n(t,e,r),t.plugin_version=i,t}var e,r="utm_source utm_medium utm_campaign utm_content utm_term",i="1.24.10",a={init:function(n){function t(){var n=r.split(" "),t="",i={};return e._.isArray(e.para.source_channel)&&e.para.source_channel.length>0&&(n=n.concat(e.para.source_channel),n=e._.unique(n)),e._.each(n,function(n){t=e._.getQueryParam(location.href,n),t.length&&(i[n]=t)}),i}n&&!e&&(e=n,e.registerInterceptor("businessStage",{getUtmData:{priority:0,entry:function(){return t()}}}))}},u=t(a,"Utm","sdkAfterInitPara");return u}();
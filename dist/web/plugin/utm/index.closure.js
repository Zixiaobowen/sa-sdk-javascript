!function(){"use strict";function t(t,n,r){if(n&&(t.plugin_name=n),r&&t.init){var e=t.init;t.init=function(n,i){function a(){e.call(t,n,i)}return n.readyState&&n.readyState.state>=3||!n.on?a():void n.on(r,a)}}return t}function n(n,r,e){return t(n,r,e),n.plugin_version=i,n}var r,e="utm_source utm_medium utm_campaign utm_content utm_term",i="1.24.13",a={init:function(t){function n(){var t=e.split(" "),n="",i={};return r._.isArray(r.para.source_channel)&&r.para.source_channel.length>0&&(t=t.concat(r.para.source_channel),t=r._.unique(t)),r._.each(t,function(t){n=r._.getQueryParam(location.href,t),n.length&&(i[t]=n)}),i}t&&!r&&(r=t,r.registerInterceptor("businessStage",{getUtmData:{priority:0,entry:function(){return n()}}}))}},u=n(a,"Utm","sdkAfterInitPara");return u}();
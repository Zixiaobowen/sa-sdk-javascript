!function(){"use strict";function n(n,t,i){if(t&&(n.plugin_name=t),i&&n.init){var e=n.init;n.init=function(t,u){function r(){e.call(n,t,u)}return t.readyState&&t.readyState.state>=3||!t.on?r():void t.on(i,r)}}return n}function t(t,i,e){return n(t,i,e),t.plugin_version=r,t}function i(){a=!0}function e(){a=!1}function u(){return a}var r="1.24.10",a=!1,o=null,c={init:function(n){o=n,o.disableSDK=i,o.enableSDK=e,o.getDisabled=u}},f=t(c,"DisableSDK","sdkInitAPI");return f}();
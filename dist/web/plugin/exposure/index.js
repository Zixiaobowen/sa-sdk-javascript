(window.SensorsDataWebJSSDKPlugin=window.SensorsDataWebJSSDKPlugin||{}).Exposure=function(){"use strict";function e(e,t,n){if(t&&(e.plugin_name=t),n&&e.init){var r=e.init;e.init=function(t,i){function a(){r.call(e,t,i)}return t.readyState&&t.readyState.state>=3||!t.on?a():void t.on(n,a)}}return e}function t(t,n,r){return e(t,n,r),t.plugin_version=s,t}function n(){return("MutationObserver"in window||"WebKitMutationObserver"in window||"MozMutationObserver"in window)&&"IntersectionObserver"in window}function r(e){var t={};return a.each(e,function(n,r){switch(r){case"area_rate":n=Number(n),!isNaN(n)&&n>=0&&n<=1?t.area_rate=n:o("parameter config.area_rate error. config:",e);break;case"stay_duration":n=Number(n),!isNaN(n)&&n>=0?t.stay_duration=n:o("parameter config.stay_duration error. config:",e);break;case"repeated":"false"===n||n===!1||"true"===n||n===!0?t.repeated=n:o("parameter config.repeated error. config:",e)}}),t}var i,a,o,s="1.24.9",u="data-sensors-exposure-event-name",c={},d=[],l={area_rate:0,stay_duration:0,repeated:!0},v={isReady:!1,init:function(e){if(!n())return void o("The current browser does not support the element exposure key API, and the element exposure plugin initialization failed.");var t=this;a.isObject(e)&&(l=a.extend(l,r(e))),a.bindReady(function(){var e=t.getElesByEventName();t.addObserveByNodes(e),f.init()}),i.ee.spa.on("switch",function(e){if(e===location.href)return!1;t.clear();var n=t.getElesByEventName();t.addObserveByNodes(n)}),a.listenPageState({visible:function(){t.start()},hidden:function(){t.stop()}}),this.isReady=!0},getElesByEventName:function(e){return e=e||document,e.querySelectorAll("["+u+"]")},getEleEventName:function(e){return e.getAttribute(u)},getEleAttr:function(e,t){t=t||e.attributes;var n={},i={},o=this.getEleEventName(e);return a.each(t,function(e){var t=e.value;try{var r=e.name.match(/^data-sensors-exposure-property-(.+)/);r&&(n[r[1]]=t)}catch(a){}try{var o=e.name.match(/^data-sensors-exposure-config-(.+)/);if(o)switch(o[1]){case"area_rate":i.area_rate=t;break;case"stay_duration":i.stay_duration=t;break;case"repeated":i.repeated=!1}}catch(a){}}),{eventName:o,config:r(i),properties:n}},addObserveByNodes:function(e){if(e.length){var t=this;a.each(e,function(e){if(1===e.nodeType&&e.hasAttribute(u)){var n=t.getEleAttr(e);n.config=a.extend({},l,n.config),n.ele=e,t.addOrUpdateWatchEle(n)}})}},getIntersection:function(e){var t=null,n=this;return t=c[e.area_rate]?c[e.area_rate]:c[e.area_rate]=new IntersectionObserver(function(){n.exposure.apply(n,arguments)},{threshold:e.area_rate})},exposure:function(e){var t=this;a.each(e,function(e){var n=e.target,r=t.getEleOption(n);return e.isIntersecting===!1||!r||r.config.isSend?void(r&&r.timer&&(clearTimeout(r.timer),r.timer=null)):void(e.intersectionRatio>=r.config.area_rate&&(r.timer&&(clearTimeout(r.timer),r.timer=null),r.timer=setTimeout(function(){var e=n.getBoundingClientRect(),r=t.getEleOption(n);if(e.width&&e.height&&r&&r.eventName&&!r.config.isSend){var o=i.heatmap.getEleDetail(n);i.track(r.eventName,a.extend({},o,r.properties)),r.config.isSend=!0,r.config.repeated&&(r.config.isSend=!1)}},1e3*r.config.stay_duration)))})},getEleOption:function(e){var t=null;return a.each(d,function(n){e===n.ele&&(t=n)}),t},addOrUpdateWatchEle:function(e){var t=e.ele,n=e.config,r=v.getEleOption(t);if(r)a.extend2Lev(r,e),r.config.repeated&&(r.config.isSend=!1);else{if(!e.eventName)return o("parameter option.eventName error. option:",e),!1;a.isElement(t)||o("parameter element error. option:",e);var i=this.getIntersection(n);i.observe(t),d.push(e)}},removeWatchEle:function(e){var t=null,n=-1;if(a.each(d,function(r,i){e===r.ele&&(t=r,n=i)}),t){var r=t.config,i=c[r.area_rate];i&&a.isElement(e)&&(i.unobserve(e),t.timer&&(clearTimeout(t.timer),t.timer=null),n>-1&&d.splice(n,1))}},start:function(){a.each(d,function(e){var t=e.config,n=e.ele,r=c[t.area_rate];r&&a.isElement(n)&&r.observe(n)})},stop:function(){a.each(d,function(e){var t=e.config,n=e.ele,r=c[t.area_rate];r&&a.isElement(n)&&(r.unobserve(n),e.timer&&(clearTimeout(e.timer),e.timer=null))})},clear:function(){this.stop(),c={},d=[]}},f={mo:null,init:function(){var e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;this.mo=new e(this.listenNodesChange),this.observe()},observe:function(){this.mo.observe(document.body,{attributes:!0,childList:!0,subtree:!0,attributeOldValue:!0})},listenNodesChange:function(e){a.each(e,function(e){switch(e.type){case"childList":e.removedNodes.length>0?a.each(e.removedNodes,function(e){if(1===e.nodeType){v.removeWatchEle(e);var t=v.getElesByEventName(e);t.length&&a.each(t,function(e){v.removeWatchEle(e)})}}):e.addedNodes.length&&(v.addObserveByNodes(e.addedNodes),a.each(e.addedNodes,function(e){if(1===e.nodeType){var t=v.getElesByEventName(e);v.addObserveByNodes(t)}}));break;case"attributes":if(!e.attributeName)return!1;var t=e.target,n=e.attributeName;if(!a.isString(n)||n.indexOf("data-sensors-exposure")<0)return;var r=v.getEleAttr(t,[{name:n}]),i=v.getEleOption(t)||{ele:t,config:l},o=a.extend2Lev({},i,r);Object.prototype.hasOwnProperty.call(o,"eventName")?v.addOrUpdateWatchEle(o):v.removeWatchEle(t)}})}},p={exposureViews:d,init:function(e,t){return!(!e||i)&&(i=e,a=i._,o=i.log,v.init(t),void o("Exposure Plugin initialized successfully"))},addExposureView:function(e,t){if(!v.isReady)return void o("Exposure Plugin uninitialized.");if(!a.isElement(e))return void o("parameter element error.");var n={ele:e,config:a.isObject(t.config)?r(t.config):{},eventName:t.eventName,properties:a.isObject(t.properties)?t.properties:{}},i=v.getEleOption(e);if(i){if(i=a.extend2Lev({},i,n),!a.isString(i.eventName)||!i.eventName)return void o("parameter option.eventName error. option",t);i.config.repeated&&(i.config.isSend=!1)}else{if(!a.isString(n.eventName)||!n.eventName)return void o("parameter option.eventName error. option",t);v.addOrUpdateWatchEle(n)}},removeExposureView:function(e){return v.isReady?a.isElement(e)?void v.removeWatchEle(e):void o("removeExposureView parameter ele errors."):void o("Exposure Plugin uninitialized.")}},m=t(p,"Exposure","sdkAfterInitPara");return m}();
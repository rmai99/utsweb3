(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports=t(17)},,,,,,function(e,n,t){},function(e,n,t){e.exports=t.p+"static/media/logo.ee7cd8ed.svg"},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var o=t(0),i=t.n(o),a=t(2),c=t.n(a),r=(t(14),t(3)),s=t(4),l=t(6),u=t(5),d=t(7),f=(t(15),t(16),function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).state={active:"Blue"},t}return Object(d.a)(n,e),Object(s.a)(n,[{key:"clicked",value:function(e){this.setState({active:e})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{id:"app",className:this.state.active+" background"},i.a.createElement("nav",{className:"nav"},this.props.items.map(function(n,t){var o="menu";return e.state.active===n&&(o="".concat(o," is-active")),i.a.createElement("a",{className:o,onClick:e.clicked.bind(e,n),key:t},"Thema ",n)})))}}]),n}(o.Component)),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(i.a.createElement(f,{items:["Blue ","Light "]}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/utsweb3",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/utsweb3","/service-worker.js");v?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):h(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):h(n,e)})}}()}],[[8,1,2]]]);
//# sourceMappingURL=main.d8dc9532.chunk.js.map
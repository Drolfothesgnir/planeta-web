(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{177:function(e,t,n){"use strict";var a=n(0),c=n.n(a),o=n(197),r=n.n(o),l=n(36),i=n(11),s=n(21),u=n(176);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,c=!1,o=void 0;try{for(var r,l=e[Symbol.iterator]();!(a=(r=l.next()).done)&&(n.push(r.value),!t||n.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(c)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.a=function(e){var t=e.links,n=e.onLinkClickFunc,a=e.active,o=e.classes,m=void 0===o?{}:o,p=e.children,v=e.fallback,b=void 0===v?c.a.createElement(u.a,null):v,f=d(c.a.useState(!0),2),g=f[0],h=f[1],P=d(Object(l.b)(),1)[0].mainMenu,y=d(Object(i.c)(),1)[0],k=null==P?void 0:P[y],w=location.pathname.split("/")[1],E=null==k?void 0:k.find((function(e){return e.relative==="/"+w}));return k?c.a.createElement("div",{className:"".concat(r.a.contentPage," ").concat(m.contentPage||""," slick-height")},c.a.createElement("div",{className:"".concat(r.a.contentPageLabel," ").concat(m.contentPageLabel||""," ").concat(g?r.a.closed:"")},c.a.createElement("span",{"data-page-index":"".concat(E.index).padStart(2,"0")},c.a.createElement("span",{className:"".concat(r.a.contentPageText," ").concat(m.contentPageText||"")},E.title)),c.a.createElement("button",{className:"".concat(r.a.contentPageClose," ").concat(m.contentPageClose||""),onClick:function(){return h((function(e){return!e}))}},c.a.createElement(s.a,{icon:g?"arrow-right":"arrow-left"})),t&&c.a.createElement("ul",{className:"".concat(m.nav," ").concat(!g&&m.open)},t.map((function(e,t){return c.a.createElement("li",{key:e.key,className:"".concat(t===a?m.active:"")},c.a.createElement("button",{onClick:function(){n(t),h(!g)}},e.title))})))),c.a.createElement("div",{className:"".concat(r.a.contentPageContent," ").concat(m.contentPageContent||"")},p)):b}},197:function(e,t,n){e.exports={contentPage:"Y5Qwz2R1PU12Cd9hVZXcc",contentPageContent:"_39h-TVrVnyKsixdAdAM0Fm",contentPageLabel:"_3yKS5fvpQZlb7-ixow0Dns",contentPageClose:"_16GBE8bnjWzXJM1BVWvkb1",nav:"aVVnKRhzdr_GHn9ELObs9",contentPageText:"_3hRYDeSvXpK6nbpMj_VhKu",closed:"_1NMbzkq4VvZqAdw2YLJD5C",open:"veHLZuyNNN8L1-0bkOpiQ",active:"_2C0MgXtGp5cKVKoe2e_Khl"}}}]);
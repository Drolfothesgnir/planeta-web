(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{226:function(e,t,a){e.exports={desktopVertical:"_3Zh68VU6hnnrqz_tsgh3Rx",slide:"_2w0emCplcPlm-51V3bpFj3",bgTitle:"_1XiSuk1zuMzhfDya_PkVZa",image:"x-GMIrYPne1X79uXASyIW",slideContent:"_2gzPsk7EfEDJG4wRDQxc7z",leftContent:"_2pVv_4VYVTdjOgLXgIAKQc",arrow:"p-Pxni0CArOapRZuDJisK",verticalButton:"_1aG18AsAfjlk1zpeW9rli_",prev:"bVTpikPMOXXqgIKf8oC1G",next:"UpYaDjUBtYnDmFhtLekRg",counter:"_19AImA85iq_3xC6zXIEg1i",circle:"_1z21smw-ettaznzzhp_fMC"}},227:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=[],r="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z";t.definition={prefix:"fas",iconName:"caret-right",icon:[192,512,n,"f0da",r]},t.faCaretRight=t.definition,t.prefix="fas",t.iconName="caret-right",t.width=192,t.height=512,t.ligatures=n,t.unicode="f0da",t.svgPathData=r},231:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(185),i=a(10),l=a(21),o=a(227),s=a(184),u=a(226),m=a.n(u);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=function(e){var t,a,n=e.items,u=r.a.useRef(null),p=f(r.a.useState(0),2),g=p[0],d=p[1],v=f(r.a.useState(0),2),E=v[0],h=v[1],b=f((t=n.length,a=g>=n.length?0:g,t<2?[a,a]:2===t?[+!a,+!a]:0===a?[t-1,1]:a===t-1?[t-2,0]:[a-1,a+1]),2),w=b[0],k=b[1],C=function(){u.current.slickPrev(),y()},N=function(){u.current.slickNext(),_()},_=function(){h((function(e){return e-45}))},y=function(){h((function(e){return e+45}))};return r.a.createElement("div",{className:m.a.desktopVertical},r.a.createElement(c.a,{settings:{slidesToShow:1,slidesToScroll:1,vertical:!0,verticalSwiping:!0,dots:!1,ref:u,arrows:!1,beforeChange:function(e,t){d(t)},onSwipe:function(e){"left"===e||"up"===e?_():y()},responsive:[{breakpoint:1279,settings:{vertical:!1,verticalSwiping:!1}}]}},n.map((function(e){var t=e.title,a=e.buttonText,n=e.link,c=e.imgSrc;return r.a.createElement("div",{key:t,className:m.a.slide},r.a.createElement("span",{className:m.a.bgTitle},t),r.a.createElement("div",{className:m.a.slideContent},r.a.createElement("div",{className:m.a.leftContent},r.a.createElement("h2",null,t),r.a.createElement(i.b,{className:"btn btn-portfolio",to:n},a)),r.a.createElement("div",{className:m.a.image},r.a.createElement("img",{src:c,alt:t}))))}))),r.a.createElement("p",{className:m.a.counter},r.a.createElement("button",{onClick:C},r.a.createElement(l.a,{icon:o.faCaretRight})),r.a.createElement("span",null,"".concat(g+1,"/").concat(n.length)),r.a.createElement("button",{onClick:N},r.a.createElement(l.a,{icon:o.faCaretRight}))),r.a.createElement("button",{className:"".concat(m.a.verticalButton," ").concat(m.a.prev),onClick:C},r.a.createElement(s.a,{className:m.a.arrow}),r.a.createElement("span",null,n[w].title)),r.a.createElement("button",{className:"".concat(m.a.verticalButton," ").concat(m.a.next),onClick:N},r.a.createElement(s.a,{className:m.a.arrow}),r.a.createElement("span",null,n[k].title)),r.a.createElement("div",{className:m.a.circle,style:{transform:"rotate(".concat(E,"deg)")}},r.a.createElement("span",null)))}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{181:function(e,t,a){e.exports={title:"_3QQUqasuyMlYgIVRQ4bZzk",heading:"_39-4hhNF48DroSyYvRdKTf",text:"AWyj8apetaO0KndFSm0ba",content:"_3QnJhnEEb-OBJswKGuCWIy",slide:"_3nmLiqPYy_RUYgyOMcWbKf",first:"_2AUTsG6MYS5c4D1Rp0NtO9",left:"_2gxf1P_rv2v8HlFHLcyCTj",right:"_1UiyGcmUr6Su7hWwsV7pPC",second:"_2gzJg82njvjpgGr2ww-1w6",description:"_2eg1xTf3GGUqBEdbtOivjJ",pictures:"GE_2_VrW-WafdNM8HmhVU",image:"_1KdJde8RCkpTABdJ2xCrji",firm:"aSMrXyOnsViCRgvelrGO7",third:"_3dVviigPmC_Onwzi7BCduu",fourth:"T77IVLcgQkspW2v0lE25N",mainTitle:"_3IuI1X8c8xTrt5ZCU9ks-2",form:"oFOuEldE3GSrx7UttKkcP"}},240:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(175),i=a(176),c=a(188),o=a(178),u=a(63);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw l}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=function(e){for(var t,a=e.content.main_page_content,n=a.view_mode,r=a.entity,l=[],i=/<p>(.*?)<\/p>/g;null!==(t=i.exec(r.body[0].value));)l.push(t[1]);var c={description:r.field_team[0].field_description[0].value,title:n.field_team.title,firmDescription:r.field_team[0].field_firm_description.map((function(e){var t=e.field_title,a=e.field_description;return{title:t[0].value,description:a[0].value}})),pictures:r.field_team[0].field_picture_and_description.map((function(e){var t=s(e.field_image,1),a=s(t[0].uri,1)[0].url,n=s(e.field_title,1)[0].value;return{url:new URL(a,u.a),value:n}}))},o={title:n.field_customers.title,pictures:r.field_customers.map((function(e){var t=s(e.uri,1)[0].url;return new URL(t,u.a)}))},m=r.field_contacts[0].field_email.map((function(e){return{type:"envelope",value:e.value}})),f=r.field_contacts[0].field_tel.map((function(e){return{value:e.value,type:"mobile-alt"}})),d=r.field_contacts[0].field_location.map((function(e){return{type:"map-marker-alt",value:e.value}}));return[l,c,o,{items:m.concat(f,d),titles:[n.webform.title,n.field_contacts.title,n.field_follow_us.title]}]},f=a(181),d=a.n(f);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw l}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var v=function(e){var t=p(e.content,4),a=t[0],n=t[1],l=t[2],i=t[3];return r.a.createElement("div",{className:"".concat(d.a.first," ").concat(d.a.slide)},r.a.createElement("div",{className:d.a.content},r.a.createElement("div",{className:d.a.left},r.a.createElement("span",{className:d.a.title},a),r.a.createElement("h1",{className:d.a.heading},n)),r.a.createElement("div",{className:d.a.right},r.a.createElement("p",{className:d.a.text},l),r.a.createElement("p",{className:d.a.text},i))))};var y=function(e){var t=e.content,a=t.description,n=t.firmDescription,l=t.pictures,i=t.title;return r.a.createElement("div",{className:"".concat(d.a.slide," ").concat(d.a.second)},r.a.createElement("div",{className:d.a.content},r.a.createElement("span",{className:d.a.title},i),r.a.createElement("div",{className:d.a.left},r.a.createElement("div",{className:"".concat(d.a.text," ").concat(d.a.description),dangerouslySetInnerHTML:{__html:a}}),r.a.createElement("ul",{className:d.a.pictures},l.map((function(e){var t=e.url,a=e.value;return r.a.createElement("li",{key:t},r.a.createElement("div",{className:d.a.image},r.a.createElement("img",{src:t,alt:a})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a},className:d.a.text}))})))),r.a.createElement("div",{className:d.a.right},r.a.createElement("ul",{className:d.a.firm},n.map((function(e){var t=e.title,a=e.description;return r.a.createElement("li",{key:t},r.a.createElement("span",{className:d.a.heading},t),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a},className:d.a.text}))}))))))};var E=function(e){var t=e.content,a=t.title,n=t.pictures;return r.a.createElement("div",{className:"".concat(d.a.slide," ").concat(d.a.third)},r.a.createElement("div",{className:d.a.content},r.a.createElement("span",{className:d.a.title},a),r.a.createElement("ul",null,n.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement("img",{src:e,alt:"image"}))})))))},_=a(21),h=a(185);function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw l}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var g=function(e){var t=e.content,a=t.items,n=b(t.titles,3),l=n[0],i=n[1],c=n[2];return r.a.createElement("div",{className:"".concat(d.a.slide," ").concat(d.a.fourth)},r.a.createElement("div",{className:d.a.content},r.a.createElement("div",{className:d.a.left},r.a.createElement("span",{className:d.a.mainTitle},l),r.a.createElement(h.a,{className:d.a.form,buttonClassname:"btn btn-dark"})),r.a.createElement("div",{className:d.a.right},r.a.createElement("span",{className:d.a.title},i),r.a.createElement("ul",{className:d.a.text},a.map((function(e){var t=e.value,a=e.type;return r.a.createElement("li",{key:t,className:d.a[a]},r.a.createElement("i",null,r.a.createElement(_.a,{icon:a})),r.a.createElement("span",null,t))}))),r.a.createElement("span",{className:d.a.title},c),r.a.createElement("div",null,r.a.createElement("i",null,r.a.createElement(_.a,{icon:["fab","facebook-f"]})),r.a.createElement("span",null,"planetawebcomua")))))};function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw l}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=function(e){var t=N(Object(i.a)({url:"/block-layout?path="+e.match.url,parser:m,name:"about"}),2),a=t[0],n=t[1];return n?n.message:r.a.createElement(o.a,{menuItem:"about"},r.a.createElement(c.a,null,a?[r.a.createElement(v,{key:"first",content:a[0]}),r.a.createElement(y,{key:"second",content:a[1]}),r.a.createElement(E,{key:"third",content:a[2]}),r.a.createElement(g,{key:"fourth",content:a[3]})]:r.a.createElement(l.a,null)))}}}]);
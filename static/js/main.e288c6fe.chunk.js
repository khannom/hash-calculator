(this["webpackJsonphash-calculator"]=this["webpackJsonphash-calculator"]||[]).push([[0],{125:function(n,t,e){},126:function(n,t,e){},134:function(n,t){},136:function(n,t){},146:function(n,t){},148:function(n,t){},175:function(n,t){},176:function(n,t){},181:function(n,t){},183:function(n,t){},190:function(n,t){},209:function(n,t){},243:function(n,t,e){},244:function(n,t,e){"use strict";e.r(t);var r=e(0),c=e(118),a=e.n(c),u=e(119),o=(e(125),e(10)),i=(e(126),e(4)),s=function(){return Object(i.jsx)("header",{className:"header",children:Object(i.jsx)("div",{className:"header-item",children:"HASH CALCULATOR"})})},f=e(16),h=e.n(f),l=e(36),j=e(120),b=e(37),p=e.n(b),v=function(){var n=Object(l.a)(h.a.mark((function n(t,r){var c,a;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c=e(116),!(r.length>0)){n.next=8;break}return a="",n.next=5,p.a.compute(r,t,"MD5").then((function(n){return n.forEach((function(n){a+=n.toString(16)})),console.log(n),console.log(a),a}));case 5:return n.abrupt("return",n.sent);case 8:return n.abrupt("return",c(t));case 9:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),O=function(){var n=Object(l.a)(h.a.mark((function n(t,r){var c,a;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c=e(241),!(r.length>0)){n.next=8;break}return a="",n.next=5,p.a.compute(r,t,"SHA-1").then((function(n){return n.forEach((function(n){a+=n.toString(16)})),console.log(n),console.log(a),a}));case 5:return n.abrupt("return",n.sent);case 8:return n.abrupt("return",c(t));case 9:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),d=function(){var n=Object(l.a)(h.a.mark((function n(t,r){var c,a;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c=e(242),!(r.length>0)){n.next=8;break}return a="",n.next=5,p.a.compute(r,t,"SHA-256").then((function(n){return n.forEach((function(n){a+=n.toString(16)})),console.log(n),console.log(a),a}));case 5:return n.abrupt("return",n.sent);case 8:return n.abrupt("return",c(t));case 9:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),x=(e(243),function(){var n=["MD4","MD5","SHA-1","SHA-256"],t=Object(r.useState)(n[0]),c=Object(o.a)(t,2),a=c[0],u=c[1],f=Object(r.useState)(""),h=Object(o.a)(f,2),l=h[0],b=h[1],p=Object(r.useState)(""),x=Object(o.a)(p,2),g=x[0],A=x[1],S=Object(r.useState)(""),m=Object(o.a)(S,2),k=m[0],w=m[1];return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(s,{}),Object(i.jsxs)("section",{children:[Object(i.jsx)("h1",{children:"Calculadora de funciones hash"}),Object(i.jsx)("h2",{children:"Seleccione el tipo de funci\xf3n Hash:"}),Object(i.jsx)("select",{onChange:function(n){return u(n.target.value)},children:n.map((function(n){return Object(i.jsx)("option",{value:n,children:n},n)}))}),"Clave(HMAC opcional):",Object(i.jsx)("input",{type:"text",onChange:function(n){return A(n.target.value)}}),Object(i.jsx)("h2",{children:"Ingrese el texto:"}),Object(i.jsx)("textarea",{onChange:function(n){return b(n.target.value)}}),Object(i.jsx)("button",{onClick:function(n){var t=l;switch(a){case"MD4":t=function(n,t){var r="";Object(j.a)(n).forEach((function(n){var t=n.charCodeAt().toString(2);r+=Array(8-t.length+1).join("0")+t}));var c=r.length;r+="1";for(var a=!1;(r.length+64)%512!==0||!a;)r+="0",a=!0;var u=c.toString(2),o=e(240);u=Array(64-u.length+1).join("0")+u;var i=(r+=u).length/32;r=o(n);for(var s=new Uint32Array(i),f=0,h=0;f<i;++f,h+=32)s[f]=parseInt(r.substr(h,32),2);for(var l=1732584193,b=4023233417,p=2562383102,v=271733878,O=function(n,t,e,r,c,a,u){var o=t+function(n,t,e){return n&t|~n&e}(e,r,c)+n[a];return o<<u|o>>>32-u},d=function(n,t,e,r,c,a,u){var o=t+function(n,t,e){return n&t|n&e|t&e}(e,r,c)+n[a]+1518500249;return o<<u|o>>>32-u},x=function(n,t,e,r,c,a,u){var o=t+function(n,t,e){return n^t^e}(e,r,c)+n[a]+1859775393;return o<<u|o>>>32-u},g=new Uint32Array(16),A=0;A<s.length/16;A++){for(var S=l,m=b,k=p,w=v,y=0;y<16;y++)g[y]=s[16*A+y];for(var C=0;C<=12;C+=4)l=O(g,l,b,p,v,C,3),v=O(g,v,l,b,p,C+1,7),p=O(g,p,v,l,b,C+2,11),b=O(g,b,p,v,l,C+3,19);for(var H=0;H<4;H++)l=d(g,l,b,p,v,H,3),v=d(g,v,l,b,p,H+4,5),p=d(g,p,v,l,b,H+8,9),b=d(g,b,p,v,l,H+12,13);l=x(g,l,b,p,v,0,3),v=x(g,v,l,b,p,4,9),p=x(g,p,v,l,b,8,11),b=x(g,b,p,v,l,12,15),l=x(g,l,b,p,v,2,3),v=x(g,v,l,b,p,10,9),p=x(g,p,v,l,b,6,11),b=x(g,b,p,v,l,14,15),l=x(g,l,b,p,v,1,3),v=x(g,v,l,b,p,9,9),p=x(g,p,v,l,b,5,11),b=x(g,b,p,v,l,13,15),l=x(g,l,b,p,v,3,3),v=x(g,v,l,b,p,11,9),p=x(g,p,v,l,b,7,11),b=x(g,b,p,v,l,15,15),l+=S,b+=m,p+=k,v+=w}return r}(l);break;case"MD5":v(l,g).then((function(n){w(n)}));break;case"SHA-1":O(l,g).then((function(n){w(n)}));break;case"SHA-256":d(l,g).then((function(n){w(n)}))}w(t)},children:"GENERAR:"}),Object(i.jsx)("h2",{children:"Resultado de la funci\xf3n hash:"}),Object(i.jsx)("textarea",{readOnly:!0,value:k}),Object(i.jsx)("h2",{children:" "})]})]})});a.a.render(Object(i.jsx)(u.a,{children:Object(i.jsx)(x,{})}),document.getElementById("root"))}},[[244,1,2]]]);
//# sourceMappingURL=main.e288c6fe.chunk.js.map
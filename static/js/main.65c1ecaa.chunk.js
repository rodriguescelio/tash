(this["webpackJsonptinder-crawler"]=this["webpackJsonptinder-crawler"]||[]).push([[0],{47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(20),a=n.n(c),s=n(3),i=n.n(s),u=n(5),o=n(7),l=n(4),d=n(6),f=n.n(d),j=n(21),b=n.n(j),O=n(0),h=function(e){var t=e.list,n=Object(r.useState)(""),c=Object(l.a)(n,2),a=c[0],s=c[1];Object(r.useEffect)((function(){t.length&&s(t[0].url)}),[]);var i=function(e,t){t.preventDefault(),s(e)};return Object(O.jsxs)("div",{className:"img-block",children:[Object(O.jsx)("img",{src:a}),Object(O.jsx)("div",{className:"thumbs",children:t.map((function(e,t){return Object(O.jsx)("img",{src:e.url,className:e.url===a?"active":"",onClick:i.bind(null,e.url)},t)}))})]})},p=f.a.create({baseURL:"http://cast.celiorodrigues.com:6380",transformRequest:[function(e,t){var n=window.localStorage.getItem("tinderToken");return n&&(t["tinder-token"]=n),e}].concat(Object(u.a)(Array.isArray(f.a.defaults.transformRequest)?f.a.defaults.transformRequest:[f.a.defaults.transformRequest]))}),m=(n(47),n(11)),v=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(0),s=Object(l.a)(a,2),d=s[0],f=s[1],j=Object(r.useState)([]),v=Object(l.a)(j,2),x=v[0],g=v[1],w=Object(r.useState)([]),k=Object(l.a)(w,2),_=k[0],N=k[1],S=Object(r.useRef)(!1),y=Object(r.useRef)([]);Object(r.useEffect)((function(){return T(),window.addEventListener("scroll",C,!1),function(){return window.removeEventListener("scroll",C)}}),[]),Object(r.useEffect)((function(){S.current=!1}),[n]);var C=function(e){var t=document.scrollingElement;!S.current&&t.scrollTop>t.scrollHeight-window.innerHeight-250&&T()},T=function(){var e=Object(o.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S.current=!0,e.prev=1,e.next=4,p.get("/").then((function(e){return e.data}));case 4:t=e.sent,n=t.length?t.filter((function(e){var t=-1===y.current.indexOf(e.user._id);return t&&y.current.push(e.user._id),t})):[],f((function(e){return e+(t.length-n.length)})),c((function(e){return[].concat(Object(u.a)(e),Object(u.a)(n))})),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),window.localStorage.removeItem("tinderToken"),window.location.reload();case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(o.a)(i.a.mark((function e(t){var r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),r=Object(u.a)(n),a=function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.post("/pass",{id:r[t].user._id,s:r[t].s_number}).then((function(e){return e.data}));case 2:n=e.sent,console.log(n),200===n.status&&c((function(e){return e.filter((function(e){return e.user._id!==r[t].user._id}))})),t<r.length-1?a(t+1):T();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.length&&a(0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(o.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,p.post("/like",{id:t.user._id,s:t.s_number}).then((function(e){return e.data}));case 3:e.sent,g((function(e){return[].concat(Object(u.a)(e),[t.user._id])}));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),L=function(){var e=Object(o.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,p.post("/pass",{id:t.user._id,s:t.s_number}).then((function(e){return e.data}));case 3:e.sent,N((function(e){return[].concat(Object(u.a)(e),[t.user._id])}));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),R=function(e){var t=-1!==x.indexOf(e.user._id),n=-1!==_.indexOf(e.user._id);return Object(O.jsx)("button",{className:Object(m.a)("like",{disabled:t,hidden:n}),onClick:E.bind(null,e),disabled:t,children:t?"Liked":"Like"})},I=function(e){var t=-1!==x.indexOf(e.user._id),n=-1!==_.indexOf(e.user._id);return Object(O.jsx)("button",{className:Object(m.a)("dislike",{disabled:n,hidden:t}),onClick:L.bind(null,e),disabled:n,children:n?"Disliked":"Dislike"})};return Object(O.jsxs)("div",{className:"dashboard",children:[Object(O.jsx)("button",{onClick:D,className:"negate-all",children:"Negar Todos"}),Object(O.jsxs)("span",{className:"counter",children:[n.length,"/",d]}),Object(O.jsx)("div",{className:"list",children:n.map((function(e,t){return Object(O.jsx)("div",{className:"item","data-id":e.user._id,children:Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)(h,{list:e.user.photos}),Object(O.jsxs)("div",{className:"info",children:[Object(O.jsx)("h1",{children:e.user.name}),Object(O.jsx)("h3",{children:(n=e.user.birth_date,b()(n).format("YYYY"))}),Object(O.jsxs)("span",{className:"distance",children:[(1.609*e.distance_mi).toFixed(1).replace(".",",")," km"]}),Object(O.jsx)("p",{children:e.user.bio})]}),Object(O.jsxs)("div",{className:"actions",children:[I(e),R(e)]})]})},e.user._id);var n}))})]})},x=(n(48),function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(O.jsxs)("div",{className:"token-page",children:[Object(O.jsx)("input",{type:"text",name:"token",placeholder:"Token",onChange:function(e){return c(e.target.value)}}),Object(O.jsx)("button",{onClick:function(e){e.preventDefault(),n&&(window.localStorage.setItem("tinderToken",n),window.location.reload())},children:"Entrar"})]})}),g=(n(49),function(){return window.localStorage.getItem("tinderToken")?Object(O.jsx)(v,{}):Object(O.jsx)(x,{})}),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};a.a.render(Object(O.jsx)(g,{}),document.getElementById("root")),w()}},[[50,1,2]]]);
//# sourceMappingURL=main.65c1ecaa.chunk.js.map
(this["webpackJsonptinder-crawler"]=this["webpackJsonptinder-crawler"]||[]).push([[0],{57:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(29),s=n.n(c),a=n(11),i=n(18),o=n(4),u=n.n(o),l=n(5),d=n(7),j=n(6),f=n(9),b=n.n(f),p=b.a.create({baseURL:"http://cast.celiorodrigues.com:6380",transformRequest:[function(e,t){var n=window.localStorage.getItem("tinderToken");return n&&(t["tinder-token"]=n),e}].concat(Object(l.a)(Array.isArray(b.a.defaults.transformRequest)?b.a.defaults.transformRequest:[b.a.defaults.transformRequest]))}),O=n(15),h=n(13),m=n(14),v=n(19),x=n.n(v),k=(n(57),n(0)),g=function(e){var t=e.item,n=e.likes,c=e.dislikes,s=e.updateLikes,a=e.updateDislikes,i=Object(r.useState)(!1),o=Object(j.a)(i,2),f=o[0],b=o[1],v=Object(r.useState)(""),g=Object(j.a)(v,2),w=g[0],N=g[1],_=Object(r.useState)([]),y=Object(j.a)(_,2),S=y[0],C=y[1];Object(r.useEffect)((function(){var e=[];t.user.photos.length&&(N(t.user.photos[0].url),e.push.apply(e,Object(l.a)(t.user.photos))),t.instagram&&t.instagram.photos&&e.push.apply(e,Object(l.a)(t.instagram.photos.map((function(e){return{url:e.image}})))),C(e)}),[]);var D=function(){return x()().year()-x()(t.user.birth_date).year()},R=function(){var e=Object(d.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),n.stopPropagation(),e.next=4,p.post("/pass",{id:t.user._id,s:t.s_number});case 4:a(t.user._id);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(d.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),n.stopPropagation(),e.next=4,p.post("/like",{id:t.user._id,s:t.s_number});case 4:s(t.user._id);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(e,t){t.preventDefault(),N(e)},E=-1!==n.indexOf(t.user._id),F=-1!==c.indexOf(t.user._id);return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("div",{className:"profile",onClick:function(e){e.preventDefault(),b(!0),document.body.classList.add("lock")},children:[Object(k.jsx)("img",{alt:"",src:t.user.photos[0].url}),Object(k.jsxs)("div",{className:"info",children:[Object(k.jsxs)("span",{className:"name",children:[t.user.name,", ",D()]}),Object(k.jsxs)("div",{className:"actions",children:[Object(k.jsx)("button",{className:Object(m.a)("dislike",{hidden:E}),onClick:R,disabled:F,children:Object(k.jsx)(h.a,{icon:O.b})}),Object(k.jsx)("button",{className:Object(m.a)("like",{hidden:F}),onClick:L,disabled:E,children:Object(k.jsx)(h.a,{icon:O.a})})]})]})]}),f&&Object(k.jsxs)("div",{className:"full-profile",children:[Object(k.jsx)("div",{className:"preview",children:Object(k.jsx)("img",{alt:"",src:w})}),Object(k.jsxs)("div",{className:"info",children:[Object(k.jsx)("button",{className:"close",onClick:function(e){e.preventDefault(),b(!1),document.body.classList.remove("lock")},children:Object(k.jsx)(h.a,{icon:O.b})}),Object(k.jsxs)("h1",{children:[t.user.name,", ",D()]}),Object(k.jsx)("p",{children:t.user.bio}),Object(k.jsx)("div",{className:"gallery",children:S.map((function(e,t){return Object(k.jsx)("img",{alt:"",src:e.url,className:Object(m.a)({active:e.url===w}),onClick:T.bind(null,e.url)},t)}))})]})]})]})},w=(n(59),function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(0),a=Object(j.a)(s,2),i=a[0],o=a[1],f=Object(r.useState)([]),b=Object(j.a)(f,2),O=b[0],h=b[1],m=Object(r.useState)([]),v=Object(j.a)(m,2),x=v[0],w=v[1],N=Object(r.useRef)(!1),_=Object(r.useRef)([]),y=Object(r.useRef)(),S=Object(r.useRef)();Object(r.useEffect)((function(){return D(),window.addEventListener("scroll",C,!1),function(){return window.removeEventListener("scroll",C)}}),[]),Object(r.useEffect)((function(){N.current=!1}),[n]);var C=function(e){var t=document.scrollingElement;!N.current&&t.scrollTop>t.scrollHeight-window.innerHeight-250&&D()},D=function(){var e=Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N.current=!0,e.prev=1,e.next=4,p.get("/").then((function(e){return e.data}));case 4:t=e.sent,n=t.length?t.filter((function(e){var t=-1===_.current.indexOf(e.user._id);return t&&_.current.push(e.user._id),t})):[],o((function(e){return e+(t.length-n.length)})),n.length?c((function(e){return[].concat(Object(l.a)(e),Object(l.a)(n))})):D(),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),window.localStorage.removeItem("tinderToken"),window.location.reload();case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(d.a)(u.a.mark((function e(t){var r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),r=Object(l.a)(n),s=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c((function(e){return e.filter((function(e){return e.user._id!==r[t].user._id}))})),-1!==O.indexOf(r[t].user._id)){e.next=5;break}return e.next=4,p.post("/pass",{id:r[t].user._id,s:r[t].s_number}).then((function(e){return e.data}));case 4:t<r.length-1?s(t+1):D();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.length&&s(0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(e){h((function(t){return[].concat(Object(l.a)(t),[e])})),y.current.checked&&c((function(t){return t.filter((function(t){return t.user._id!==e}))}))},T=function(e){w((function(t){return[].concat(Object(l.a)(t),[e])})),S.current.checked&&c((function(t){return t.filter((function(t){return t.user._id!==e}))}))};return Object(k.jsxs)("div",{className:"dashboard",children:[Object(k.jsxs)("header",{children:[Object(k.jsx)("button",{onClick:R,className:"negate-all",children:"Negar Todos"}),Object(k.jsxs)("div",{className:"removerLikes",children:[Object(k.jsx)("input",{type:"checkbox",name:"remover-likes",id:"remover-likes",ref:y}),Object(k.jsx)("label",{htmlFor:"remover-likes",children:"Remover ap\xf3s o like"})]}),Object(k.jsxs)("div",{className:"removerDislikes",children:[Object(k.jsx)("input",{type:"checkbox",name:"remover-dislikes",id:"remover-dislikes",ref:S}),Object(k.jsx)("label",{htmlFor:"remover-dislikes",children:"Remover ap\xf3s o dislike"})]}),Object(k.jsxs)("span",{className:"counter",children:[n.length,"/",i]})]}),Object(k.jsx)("div",{className:"list",children:n.map((function(e){return Object(k.jsx)(g,{item:e,likes:O,dislikes:x,updateLikes:L,updateDislikes:T},e.user._id)}))})]})}),N=(n(60),function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(k.jsxs)("div",{className:"token-page",children:[Object(k.jsx)("input",{type:"text",name:"token",placeholder:"Token",onChange:function(e){return c(e.target.value)}}),Object(k.jsx)("button",{onClick:function(e){e.preventDefault(),n&&(window.localStorage.setItem("tinderToken",n),window.location.reload())},children:"Entrar"})]})}),_=(n(61),function(){return Object(r.useEffect)((function(){var e=window.location.search.replace("?","").split("&").reduce((function(e,t){var n=t.split("=");return Object(i.a)(Object(i.a)({},e),{},Object(a.a)({},n[0],n[1]))}),{});e.token&&(window.localStorage.setItem("tinderToken",e.token),window.location.href=window.location.origin+window.location.pathname)}),[]),window.localStorage.getItem("tinderToken")?Object(k.jsx)(w,{}):Object(k.jsx)(N,{})}),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};s.a.render(Object(k.jsx)(_,{}),document.getElementById("root")),y()}},[[62,1,2]]]);
//# sourceMappingURL=main.3e7314f7.chunk.js.map
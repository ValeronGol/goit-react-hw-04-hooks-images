(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{77:function(n,e,t){},78:function(n,e,t){"use strict";t.r(e);var a,r,i,o,c,s,p,d,u=t(0),l=t.n(u),b=t(10),x=t.n(b),g=t(7),h=t.n(g),f=t(15),j=t(12),m=t(6),O=t(9),v=t(24),w=t.n(v).a.create({baseURL:"https://pixabay.com/api/",params:{per_page:12,key:"22579903-23cd6d72a32c76f3810c95a65"}}),y=function(){var n=Object(j.a)(h.a.mark((function n(e,t){var a,r;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w("?q=".concat(e,"&page=").concat(t));case 2:return a=n.sent,r=a.data.hits,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),k=function(){return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},C=t(3),S=t(4),z=S.a.header(a||(a=Object(C.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),L=S.a.form(r||(r=Object(C.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),R=S.a.button(i||(i=Object(C.a)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),E=S.a.span(o||(o=Object(C.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),I=S.a.input(c||(c=Object(C.a)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &:placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),U=t(1),q=function(n){return Object(U.jsx)(z,{children:Object(U.jsxs)(L,{onSubmit:function(e){e.preventDefault(),""!==e.target[1].value.trim()?(n.onSubmit(e.target[1].value.toLowerCase()),e.target[1].value=""):O.b.error("\u0414\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0441\u043b\u043e\u0432\u043e")},children:[Object(U.jsx)(R,{type:"submit",children:Object(U.jsx)(E,{children:"Search"})}),Object(U.jsx)(I,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},M=S.a.ul(s||(s=Object(C.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),J=t(2),T=t.n(J),B=S.a.div(p||(p=Object(C.a)(["\n  border-radius: 2px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),\n    0 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),D=S.a.img(d||(d=Object(C.a)(["\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),F=function(n){var e=n.image,t=n.largeImageURL,a=n.tags;return Object(U.jsx)(B,{children:Object(U.jsx)(D,{src:e,alt:a,"data-photo":t})})};F.prototype={image:T.a.string.isRequired,largeImageURL:T.a.string.isRequired,tags:T.a.string.isRequired};var H,_,A,G=F,K=function(n){var e=n.images,t=n.onClick;return Object(U.jsx)(M,{onClick:t,children:e.map((function(n){var e=n.id,t=n.largeImageURL,a=n.webformatURL,r=n.tags;return Object(U.jsx)("li",{children:Object(U.jsx)(G,{image:a,tags:r,largeImageURL:t})},e)}))})},N=t(26),P=t.n(N),Q=function(){return Object(U.jsx)("div",{style:{margin:"auto"},children:Object(U.jsx)(P.a,{type:"Circles",color:"green",height:100,width:100,timeout:3e3})})},V=S.a.button(H||(H=Object(C.a)(["\n  padding: 8px 16px;\n  margin: auto;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  &:hover,\n  &:focus {\n    background-color: #303f9f;\n  }\n"]))),W=function(n){var e=n.onClick;return Object(U.jsx)(V,{type:"button",onClick:e,children:"Load more"})};W.prototype={onClick:T.a.func.isRequired};var X,Y,Z=S.a.div(_||(_=Object(C.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200; ;\n"]))),$=S.a.div(A||(A=Object(C.a)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"])));function nn(n){Object(u.useEffect)((function(){return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}));var e=function(e){"Escape"===e.code&&n.showModal()};return Object(U.jsx)(Z,{onClick:function(e){e.currentTarget===e.target&&n.showModal()},children:Object(U.jsx)($,{children:Object(U.jsx)("img",{src:n.props,alt:"photoInModal"})})})}var en=S.a.div(X||(X=Object(C.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 16px;\n  padding-bottom: 24px;\n"]))),tn=S.a.h3(Y||(Y=Object(C.a)(["\n  margin: auto;\n  font-size: large;\n  text-transform: uppercase;\n  color: #d44343;\n"])));t(76);function an(){var n=Object(u.useState)(""),e=Object(m.a)(n,2),t=e[0],a=e[1],r=Object(u.useState)([]),i=Object(m.a)(r,2),o=i[0],c=i[1],s=Object(u.useState)(1),p=Object(m.a)(s,2),d=p[0],l=p[1],b=Object(u.useState)("idle"),x=Object(m.a)(b,2),g=x[0],v=x[1],w=Object(u.useState)(!1),C=Object(m.a)(w,2),S=C[0],z=C[1],L=Object(u.useState)(""),R=Object(m.a)(L,2),E=R[0],I=R[1];Object(u.useEffect)((function(){"rejected"===g&&O.b.error("Oops, there is no images with that name")}),[g]),Object(u.useEffect)((function(){function n(){return(n=Object(j.a)(h.a.mark((function n(){var e;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,v("pending"),n.next=4,y(t,d);case 4:0===(e=n.sent).length?v("rejected"):(v("resolved"),c((function(n){return[].concat(Object(f.a)(n),Object(f.a)(e))})),k()),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),v("rejected");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}t&&function(){n.apply(this,arguments)}()}),[t,d]);var M=function(n){I(S?"":n.target.dataset.photo),z(!S)};return Object(U.jsxs)(en,{children:[Object(U.jsx)(q,{onSubmit:function(n){a(n),c([]),l(1)}}),"rejected"===g&&Object(U.jsx)(tn,{children:"\u041f\u043e \u0442\u0430\u043a\u043e\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u043e\u0439 \u0437\u0430\u043f\u0440\u043e\u0441!!!"}),o&&Object(U.jsx)(K,{images:o,onClick:M}),S&&Object(U.jsx)(nn,{showModal:M,props:E}),"pending"===g&&Object(U.jsx)(Q,{}),"resolved"===g&&Object(U.jsx)(W,{onClick:function(){l((function(n){return n+1}))}}),Object(U.jsx)(O.a,{autoClose:3e3})]})}t(77);x.a.render(Object(U.jsx)(l.a.StrictMode,{children:Object(U.jsx)(an,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.582f7d02.chunk.js.map
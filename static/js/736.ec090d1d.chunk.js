"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{736:function(A,Q,B){B.r(Q),B.d(Q,{default:function(){return p}});var E,n=B(791),e=B(689),r=B(834),t=B(198),a=B(521),g=B(168),c=B(444).ZP.li(E||(E=(0,g.Z)(["\n    img {\n        width: 200px;\n    }\n"]))),i=B(193),o=B(184);function p(){var A,Q=(0,r.b)(),B=Q.isLoading,E=Q.data,g=Q.error,p=Q.fetchData,I=(0,e.UO)().movieId;return(0,n.useEffect)((function(){I&&p(t.jf(I))}),[I,p]),(0,o.jsxs)("div",{children:[B&&(0,o.jsx)(a.Z,{}),g&&(0,o.jsxs)("div",{children:["Error: ",g.message]}),(0,o.jsx)("ul",{children:null===E||void 0===E||null===(A=E.cast)||void 0===A?void 0:A.map((function(A){return(0,o.jsxs)(c,{children:[(0,o.jsx)("h4",{children:A.name}),(0,o.jsx)("img",{src:A.profile_path?"https://image.tmdb.org/t/p/w200".concat(A.profile_path):i,alt:A.name}),(0,o.jsx)("p",{children:A.character})]},A.id)}))})]})}},834:function(A,Q,B){B.d(Q,{b:function(){return g}});var E=B(861),n=B(439),e=B(757),r=B.n(e),t=B(791),a=B(243),g=function(){var A=(0,t.useState)(!1),Q=(0,n.Z)(A,2),B=Q[0],e=Q[1],g=(0,t.useState)(null),c=(0,n.Z)(g,2),i=c[0],o=c[1],p=(0,t.useState)(""),I=(0,n.Z)(p,2),u=I[0],C=I[1],l=(0,t.useCallback)(function(){var A=(0,E.Z)(r().mark((function A(Q){var B;return r().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return e(!0),A.prev=1,A.next=4,(0,a.Z)(Q);case 4:B=A.sent,o(B.data),A.next=11;break;case 8:A.prev=8,A.t0=A.catch(1),C(A.t0);case 11:return A.prev=11,e(!1),A.finish(11);case 14:case"end":return A.stop()}}),A,null,[[1,8,11,14]])})));return function(Q){return A.apply(this,arguments)}}(),[]);return{isLoading:B,data:i,error:u,fetchData:l}}},198:function(A,Q,B){B.d(Q,{Cm:function(){return a},L:function(){return e},LP:function(){return n},jf:function(){return t},sO:function(){return r}});var E="8dee51c91a52c88890f609d5b0af0b1a",n=function(){return{url:"https://api.themoviedb.org/3/trending/movie/day",params:{api_key:E}}},e=function(A){var Q=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return{url:"https://api.themoviedb.org/3/search/movie",params:{api_key:E,language:"en-US",page:Q,query:A}}},r=function(A){return{url:"https://api.themoviedb.org/3/movie/".concat(A),params:{api_key:E,language:"en-US"}}},t=function(A){return{url:"https://api.themoviedb.org/3/movie/".concat(A,"/credits"),params:{api_key:E,language:"en-US"}}},a=function(A){return{url:"https://api.themoviedb.org/3/movie/".concat(A,"/reviews"),params:{api_key:E,language:"en-US",page:1}}}},193:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=736.ec090d1d.chunk.js.map
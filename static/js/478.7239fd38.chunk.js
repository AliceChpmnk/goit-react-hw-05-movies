"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[478],{254:function(e,n,t){t.d(n,{Z:function(){return m}});t(791);var r,a,i=t(521),u=t(689),o=t(168),c=t(87),s=t(444),l=(0,s.ZP)(c.OL)(r||(r=(0,o.Z)(["\n  \n"]))),v=t(184);function f(e){var n=e.name,t=e.id,r=(0,u.TH)();return(0,v.jsx)("li",{children:(0,v.jsx)(l,{to:"/movies/".concat(t),state:{from:r},children:n},t)})}var d=s.ZP.ul(a||(a=(0,o.Z)(["\n"])));function m(e){var n=e.movies,t=void 0===n?[]:n,r=e.isLoading,a=void 0!==r&&r,u=e.error,o=void 0===u?"":u;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(d,{children:(null===t||void 0===t?void 0:t.length)>0&&t.map((function(e){var n;return(0,v.jsx)(f,{id:e.id,name:null!==(n=e.name)&&void 0!==n?n:e.title},e.id)}))}),a&&(0,v.jsx)(i.Z,{}),o&&(0,v.jsxs)("div",{children:["Error: ",o.message]})]})}},834:function(e,n,t){t.d(n,{b:function(){return s}});var r=t(861),a=t(439),i=t(757),u=t.n(i),o=t(791),c=t(243),s=function(){var e=(0,o.useState)(!1),n=(0,a.Z)(e,2),t=n[0],i=n[1],s=(0,o.useState)(null),l=(0,a.Z)(s,2),v=l[0],f=l[1],d=(0,o.useState)(""),m=(0,a.Z)(d,2),p=m[0],h=m[1],g=(0,o.useCallback)(function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.prev=1,e.next=4,(0,c.Z)(n);case 4:t=e.sent,f(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),h(e.t0);case 11:return e.prev=11,i(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(n){return e.apply(this,arguments)}}(),[]);return{isLoading:t,data:v,error:p,fetchData:g}}},478:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r=t(439),a=t(791),i=t(87),u=t(834),o=t(198),c=t(254),s=t(184);function l(e){var n=e.onSubmit,t=(0,a.useState)(""),i=(0,r.Z)(t,2),u=i[0],o=i[1];return(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==u.trim()?(n(u),o("")):alert("Please enter the name of the movie")},children:[(0,s.jsx)("input",{type:"text",placeholder:"Search movies",value:u,onChange:function(e){o(e.currentTarget.value.toLowerCase())}}),(0,s.jsx)("button",{type:"submit",children:"Search"})]})}var v=function(){var e=(0,i.lr)(),n=(0,r.Z)(e,2),t=n[0],v=n[1],f=(0,u.b)(),d=f.isLoading,m=f.data,p=f.error,h=f.fetchData,g=t.get("query");(0,a.useEffect)((function(){g&&h(o.L(g))}),[g,h]);var b=null===m||void 0===m?void 0:m.results;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l,{onSubmit:function(e){v({query:e})}}),b&&(0,s.jsx)(c.Z,{error:p,isLoading:d,movies:b})]})}},198:function(e,n,t){t.d(n,{Cm:function(){return c},L:function(){return i},LP:function(){return a},jf:function(){return o},sO:function(){return u}});var r="8dee51c91a52c88890f609d5b0af0b1a",a=function(){return{url:"https://api.themoviedb.org/3/trending/movie/day",params:{api_key:r}}},i=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return{url:"https://api.themoviedb.org/3/search/movie",params:{api_key:r,language:"en-US",page:n,query:e}}},u=function(e){return{url:"https://api.themoviedb.org/3/movie/".concat(e),params:{api_key:r,language:"en-US"}}},o=function(e){return{url:"https://api.themoviedb.org/3/movie/".concat(e,"/credits"),params:{api_key:r,language:"en-US"}}},c=function(e){return{url:"https://api.themoviedb.org/3/movie/".concat(e,"/reviews"),params:{api_key:r,language:"en-US",page:1}}}}}]);
//# sourceMappingURL=478.7239fd38.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[475],{482:function(n,t,e){e.d(t,{Z:function(){return p}});var r,a=e(689),c=e(493),u=e(168),i=e(87),o=(0,e(444).ZP)(i.rU)(r||(r=(0,u.Z)(["\n  text-decoration: none;\n  color: #242424;\n  transition: color 250ms ease-in-out;\n  &:hover {\n    color: orangered;\n  }\n"]))),s=e(184);function p(n){var t=n.items,e=(0,a.TH)();return(0,s.jsx)("div",{children:(0,s.jsx)("ul",{children:t.map((function(n){var t,r,a,u,i;return(0,s.jsx)("li",{children:(0,s.jsx)(o,{to:"/movies/".concat(n.id),state:{from:e},children:(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{loading:"lazy",src:n.poster_path?"https://image.tmdb.org/t/p/original".concat(n.poster_path):c,alt:null!==(t=null!==(r=n.title)&&void 0!==r?r:n.name)&&void 0!==t?t:n.original_title,width:"200",height:"300"})}),(0,s.jsx)("p",{children:null!==(a=null!==(u=null!==(i=n.title)&&void 0!==i?i:n.name)&&void 0!==u?u:n.original_title)&&void 0!==a?a:"Title"})]})})},n.id)}))})})}},475:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r=e(861),a=e(439),c=e(757),u=e.n(c),i=e(791),o=e(409),s=e(482),p=e(184);function l(){var n=(0,i.useState)([]),t=(0,a.Z)(n,2),e=t[0],c=t[1];return(0,i.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.hR();case 3:return t=n.sent,c(t.results),n.abrupt("return");case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s.Z,{items:e})," "]})}},409:function(n,t,e){e.d(t,{Mu:function(){return l},fT:function(){return f},hR:function(){return o},rc:function(){return s},yJ:function(){return p}});var r=e(861),a=e(757),c=e.n(a),u=e(243),i="cc9b631238622852f6d169b666a44c3f";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/all/week?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},493:function(n,t,e){n.exports=e.p+"static/media/no-image-placeholder.629343fe3c769d03d1c0.jpg"}}]);
//# sourceMappingURL=475.445e4452.chunk.js.map
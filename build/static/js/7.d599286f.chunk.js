(this["webpackJsonpcubdefi-frontend"]=this["webpackJsonpcubdefi-frontend"]||[]).push([[7],{1085:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Te}));var r,c,a,i,u,s,o,b,j,d,f,l,O,p,m,h,x,v,g,w,k=n(49),y=n(0),C=n(3),S=n(32),H=n(849),B=n(236),z=n(1),N=n.n(z),E=n(6),F=n(31),U=n(64),R=n(865),M=n(41),D=n(5),L=n(4),K=n.n(L),Q=n(36),T=n(13),W=n(81),P=n(104),q=n(239),A=n(181),I=function(){var e=Object(y.useState)([]),t=Object(F.a)(e,2),n=t[0],r=t[1],c=Object(U.c)().account,a=Object(A.a)().fastRefresh;return Object(y.useEffect)((function(){var e=q.a.filter((function(e){return!e.isKingdom})),t=q.a.filter((function(e){return e.isKingdom}));c&&function(){var n=Object(E.a)(N.a.mark((function n(){var a,i,u,s,o,b;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=e.map((function(e){return{address:Object(T.n)(),name:"pendingCub",params:[e.pid,c]}})),n.next=3,Object(Q.a)(W,a);case 3:return i=n.sent,u=e.map((function(e,t){return Object(D.a)(Object(D.a)({},e),{},{balance:new K.a(i[t])})})),s=t.map((function(e){return{address:Object(T.k)(),name:"pendingCUB",params:[e.pid,c]}})),n.next=8,Object(Q.a)(P,s);case 8:o=n.sent,b=t.map((function(e,t){return Object(D.a)(Object(D.a)({},e),{},{balance:new K.a(o[t])})})),r([].concat(Object(M.a)(u),Object(M.a)(b)));case 11:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}),[c,a]),n},V=n(879),$=n(880),J=n(860),X=function(){var e=Object(y.useState)([]),t=Object(F.a)(e,2),n=t[0],r=t[1],c=Object(U.c)().account,a=Object(A.a)().fastRefresh;return Object(y.useEffect)((function(){var e=q.a.filter((function(e){return!e.isKingdom})),t=q.a.filter((function(e){return e.isKingdom}));c&&function(){var n=Object(E.a)(N.a.mark((function n(){var a,i,u,s;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=e.map((function(e){return{address:Object(T.n)(),name:"pendingCub",params:[e.pid,c]}})),n.next=3,Object(Q.a)(W,a);case 3:return i=n.sent,u=t.map((function(e){return{address:Object(T.k)(),name:"pendingCUB",params:[e.pid,c]}})),n.next=7,Object(Q.a)(P,u);case 7:s=n.sent,r([].concat(Object(M.a)(i),Object(M.a)(s)));case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}),[c,a]),n},Y=n(82),Z=n(46),G=n(853),_=n(854),ee=n(12),te=C.e.div(r||(r=Object(k.a)(["\n  margin-bottom: 24px;\n"]))),ne=function(){var e=Object(H.a)(),t=Object(U.c)().account,n=X().reduce((function(e,t){var n=new K.a(t);return n.eq(0)?e:e+n.div(Z.i).toNumber()}),0),r=Object(Y.g)(),c=new K.a(n).multipliedBy(r).toNumber();return t?Object(ee.jsxs)(te,{children:[Object(ee.jsx)(G.a,{value:n,lineHeight:"1.5"}),!r.eq(0)&&Object(ee.jsx)(_.a,{value:c})]}):Object(ee.jsx)(S.O,{color:"textDisabled",style:{lineHeight:"76px"},children:e(298,"Locked")})},re=n(863),ce=n(232),ae=function(){var e=Object(H.a)(),t=Object(re.a)(Object(T.g)()),n=Object(Y.g)(),r=new L.BigNumber(Object(ce.b)(t)).multipliedBy(n).toNumber();return Object(U.c)().account?Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsx)(G.a,{value:Object(ce.b)(t),decimals:4,fontSize:"24px",lineHeight:"36px"}),n.eq(0)?Object(ee.jsx)("br",{}):Object(ee.jsx)(_.a,{value:r})]}):Object(ee.jsx)(S.O,{color:"textDisabled",style:{lineHeight:"54px"},children:e(298,"Locked")})},ie=n(27),ue=C.e.div(c||(c=Object(k.a)(["\n  margin-bottom: 24px;\n"]))),se=function(e){var t=e.bnbDividends,n=Object(U.c)().account,r=Object(Y.a)("BNB-BUSD LP"),c=t&&t.amount?new K.a(t.amount).div(Z.i):ie.b,a=c?c.multipliedBy(r).toNumber():0;return n?Object(ee.jsxs)(ue,{children:[Object(ee.jsx)(G.a,{value:c.toNumber(),lineHeight:"1.5"}),!r.eq(0)&&Object(ee.jsx)(_.a,{value:a})]}):Object(ee.jsx)(S.O,{color:"textDisabled",style:{lineHeight:"76px"},children:"Locked"})},oe=Object(C.e)(S.l)(a||(a=Object(k.a)(["\n  background-image: url('/images/cub/cub-bg.png');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]))),be=C.e.div(i||(i=Object(k.a)(["\n  margin-bottom: 16px;\n"]))),je=C.e.img(u||(u=Object(k.a)(["\n  margin-bottom: 16px;\n"]))),de=C.e.div(s||(s=Object(k.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),fe=C.e.div(o||(o=Object(k.a)(["\n  margin-top: 24px;\n"]))),le=function(){var e=Object(y.useState)(!1),t=Object(F.a)(e,2),n=t[0],r=t[1],c=Object(y.useState)(!1),a=Object(F.a)(c,2),i=a[0],u=a[1],s=Object(U.c)().account,o=Object(H.a)(),b=I().filter((function(e){return e.balance.toNumber()>1e4})),j=Object(V.a)(),d=Object($.a)(j||{}).onClaim,f=j&&j.amount?j.amount:0,l=Object(R.a)(b.map((function(e){return{pid:e.pid,isKingdom:e.isKingdom}}))).onReward,O=Object(y.useCallback)(Object(E.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.prev=1,e.next=4,l();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,r(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[l]);return Object(ee.jsx)(oe,{children:Object(ee.jsxs)(S.m,{children:[Object(ee.jsx)(S.u,{size:"xl",mb:"24px",children:o(542,"Farms & Staking")}),Object(ee.jsx)(je,{src:"/images/cub/token.svg",alt:"cub logo",width:64,height:64}),Object(ee.jsxs)(S.t,{justifyContent:"space-between",children:[Object(ee.jsxs)("div",{children:[Object(ee.jsxs)(be,{children:[Object(ee.jsxs)(de,{children:[o(544,"CUB to Harvest"),":"]}),Object(ee.jsx)(ne,{})]}),Object(ee.jsxs)(be,{children:[Object(ee.jsxs)(de,{children:[o(546,"CUB in Wallet"),":"]}),Object(ee.jsx)(ae,{})]}),Object(ee.jsx)(fe,{children:s?Object(ee.jsx)(S.h,{id:"harvest-all",disabled:b.length<=0||n,onClick:O,width:"100%",children:n?o(548,"Collecting CUB"):o(532,"Harvest all (".concat(b.length,")"),{count:b.length})}):Object(ee.jsx)(J.a,{width:"100%"})})]}),Object(ee.jsxs)("div",{children:[Object(ee.jsxs)(be,{children:[Object(ee.jsxs)(de,{children:["BNB Dividends ",Object(ee.jsx)("br",{}),"for Staking CUB:"]}),Object(ee.jsx)(se,{bnbDividends:j})]}),Object(ee.jsx)(fe,{children:s?Object(ee.jsx)(S.h,{disabled:0===f||i,onClick:Object(E.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,d();case 3:u(!1);case 4:case"end":return e.stop()}}),e)}))),children:"Claim BNB"}):Object(ee.jsx)(J.a,{width:"100%"})})]})]})]})})},Oe=n(90),pe=Object(C.e)(S.l)(b||(b=Object(k.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),me=C.e.div(j||(j=Object(k.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),he=function(){var e=Object(H.a)(),t=Object(re.c)(),n=Object(re.b)(Object(T.g)()),r=Object(Y.g)(),c=t?t.minus(n):new Oe.a(0),a=Object(ce.b)(c),i=r.times(c);return Object(ee.jsx)(pe,{children:Object(ee.jsxs)(S.m,{children:[Object(ee.jsx)(S.u,{size:"xl",mb:"24px",children:e(534,"Cub Stats")}),Object(ee.jsxs)(me,{children:[Object(ee.jsx)(S.O,{fontSize:"14px",children:e(536,"Total CUB Supply")}),a&&Object(ee.jsx)(G.a,{fontSize:"14px",value:a,decimals:0})]}),Object(ee.jsxs)(me,{children:[Object(ee.jsx)(S.O,{fontSize:"14px",children:e(999,"Market Cap")}),Object(ee.jsx)(G.a,{fontSize:"14px",value:Object(ce.b)(i),decimals:0,prefix:"$"})]}),Object(ee.jsxs)(me,{children:[Object(ee.jsx)(S.O,{fontSize:"14px",children:e(538,"Total CUB Burned")}),Object(ee.jsx)(G.a,{fontSize:"14px",value:Object(ce.b)(n),decimals:0})]}),Object(ee.jsxs)(me,{children:[Object(ee.jsx)(S.O,{fontSize:"14px",children:e(540,"New CUB/block")}),Object(ee.jsx)(G.a,{fontSize:"14px",decimals:0,value:Z.h.toNumber()})]})]})})},xe=Object(C.e)(S.l)(d||(d=Object(k.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]))),ve=function(){var e=Object(H.a)(),t=Object(Y.j)();return Object(ee.jsx)(xe,{children:Object(ee.jsxs)(S.m,{children:[Object(ee.jsx)(S.u,{size:"lg",mb:"24px",children:e(762,"Total Value Locked (TVL)")}),t?Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsx)(S.u,{size:"xl",children:Object(ee.jsx)(G.a,{value:t.toNumber(),prefix:"$",decimals:2})}),Object(ee.jsx)(S.O,{color:"textSubtle",children:e(764,"Across all Farms and Dens")})]}):Object(ee.jsx)(S.L,{height:66})]})})},ge=n(1079),we=Object(C.e)(S.l)(f||(f=Object(k.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),ke=function(){var e=Object(H.a)();return Object(ee.jsx)(we,{children:Object(ee.jsxs)(S.m,{children:[Object(ee.jsx)(S.u,{size:"xl",mb:"24px",children:e(10003,"Announcements")}),Object(ee.jsx)(ge.a,{dataSource:{sourceType:"profile",screenName:"financeleo"},options:{height:"300",chrome:"noheader, nofooter",width:"400"}})]})})},ye=n(959),Ce=n.n(ye),Se=n(140),He=n(866),Be=Object(C.e)(S.l)(l||(l=Object(k.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),ze=Object(C.e)(S.u).attrs({size:"xl"})(O||(O=Object(k.a)(["\n  line-height: 44px;\n"]))),Ne=function(){var e=Object(H.a)(),t=Object(Y.d)().data,n=Object(Y.g)(),r=Object(y.useMemo)((function(){var e=t.filter((function(e){return"0X"!==e.multiplier})).map((function(e){if(e.lpTotalInQuoteToken){var t=e.quoteToken.busdPrice,r=new K.a(e.lpTotalInQuoteToken).times(t);return Object(He.a)(e.poolWeight,n,r)}return null})),r=Ce()(e);return null===r||void 0===r?void 0:r.toLocaleString("en-US",{maximumFractionDigits:2})}),[n,t]);return Object(ee.jsx)(Be,{children:Object(ee.jsxs)(S.m,{children:[Object(ee.jsx)(S.u,{color:"contrast",size:"lg",children:"Earn up to"}),Object(ee.jsx)(ze,{color:"#1993fb",children:r?"".concat(r,"% ").concat(e(736,"APR")):Object(ee.jsx)(S.L,{animation:"pulse",variant:"rect",height:"44px"})}),Object(ee.jsxs)(S.t,{justifyContent:"space-between",children:[Object(ee.jsx)(S.u,{color:"contrast",size:"lg",children:"in Farms"}),Object(ee.jsx)(Se.b,{exact:!0,activeClassName:"active",to:"/farms",id:"farm-apr-cta",children:Object(ee.jsx)(S.c,{mt:30,color:"primary"})})]})]})})},Ee=Object(C.e)(S.l)(p||(p=Object(k.a)(["\n  background: linear-gradient(#53dee9, #4576d9);\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Fe=Object(C.e)(S.u).attrs({size:"xl"})(m||(m=Object(k.a)(["\n  line-height: 44px;\n"]))),Ue=function(){return Object(ee.jsx)(Ee,{children:Object(ee.jsxs)(S.m,{children:[Object(ee.jsx)(S.u,{color:"contrast",size:"lg",children:"Instantly Swap"}),Object(ee.jsx)(Fe,{color:"invertedContrast",children:"ERC20 for BEP20"}),Object(ee.jsxs)(S.t,{justifyContent:"space-between",children:[Object(ee.jsx)(S.u,{color:"contrast",size:"lg",children:"on LeoBridge"}),Object(ee.jsx)(S.z,{href:"https://bridge.cubdefi.com/",children:Object(ee.jsx)(S.c,{mt:30,color:"contrast"})})]})]})})},Re=Object(C.e)(S.l)(h||(h=Object(k.a)(["\n  /*background: linear-gradient(#53dee9, #4576d9);*/\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Me=Object(C.e)(S.u).attrs({size:"xl"})(x||(x=Object(k.a)(["\n  line-height: 44px;\n"]))),De=function(){return Object(ee.jsx)(Re,{children:Object(ee.jsxs)(S.m,{children:[Object(ee.jsx)(Me,{color:"primary",children:"Kingdoms"}),Object(ee.jsx)(S.u,{color:"contrast",size:"lg",children:"CUB's First Composable Yield Farming Contract"}),Object(ee.jsxs)(S.t,{justifyContent:"space-between",children:[Object(ee.jsx)(Me,{color:"primary",children:"LIVE"}),Object(ee.jsx)(Se.b,{exact:!0,activeClassName:"active",to:"/kingdoms",children:Object(ee.jsx)(S.c,{mt:30,color:"primary"})})]})]})})},Le=C.e.div(v||(v=Object(k.a)(["\n  align-items: center;\n  background-image: url('/images/cub/wide.svg');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n  "," {\n    background-image: url('/images/cub/2logos.png') ,url('/images/cub/wide.svg');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Ke=Object(C.e)(S.e)(g||(g=Object(k.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),Qe=Object(C.e)(S.e)(w||(w=Object(k.a)(["\n  align-items: start;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 4;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),Te=function(){var e=Object(H.a)();return Object(ee.jsxs)(B.a,{children:[Object(ee.jsxs)(Le,{children:[Object(ee.jsx)(S.u,{as:"h1",size:"xl",mb:"24px",color:"secondary",children:e(576,"Cub Finance")}),Object(ee.jsx)(S.O,{children:e(578,"Cub Finance on Binance Smart Chain.")})]}),Object(ee.jsxs)("div",{children:[Object(ee.jsxs)(Ke,{children:[Object(ee.jsx)(le,{}),Object(ee.jsx)(ke,{})]}),Object(ee.jsxs)(Qe,{children:[Object(ee.jsx)(Ne,{}),Object(ee.jsx)(Ue,{}),Object(ee.jsx)(De,{})]}),Object(ee.jsxs)(Ke,{children:[Object(ee.jsx)(he,{}),Object(ee.jsx)(ve,{})]})]})]})}},849:function(e,t,n){"use strict";var r=n(0),c=n(92),a=n(238);t.a=function(){var e=Object(r.useContext)(a.a).translations;return function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(0===e.length)return n;var a=e.find((function(e){return e.data.stringId===t}));if(a){var i=a.data.text,u=i.includes("%");if(u){var s=i;return Object(c.isEmpty)(r)?n:(Object.keys(r).forEach((function(e){var t=new RegExp("%".concat(e,"%"),"g");s=s.replace(t,r[e])})),s)}return i}return n}}},850:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return s})),n.d(t,"f",(function(){return o})),n.d(t,"g",(function(){return b})),n.d(t,"e",(function(){return j})),n.d(t,"a",(function(){return d})),n.d(t,"h",(function(){return f}));var r=n(0),c=n(851),a=n(69),i=function(e){var t=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.j)(e,t)}),[e,t])},u=function(e){var t=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.a)(e,t)}),[e,t])},s=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.e)(e)}),[e])},o=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.n)(e)}),[e])},b=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.p)(e)}),[e])},j=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.m)(e)}),[e])},d=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.b)(e)}),[e])},f=function(e){var t=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.u)(e,t)}),[e,t])}},851:function(e,t,n){"use strict";var r=n(31),c=n(0),a=n(118),i=n.n(a),u=n(64),s=n(62);t.a=function(){var e=Object(u.c)().library,t=Object(c.useRef)(e),n=Object(c.useState)(e?new i.a(e):Object(s.b)()),a=Object(r.a)(n,2),o=a[0],b=a[1];return Object(c.useEffect)((function(){e!==t.current&&(b(e?new i.a(e):Object(s.b)()),t.current=e)}),[e]),o}},852:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"j",(function(){return d})),n.d(t,"e",(function(){return f})),n.d(t,"f",(function(){return l})),n.d(t,"k",(function(){return O})),n.d(t,"g",(function(){return p})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return x})),n.d(t,"h",(function(){return v})),n.d(t,"i",(function(){return g}));var r=n(1),c=n.n(r),a=n(6),i=n(4),u=n.n(i),s=n(46),o=n(873),b=n(27),j=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.methods.approve(n.options.address,o.a.constants.MaxUint256).send({from:r}));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.methods.deposit(n,new u.a(r).times(s.i).toString()).send({from:a}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),f=function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,i=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>2&&void 0!==i[2]?i[2]:18,a=i.length>3?i[3]:void 0,e.abrupt("return",t.methods.deposit(new u.a(n).times(b.a.pow(r)).toString()).send({from:a}).on("transactionHash",(function(e){return e.transactionHash})));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),l=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.methods.deposit().send({from:r,gas:2e5,value:new u.a(n).times(s.i).toString()}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),O=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.methods.withdraw(n,new u.a(r).times(s.i).toString()).send({from:a}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),p=function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,i=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=i.length>2&&void 0!==i[2]?i[2]:18,a=i.length>3?i[3]:void 0,"0x3B9B74f48E89Ebd8b45a53444327013a2308A9BC"!==t.options.address){e.next=4;break}return e.abrupt("return",t.methods.emergencyWithdraw().send({from:a}).on("transactionHash",(function(e){return e.transactionHash})));case 4:if("0xBb2B66a2c7C2fFFB06EA60BeaD69741b3f5BF831"!==t.options.address){e.next=6;break}return e.abrupt("return",t.methods.emergencyWithdraw().send({from:a}).on("transactionHash",(function(e){return e.transactionHash})));case 6:if("0x453a75908fb5a36d482d5f8fe88eca836f32ead5"!==t.options.address){e.next=8;break}return e.abrupt("return",t.methods.emergencyWithdraw().send({from:a}).on("transactionHash",(function(e){return e.transactionHash})));case 8:return e.abrupt("return",t.methods.withdraw(new u.a(n).times(b.a.pow(r)).toString()).send({from:a}).on("transactionHash",(function(e){return e.transactionHash})));case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.methods.emergencyWithdraw().send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),h=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=2;break}return e.abrupt("return",t.methods.withdraw(n,"0").send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 2:return e.abrupt("return",t.methods.deposit(n,"0").send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 3:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),x=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,a,i,u){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.methods.claim(r,a,i,u).send({from:n}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r,c,a,i){return e.apply(this,arguments)}}(),v=function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.methods.deposit("0").send({from:n}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.methods.deposit().send({from:n,value:b.b}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},853:function(e,t,n){"use strict";var r=n(0),c=n(861),a=n(32),i=n(12);t.a=function(e){var t=e.value,n=e.decimals,u=e.fontSize,s=void 0===u?"40px":u,o=e.lineHeight,b=void 0===o?"1":o,j=e.prefix,d=void 0===j?"":j,f=e.bold,l=void 0===f||f,O=e.color,p=void 0===O?"text":O,m=Object(c.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),h=m.countUp,x=m.update,v=Object(r.useRef)(x);return Object(r.useEffect)((function(){v.current(t)}),[t,v]),Object(i.jsxs)(a.O,{bold:l,fontSize:s,style:{lineHeight:b},color:p,children:[d,h]})}},854:function(e,t,n){"use strict";var r=n(5),c=(n(0),n(853)),a=n(12);t.a=function(e){return Object(a.jsx)(c.a,Object(r.a)({fontSize:"16px",lineHeight:"1.5",color:"textSubtle",prefix:"~$",bold:!1,decimals:2},e))}},860:function(e,t,n){"use strict";var r=n(5),c=(n(0),n(32)),a=n(145),i=n(849),u=n(12);t.a=function(e){var t=Object(i.a)(),n=Object(a.a)(),s=n.login,o=n.logout,b=Object(c.Z)(s,o).onPresentConnectModal;return Object(u.jsx)(c.h,Object(r.a)(Object(r.a)({onClick:b},e),{},{children:t(292,"Unlock Wallet")}))}},863:function(e,t,n){"use strict";n.d(t,"c",(function(){return O})),n.d(t,"b",(function(){return p}));var r=n(1),c=n.n(r),a=n(6),i=n(31),u=n(0),s=n(4),o=n.n(s),b=n(64),j=n(69),d=n(27),f=n(851),l=n(181),O=function(){var e=Object(l.a)().slowRefresh,t=Object(u.useState)(),n=Object(i.a)(t,2),r=n[0],s=n[1];return Object(u.useEffect)((function(){function e(){return(e=Object(a.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(j.e)(),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,s(new o.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),r},p=function(e){var t=Object(u.useState)(d.b),n=Object(i.a)(t,2),r=n[0],s=n[1],b=Object(l.a)().slowRefresh,O=Object(f.a)();return Object(u.useEffect)((function(){(function(){var t=Object(a.a)(c.a.mark((function t(){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(j.a)(e,O),t.next=3,n.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:r=t.sent,s(new o.a(r));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[O,e,b]),r};t.a=function(e){var t=Object(u.useState)(d.b),n=Object(i.a)(t,2),r=n[0],s=n[1],O=Object(b.c)().account,p=Object(f.a)(),m=Object(l.a)().fastRefresh;return Object(u.useEffect)((function(){O&&function(){var t=Object(a.a)(c.a.mark((function t(){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(j.a)(e,p),t.next=3,n.methods.balanceOf(O).call();case 3:r=t.sent,s(new o.a(r));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[O,e,p,m]),r}},865:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return l}));var r=n(41),c=n(1),a=n.n(c),i=n(6),u=n(0),s=n(64),o=n(59),b=n(141),j=n(852),d=n(850),f=function(e,t){var n=Object(o.b)(),r=Object(s.c)().account,c=Object(d.g)(),f=Object(d.e)();return{onReward:Object(u.useCallback)(Object(i.a)(a.a.mark((function i(){var u;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(j.c)(t?f:c,e,r,t);case 2:return u=a.sent,n(Object(b.a)(r)),a.abrupt("return",u);case 5:case"end":return a.stop()}}),i)}))),[r,n,e,c,f,t])}},l=function(e){var t=Object(s.c)().account,n=Object(d.g)(),c=Object(d.e)();return{onReward:Object(u.useCallback)(Object(i.a)(a.a.mark((function i(){var u;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return u=e.reduce((function(e,a){return a.isKingdom?[].concat(Object(r.a)(e),[Object(j.c)(c,a.pid,t,a.isKingdom)]):[].concat(Object(r.a)(e),[Object(j.c)(n,a.pid,t,a.isKingdom)])}),[]),a.abrupt("return",Promise.all(u));case 2:case"end":return a.stop()}}),i)}))),[t,e,n,c])}}},866:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u}));var r=n(4),c=n.n(r),a=n(46),i=function(e,t,n,r){var i=new c.a(t).times(r).times(a.f),u=new c.a(e).times(n),s=i.div(u).times(100);return s.isNaN()||!s.isFinite()?null:s.toNumber()},u=function(e,t,n,r,i){if(r){var u=a.j.times(e);"Bakery"===i?u=a.b.times(e):"Belt"===i&&(u=a.e.times(e));var s=u.times(t).div(n).times(100);return s.isNaN()||!s.isFinite()?null:s.toNumber()}var o=a.h.times(a.f).times(e),b=n.toNumber()?n:new c.a(0),j=o.times(t).div(b).times(100);return j.isNaN()||!j.isFinite()?null:j.toNumber()}},879:function(e,t,n){"use strict";var r=n(1),c=n.n(r),a=n(6),i=n(31),u=n(0),s=n(64),o=n(185),b=n.n(o),j=n(181);t.a=function(){var e=Object(u.useState)(),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(s.c)().account,d=Object(j.a)().fastRefresh;return Object(u.useEffect)((function(){o&&function(){var e=Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://bnb.fbslo.net/?address=".concat(o),{timeout:7e3}).then((function(e){return e.data})).catch((function(){return{error:!0}}));case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[o,d]),n}},880:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(1),c=n.n(r),a=n(6),i=n(0),u=n(64),s=n(59),o=n(141),b=n(852),j=n(850),d=function(e){var t=Object(s.b)(),n=Object(u.c)().account,r=Object(j.a)(),d=e.user,f=void 0===d?"":d,l=e.amount,O=void 0===l?"":l,p=e.nonce,m=void 0===p?"":p,h=e.signature,x=void 0===h?"":h;return{onClaim:Object(i.useCallback)(Object(a.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.b)(r,n,f,O,m,x);case 2:return a=e.sent,t(Object(o.a)(n)),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)}))),[t,n,f,O,m,x,r])}}}}]);
//# sourceMappingURL=7.d599286f.chunk.js.map
(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],{16:function(n,e,t){n.exports=t.p+"static/media/eye.62517b9b.svg"},24:function(n,e,t){n.exports=t.p+"static/media/search.5437e521.svg"},25:function(n,e,t){n.exports=t.p+"static/media/check.e9716c46.svg"},26:function(n,e,t){n.exports=t.p+"static/media/dark.023a0a49.svg"},27:function(n,e,t){n.exports=t.p+"static/media/light.e738a8e1.svg"},28:function(n,e,t){n.exports=t.p+"static/media/sortblack.2dc3c8ec.svg"},29:function(n,e,t){n.exports=t.p+"static/media/sortwhite.8eb12b8c.svg"},30:function(n,e,t){n.exports=t.p+"static/media/user.b49ba77f.svg"},48:function(n,e,t){n.exports=t(94)},53:function(n,e,t){},87:function(n,e,t){var r={"./check.svg":25,"./dark.svg":26,"./eye.svg":16,"./home.svg":88,"./light.svg":27,"./search.svg":24,"./signin.svg":89,"./signout.svg":90,"./signup.svg":91,"./sortblack.svg":28,"./sortwhite.svg":29,"./user.svg":30,"./watch.svg":92};function a(n){var e=o(n);return t(e)}function o(n){if(!t.o(r,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return r[n]}a.keys=function(){return Object.keys(r)},a.resolve=o,n.exports=a,a.id=87},88:function(n,e,t){n.exports=t.p+"static/media/home.70124145.svg"},89:function(n,e,t){n.exports=t.p+"static/media/signin.440a3bfa.svg"},90:function(n,e,t){n.exports=t.p+"static/media/signout.70012351.svg"},91:function(n,e,t){n.exports=t.p+"static/media/signup.fbeb90ef.svg"},92:function(n,e,t){n.exports=t.p+"static/media/watch.4540d5f0.svg"},94:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(40),c=t.n(o),i=(t(53),t(31)),u=t(6),l=t(8),s=t.n(l),m=t(12),f=t(1),p=t(2),d={light:{colors:{primary:"#EDEDED",secondary:"#FCFCFC",syntax:"#121212",altSyntax:"#4A4A4A"}},dark:{colors:{primary:"#202627",secondary:"#2C3335",syntax:"#FFFFFF",altSyntax:"#858585"}},colors:{accent:"#FFCF72",accentAlt:"#C29A4C",delete:"#D71D1D",add:"#33F86A"},fonts:{xs:"14px",s:"17px",m:"23px",l:"26px",xl:"33px"},properties:{radiusSmall:"5px",radiusBig:"10px"}},h=t(4),b=t(32),g=t(24),v=t.n(g),x=t(14),O=t(25),j=t.n(O),E=t(21);t(58),t(62);E.initializeApp({apiKey:"AIzaSyDVLEcWQ2Cn7X4G3Dl3Gh3UFxuDz5PjfDQ",authDomain:"movies-app-65278.firebaseapp.com",databaseURL:"https://movies-app-65278.firebaseio.com",projectId:"movies-app-65278",storageBucket:"movies-app-65278.appspot.com",messagingSenderId:"54560943229",appId:"1:54560943229:web:2d420b2c986dc85024d514"});var y=E.auth,w=E.firestore(),T=Object(r.createContext)(),S=function(n){var e=localStorage.getItem("theme")?localStorage.getItem("theme"):"light",t=Object(r.useState)(e),o=Object(h.a)(t,2),c=o[0],i=o[1];return a.a.createElement(T.Provider,{value:{currentTheme:c,setCurrentTheme:i}},n.children)};function k(){var n=Object(f.a)(["\n    color: red;\n    text-align: center;\n"]);return k=function(){return n},n}function C(){var n=Object(f.a)(["\n    color: ",";\n    margin: 0px 0px;\n"]);return C=function(){return n},n}function z(){var n=Object(f.a)(["\n    color: ",";\n    margin: 0px;\n    margin-right: 30px;\n"]);return z=function(){return n},n}function F(){var n=Object(f.a)(["\n    display: flex;\n    justify-content: left;\n"]);return F=function(){return n},n}function A(){var n=Object(f.a)(["\n    color: ",";\n    font-size: ",";\n    margin: 0;\n"]);return A=function(){return n},n}function D(){var n=Object(f.a)(["\n    display: ",";\n    padding-left: 2px;\n    padding-top: 2px;\n    height: 23px;\n"]);return D=function(){return n},n}function I(){var n=Object(f.a)(["\n    font-weight: 700;\n    display: ",";\n    height: 25px;\n    color:  ",";\n    margin: 0;\n    margin-top: 5px;\n    font-size: ",";\n"]);return I=function(){return n},n}function L(){var n=Object(f.a)(["\n    font-weight: 700;\n    display: ",";\n    height: 30px;\n    border: 0;\n    background-color: ",";\n    color:  ",";\n    transition: all .3s ease-in-out;\n    outline: none;\n\n    &:hover {\n        background-color: ",";\n    }\n"]);return L=function(){return n},n}function P(){var n=Object(f.a)(["\n     color: ",";\n"]);return P=function(){return n},n}function R(){var n=Object(f.a)(["\n    color: ",";\n    margin: 15px 0px;\n    font-size: ",";\n    border: 1px solid ",";\n    width: 70px;\n    text-align: center;\n    padding: 5px;\n    font-weight: 700;\n    border-radius: ",";\n"]);return R=function(){return n},n}function W(){var n=Object(f.a)(["\n    display: block;\n    margin: 5px 10px 5px 5px;\n    height: 90px;\n\n    @media (min-width: 700px) {\n        height: 400px;\n    }\n"]);return W=function(){return n},n}function _(){var n=Object(f.a)(["\n    color: ",";\n    flex: 3;\n    margin: 0;\n    font-weight: 700;\n    font-size: ",";\n"]);return _=function(){return n},n}function N(){var n=Object(f.a)(["\n    display: flex;\n"]);return N=function(){return n},n}function U(){var n=Object(f.a)(["\n    height: 100%;\n    width: 100%;\n"]);return U=function(){return n},n}function G(){var n=Object(f.a)(["\n    display: ",";\n    width: 90%;\n    min-height: 100px;\n    background-color: ",";\n    padding: 10px;\n    margin-top: 20px;\n    border-radius: ",";\n\n    @media (min-width: 700px) {\n        width: 70%;\n    }\n"]);return G=function(){return n},n}var M=p.b.div(G(),(function(n){return n.isEmpty?"none":"flex"}),(function(n){var e=n.currentTheme;return d[e].colors.secondary}),d.properties.radiusSmall),B=p.b.div(U()),H=p.b.div(N()),Y=p.b.p(_(),d.colors.accent,d.fonts.m),J=p.b.img(W()),Q=p.b.p(R(),d.colors.accent,d.fonts.s,d.colors.accent,d.properties.radiusSmall),V=p.b.p(P(),(function(n){var e=n.currentTheme;return d[e].colors.syntax})),K=p.b.button(L(),(function(n){return n.isOnList?"none":"block"}),(function(n){var e=n.currentTheme;return d[e].colors.secondary}),d.colors.add,(function(n){var e=n.currentTheme;return d[e].colors.primary})),X=p.b.p(I(),(function(n){return n.isOnList?"block":"none"}),d.colors.add,d.fonts.xs),Z=p.b.img(D(),(function(n){return n.isOnList?"block":"none"})),$=p.b.p(A(),(function(n){var e=n.currentTheme;return d[e].colors.altSyntax}),d.fonts.s),q=p.b.div(F()),nn=p.b.p(z(),(function(n){var e=n.currentTheme;return d[e].colors.altSyntax})),en=p.b.p(C(),(function(n){var e=n.currentTheme;return d[e].colors.altSyntax})),tn=p.b.p(k()),rn=function(n){var e=n.movie,t=n.isSignedIn,o=n.uid,c=Object(r.useContext)(T).currentTheme,i=Object(r.useState)(!1),u=Object(h.a)(i,2),l=u[0],s=u[1],m=Object(r.useState)(!1),f=Object(h.a)(m,2),p=f[0],d=f[1],b=Object(r.useState)(""),g=Object(h.a)(b,2),v=g[0],O=g[1],E=e.title,y=e.year,S=e.description,k=e.duration,C=e.genres,z=e.rate;return Object(r.useEffect)((function(){E||s(!0);var n=w.collection("movies").onSnapshot((function(n){if(n.size){var e=[];if(n.forEach((function(n){n.data()[o]&&e.push(n.data()[o].title)})),e.length){var t=e.includes(E);d(t)}}}));return function(){n()}}),[E,o]),a.a.createElement(a.a.Fragment,null,a.a.createElement(tn,null,v),a.a.createElement(M,{isEmpty:l,currentTheme:c},a.a.createElement(J,{src:e.img}),a.a.createElement(B,null,a.a.createElement(H,null,a.a.createElement(Y,null,E),a.a.createElement(K,{currentTheme:c,isOnList:p,onClick:function(){return function(n,e,t,r){if(t){var a=Object(x.a)({},e,{title:n.title,year:n.year,duration:n.duration,rate:n.rate,genres:n.genres,description:n.description,addedAt:Date.now()});w.collection("movies").add(a)}else r("You must be logged in to do that")}(e,o,t,O)}},"ADD TO LIST"),a.a.createElement(X,{isOnList:p},"ADDED"),a.a.createElement(Z,{src:j.a,isOnList:p})),a.a.createElement($,{currentTheme:c},y),a.a.createElement(Q,null,z),a.a.createElement(q,null,a.a.createElement(nn,{currentTheme:c},k),a.a.createElement(en,{currentTheme:c},C)),a.a.createElement(V,{currentTheme:c},S))))},an=(t(39),t(18)),on=t.n(an);function cn(){var n=Object(f.a)(["\n    width: 100%;\n    color: ",";\n    text-align: center;\n    font-size: ",";\n    margin-top: 100px;\n"]);return cn=function(){return n},n}function un(){var n=Object(f.a)(["\n    height: 45px;\n"]);return un=function(){return n},n}function ln(){var n=Object(f.a)(["\n    width: 25px;\n"]);return ln=function(){return n},n}function sn(){var n=Object(f.a)(["\n    height: 100%;\n    width: 70px;\n    position: absolute;\n    border: 0px;\n    right: 0;\n    background-color: ",";\n    border-radius: ",";\n    transition: all .3s ease-in-out;\n\n    &:hover {\n        background: ",";\n    }\n\n"]);return sn=function(){return n},n}function mn(){var n=Object(f.a)(['\n    height: 100%;\n    border: 0px;\n    width: 100%;\n    background-color: "#FFFFFF";\n    border-radius: ',";\n    outline: none;\n    padding: 10px;\n    font-size: 20px;\n\n    &:focus {\n        border: 2px solid #1394eb;\n    }\n"]);return mn=function(){return n},n}function fn(){var n=Object(f.a)(["\n    width: 80%;\n    height: 45px;\n    position: relative;\n\n    @media (min-width: 1000px) {\n        width: 40%;\n    }\n"]);return fn=function(){return n},n}var pn=p.b.div(fn()),dn=p.b.input(mn(),d.properties.radiusBig),hn=p.b.button(sn(),d.colors.accent,d.properties.radiusBig,d.colors.accentAlt),bn=p.b.img(ln()),gn=p.b.form(un()),vn=p.b.div(cn(),(function(n){var e=n.currentTheme;return d[e].colors.syntax}),d.fonts.l),xn=function(){var n=Object(m.a)(s.a.mark((function n(e,t,r,a,o,c){var i;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c("loading"),e.preventDefault(),n.next=4,t.getDataFromApi(r);case 4:return"True"===(i=n.sent).Response?i.Ratings.length>0?o({title:i.Title,year:i.Year,rate:i.Ratings[0].Value,duration:i.Runtime,genres:i.Genre,description:i.Plot,error:!1,img:i.Poster}):o({title:i.Title,year:i.Year,rate:"?",duration:i.Runtime,genres:i.Genre,description:i.Plot,img:i.Poster,error:!1}):o(Object(b.a)(Object(b.a)({},a),{},{error:!0})),i.Title?c("done"):c("empty"),n.abrupt("return",{});case 8:case"end":return n.stop()}}),n)})));return function(e,t,r,a,o,c){return n.apply(this,arguments)}}(),On=function(n){y().onAuthStateChanged((function(n){n&&n.uid&&(s(n.uid),c(!0))}));var e=Object(r.useState)(!1),t=Object(h.a)(e,2),o=t[0],c=t[1],i=Object(r.useState)(""),u=Object(h.a)(i,2),l=u[0],s=u[1],m=Object(r.useContext)(T).currentTheme,f=Object(r.useState)(""),p=Object(h.a)(f,2),b=p[0],g=p[1],x=Object(r.useState)({title:"",year:"",rate:"",duration:"",genres:"",description:"",error:!1}),O=Object(h.a)(x,2),j=O[0],E=O[1],w=Object(r.useState)("ready"),S=Object(h.a)(w,2),k=S[0],C=S[1],z="";return z="empty"===k?a.a.createElement(vn,{currentTheme:m}," Nothing found :( "):"loading"===k?a.a.createElement(on.a,{type:"TailSpin",color:d.colors.accent,height:200,width:100,timeout:3e3}):a.a.createElement(rn,{uid:l,isSignedIn:o,movie:j}),a.a.createElement(a.a.Fragment,null,a.a.createElement(pn,null,a.a.createElement(gn,{onSubmit:function(e){return xn(e,n,b,j,E,C)}},a.a.createElement(dn,{currentTheme:m,value:b,onChange:function(n){return function(n,e){e(n.target.value)}(n,g)}}),a.a.createElement(hn,null,a.a.createElement(bn,{src:v.a})))),z)};function jn(){var n=Object(f.a)(["\n    height: 100%;\n    margin: 0;\n"]);return jn=function(){return n},n}function En(){var n=Object(f.a)(["\n    height: 26px;\n    margin: 0px 20px;\n"]);return En=function(){return n},n}function yn(){var n=Object(f.a)(["\n    text-decoration: none;\n    width: 100%;\n    height: 57px;\n    color: ",";\n    font-size: ",";\n    line-height: 57px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    background-color: ",";\n    font-weight: ",";\n\n    &:first-child {\n        margin-top: 80px;\n    }\n\n    &:hover {\n        background-color: ",";\n    }\n"]);return yn=function(){return n},n}var wn=p.b.a(yn(),(function(n){var e=n.currentTheme;return d[e].colors.syntax}),d.fonts.s,(function(n){var e=n.current,t=n.name,r=n.currentTheme;return e===t?"".concat(d[r].colors.primary):"none"}),(function(n){return n.current===n.name?"600":"500"}),(function(n){var e=n.currentTheme;return d[e].colors.primary})),Tn=p.b.img(En()),Sn=p.b.p(jn()),kn=function(n){var e=n.img,o=n.name,c=n.current,i=n.path,u=n.signOut,l=Object(r.useContext)(T).currentTheme;return a.a.createElement(wn,{onClick:u?function(){return y().signOut().then((function(){return window.location.href="".concat($t,"/")}))}:null,currentTheme:l,href:i,current:c,name:o},a.a.createElement(Tn,{src:t(87)("./".concat(e))}),a.a.createElement(Sn,null,o))},Cn=t(27),zn=t.n(Cn),Fn=t(26),An=t.n(Fn),Dn=t(30),In=t.n(Dn);function Ln(){var n=Object(f.a)(["\n    color: ",";\n    font-size: ",";\n    font-weight: 500;\n    width: 60%;\n"]);return Ln=function(){return n},n}function Pn(){var n=Object(f.a)(["\n    margin: 0px 20px;\n"]);return Pn=function(){return n},n}function Rn(){var n=Object(f.a)(["\n    width: 100%;\n    height: 50px;\n    display: flex;\n"]);return Rn=function(){return n},n}function Wn(){var n=Object(f.a)(["\n    width: 100%;\n    height: 1px;\n    background: ",";\n    margin: 15px 0px;\n"]);return Wn=function(){return n},n}function _n(){var n=Object(f.a)(["\n    color: ",";\n    position: absolute;\n    bottom: 0;\n    font-weight: 700;\n    left: 0;\n    width: 90%;\n    text-align: center;\n    height: 60px;\n    cursor: pointer;\n    line-height: 60px;\n"]);return _n=function(){return n},n}function Nn(){var n=Object(f.a)(["\n    display: inline-block;\n    margin-left: 10px;\n    position: absolute;\n    top: 18px;\n"]);return Nn=function(){return n},n}function Un(){var n=Object(f.a)(["\n    width: 36px;\n    height: 3px;\n    margin-top: 15px;\n    background-color: ",";\n    position: absolute;\n\n    &::before, &::after {\n        content: '';\n        display: block;\n        width: 36px;\n        height: 3px;\n        background-color: ",";\n        position: absolute;\n    }\n\n    &::before {\n        margin-top: 7px;\n    }\n\n    &::after {\n        margin-top: 14px;\n    }\n"]);return Un=function(){return n},n}function Gn(){var n=Object(f.a)(["\n    width: 36px;\n    height: 50px;\n    position: relative;\n    margin: 0px 20px 0px 10px;\n"]);return Gn=function(){return n},n}function Mn(){var n=Object(f.a)(["\n    color: ",";\n    font-size: ",";\n    font-weight: 700;\n    height: 50px;\n    margin: 0;\n    line-height: 50px;\n"]);return Mn=function(){return n},n}function Bn(){var n=Object(f.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    height: 50px;\n    width: 100%;\n    background-color: ",";\n"]);return Bn=function(){return n},n}function Hn(){var n=Object(f.a)(["\n    display: block;\n    position: fixed;\n    top: 0;\n    left: ",";\n    width: 100%;\n    height: 100%;\n    z-index: 99;\n    transition: all .2s ease-in-out;\n"]);return Hn=function(){return n},n}function Yn(){var n=Object(f.a)(["\n    background-color: ",";\n    width: 60%;\n    height: 100%;\n    position: fixed;\n    left: ",";\n    top: 0;\n    z-index: 100;\n    transition: all .4s ease-out;\n\n    @media (min-width: 700px) {\n        width: 250px;\n    }\n"]);return Yn=function(){return n},n}var Jn=p.b.div(Yn(),(function(n){var e=n.currentTheme;return d[e].colors.secondary}),(function(n){return n.isOpen?"0":"-100%"})),Qn=p.b.div(Hn(),(function(n){return n.isOpen?"0":"-100%"})),Vn=p.b.div(Bn(),(function(n){var e=n.currentTheme;return d[e].colors.primary})),Kn=p.b.p(Mn(),(function(n){var e=n.currentTheme;return d[e].colors.syntax}),d.fonts.m),Xn=p.b.div(Gn()),Zn=p.b.div(Un(),(function(n){var e=n.currentTheme;return d[e].colors.syntax}),(function(n){var e=n.currentTheme;return d[e].colors.syntax})),$n=p.b.img(Nn()),qn=p.b.div(_n(),(function(n){var e=n.currentTheme;return d[e].colors.syntax})),ne=p.b.div(Wn(),(function(n){var e=n.currentTheme;return d[e].colors.altSyntax})),ee=p.b.div(Rn()),te=p.b.img(Pn()),re=p.b.p(Ln(),(function(n){var e=n.currentTheme;return d[e].colors.syntax}),d.fonts.s),ae=function(n){var e=n.current,t=Object(r.useContext)(T),o=t.currentTheme,c=t.setCurrentTheme,i=Object(r.useState)(!1),u=Object(h.a)(i,2),l=u[0],s=u[1],m=Object(r.useState)(!1),f=Object(h.a)(m,2),p=f[0],d=f[1],b=Object(r.useState)(""),g=Object(h.a)(b,2),v=g[0],x=g[1];return y().onAuthStateChanged((function(n){n?(x(n.displayName),localStorage.setItem("uid",n.uid),n.uid&&d(!0)):localStorage.setItem("uid",null)})),a.a.createElement(Vn,{currentTheme:o},a.a.createElement(Xn,{onClick:function(){return s(!l)}},a.a.createElement(Zn,{currentTheme:o})),a.a.createElement(Kn,{currentTheme:o},e),a.a.createElement(Jn,{currentTheme:o,isOpen:l},a.a.createElement(kn,{name:"Home",img:"home.svg",path:"".concat($t,"/"),current:e}),p&&a.a.createElement(kn,{name:"Watch list",img:"watch.svg",path:"".concat($t,"/#/watchlist/"),current:e}),a.a.createElement(ne,{currentTheme:o}),p?a.a.createElement(a.a.Fragment,null,a.a.createElement(ee,null,a.a.createElement(te,{src:In.a}),a.a.createElement(re,{currentTheme:o},v)),a.a.createElement(kn,{name:"Sign out",img:"signout.svg",path:"".concat($t,"/"),current:e,signOut:!0})):a.a.createElement(a.a.Fragment,null,a.a.createElement(kn,{name:"Sign in",img:"signin.svg",path:"".concat($t,"/#/signin/"),current:e}),a.a.createElement(kn,{name:"Sign up",img:"signup.svg",path:"".concat($t,"/#/signup/"),current:e})),a.a.createElement(qn,{onClick:function(){return function(n,e){var t="light"===n?"dark":"light";e(t),localStorage.setItem("theme",t)}(o,c)},currentTheme:o},"Toggle theme","light"===o?a.a.createElement($n,{src:An.a}):a.a.createElement($n,{src:zn.a}))),a.a.createElement(Qn,{onClick:function(){return s(!l)},isOpen:l}))};function oe(){var n=Object(f.a)(["\n   font-size: ",";\n   color: ",";\n   text-align: center;\n"]);return oe=function(){return n},n}function ce(){var n=Object(f.a)(["\n    display: flex;\n    min-height: 100vh;\n    flex-direction: column;\n    align-items: center;\n"]);return ce=function(){return n},n}var ie=p.b.div(ce()),ue=p.b.p(oe(),d.fonts.xl,(function(n){var e=n.currentTheme;return d[e].colors.syntax})),le=function(){var n=Object(m.a)(s.a.mark((function n(e){var t,r,a;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e,n.next=3,fetch("".concat("https://www.omdbapi.com/?apikey=").concat("93b12f18","&?&t=").concat(t));case 3:return r=n.sent,n.next=6,r.json();case 6:return a=n.sent,n.abrupt("return",a);case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),se=function(){var n=Object(r.useContext)(T).currentTheme;return a.a.createElement(ie,null,a.a.createElement(ae,{current:"Home"}),a.a.createElement(ue,{currentTheme:n},"Start searching"),a.a.createElement(On,{getDataFromApi:le}))};function me(){var n=Object(f.a)(["\n  html {\n    background-color: ",";\n  }\n\n  button, input {\n    font-family: 'Roboto', sans-serif;\n  }\n"]);return me=function(){return n},n}var fe=Object(p.a)(me(),(function(n){var e=n.currentTheme;return d[e].colors.primary})),pe=function(){var n=Object(r.useContext)(T).currentTheme;return a.a.createElement(fe,{currentTheme:n})},de=t(44);function he(){var n=Object(f.a)(["\n    color: ",";\n"]);return he=function(){return n},n}function be(){var n=Object(f.a)(["\n    color: ",";\n    margin-right: 30px;\n"]);return be=function(){return n},n}function ge(){var n=Object(f.a)(["\n    display: flex;\n    justify-content: left;\n"]);return ge=function(){return n},n}function ve(){var n=Object(f.a)(["\n    color: ",";\n    color: ",";\n    font-size: ",";\n    margin: 0;\n"]);return ve=function(){return n},n}function xe(){var n=Object(f.a)(["\n    border: 0;\n    background-color: ",";\n    color:  ",";\n    transition: all .3s ease-in-out;\n\n    &:hover {\n        background-color: ",";\n    }\n"]);return xe=function(){return n},n}function Oe(){var n=Object(f.a)(["\n    color: ",";\n    flex: 2;\n    margin: 0;\n    font-size: ",";\n    font-weight: 700;\n"]);return Oe=function(){return n},n}function je(){var n=Object(f.a)(["\n    display: flex;\n"]);return je=function(){return n},n}function Ee(){var n=Object(f.a)(["\n    width: 90%;\n    min-height: 100px;\n    background-color: ",";\n    padding: 10px;\n    margin-top: 20px;\n    border-radius: ",";\n\n    @media (min-width: 700px) {\n        width: 50%;\n    }\n"]);return Ee=function(){return n},n}var ye=p.b.div(Ee(),(function(n){var e=n.currentTheme;return d[e].colors.secondary}),d.properties.radiusSmall),we=p.b.div(je()),Te=p.b.p(Oe(),d.colors.accent,d.fonts.m),Se=p.b.button(xe(),(function(n){var e=n.currentTheme;return d[e].colors.secondary}),d.colors.delete,(function(n){var e=n.currentTheme;return d[e].colors.primary})),ke=p.b.p(ve(),(function(n){var e=n.currentTheme;return d[e].colors.syntax}),d.colors.syntax,d.fonts.s),Ce=p.b.div(ge()),ze=p.b.p(be(),(function(n){var e=n.currentTheme;return d[e].colors.syntax})),Fe=p.b.p(he(),(function(n){var e=n.currentTheme;return d[e].colors.syntax})),Ae=function(n){var e=n.title,t=n.year,o=n.duration,c=n.genres,i=n.docs,u=Object(r.useContext)(T).currentTheme;return a.a.createElement(ye,{currentTheme:u},a.a.createElement(we,null,a.a.createElement(Te,null,e),a.a.createElement(Se,{currentTheme:u,onClick:function(){return function(n,e){var t,r=Object(de.a)(e);try{for(r.s();!(t=r.n()).done;){var a=t.value;if(a[n]){var o=a[n];w.collection("movies").doc(o).delete()}}}catch(c){r.e(c)}finally{r.f()}}(e,i)}},"DELETE")),a.a.createElement(ke,{currentTheme:u},t),a.a.createElement(Ce,null,a.a.createElement(ze,{currentTheme:u},o),a.a.createElement(Fe,{currentTheme:u},c)))},De=t(28),Ie=t.n(De),Le=t(29),Pe=t.n(Le);function Re(){var n=Object(f.a)(["\n    display: ",";\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 50;\n"]);return Re=function(){return n},n}function We(){var n=Object(f.a)(["\n    color: ",";\n    padding: 20px 10px;\n    font-size: ",";\n    cursor: pointer;\n    transition: all .3s ease-in-out;\n\n    &:hover {\n        background-color: ",";\n    }\n"]);return We=function(){return n},n}function _e(){var n=Object(f.a)(["\n    display: flex;\n    width: ",";\n    height: ",";\n    overflow: hidden;\n    flex-direction: column;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    background-color: ",";\n    z-index: 100;\n    transition: height .4s ease-in-out;\n    border-radius: ",";\n    box-shadow: ",";\n\n    @media (min-width: 1000px) {\n        width: ",";\n    }\n"]);return _e=function(){return n},n}function Ne(){var n=Object(f.a)(["\n    height: 35px;\n"]);return Ne=function(){return n},n}function Ue(){var n=Object(f.a)(["\n    position: absolute;\n    right: 12px;\n    top: 5px;\n"]);return Ue=function(){return n},n}function Ge(){var n=Object(f.a)(["\n    width: 100%;\n    color: ",";\n    text-align: center;\n    font-size: ",";\n    margin-top: 100px;\n"]);return Ge=function(){return n},n}function Me(){var n=Object(f.a)(["\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n"]);return Me=function(){return n},n}var Be=p.b.main(Me()),He=p.b.div(Ge(),(function(n){var e=n.currentTheme;return d[e].colors.syntax}),d.fonts.l),Ye=p.b.div(Ue()),Je=p.b.img(Ne()),Qe=p.b.div(_e(),(function(n){return n.isSortOpen?"40%":"0px"}),(function(n){return n.isSortOpen?"180px":"0px"}),(function(n){var e=n.currentTheme;return d[e].colors.secondary}),d.properties.radiusSmall,(function(n){var e=n.currentTheme;return"0px 0px 15px ".concat(d[e].colors.primary)}),(function(n){return n.isSortOpen?"20%":"0px"})),Ve=p.b.div(We(),(function(n){var e=n.currentTheme;return d[e].colors.syntax}),d.fonts.s,(function(n){var e=n.currentTheme;return d[e].colors.primary})),Ke=p.b.div(Re(),(function(n){return n.isSortOpen?"block":"none"})),Xe=function(n,e,t,r){"a-z"===t&&(e(n.sort((function(n,e){return n.title<e.title?-1:n.title>e.title?1:0}))),r("a-z")),"earliest"===t&&(e(n.sort((function(n,e){return n.addedAt-e.addedAt}))),r("earliest")),"latest"===t&&(e(n.sort((function(n,e){return e.addedAt-n.addedAt}))),r("latest"))},Ze=function(){var n=Object(r.useContext)(T).currentTheme,e=Object(r.useState)([]),t=Object(h.a)(e,2),o=t[0],c=t[1],i=Object(r.useState)(""),u=Object(h.a)(i,2),l=(u[0],u[1]),s=Object(r.useState)(!1),m=Object(h.a)(s,2),f=m[0],p=m[1],b=Object(r.useState)([]),g=Object(h.a)(b,2),v=g[0],O=g[1],j=Object(r.useState)("ready"),E=Object(h.a)(j,2),y=E[0],S=E[1],k=localStorage.getItem("uid");Object(r.useEffect)((function(){var n=w.collection("movies").onSnapshot((function(n){if(n.size){S("loading");var e=[],t=[];n.forEach((function(n){n.data()[k]&&(e.push({title:n.data()[k].title,year:n.data()[k].year,rate:n.data()[k].rate,genres:n.data()[k].genres,duration:n.data()[k].duration,description:n.data()[k].description,addedAt:n.data()[k].addedAt}),t.push(Object(x.a)({},n.data()[k].title,n.id)))})),e.length?(c(e),S("done")):S("empty"),O(t)}else S("empty")}));return function(){n()}}),[k]);var C=a.a.createElement(on.a,{type:"TailSpin",color:d.colors.accent,height:400,width:100,timeout:5e3});return C="empty"===y?a.a.createElement(He,{currentTheme:n}," Your list is empty :( "):o.map((function(n){return a.a.createElement(Ae,{key:n.title,title:n.title,year:n.year,duration:n.duration,genres:n.genres,docs:v})})),a.a.createElement(Be,null,a.a.createElement(ae,{current:"Watch list"}),o.length?a.a.createElement(a.a.Fragment,null,a.a.createElement(Ye,null,a.a.createElement(Je,{onClick:function(){return p(!f)},src:"light"===n?Ie.a:Pe.a})),a.a.createElement(Qe,{onClick:function(){return p(!f)},currentTheme:n,isSortOpen:f},a.a.createElement(Ve,{currentTheme:n,onClick:function(){return Xe(o,c,"a-z",l)}},"A-Z"),a.a.createElement(Ve,{currentTheme:n,onClick:function(){return Xe(o,c,"earliest",l)}},"Earliest added"),a.a.createElement(Ve,{currentTheme:n,onClick:function(){return Xe(o,c,"latest",l)}},"Latest added")),a.a.createElement(Ke,{onClick:function(){return p(!f)},isSortOpen:f})):null,"ready"===y?a.a.createElement(on.a,{type:"TailSpin",color:d.colors.accent,height:400,width:100,timeout:1e4}):null,C)},$e=t(16),qe=t.n($e);function nt(){var n=Object(f.a)(["\n    display: block;\n    text-align: center;\n    width: 100%;\n    color: ",";\n"]);return nt=function(){return n},n}function et(){var n=Object(f.a)(["\n    position: relative;\n"]);return et=function(){return n},n}function tt(){var n=Object(f.a)(["\n    color: red;\n    font-size: ",";\n"]);return tt=function(){return n},n}function rt(){var n=Object(f.a)(["\n    display: block;\n    margin: 50px auto;\n    color: ",";\n    font-size: 30px;\n    text-align: center;\n"]);return rt=function(){return n},n}function at(){var n=Object(f.a)(["\n\n"]);return at=function(){return n},n}function ot(){var n=Object(f.a)(["\n    position: absolute;\n    right: 10px;\n    top: 12px;\n    cursor: pointer;\n"]);return ot=function(){return n},n}function ct(){var n=Object(f.a)(["\n    color: black;\n    border: 0;\n    height: 50px;\n    background-color: ",";\n    width: 140px;\n    margin: 50px auto;\n    font-size: ",";\n    border-radius: ",";\n    transition: all .3s ease-in-out;\n\n    &:hover {\n        background-color: ",";\n    }\n"]);return ct=function(){return n},n}function it(){var n=Object(f.a)(["\n    border: 0;\n    height: 50px;\n    border-radius: ",";\n    font-size: ",';\n    padding: 0px 10px;\n    outline: none;\n    width: 100%;\n\n    &:focus {\n        border: 2px solid #008ffc;\n    }\n\n    &[name="password"] {\n        border: ',';\n    }\n\n    &[name="email"] {\n        border: ',";\n    }\n   \n        \n \n"]);return it=function(){return n},n}function ut(){var n=Object(f.a)(["\n    color: ",";\n    margin-top: 15px;\n    margin-bottom: 3px;\n    font-size: ",";\n"]);return ut=function(){return n},n}function lt(){var n=Object(f.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 60%;\n    margin: 50px auto;\n\n    @media (min-width: 1000px) {\n        width: 40%;\n    }\n"]);return lt=function(){return n},n}var st=p.b.form(lt()),mt=p.b.label(ut(),(function(n){var e=n.currentTheme;return d[e].colors.syntax}),d.fonts.xs),ft=p.b.input(it(),d.properties.radiusSmall,d.fonts.s,(function(n){return"TOO_SHORT"===n.passwordError?"2px solid red":"0"}),(function(n){return"EMAIL_IN_USE"===n.emailError?"2px solid red":"0"})),pt=p.b.button(ct(),d.colors.accent,d.fonts.s,d.properties.radiusSmall,d.colors.accentAlt),dt=p.b.span(ot()),ht=p.b.img(at()),bt=p.b.p(rt(),(function(n){var e=n.currentTheme;return d[e].colors.syntax})),gt=p.b.p(tt(),d.fonts.xs),vt=p.b.div(et()),xt=p.b.a(nt(),(function(n){var e=n.currentTheme;return d[e].colors.syntax})),Ot=function(){var n=Object(m.a)(s.a.mark((function n(e,t,r,a,o,c){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),!(a.length<6)){n.next=5;break}o("TOO_SHORT"),n.next=9;break;case 5:return o(""),c(""),n.next=9,y().createUserWithEmailAndPassword(r,a).then(function(){var n=Object(m.a)(s.a.mark((function n(e){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.user){n.next=3;break}return n.next=3,e.user.updateProfile({displayName:t});case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()).then((function(){return window.location.href="".concat($t,"/")})).catch((function(n){"auth/email-already-in-use"===n.code&&c("EMAIL_IN_USE")}));case 9:case"end":return n.stop()}}),n)})));return function(e,t,r,a,o,c){return n.apply(this,arguments)}}(),jt=function(){var n=Object(r.useContext)(T).currentTheme,e=Object(r.useState)(!0),t=Object(h.a)(e,2),o=t[0],c=t[1],i=Object(r.useState)(""),u=Object(h.a)(i,2),l=u[0],s=u[1],m=Object(r.useState)(""),f=Object(h.a)(m,2),p=f[0],d=f[1],b=Object(r.useState)(""),g=Object(h.a)(b,2),v=g[0],x=g[1],O=Object(r.useState)(""),j=Object(h.a)(O,2),E=j[0],y=j[1],w=Object(r.useState)(""),S=Object(h.a)(w,2),k=S[0],C=S[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(ae,{current:"Sign up"}),a.a.createElement(bt,{currentTheme:n},"Create free acount here"),a.a.createElement(st,{onSubmit:function(n){return Ot(n,v,l,p,C,y)}},a.a.createElement(mt,{htmlFor:"username",currentTheme:n},"Username"),a.a.createElement(ft,{onChange:function(n){return x(n.target.value)},value:v,type:"text",name:"username",currentTheme:n}),a.a.createElement(mt,{htmlFor:"email",currentTheme:n},"Email"),a.a.createElement(ft,{onChange:function(n){return s(n.target.value)},value:l,type:"email",name:"email",emailError:E,currentTheme:n}),E&&a.a.createElement(gt,null,"Email already in use"),a.a.createElement(mt,{htmlFor:"password",currentTheme:n},"Password"),a.a.createElement(vt,null,a.a.createElement(ft,{onChange:function(n){return d(n.target.value)},value:p,type:o?"password":"text",name:"password",currentTheme:n,passwordError:k}),a.a.createElement(dt,{onClick:function(){return c(!o)}},a.a.createElement(ht,{src:qe.a}))),k&&a.a.createElement(gt,null,"Password must have min. 6 characters"),a.a.createElement(pt,{type:"submit",currentTheme:n},"Sign up")),a.a.createElement(xt,{currentTheme:n,href:"".concat($t,"/#/signin/")},"Have an account already?"))};function Et(){var n=Object(f.a)(["\n    display: block;\n    text-align: center;\n    width: 100%;\n    color: ",";\n"]);return Et=function(){return n},n}function yt(){var n=Object(f.a)(["\n    color: red;\n    font-size: ",";\n"]);return yt=function(){return n},n}function wt(){var n=Object(f.a)(["\n    position: relative;\n"]);return wt=function(){return n},n}function Tt(){var n=Object(f.a)(["\n    display: block;\n    margin: 50px auto;\n    color: ",";\n    font-size: 30px;\n    text-align: center;\n"]);return Tt=function(){return n},n}function St(){var n=Object(f.a)(["\n\n"]);return St=function(){return n},n}function kt(){var n=Object(f.a)(["\n    position: absolute;\n    right: 10px;\n    top: 12px;\n    cursor: pointer;\n"]);return kt=function(){return n},n}function Ct(){var n=Object(f.a)(["\n    color: black;\n    border: 0;\n    height: 50px;\n    background-color: ",";\n    width: 140px;\n    margin: 50px auto;\n    font-size: ",";\n    border-radius: ",";\n    transition: all .3s ease-in-out;\n\n    &:hover {\n        background-color: ",";\n    }\n"]);return Ct=function(){return n},n}function zt(){var n=Object(f.a)(["\n    border: 0;\n    height: 50px;\n    border-radius: ",";\n    font-size: ",';\n    padding: 0px 10px;\n    outline: none;\n    width: 100%;\n\n    &:focus {\n        border: 2px solid #008ffc;\n    }\n\n    &[name="password"] {\n        border: ',';\n    }\n\n    &[name="email"] {\n        border: ',";\n    }\n   \n        \n \n"]);return zt=function(){return n},n}function Ft(){var n=Object(f.a)(["\n    color: ",";\n    margin-top: 15px;\n    margin-bottom: 3px;\n    font-size: ",";\n"]);return Ft=function(){return n},n}function At(){var n=Object(f.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 60%;\n    margin: 50px auto;\n\n    @media (min-width: 1000px) {\n        width: 40%;\n    }\n"]);return At=function(){return n},n}var Dt=p.b.form(At()),It=p.b.label(Ft(),(function(n){var e=n.currentTheme;return d[e].colors.syntax}),d.fonts.xs),Lt=p.b.input(zt(),d.properties.radiusSmall,d.fonts.s,(function(n){return"WRONG_PASSWORD"===n.passwordError?"2px solid red":"0"}),(function(n){return"WRONG_EMAIL"===n.emailError?"2px solid red":"0"})),Pt=p.b.button(Ct(),d.colors.accent,d.fonts.s,d.properties.radiusSmall,d.colors.accentAlt),Rt=p.b.span(kt()),Wt=p.b.img(St()),_t=p.b.p(Tt(),(function(n){var e=n.currentTheme;return d[e].colors.syntax})),Nt=p.b.div(wt()),Ut=p.b.p(yt(),d.fonts.xs),Gt=p.b.a(Et(),(function(n){var e=n.currentTheme;return d[e].colors.syntax})),Mt=function(){var n=Object(m.a)(s.a.mark((function n(e,t,r,a,o){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),a(""),o(""),n.next=5,y().signInWithEmailAndPassword(t,r).then((function(n){localStorage.setItem("uid",n.user.uid),window.location.href="".concat($t,"/")})).catch((function(n){"auth/user-not-found"===n.code&&a("WRONG_EMAIL"),"auth/wrong-password"===n.code&&o("WRONG_PASSWORD")}));case 5:case"end":return n.stop()}}),n)})));return function(e,t,r,a,o){return n.apply(this,arguments)}}(),Bt=function(){var n=Object(r.useContext)(T).currentTheme,e=Object(r.useState)(!0),t=Object(h.a)(e,2),o=t[0],c=t[1],i=Object(r.useState)(""),u=Object(h.a)(i,2),l=u[0],s=u[1],m=Object(r.useState)(""),f=Object(h.a)(m,2),p=f[0],d=f[1],b=Object(r.useState)(""),g=Object(h.a)(b,2),v=g[0],x=g[1],O=Object(r.useState)(""),j=Object(h.a)(O,2),E=j[0],y=j[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(ae,{current:"Sign in"}),a.a.createElement(_t,{currentTheme:n},"Sign in to your account"),a.a.createElement(Dt,{onSubmit:function(n){return Mt(n,l,p,y,x)}},a.a.createElement(It,{htmlFor:"email",currentTheme:n},"Email"),a.a.createElement(Lt,{onChange:function(n){return s(n.target.value)},value:l,type:"email",name:"email",emailError:E,currentTheme:n}),E&&a.a.createElement(Ut,null,"Email not found"),a.a.createElement(It,{htmlFor:"password",currentTheme:n},"Password"),a.a.createElement(Nt,null,a.a.createElement(Lt,{onChange:function(n){return d(n.target.value)},value:p,type:o?"password":"text",name:"password",passwordError:v,currentTheme:n}),v&&a.a.createElement(Ut,null,"Wrong password"),a.a.createElement(Rt,{onClick:function(){return c(!o)}},a.a.createElement(Wt,{src:qe.a}))),a.a.createElement(Pt,{type:"submit",currentTheme:n},"Sign up")),a.a.createElement(Gt,{currentTheme:n,href:"".concat($t,"/#/signup/")},"Don't have an account?"))},Ht=t(45),Yt=t(47),Jt=t(46),Qt=function(n){Object(Yt.a)(t,n);var e=Object(Jt.a)(t);function t(){var n;Object(Ht.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=e.call.apply(e,[this].concat(a))).componentDidMount=function(){return window.scrollTo(0,0)},n.componentDidUpdate=function(e){n.props.location!==e.location&&window.scrollTo(0,0)},n.render=function(){return n.props.children},n}return t}(r.PureComponent),Vt=Object(u.f)(Qt);function Kt(){var n=Object(f.a)(["\n    font-size: 20vw;\n    color: ",";\n    width: 100%;\n    height: 400px;\n    text-align: center;\n    margin: 0;\n"]);return Kt=function(){return n},n}var Xt=p.b.p(Kt(),(function(n){var e=n.currentTheme;return d[e].colors.altSyntax})),Zt=function(){var n=Object(r.useContext)(T).currentTheme;return a.a.createElement(Xt,{currentTheme:n},"404")},$t="/movies-app";var qt=function(){return a.a.createElement(i.a,{basename:$t},a.a.createElement(Vt,null,a.a.createElement(S,null,a.a.createElement(pe,null),a.a.createElement(u.c,null,a.a.createElement(u.a,{exact:!0,path:"/",component:se}),a.a.createElement(u.a,{path:"/watchlist",component:Ze}),a.a.createElement(u.a,{path:"/signup",component:jt}),a.a.createElement(u.a,{path:"/signin",component:Bt}),a.a.createElement(u.a,{component:Zt})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(qt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.7d2bdf2d.chunk.js.map
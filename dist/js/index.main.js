/*! For license information please see index.main.js.LICENSE.txt */
(()=>{"use strict";const t=(t,e)=>{document.querySelector(t).classList.toggle(e)},e=({timing:t,draw:e,duration:n})=>{let i=performance.now();requestAnimationFrame((function o(r){let a=(r-i)/n;a>1&&(a=1);let s=t(a);e(s),a<1&&requestAnimationFrame(o)}))},n=t=>{t.style.visibility="visible",t.style.opacity=0,e({duration:1e3,timing:t=>t,draw(e){t.style.opacity=String(e)}})},i=(t,n="")=>{e({duration:1e3,timing:t=>t,draw(e){t.style.opacity=String(1-e),1==e&&(t.style.visibility="",t.style.opacity="",""!=n&&t.classList.remove(n))}})},o=({formId:t,someElem:e=[]})=>{const o=document.getElementById(t),r=document.createElement("div");let a,s,u;r.classList.add("feedback__message");try{if(!o)throw new Error(`Предполагается отправка данных ФОС с id="${t}". На странице её нет. Верните в вёрстку ФОС с указанным id!`);o.addEventListener("submit",(c=>{a=o.querySelector('input[name="name"]'),s=o.querySelector('input[name="phone"]'),c.preventDefault(),a&&a.value,s.value,u=o.querySelector('input[type="checkbox"]'),u.checked?(()=>{const a=new FormData(o),s={};var u;r.textContent="Загрузка...",o.append(r),e.forEach((t=>{s["form-name"]=t.id})),a.forEach(((t,e)=>{s[e]=t})),(u=s,fetch(`http://localhost:2525/${t}`,{method:"POST",body:JSON.stringify(u),headers:{"Content-Type":"application/json"}}).then((t=>t.json()))).then((t=>{let e=o.querySelectorAll("input"),a=document.querySelector(".popup.popup-thank");o.querySelector(".feedback__body").style.display="none",r.innerHTML="<div>Отправка завершена успешно!</div>",n(a),a.addEventListener("click",(t=>{t.target.closest(".feedback-wrap")&&!t.target.classList.contains("close")||(i(a),i(document.querySelector(".popup.popup-consultation")))})),e.forEach((t=>{t.value=""}))})).catch((t=>{o.querySelector(".feedback__body").style.display="none",r.textContent="Ошибка..."}))})():console.log("нужна ли подсказка для checkbox")}))}catch(t){console.log(t.message)}};function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var a="(prefers-reduced-motion: reduce)",s={CREATED:1,MOUNTED:2,IDLE:3,MOVING:4,SCROLLING:5,DRAGGING:6,DESTROYED:7};function u(t){t.length=0}function c(t,e,n){return Array.prototype.slice.call(t,e,n)}function l(t){return t.bind.apply(t,[null].concat(c(arguments,1)))}var d=setTimeout,f=function(){};function p(t){return requestAnimationFrame(t)}function v(t,e){return typeof e===t}function m(t){return!E(t)&&v("object",t)}var g=Array.isArray,h=l(v,"function"),y=l(v,"string"),b=l(v,"undefined");function E(t){return null===t}function w(t){try{return t instanceof(t.ownerDocument.defaultView||window).HTMLElement}catch(t){return!1}}function S(t){return g(t)?t:[t]}function L(t,e){S(t).forEach(e)}function _(t,e){return t.indexOf(e)>-1}function k(t,e){return t.push.apply(t,S(e)),t}function x(t,e,n){t&&L(e,(function(e){e&&t.classList[n?"add":"remove"](e)}))}function C(t,e){x(t,y(e)?e.split(" "):e,!0)}function P(t,e){L(e,t.appendChild.bind(t))}function q(t,e){L(t,(function(t){var n=(e||t).parentNode;n&&n.insertBefore(t,e)}))}function A(t,e){return w(t)&&(t.msMatchesSelector||t.matches).call(t,e)}function M(t,e){var n=t?c(t.children):[];return e?n.filter((function(t){return A(t,e)})):n}function D(t,e){return e?M(t,e)[0]:t.firstElementChild}var T=Object.keys;function O(t,e,n){return t&&(n?T(t).reverse():T(t)).forEach((function(n){"__proto__"!==n&&e(t[n],n)})),t}function z(t){return c(arguments,1).forEach((function(e){O(e,(function(n,i){t[i]=e[i]}))})),t}function I(t){return c(arguments,1).forEach((function(e){O(e,(function(e,n){g(e)?t[n]=e.slice():m(e)?t[n]=I({},m(t[n])?t[n]:{},e):t[n]=e}))})),t}function N(t,e){L(e||T(t),(function(e){delete t[e]}))}function F(t,e){L(t,(function(t){L(e,(function(e){t&&t.removeAttribute(e)}))}))}function j(t,e,n){m(e)?O(e,(function(e,n){j(t,n,e)})):L(t,(function(t){E(n)||""===n?F(t,e):t.setAttribute(e,String(n))}))}function R(t,e,n){var i=document.createElement(t);return e&&(y(e)?C(i,e):j(i,e)),n&&P(n,i),i}function H(t,e,n){if(b(n))return getComputedStyle(t)[e];E(n)||(t.style[e]=""+n)}function B(t,e){H(t,"display",e)}function W(t){t.setActive&&t.setActive()||t.focus({preventScroll:!0})}function X(t,e){return t.getAttribute(e)}function G(t,e){return t&&t.classList.contains(e)}function $(t){return t.getBoundingClientRect()}function Y(t){L(t,(function(t){t&&t.parentNode&&t.parentNode.removeChild(t)}))}function U(t){return D((new DOMParser).parseFromString(t,"text/html").body)}function J(t,e){t.preventDefault(),e&&(t.stopPropagation(),t.stopImmediatePropagation())}function K(t,e){return t&&t.querySelector(e)}function V(t,e){return e?c(t.querySelectorAll(e)):[]}function Q(t,e){x(t,e,!1)}function Z(t){return t.timeStamp}function tt(t){return y(t)?t:t?t+"px":""}var et="splide",nt="data-"+et;function it(t,e){if(!t)throw new Error("["+et+"] "+(e||""))}var ot=Math.min,rt=Math.max,at=Math.floor,st=Math.ceil,ut=Math.abs;function ct(t,e,n){return ut(t-e)<n}function lt(t,e,n,i){var o=ot(e,n),r=rt(e,n);return i?o<t&&t<r:o<=t&&t<=r}function dt(t,e,n){var i=ot(e,n),o=rt(e,n);return ot(rt(i,t),o)}function ft(t){return+(t>0)-+(t<0)}function pt(t,e){return L(e,(function(e){t=t.replace("%s",""+e)})),t}function vt(t){return t<10?"0"+t:""+t}var mt={};function gt(){var t=[];function e(t,e,n){L(t,(function(t){t&&L(e,(function(e){e.split(" ").forEach((function(e){var i=e.split(".");n(t,i[0],i[1])}))}))}))}return{bind:function(n,i,o,r){e(n,i,(function(e,n,i){var a="addEventListener"in e,s=a?e.removeEventListener.bind(e,n,o,r):e.removeListener.bind(e,o);a?e.addEventListener(n,o,r):e.addListener(o),t.push([e,n,i,o,s])}))},unbind:function(n,i,o){e(n,i,(function(e,n,i){t=t.filter((function(t){return!!(t[0]!==e||t[1]!==n||t[2]!==i||o&&t[3]!==o)||(t[4](),!1)}))}))},dispatch:function(t,e,n){var i;return"function"==typeof CustomEvent?i=new CustomEvent(e,{bubbles:!0,detail:n}):(i=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!1,n),t.dispatchEvent(i),i},destroy:function(){t.forEach((function(t){t[4]()})),u(t)}}}var ht="mounted",yt="ready",bt="move",Et="moved",wt="click",St="refresh",Lt="updated",_t="resize",kt="resized",xt="scroll",Ct="scrolled",Pt="destroy",qt="navigation:mounted",At="autoplay:play",Mt="autoplay:pause",Dt="lazyload:loaded",Tt="ei";function Ot(t){var e=t?t.event.bus:document.createDocumentFragment(),n=gt();return t&&t.event.on(Pt,n.destroy),z(n,{bus:e,on:function(t,i){n.bind(e,S(t).join(" "),(function(t){i.apply(i,g(t.detail)?t.detail:[])}))},off:l(n.unbind,e),emit:function(t){n.dispatch(e,t,c(arguments,1))}})}function zt(t,e,n,i){var o,r,a=Date.now,s=0,u=!0,c=0;function l(){if(!u){if(s=t?ot((a()-o)/t,1):1,n&&n(s),s>=1&&(e(),o=a(),i&&++c>=i))return d();r=p(l)}}function d(){u=!0}function f(){r&&cancelAnimationFrame(r),s=0,r=0,u=!0}return{start:function(e){e||f(),o=a()-(e?s*t:0),u=!1,r=p(l)},rewind:function(){o=a(),s=0,n&&n(s)},pause:d,cancel:f,set:function(e){t=e},isPaused:function(){return u}}}var It="Arrow",Nt=It+"Left",Ft=It+"Right",jt=It+"Up",Rt=It+"Down",Ht="ttb",Bt={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[jt,Ft],ArrowRight:[Rt,Nt]};var Wt="role",Xt="tabindex",Gt="aria-",$t=Gt+"controls",Yt=Gt+"current",Ut=Gt+"selected",Jt=Gt+"label",Kt=Gt+"labelledby",Vt=Gt+"hidden",Qt=Gt+"orientation",Zt=Gt+"roledescription",te=Gt+"live",ee=Gt+"busy",ne=Gt+"atomic",ie=[Wt,Xt,"disabled",$t,Yt,Jt,Kt,Vt,Qt,Zt],oe=et+"__",re="is-",ae=et,se=oe+"track",ue=oe+"list",ce=oe+"slide",le=ce+"--clone",de=ce+"__container",fe=oe+"arrows",pe=oe+"arrow",ve=pe+"--prev",me=pe+"--next",ge=oe+"pagination",he=ge+"__page",ye=oe+"progress__bar",be=oe+"toggle",Ee=oe+"sr",we=re+"initialized",Se=re+"active",Le=re+"prev",_e=re+"next",ke=re+"visible",xe=re+"loading",Ce=re+"focus-in",Pe=re+"overflow",qe=[Se,ke,Le,_e,xe,Ce,Pe],Ae={slide:ce,clone:le,arrows:fe,arrow:pe,prev:ve,next:me,pagination:ge,page:he,spinner:oe+"spinner"},Me="touchstart mousedown",De="touchmove mousemove",Te="touchend touchcancel mouseup click",Oe="slide",ze="loop",Ie="fade";var Ne=nt+"-interval",Fe={passive:!1,capture:!0},je={Spacebar:" ",Right:Ft,Left:Nt,Up:jt,Down:Rt};function Re(t){return t=y(t)?t:t.key,je[t]||t}var He="keydown",Be=nt+"-lazy",We=Be+"-srcset",Xe="["+Be+"], ["+We+"]",Ge=[" ","Enter"],$e=Object.freeze({__proto__:null,Media:function(t,e,n){var i=t.state,o=n.breakpoints||{},r=n.reducedMotion||{},s=gt(),u=[];function c(t){t&&s.destroy()}function l(t,e){var n=matchMedia(e);s.bind(n,"change",d),u.push([t,n])}function d(){var e=i.is(7),o=n.direction,r=u.reduce((function(t,e){return I(t,e[1].matches?e[0]:{})}),{});N(n),f(r),n.destroy?t.destroy("completely"===n.destroy):e?(c(!0),t.mount()):o!==n.direction&&t.refresh()}function f(e,o,r){I(n,e),o&&I(Object.getPrototypeOf(n),e),!r&&i.is(1)||t.emit(Lt,n)}return{setup:function(){var t="min"===n.mediaQuery;T(o).sort((function(e,n){return t?+e-+n:+n-+e})).forEach((function(e){l(o[e],"("+(t?"min":"max")+"-width:"+e+"px)")})),l(r,a),d()},destroy:c,reduce:function(t){matchMedia(a).matches&&(t?I(n,r):N(n,T(r)))},set:f}},Direction:function(t,e,n){return{resolve:function(t,e,i){var o="rtl"!==(i=i||n.direction)||e?i===Ht?0:-1:1;return Bt[t]&&Bt[t][o]||t.replace(/width|left|right/i,(function(t,e){var n=Bt[t.toLowerCase()][o]||t;return e>0?n.charAt(0).toUpperCase()+n.slice(1):n}))},orient:function(t){return t*("rtl"===n.direction?1:-1)}}},Elements:function(t,e,n){var i,o,r,a=Ot(t),s=a.on,c=a.bind,l=t.root,d=n.i18n,f={},p=[],v=[],m=[];function g(){var t,e,r;i=E("."+se),o=D(i,"."+ue),it(i&&o,"A track/list element is missing."),k(p,M(o,"."+ce+":not(."+le+")")),O({arrows:fe,pagination:ge,prev:ve,next:me,bar:ye,toggle:be},(function(t,e){f[e]=E("."+t)})),z(f,{root:l,track:i,list:o,slides:p}),e=l.id||""+(t=et)+vt(mt[t]=(mt[t]||0)+1),r=n.role,l.id=e,i.id=i.id||e+"-track",o.id=o.id||e+"-list",!X(l,Wt)&&"SECTION"!==l.tagName&&r&&j(l,Wt,r),j(l,Zt,d.carousel),j(o,Wt,"presentation"),b()}function y(t){var e=ie.concat("style");u(p),Q(l,v),Q(i,m),F([i,o],e),F(l,t?e:["style",Zt])}function b(){Q(l,v),Q(i,m),v=w(ae),m=w(se),C(l,v),C(i,m),j(l,Jt,n.label),j(l,Kt,n.labelledby)}function E(t){var e=K(l,t);return e&&function(t,e){if(h(t.closest))return t.closest(e);for(var n=t;n&&1===n.nodeType&&!A(n,e);)n=n.parentElement;return n}(e,"."+ae)===l?e:void 0}function w(t){return[t+"--"+n.type,t+"--"+n.direction,n.drag&&t+"--draggable",n.isNavigation&&t+"--nav",t===ae&&Se]}return z(f,{setup:g,mount:function(){s(St,y),s(St,g),s(Lt,b),c(document,Me+" keydown",(function(t){r="keydown"===t.type}),{capture:!0}),c(l,"focusin",(function(){x(l,Ce,!!r)}))},destroy:y})},Slides:function(t,e,n){var i=Ot(t),o=i.on,r=i.emit,a=i.bind,s=e.Elements,c=s.slides,d=s.list,f=[];function p(){c.forEach((function(t,e){m(t,e,-1)}))}function v(){b((function(t){t.destroy()})),u(f)}function m(e,n,i){var o=function(t,e,n,i){var o,r=Ot(t),a=r.on,s=r.emit,u=r.bind,c=t.Components,d=t.root,f=t.options,p=f.isNavigation,v=f.updateOnMove,m=f.i18n,g=f.pagination,h=f.slideFocus,y=c.Direction.resolve,b=X(i,"style"),E=X(i,Jt),w=n>-1,S=D(i,"."+de);function L(){var o=t.splides.map((function(t){var n=t.splide.Components.Slides.getAt(e);return n?n.slide.id:""})).join(" ");j(i,Jt,pt(m.slideX,(w?n:e)+1)),j(i,$t,o),j(i,Wt,h?"button":""),h&&F(i,Zt)}function _(){o||k()}function k(){if(!o){var n=t.index;(r=C())!==G(i,Se)&&(x(i,Se,r),j(i,Yt,p&&r||""),s(r?"active":"inactive",P)),function(){var e=function(){if(t.is(Ie))return C();var e=$(c.Elements.track),n=$(i),o=y("left",!0),r=y("right",!0);return at(e[o])<=st(n[o])&&at(n[r])<=st(e[r])}(),n=!e&&(!C()||w);if(t.state.is([4,5])||j(i,Vt,n||""),j(V(i,f.focusableNodes||""),Xt,n?-1:""),h&&j(i,Xt,n?-1:0),e!==G(i,ke)&&(x(i,ke,e),s(e?"visible":"hidden",P)),!e&&document.activeElement===i){var o=c.Slides.getAt(t.index);o&&W(o.slide)}}(),x(i,Le,e===n-1),x(i,_e,e===n+1)}var r}function C(){var i=t.index;return i===e||f.cloneStatus&&i===n}var P={index:e,slideIndex:n,slide:i,container:S,isClone:w,mount:function(){w||(i.id=d.id+"-slide"+vt(e+1),j(i,Wt,g?"tabpanel":"group"),j(i,Zt,m.slide),j(i,Jt,E||pt(m.slideLabel,[e+1,t.length]))),u(i,"click",l(s,wt,P)),u(i,"keydown",l(s,"sk",P)),a([Et,"sh",Ct],k),a(qt,L),v&&a(bt,_)},destroy:function(){o=!0,r.destroy(),Q(i,qe),F(i,ie),j(i,"style",b),j(i,Jt,E||"")},update:k,style:function(t,e,n){H(n&&S||i,t,e)},isWithin:function(n,i){var o=ut(n-e);return w||!f.rewind&&!t.is(ze)||(o=ot(o,t.length-o)),o<=i}};return P}(t,n,i,e);o.mount(),f.push(o),f.sort((function(t,e){return t.index-e.index}))}function g(t){return t?E((function(t){return!t.isClone})):f}function b(t,e){g(e).forEach(t)}function E(t){return f.filter(h(t)?t:function(e){return y(t)?A(e.slide,t):_(S(t),e.index)})}return{mount:function(){p(),o(St,v),o(St,p)},destroy:v,update:function(){b((function(t){t.update()}))},register:m,get:g,getIn:function(t){var i=e.Controller,o=i.toIndex(t),r=i.hasFocus()?1:n.perPage;return E((function(t){return lt(t.index,o,o+r-1)}))},getAt:function(t){return E(t)[0]},add:function(t,e){L(t,(function(t){if(y(t)&&(t=U(t)),w(t)){var i=c[e];i?q(t,i):P(d,t),C(t,n.classes.slide),o=t,s=l(r,_t),u=V(o,"img"),(f=u.length)?u.forEach((function(t){a(t,"load error",(function(){--f||s()}))})):s()}var o,s,u,f})),r(St)},remove:function(t){Y(E(t).map((function(t){return t.slide}))),r(St)},forEach:b,filter:E,style:function(t,e,n){b((function(i){i.style(t,e,n)}))},getLength:function(t){return t?c.length:f.length},isEnough:function(){return f.length>n.perPage}}},Layout:function(t,e,n){var i,o,r,a=Ot(t),s=a.on,u=a.bind,c=a.emit,d=e.Slides,f=e.Direction.resolve,p=e.Elements,v=p.root,g=p.track,h=p.list,y=d.getAt,b=d.style;function E(){i=n.direction===Ht,H(v,"maxWidth",tt(n.width)),H(g,f("paddingLeft"),S(!1)),H(g,f("paddingRight"),S(!0)),w(!0)}function w(t){var e,a=$(v);(t||o.width!==a.width||o.height!==a.height)&&(H(g,"height",(e="",i&&(it(e=L(),"height or heightRatio is missing."),e="calc("+e+" - "+S(!1)+" - "+S(!0)+")"),e)),b(f("marginRight"),tt(n.gap)),b("width",n.autoWidth?null:tt(n.fixedWidth)||(i?"":_())),b("height",tt(n.fixedHeight)||(i?n.autoHeight?null:_():L()),!0),o=a,c(kt),r!==(r=M())&&(x(v,Pe,r),c("overflow",r)))}function S(t){var e=n.padding,i=f(t?"right":"left");return e&&tt(e[i]||(m(e)?0:e))||"0px"}function L(){return tt(n.height||$(h).width*n.heightRatio)}function _(){var t=tt(n.gap);return"calc((100%"+(t&&" + "+t)+")/"+(n.perPage||1)+(t&&" - "+t)+")"}function k(){return $(h)[f("width")]}function C(t,e){var n=y(t||0);return n?$(n.slide)[f("width")]+(e?0:A()):0}function P(t,e){var n=y(t);if(n){var i=$(n.slide)[f("right")],o=$(h)[f("left")];return ut(i-o)+(e?0:A())}return 0}function q(e){return P(t.length-1)-P(0)+C(0,e)}function A(){var t=y(0);return t&&parseFloat(H(t.slide,f("marginRight")))||0}function M(){return t.is(Ie)||q(!0)>k()}return{mount:function(){var t,e;E(),u(window,"resize load",(t=l(c,_t),e=zt(0,t,null,1),function(){e.isPaused()&&e.start()})),s([Lt,St],E),s(_t,w)},resize:w,listSize:k,slideSize:C,sliderSize:q,totalSize:P,getPadding:function(t){return parseFloat(H(g,f("padding"+(t?"Right":"Left"))))||0},isOverflow:M}},Clones:function(t,e,n){var i,o=Ot(t),r=o.on,a=e.Elements,s=e.Slides,c=e.Direction.resolve,l=[];function d(){r(St,f),r([Lt,_t],v),(i=m())&&(function(e){var i=s.get().slice(),o=i.length;if(o){for(;i.length<e;)k(i,i);k(i.slice(-e),i.slice(0,e)).forEach((function(r,u){var c=u<e,d=function(e,i){var o=e.cloneNode(!0);return C(o,n.classes.clone),o.id=t.root.id+"-clone"+vt(i+1),o}(r.slide,u);c?q(d,i[0].slide):P(a.list,d),k(l,d),s.register(d,u-e+(c?0:o),r.index)}))}}(i),e.Layout.resize(!0))}function f(){p(),d()}function p(){Y(l),u(l),o.destroy()}function v(){var t=m();i!==t&&(i<t||!t)&&o.emit(St)}function m(){var i=n.clones;if(t.is(ze)){if(b(i)){var o=n[c("fixedWidth")]&&e.Layout.slideSize(0);i=o&&st($(a.track)[c("width")]/o)||n[c("autoWidth")]&&t.length||2*n.perPage}}else i=0;return i}return{mount:d,destroy:p}},Move:function(t,e,n){var i,o=Ot(t),r=o.on,a=o.emit,s=t.state.set,u=e.Layout,c=u.slideSize,l=u.getPadding,d=u.totalSize,f=u.listSize,p=u.sliderSize,v=e.Direction,m=v.resolve,g=v.orient,h=e.Elements,y=h.list,E=h.track;function w(){e.Controller.isBusy()||(e.Scroll.cancel(),S(t.index),e.Slides.update())}function S(t){L(C(t,!0))}function L(n,i){if(!t.is(Ie)){var o=i?n:function(n){if(t.is(ze)){var i=x(n),o=i>e.Controller.getEnd();(i<0||o)&&(n=_(n,o))}return n}(n);H(y,"transform","translate"+m("X")+"("+o+"px)"),n!==o&&a("sh")}}function _(t,e){var n=t-q(e),i=p();return t-g(i*(st(ut(n)/i)||1))*(e?1:-1)}function k(){L(P(),!0),i.cancel()}function x(t){for(var n=e.Slides.get(),i=0,o=1/0,r=0;r<n.length;r++){var a=n[r].index,s=ut(C(a,!0)-t);if(!(s<=o))break;o=s,i=a}return i}function C(e,i){var o=g(d(e-1)-function(t){var e=n.focus;return"center"===e?(f()-c(t,!0))/2:+e*c(t)||0}(e));return i?function(e){return n.trimSpace&&t.is(Oe)&&(e=dt(e,0,g(p(!0)-f()))),e}(o):o}function P(){var t=m("left");return $(y)[t]-$(E)[t]+g(l(!1))}function q(t){return C(t?e.Controller.getEnd():0,!!n.trimSpace)}return{mount:function(){i=e.Transition,r([ht,kt,Lt,St],w)},move:function(t,e,n,o){var r,u;t!==e&&(r=t>n,u=g(_(P(),r)),r?u>=0:u<=y[m("scrollWidth")]-$(E)[m("width")])&&(k(),L(_(P(),t>n),!0)),s(4),a(bt,e,n,t),i.start(e,(function(){s(3),a(Et,e,n,t),o&&o()}))},jump:S,translate:L,shift:_,cancel:k,toIndex:x,toPosition:C,getPosition:P,getLimit:q,exceededLimit:function(t,e){e=b(e)?P():e;var n=!0!==t&&g(e)<g(q(!1)),i=!1!==t&&g(e)>g(q(!0));return n||i},reposition:w}},Controller:function(t,e,n){var i,o,r,a,s=Ot(t),u=s.on,c=s.emit,d=e.Move,f=d.getPosition,p=d.getLimit,v=d.toPosition,m=e.Slides,g=m.isEnough,h=m.getLength,E=n.omitEnd,w=t.is(ze),S=t.is(Oe),L=l(q,!1),_=l(q,!0),k=n.start||0,x=k;function C(){o=h(!0),r=n.perMove,a=n.perPage,i=D();var t=dt(k,0,E?i:o-1);t!==k&&(k=t,d.reposition())}function P(){i!==D()&&c(Tt)}function q(t,e){var n=r||(I()?1:a),o=A(k+n*(t?-1:1),k,!(r||I()));return-1===o&&S&&!ct(f(),p(!t),1)?t?0:i:e?o:M(o)}function A(e,s,u){if(g()||I()){var c=function(e){if(S&&"move"===n.trimSpace&&e!==k)for(var i=f();i===v(e,!0)&&lt(e,0,t.length-1,!n.rewind);)e<k?--e:++e;return e}(e);c!==e&&(s=e,e=c,u=!1),e<0||e>i?e=r||!lt(0,e,s,!0)&&!lt(i,s,e,!0)?w?u?e<0?-(o%a||a):o:e:n.rewind?e<0?i:0:-1:T(O(e)):u&&e!==s&&(e=T(O(s)+(e<s?-1:1)))}else e=-1;return e}function M(t){return w?(t+o)%o||0:t}function D(){for(var t=o-(I()||w&&r?1:a);E&&t-- >0;)if(v(o-1,!0)!==v(t,!0)){t++;break}return dt(t,0,o-1)}function T(t){return dt(I()?t:a*t,0,i)}function O(t){return I()?ot(t,i):at((t>=i?o-1:t)/a)}function z(t){t!==k&&(x=k,k=t)}function I(){return!b(n.focus)||n.isNavigation}function N(){return t.state.is([4,5])&&!!n.waitForTransition}return{mount:function(){C(),u([Lt,St,Tt],C),u(kt,P)},go:function(t,e,n){if(!N()){var o=function(t){var e=k;if(y(t)){var n=t.match(/([+\-<>])(\d+)?/)||[],o=n[1],r=n[2];"+"===o||"-"===o?e=A(k+ +(""+o+(+r||1)),k):">"===o?e=r?T(+r):L(!0):"<"===o&&(e=_(!0))}else e=w?t:dt(t,0,i);return e}(t),r=M(o);r>-1&&(e||r!==k)&&(z(r),d.move(o,r,x,n))}},scroll:function(t,n,o,r){e.Scroll.scroll(t,n,o,(function(){var t=M(d.toIndex(f()));z(E?ot(t,i):t),r&&r()}))},getNext:L,getPrev:_,getAdjacent:q,getEnd:D,setIndex:z,getIndex:function(t){return t?x:k},toIndex:T,toPage:O,toDest:function(t){var e=d.toIndex(t);return S?dt(e,0,i):e},hasFocus:I,isBusy:N}},Arrows:function(t,e,n){var i,o,r=Ot(t),a=r.on,s=r.bind,u=r.emit,c=n.classes,d=n.i18n,f=e.Elements,p=e.Controller,v=f.arrows,m=f.track,g=v,h=f.prev,y=f.next,b={};function E(){var t;!(t=n.arrows)||h&&y||(g=v||R("div",c.arrows),h=_(!0),y=_(!1),i=!0,P(g,[h,y]),!v&&q(g,m)),h&&y&&(z(b,{prev:h,next:y}),B(g,t?"":"none"),C(g,o=fe+"--"+n.direction),t&&(a([ht,Et,St,Ct,Tt],k),s(y,"click",l(L,">")),s(h,"click",l(L,"<")),k(),j([h,y],$t,m.id),u("arrows:mounted",h,y))),a(Lt,w)}function w(){S(),E()}function S(){r.destroy(),Q(g,o),i?(Y(v?[h,y]:g),h=y=null):F([h,y],ie)}function L(t){p.go(t,!0)}function _(t){return U('<button class="'+c.arrow+" "+(t?c.prev:c.next)+'" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="'+(n.arrowPath||"m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z")+'" />')}function k(){if(h&&y){var e=t.index,n=p.getPrev(),i=p.getNext(),o=n>-1&&e<n?d.last:d.prev,r=i>-1&&e>i?d.first:d.next;h.disabled=n<0,y.disabled=i<0,j(h,Jt,o),j(y,Jt,r),u("arrows:updated",h,y,n,i)}}return{arrows:b,mount:E,destroy:S,update:k}},Autoplay:function(t,e,n){var i,o,r=Ot(t),a=r.on,s=r.bind,u=r.emit,c=zt(n.interval,t.go.bind(t,">"),(function(t){var e=d.bar;e&&H(e,"width",100*t+"%"),u("autoplay:playing",t)})),l=c.isPaused,d=e.Elements,f=e.Elements,p=f.root,v=f.toggle,m=n.autoplay,g="pause"===m;function h(){l()&&e.Slides.isEnough()&&(c.start(!n.resetProgress),o=i=g=!1,E(),u(At))}function y(t){void 0===t&&(t=!0),g=!!t,E(),l()||(c.pause(),u(Mt))}function b(){g||(i||o?y(!1):h())}function E(){v&&(x(v,Se,!g),j(v,Jt,n.i18n[g?"play":"pause"]))}function w(t){var i=e.Slides.getAt(t);c.set(i&&+X(i.slide,Ne)||n.interval)}return{mount:function(){m&&(n.pauseOnHover&&s(p,"mouseenter mouseleave",(function(t){i="mouseenter"===t.type,b()})),n.pauseOnFocus&&s(p,"focusin focusout",(function(t){o="focusin"===t.type,b()})),v&&s(v,"click",(function(){g?h():y(!0)})),a([bt,xt,St],c.rewind),a(bt,w),v&&j(v,$t,d.track.id),g||h(),E())},destroy:c.cancel,play:h,pause:y,isPaused:l}},Cover:function(t,e,n){var i=Ot(t).on;function o(t){e.Slides.forEach((function(e){var n=D(e.container||e.slide,"img");n&&n.src&&r(t,n,e)}))}function r(t,e,n){n.style("background",t?'center/cover no-repeat url("'+e.src+'")':"",!0),B(e,t?"none":"")}return{mount:function(){n.cover&&(i(Dt,l(r,!0)),i([ht,Lt,St],l(o,!0)))},destroy:l(o,!1)}},Scroll:function(t,e,n){var i,o,r=Ot(t),a=r.on,s=r.emit,u=t.state.set,c=e.Move,d=c.getPosition,f=c.getLimit,p=c.exceededLimit,v=c.translate,m=t.is(Oe),g=1;function h(t,n,r,a,f){var v=d();if(E(),r&&(!m||!p())){var h=e.Layout.sliderSize(),w=ft(t)*h*at(ut(t)/h)||0;t=c.toPosition(e.Controller.toDest(t%h))+w}var S=ct(v,t,1);g=1,n=S?0:n||rt(ut(t-v)/1.5,800),o=a,i=zt(n,y,l(b,v,t,f),1),u(5),s(xt),i.start()}function y(){u(3),o&&o(),s(Ct)}function b(t,e,i,r){var a,s,u=d(),c=(t+(e-t)*(a=r,(s=n.easingFunc)?s(a):1-Math.pow(1-a,4))-u)*g;v(u+c),m&&!i&&p()&&(g*=.6,ut(c)<10&&h(f(p(!0)),600,!1,o,!0))}function E(){i&&i.cancel()}function w(){i&&!i.isPaused()&&(E(),y())}return{mount:function(){a(bt,E),a([Lt,St],w)},destroy:E,scroll:h,cancel:w}},Drag:function(t,e,n){var i,o,r,a,s,u,c,l,d=Ot(t),p=d.on,v=d.emit,g=d.bind,h=d.unbind,y=t.state,b=e.Move,E=e.Scroll,w=e.Controller,S=e.Elements.track,L=e.Media.reduce,_=e.Direction,k=_.resolve,x=_.orient,C=b.getPosition,P=b.exceededLimit,q=!1;function M(){var t=n.drag;B(!t),a="free"===t}function D(t){if(u=!1,!c){var e=H(t);i=t.target,o=n.noDrag,A(i,"."+he+", ."+pe)||o&&A(i,o)||!e&&t.button||(w.isBusy()?J(t,!0):(l=e?S:window,s=y.is([4,5]),r=null,g(l,De,T,Fe),g(l,Te,O,Fe),b.cancel(),E.cancel(),I(t)))}var i,o}function T(e){if(y.is(6)||(y.set(6),v("drag")),e.cancelable)if(s){b.translate(i+N(e)/(q&&t.is(Oe)?5:1));var o=F(e)>200,r=q!==(q=P());(o||r)&&I(e),u=!0,v("dragging"),J(e)}else(function(t){return ut(N(t))>ut(N(t,!0))})(e)&&(s=function(t){var e=n.dragMinThreshold,i=m(e),o=i&&e.mouse||0,r=(i?e.touch:+e)||10;return ut(N(t))>(H(t)?r:o)}(e),J(e))}function O(i){y.is(6)&&(y.set(3),v("dragged")),s&&(function(i){var o=function(e){if(t.is(ze)||!q){var n=F(e);if(n&&n<200)return N(e)/n}return 0}(i),r=function(t){return C()+ft(t)*ot(ut(t)*(n.flickPower||600),a?1/0:e.Layout.listSize()*(n.flickMaxPages||1))}(o),s=n.rewind&&n.rewindByDrag;L(!1),a?w.scroll(r,0,n.snap):t.is(Ie)?w.go(x(ft(o))<0?s?"<":"-":s?">":"+"):t.is(Oe)&&q&&s?w.go(P(!0)?">":"<"):w.go(w.toDest(r),!0),L(!0)}(i),J(i)),h(l,De,T),h(l,Te,O),s=!1}function z(t){!c&&u&&J(t,!0)}function I(t){r=o,o=t,i=C()}function N(t,e){return R(t,e)-R(j(t),e)}function F(t){return Z(t)-Z(j(t))}function j(t){return o===t&&r||o}function R(t,e){return(H(t)?t.changedTouches[0]:t)["page"+k(e?"Y":"X")]}function H(t){return"undefined"!=typeof TouchEvent&&t instanceof TouchEvent}function B(t){c=t}return{mount:function(){g(S,De,f,Fe),g(S,Te,f,Fe),g(S,Me,D,Fe),g(S,"click",z,{capture:!0}),g(S,"dragstart",J),p([ht,Lt],M)},disable:B,isDragging:function(){return s}}},Keyboard:function(t,e,n){var i,o,r=Ot(t),a=r.on,s=r.bind,u=r.unbind,c=t.root,l=e.Direction.resolve;function f(){var t=n.keyboard;t&&(i="global"===t?window:c,s(i,He,m))}function p(){u(i,He)}function v(){var t=o;o=!0,d((function(){o=t}))}function m(e){if(!o){var n=Re(e);n===l(Nt)?t.go("<"):n===l(Ft)&&t.go(">")}}return{mount:function(){f(),a(Lt,p),a(Lt,f),a(bt,v)},destroy:p,disable:function(t){o=t}}},LazyLoad:function(t,e,n){var i=Ot(t),o=i.on,r=i.off,a=i.bind,s=i.emit,c="sequential"===n.lazyLoad,d=[Et,Ct],f=[];function p(){u(f),e.Slides.forEach((function(t){V(t.slide,Xe).forEach((function(e){var i=X(e,Be),o=X(e,We);if(i!==e.src||o!==e.srcset){var r=n.classes.spinner,a=e.parentElement,s=D(a,"."+r)||R("span",r,a);f.push([e,t,s]),e.src||B(e,"none")}}))})),c?h():(r(d),o(d,v),v())}function v(){(f=f.filter((function(e){var i=n.perPage*((n.preloadPages||1)+1)-1;return!e[1].isWithin(t.index,i)||m(e)}))).length||r(d)}function m(t){var e=t[0];C(t[1].slide,xe),a(e,"load error",l(g,t)),j(e,"src",X(e,Be)),j(e,"srcset",X(e,We)),F(e,Be),F(e,We)}function g(t,e){var n=t[0],i=t[1];Q(i.slide,xe),"error"!==e.type&&(Y(t[2]),B(n,""),s(Dt,n,i),s(_t)),c&&h()}function h(){f.length&&m(f.shift())}return{mount:function(){n.lazyLoad&&(p(),o(St,p))},destroy:l(u,f),check:v}},Pagination:function(t,e,n){var i,o,r=Ot(t),a=r.on,s=r.emit,d=r.bind,f=e.Slides,p=e.Elements,v=e.Controller,m=v.hasFocus,g=v.getIndex,h=v.go,y=e.Direction.resolve,b=p.pagination,E=[];function w(){i&&(Y(b?c(i.children):i),Q(i,o),u(E),i=null),r.destroy()}function S(t){h(">"+t,!0)}function L(t,e){var n=E.length,i=Re(e),o=_(),r=-1;i===y(Ft,!1,o)?r=++t%n:i===y(Nt,!1,o)?r=(--t+n)%n:"Home"===i?r=0:"End"===i&&(r=n-1);var a=E[r];a&&(W(a.button),h(">"+r),J(e,!0))}function _(){return n.paginationDirection||n.direction}function k(t){return E[v.toPage(t)]}function x(){var t=k(g(!0)),e=k(g());if(t){var n=t.button;Q(n,Se),F(n,Ut),j(n,Xt,-1)}if(e){var o=e.button;C(o,Se),j(o,Ut,!0),j(o,Xt,"")}s("pagination:updated",{list:i,items:E},t,e)}return{items:E,mount:function e(){w(),a([Lt,St,Tt],e);var r=n.pagination;b&&B(b,r?"":"none"),r&&(a([bt,xt,Ct],x),function(){var e=t.length,r=n.classes,a=n.i18n,s=n.perPage,u=m()?v.getEnd()+1:st(e/s);C(i=b||R("ul",r.pagination,p.track.parentElement),o=ge+"--"+_()),j(i,Wt,"tablist"),j(i,Jt,a.select),j(i,Qt,_()===Ht?"vertical":"");for(var c=0;c<u;c++){var g=R("li",null,i),h=R("button",{class:r.page,type:"button"},g),y=f.getIn(c).map((function(t){return t.slide.id})),w=!m()&&s>1?a.pageX:a.slideX;d(h,"click",l(S,c)),n.paginationKeyboard&&d(h,"keydown",l(L,c)),j(g,Wt,"presentation"),j(h,Wt,"tab"),j(h,$t,y.join(" ")),j(h,Jt,pt(w,c+1)),j(h,Xt,-1),E.push({li:g,button:h,page:c})}}(),x(),s("pagination:mounted",{list:i,items:E},k(t.index)))},destroy:w,getAt:k,update:x}},Sync:function(t,e,n){var i=n.isNavigation,o=n.slideFocus,r=[];function a(){var e,n;t.splides.forEach((function(e){e.isParent||(c(t,e.splide),c(e.splide,t))})),i&&((n=(e=Ot(t)).on)(wt,f),n("sk",p),n([ht,Lt],d),r.push(e),e.emit(qt,t.splides))}function s(){r.forEach((function(t){t.destroy()})),u(r)}function c(t,e){var n=Ot(t);n.on(bt,(function(t,n,i){e.go(e.is(ze)?i:t)})),r.push(n)}function d(){j(e.Elements.list,Qt,n.direction===Ht?"vertical":"")}function f(e){t.go(e.index)}function p(t,e){_(Ge,Re(e))&&(f(t),J(e))}return{setup:l(e.Media.set,{slideFocus:b(o)?i:o},!0),mount:a,destroy:s,remount:function(){s(),a()}}},Wheel:function(t,e,n){var i=Ot(t).bind,o=0;function r(i){if(i.cancelable){var r=i.deltaY,a=r<0,s=Z(i),u=n.wheelMinThreshold||0,c=n.wheelSleep||0;ut(r)>u&&s-o>c&&(t.go(a?"<":">"),o=s),function(i){return!n.releaseWheel||t.state.is(4)||-1!==e.Controller.getAdjacent(i)}(a)&&J(i)}}return{mount:function(){n.wheel&&i(e.Elements.track,"wheel",r,Fe)}}},Live:function(t,e,n){var i=Ot(t).on,o=e.Elements.track,r=n.live&&!n.isNavigation,a=R("span",Ee),s=zt(90,l(u,!1));function u(t){j(o,ee,t),t?(P(o,a),s.start()):(Y(a),s.cancel())}function c(t){r&&j(o,te,t?"off":"polite")}return{mount:function(){r&&(c(!e.Autoplay.isPaused()),j(o,ne,!0),a.textContent="…",i(At,l(c,!0)),i(Mt,l(c,!1)),i([Et,Ct],l(u,!0)))},disable:c,destroy:function(){F(o,[te,ne,ee]),Y(a)}}}}),Ye={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:Ae,i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function Ue(t,e,n){var i=e.Slides;function o(){i.forEach((function(t){t.style("transform","translateX(-"+100*t.index+"%)")}))}return{mount:function(){Ot(t).on([ht,St],o)},start:function(t,e){i.style("transition","opacity "+n.speed+"ms "+n.easing),d(e)},cancel:f}}function Je(t,e,n){var i,o=e.Move,r=e.Controller,a=e.Scroll,s=e.Elements.list,u=l(H,s,"transition");function c(){u(""),a.cancel()}return{mount:function(){Ot(t).bind(s,"transitionend",(function(t){t.target===s&&i&&(c(),i())}))},start:function(e,s){var c=o.toPosition(e,!0),l=o.getPosition(),d=function(e){var i=n.rewindSpeed;if(t.is(Oe)&&i){var o=r.getIndex(!0),a=r.getEnd();if(0===o&&e>=a||o>=a&&0===e)return i}return n.speed}(e);ut(c-l)>=1&&d>=1?n.useScroll?a.scroll(c,d,!1,s):(u("transform "+d+"ms "+n.easing),o.translate(c,!0),i=s):(o.jump(e),s())},cancel:c}}var Ke=function(){function t(e,n){var i;this.event=Ot(),this.Components={},this.state=(i=1,{set:function(t){i=t},is:function(t){return _(S(t),i)}}),this.splides=[],this._o={},this._E={};var o=y(e)?K(document,e):e;it(o,o+" is invalid."),this.root=o,n=I({label:X(o,Jt)||"",labelledby:X(o,Kt)||""},Ye,t.defaults,n||{});try{I(n,JSON.parse(X(o,nt)))}catch(t){it(!1,"Invalid JSON")}this._o=Object.create(I({},n))}var e,n,i=t.prototype;return i.mount=function(t,e){var n=this,i=this.state,o=this.Components;return it(i.is([1,7]),"Already mounted!"),i.set(1),this._C=o,this._T=e||this._T||(this.is(Ie)?Ue:Je),this._E=t||this._E,O(z({},$e,this._E,{Transition:this._T}),(function(t,e){var i=t(n,o,n._o);o[e]=i,i.setup&&i.setup()})),O(o,(function(t){t.mount&&t.mount()})),this.emit(ht),C(this.root,we),i.set(3),this.emit(yt),this},i.sync=function(t){return this.splides.push({splide:t}),t.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this._C.Sync.remount(),t.Components.Sync.remount()),this},i.go=function(t){return this._C.Controller.go(t),this},i.on=function(t,e){return this.event.on(t,e),this},i.off=function(t){return this.event.off(t),this},i.emit=function(t){var e;return(e=this.event).emit.apply(e,[t].concat(c(arguments,1))),this},i.add=function(t,e){return this._C.Slides.add(t,e),this},i.remove=function(t){return this._C.Slides.remove(t),this},i.is=function(t){return this._o.type===t},i.refresh=function(){return this.emit(St),this},i.destroy=function(t){void 0===t&&(t=!0);var e=this.event,n=this.state;return n.is(1)?Ot(this).on(yt,this.destroy.bind(this,t)):(O(this._C,(function(e){e.destroy&&e.destroy(t)}),!0),e.emit(Pt),e.destroy(),t&&u(this.splides),n.set(7)),this},e=t,(n=[{key:"options",get:function(){return this._o},set:function(t){this._C.Media.set(t,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();Ke.defaults={},Ke.STATES=s,(()=>{const t=document.querySelector(".header-contacts__arrow"),e=document.querySelector(".header-contacts__phone-number-accord");t.addEventListener("click",(()=>{e.classList.toggle("open")}))})(),(()=>{const e=document.querySelectorAll(".menu .menu__icon"),n=document.querySelector(".popup-dialog-menu"),i=document.querySelector(".footer .button-footer");let o,r,a="down";const s=()=>{let t=r,e=document.documentElement.scrollTop;o=requestAnimationFrame(s),"up"==a?t-e<0?(e-=10,document.documentElement.scrollTop=e):cancelAnimationFrame(o):t-e>0?(e+=10,document.documentElement.scrollTop=e):cancelAnimationFrame(o)};e.forEach((e=>{e.addEventListener("click",(()=>{t(".popup-dialog-menu","active-menu")}))})),n.addEventListener("click",(e=>{if(e.target.closest(".close-menu"))t(".popup-dialog-menu","active-menu");else if(e.target.closest(".popup-menu-nav>.popup-menu-nav__item>a")){const n=e.target.attributes.href.value.slice(1);e.preventDefault(),r=document.getElementById(n).offsetTop,t(".popup-dialog-menu","active-menu"),s()}})),i.addEventListener("click",(function(t){const e=this.querySelector("a").attributes.href.value.slice(1);t.preventDefault(),r=document.getElementById(e).offsetTop,a="up",s()}))})(),(()=>{const t=document.querySelectorAll("#faq .accordion li");t.forEach((e=>{e.addEventListener("click",(e=>{e.target.classList.contains("title_block")&&e.target.classList.contains("msg-active")?t.forEach((t=>{t.querySelector("h2").classList.remove("msg-active")})):e.target.classList.contains("title_block")&&!e.target.classList.contains("msg-active")&&(t.forEach((t=>{t.querySelector("h2").classList.remove("msg-active")})),e.target.classList.toggle("msg-active"))}))}))})(),document.getElementById("formula").querySelectorAll(".formula-item").forEach((t=>{let e=t.dataset.popupformula,o=document.querySelector(`.formula-item-popup.${e}`);o&&(t.addEventListener("mouseenter",(()=>{o.getBoundingClientRect().y<0&&o.classList.add("active-bottom"),n(o)})),t.addEventListener("mouseleave",(()=>{i(o,"active-bottom")})))})),document.addEventListener("click",(e=>{let o=e.target.dataset.popup,r=document.querySelector(`.popup.${o}`);if("popup-repair-types"==o&&e.target.classList.contains("menu-link")&&t(".popup-dialog-menu","active-menu"),r){if("popup-transparency"==o||"popup-portfolio"==o){let t=r.querySelector(".splide");if(!t)return;t.classList.add("is-initialized")}n(r),r.addEventListener("click",(t=>{if("popup-consultation"==o)t.target.closest(".feedback-wrap")&&!t.target.classList.contains("close")||i(r);else if("popup-transparency"!=o&&"popup-portfolio"!=o||t.target.closest(".popup-dialog")&&!t.target.classList.contains("close"))t.target.closest(".popup-dialog")&&!t.target.classList.contains("close")||i(r);else{let t=r.querySelector(".splide");if(!t)return;t.classList.remove("is-initialized"),i(r)}}))}})),(t=>{const e=document.querySelectorAll("form"),n=t=>{var e;t.keyCode&&(e=t.keyCode),t.target.selectionStart<3&&t.preventDefault();var n="+7 (___) ___-__-__",i=0,o=(n.replace(/\D/g,""),t.target.value.replace(/\D/g,"")),r=n.replace(/[_\d]/g,(function(t){return i<o.length?o.charAt(i++):t}));-1!=(i=r.indexOf("_"))&&(i<5&&(i=3),r=r.slice(0,i));var a=n.substr(0,t.target.value.length).replace(/_+/g,(function(t){return"\\d{1,"+t.length+"}"})).replace(/[+()]/g,"\\$&");(!(a=new RegExp("^"+a+"$")).test(t.target.value)||t.target.value.length<5||e>47&&e<58)&&(t.target.value=r),"blur"==t.type&&t.target.value.length<5&&(t.target.value="")};e.forEach((t=>{let e=t.querySelector('input[name="phone"]');e.addEventListener("input",n,!1),e.addEventListener("focus",n,!1),e.addEventListener("blur",n,!1),e.addEventListener("keydown",n,!1)}))})(),(()=>{const t=document.querySelector(".popup-repair-types-tab .nav-list-popup-repair"),e=document.querySelector(".popup-repair-types-content-table__list tbody"),n=document.querySelector(".popup-repair-types-content .popup-repair-types-content__head-title"),i=(t,i)=>{let o=t.filter((t=>t.type==i));n.textContent=i,e.innerHTML="",o.forEach((t=>{let n=document.createElement("tr");n.classList.add("mobile-row"),n.classList.add("showHide"),n.innerHTML=`\n      <td class="repair-types-name">${t.name}</td>\n      <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>\n      <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>\n      <td class="repair-types-value">${"м2"==t.units?"м<sup>2</sup>":t.units}</td>\n      <td class="repair-types-value">${t.cost} руб.</td>\n      `,e.append(n)}))};("http://localhost:4545/repairTypes",fetch("http://localhost:4545/repairTypes").then((t=>t.json()))).then((e=>{(e=>{let n=[];e.forEach((t=>{let e=!1;n.length?(n.forEach((n=>{t.type==n&&(e=!0)})),e||n.push(t.type),e=!1):n.push(t.type)})),n.forEach(((e,n)=>{let i=document.createElement("button");i.classList.add("button_o"),i.classList.add("popup-repair-types-nav__item"),0==n&&i.classList.add("active"),i.textContent=e,t.append(i)}))})(e),i(e,"Потолок: Демонтажные работы"),t.addEventListener("click",(t=>{if(t.target.closest(".nav-list-popup-repair")){const n=t.target.closest(".popup-repair-types-nav__item");i(e,n.textContent)}}))})).catch((t=>console.log(t)))})(),document.addEventListener("DOMContentLoaded",(function(){Ke.defaults={direction:"ltr",pauseOnHover:!0,autoplay:!0},document.documentElement.clientWidth<1024&&(new Ke("#formula .splide",{type:"loop",perPage:3,perMove:1,focus:"center",pagination:!1,breakpoints:{768:{perPage:1,gap:".7rem"}}}).mount(),new Ke(".transparency-slider-wrap.splide",{type:"loop",perPage:1,perMove:1,focus:"center",autoplay:!1,pagination:!1}).mount()),document.querySelectorAll("#transparency .transparency-slider.splide__list .transparency-item__img"),new Ke(".popup-transparency-slider-wrap.splide",{type:"loop",perPage:1,perMove:1,focus:"center",autoplay:!1,pagination:!0}).mount();let t=document.querySelector(".popup-transparency-slider-wrap.splide .splide__pagination");t.querySelector(".count").textContent=""+(t.childElementCount-1),document.querySelector(".popup-transparency-slider-wrap.splide").classList.remove("is-initialized");const e=new Ke(".repair-types-slider.splide",{type:"fade",rewind:!0,pagination:!1,arrows:!1,autoplay:!1}),n=new Ke(".repair-types-tab.splide",{autoWidth:!0,perMove:void 0,gap:10,rewind:!0,pagination:!1,focus:"center",arrows:!1,isNavigation:!0,autoplay:!1,breakpoints:{1024:{updateOnMove:!0,type:"loop",perMove:1,perPage:1,gap:0,arrows:!0,autoplay:!1,focus:"center"}}});e.sync(n),e.mount(),n.mount(),document.querySelectorAll(".nestedSplideTrack.splide").forEach((t=>{let e,n;new Ke(t,{type:"loop",perPage:1,pagination:!0,arrows:!1,pauseOnHover:!0}).mount(),e=t.querySelector(".splide__pagination"),n=e.querySelector(".count"),n.textContent="/ "+(e.childElementCount-1)}));const i=new Ke(".portfolio-desktop.splide",{perMove:1,pauseOnHover:!0,autoplay:!1,pagination:!1,omitEnd:!0,arrowPath:"M16.03 5.47a.75.75 0 0 1 0 1.06l-4.773 4.773a.75.75 0 0 1-1.06-1.06L14.439 6l-4.242-4.243a.75.75 0 1 1 1.06-1.06L16.03 5.47zM.5 5.25h15v1.5H.5v-1.5z"});i.on("click",(function(t){let e;new Ke(".popup-portfolio-slider-wrap.splide",{type:"loop",perPage:1,perMove:1,pauseOnHover:!0,autoplay:!1,pagination:!0,start:t.index,updateOnMove:!0}).mount();let n=document.querySelector(".popup-portfolio-slider-wrap.splide");e=n.querySelector(".splide__pagination");let i=document.createElement("div");i.classList.add("count"),i.textContent=e.childElementCount,e.append(i),n.classList.remove("is-initialized")})),i.mount(),new Ke(".reviews-slider-wrap.splide",{type:"loop",perPage:1,autoplay:!1,pagination:!1}).mount()})),o({formId:"feedback1",someElem:[{id:"БАННЕР"}]}),o({formId:"feedback2",someElem:[{id:"Блок МЕЧТА"}]}),o({formId:"feedback3",someElem:[{id:"Блок АКЦИЯ"}]}),o({formId:"feedback4",someElem:[{id:"Блок РАСЧЕТ"}]}),o({formId:"feedback5",someElem:[{id:"Блок ОТВЕТ"}]}),o({formId:"feedback6",someElem:[{id:"Блок КОНСУЛЬТАЦИЯ."}]})})();
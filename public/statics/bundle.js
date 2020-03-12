!function(){"use strict";function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function s(e){e.forEach(n)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(t,...n){if(null==t)return e;const r=t.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function i(e){let t;return c(e,e=>t=e)(),t}function l(e,t,n){e.$$.on_destroy.push(c(t,n))}function u(e,n,r,s){return e[1]&&s?t(r.ctx.slice(),e[1](s(n))):r.ctx}function f(e,t){e.appendChild(t)}function d(e,t,n){e.insertBefore(t,n||null)}function p(e){e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function m(e){return document.createTextNode(e)}function g(){return m(" ")}function $(){return m("")}function y(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function b(e,t){t=""+t,e.data!==t&&(e.data=t)}function v(e,t,n){e.classList[n?"add":"remove"](t)}let w;function k(e){w=e}const x=[],D=[],M=[],_=[],j=Promise.resolve();let J=!1;function T(e){M.push(e)}let L=!1;const Q=new Set;function q(){if(!L){L=!0;do{for(let e=0;e<x.length;e+=1){const t=x[e];k(t),C(t.$$)}for(x.length=0;D.length;)D.pop()();for(let e=0;e<M.length;e+=1){const t=M[e];Q.has(t)||(Q.add(t),t())}M.length=0}while(x.length);for(;_.length;)_.pop()();J=!1,L=!1,Q.clear()}}function C(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(T)}}const E=new Set;let S;function A(e,t){e&&e.i&&(E.delete(e),e.i(t))}function N(e,t,n,r){if(e&&e.o){if(E.has(e))return;E.add(e),S.c.push(()=>{E.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}}function O(e,t){N(e,1,1,()=>{t.delete(e.key)})}function z(e){e&&e.c()}function H(e,t,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=e.$$;a&&a.m(t,r),T(()=>{const t=c.map(n).filter(o);i?i.push(...t):s(t),e.$$.on_mount=[]}),l.forEach(T)}function F(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function W(e,t){-1===e.$$.dirty[0]&&(x.push(e),J||(J=!0,j.then(q)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function B(t,n,o,a,c,i,l=[-1]){const u=w;k(t);const f=n.props||{},d=t.$$={fragment:null,ctx:null,props:i,update:e,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let p=!1;d.ctx=o?o(t,f,(e,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&c(d.ctx[e],d.ctx[e]=s)&&(d.bound[e]&&d.bound[e](s),p&&W(t,e)),n}):[],d.update(),p=!0,s(d.before_update),d.fragment=!!a&&a(d.ctx),n.target&&(n.hydrate?d.fragment&&d.fragment.l(function(e){return Array.from(e.childNodes)}(n.target)):d.fragment&&d.fragment.c(),n.intro&&A(t.$$.fragment),H(t,n.target,n.anchor),q()),k(u)}class R{$destroy(){F(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function V(t){let n;return{c(){n=h("footer"),n.innerHTML='<span class="svelte-1msq720">© 2020 Stéphane Vanraes</span>',y(n,"class","svelte-1msq720")},m(e,t){d(e,n,t)},p:e,i:e,o:e,d(e){e&&p(n)}}}class G extends R{constructor(e){super(),B(this,e,null,V,a,{})}}function K(t){let n;return{c(){n=h("header"),n.innerHTML='<h1 class="svelte-1fmib6z">JQuery Day</h1> \n  <a href="https://github.com/stephane-vanraes/jquery-day" class="svelte-1fmib6z"><span class="svelte-1fmib6z">Github</span></a>',y(n,"class","svelte-1fmib6z")},m(e,t){d(e,n,t)},p:e,i:e,o:e,d(e){e&&p(n)}}}class P extends R{constructor(e){super(),B(this,e,null,K,a,{})}}function Y(e){let t,n;const r=e[1].default,s=function(e,t,n,r){if(e){const s=u(e,t,n,r);return e[0](s)}}(r,e,e[0],null);return{c(){t=h("div"),s&&s.c(),y(t,"class","svelte-nv02h")},m(e,r){d(e,t,r),s&&s.m(t,null),n=!0},p(e,[t]){s&&s.p&&1&t&&s.p(u(r,e,e[0],null),function(e,t,n,r){if(e[2]&&r){const s=e[2](r(n));if(void 0===t.dirty)return s;if("object"==typeof s){const e=[],n=Math.max(t.dirty.length,s.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|s[r];return e}return t.dirty|s}return t.dirty}(r,e[0],t,null))},i(e){n||(A(s,e),n=!0)},o(e){N(s,e),n=!1},d(e){e&&p(t),s&&s.d(e)}}}function I(e,t,n){let{$$slots:r={},$$scope:s}=t;return e.$set=e=>{"$$scope"in e&&n(0,s=e.$$scope)},[s,r]}class U extends R{constructor(e){super(),B(this,e,I,Y,a,{})}}const X=e=>{const t=e.getFullYear(),n=e.getMonth(),r=e.getDate();return`${(e=>{switch(e){case 0:return"January";case 1:return"February";case 2:return"March";case 3:return"April";case 4:return"May";case 5:return"June";case 6:return"July";case 7:return"August";case 8:return"September";case 9:return"October";case 10:return"November";case 11:return"December"}})(n)} ${r}, ${t}`},Z=[];function ee(e,t){return{subscribe:te(e,t).subscribe}}function te(t,n=e){let r;const s=[];function o(e){if(a(t,e)&&(t=e,r)){const e=!Z.length;for(let e=0;e<s.length;e+=1){const n=s[e];n[1](),Z.push(n,t)}if(e){for(let e=0;e<Z.length;e+=2)Z[e][0](Z[e+1]);Z.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(a,c=e){const i=[a,c];return s.push(i),1===s.length&&(r=n(o)||e),a(t),()=>{const e=s.indexOf(i);-1!==e&&s.splice(e,1),0===s.length&&(r(),r=null)}}}}const ne=ee({name:"JQuery",date:new Date(2006,7,26)}),re=(()=>{const{subscribe:e,update:t}=te(i(ne));return{set:e=>t(t=>t===e?i(ne):e),subscribe:e}})(),se={name:"React",date:new Date(2013,4,29),src:"/statics/react.png"},oe={name:"Angular",date:new Date(2010,9,20),src:"/statics/angular.png"},ae={name:"Knockout",date:new Date(2010,5,5),src:"/statics/knockout.png"},ce={name:"Svelte",date:new Date(2016,10,26),src:"/statics/svelte.png"},ie={name:"Vue",date:new Date(2014,1,1),src:"/statics/vue.png"},le={name:"Backbone",date:new Date(2010,9,13),src:"/statics/backbone.png"},ue=ee([ae,oe,se,ie,ce,{name:"Ember",date:new Date(2011,11,7),src:"/statics/ember.png"},le].sort((e,t)=>e.date>t.date?1:-1));function fe(t){let n;return{c(){n=h("span"),n.textContent="N/A",y(n,"class","na svelte-mp4agc")},m(e,t){d(e,n,t)},p:e,d(e){e&&p(n)}}}function de(e){let t,n,r,s,o,a,c=e[4].name+"",i=X(e[3])+"";return{c(){t=h("span"),n=m(c),r=m(" Day"),s=g(),o=h("span"),a=m(i),y(t,"class","svelte-mp4agc"),y(o,"class","svelte-mp4agc")},m(e,c){d(e,t,c),f(t,n),f(t,r),d(e,s,c),d(e,o,c),f(o,a)},p(e,t){16&t&&c!==(c=e[4].name+"")&&b(n,c),8&t&&i!==(i=X(e[3])+"")&&b(a,i)},d(e){e&&p(t),e&&p(s),e&&p(o)}}}function pe(t){let n,r,s,o,a,c,i,l,u,$,w,k,x,D,M,_=X(t[1])+"";function j(e,t){return e[1]>e[4].date?de:e[1]<e[4].date?fe:void 0}let J=j(t),T=J&&J(t);return{c(){n=h("div"),r=h("div"),s=h("img"),a=g(),c=h("h3"),i=m(t[0]),l=g(),u=h("div"),$=h("span"),$.textContent="Released",w=g(),k=h("span"),x=m(_),D=g(),T&&T.c(),s.src!==(o=t[2])&&y(s,"src",o),y(s,"alt",""),y(s,"class","svelte-mp4agc"),y(c,"class","svelte-mp4agc"),y(r,"class","img svelte-mp4agc"),y($,"class","svelte-mp4agc"),y(k,"class","svelte-mp4agc"),y(u,"class","details svelte-mp4agc"),y(n,"class","lib svelte-mp4agc"),v(n,"older",t[6]),v(n,"past",t[5]),v(n,"reference",t[0]===t[4].name)},m(e,o){var p,h,m,g;d(e,n,o),f(n,r),f(r,s),f(r,a),f(r,c),f(c,i),f(n,l),f(n,u),f(u,$),f(u,w),f(u,k),f(k,x),f(u,D),T&&T.m(u,null),p=n,h="click",m=t[8],p.addEventListener(h,m,g),M=()=>p.removeEventListener(h,m,g)},p(e,[t]){4&t&&s.src!==(o=e[2])&&y(s,"src",o),1&t&&b(i,e[0]),2&t&&_!==(_=X(e[1])+"")&&b(x,_),J===(J=j(e))&&T?T.p(e,t):(T&&T.d(1),T=J&&J(e),T&&(T.c(),T.m(u,null))),64&t&&v(n,"older",e[6]),32&t&&v(n,"past",e[5]),17&t&&v(n,"reference",e[0]===e[4].name)},i:e,o:e,d(e){e&&p(n),T&&T.d(),M()}}}function he(e,t,n){let r;l(e,re,e=>n(4,r=e));let s,o,a,c,{name:i=""}=t,{date:u=new Date}=t,{src:f=""}=t;return e.$set=e=>{"name"in e&&n(0,i=e.name),"date"in e&&n(1,u=e.date),"src"in e&&n(2,f=e.src)},e.$$.update=()=>{2&e.$$.dirty&&(s=Math.round((Date.now()-u.getTime())/864e5)),18&e.$$.dirty&&n(3,o=((e,t)=>{console.log(e,t);let n=Math.round((e.getTime()-t.getTime())/864e5),r=new Date(e);return r.setDate(r.getDate()+n),r})(u,r.date)),8&e.$$.dirty&&n(5,a=o<Date.now()),18&e.$$.dirty&&n(6,c=u<r.date),16&e.$$.dirty&&console.log(r.date)},[i,u,f,o,r,a,c,s,function(t){!function(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(e=>e(t))}(e,t)}]}class me extends R{constructor(e){super(),B(this,e,he,pe,a,{name:0,date:1,src:2})}}function ge(e,t,n){const r=e.slice();return r[4]=t[n],r}function $e(e,n){let r,s;const o=[n[4]];let a={};for(let e=0;e<o.length;e+=1)a=t(a,o[e]);const c=new me({props:a});return c.$on("click",(function(...e){return n[3](n[4],...e)})),{key:e,first:null,c(){r=$(),z(c.$$.fragment),this.first=r},m(e,t){d(e,r,t),H(c,e,t),s=!0},p(e,t){n=e;const r=2&t?function(e,t){const n={},r={},s={$$scope:1};let o=e.length;for(;o--;){const a=e[o],c=t[o];if(c){for(const e in a)e in c||(r[e]=1);for(const e in c)s[e]||(n[e]=c[e],s[e]=1);e[o]=c}else for(const e in a)s[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}(o,[(s=n[4],"object"==typeof s&&null!==s?s:{})]):{};var s;c.$set(r)},i(e){s||(A(c.$$.fragment,e),s=!0)},o(e){N(c.$$.fragment,e),s=!1},d(e){e&&p(r),F(c,e)}}}function ye(e){let t,n,r=[],o=new Map,a=e[1];const c=e=>e[4].name;for(let t=0;t<a.length;t+=1){let n=ge(e,a,t),s=c(n);o.set(s,r[t]=$e(s,n))}return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=$()},m(e,s){for(let t=0;t<r.length;t+=1)r[t].m(e,s);d(e,t,s),n=!0},p(e,n){if(6&n){const a=e[1];S={r:0,c:[],p:S},r=function(e,t,n,r,s,o,a,c,i,l,u,f){let d=e.length,p=o.length,h=d;const m={};for(;h--;)m[e[h].key]=h;const g=[],$=new Map,y=new Map;for(h=p;h--;){const e=f(s,o,h),c=n(e);let i=a.get(c);i?r&&i.p(e,t):(i=l(c,e),i.c()),$.set(c,g[h]=i),c in m&&y.set(c,Math.abs(h-m[c]))}const b=new Set,v=new Set;function w(e){A(e,1),e.m(c,u),a.set(e.key,e),u=e.first,p--}for(;d&&p;){const t=g[p-1],n=e[d-1],r=t.key,s=n.key;t===n?(u=t.first,d--,p--):$.has(s)?!a.has(r)||b.has(r)?w(t):v.has(s)?d--:y.get(r)>y.get(s)?(v.add(r),w(t)):(b.add(s),d--):(i(n,a),d--)}for(;d--;){const t=e[d];$.has(t.key)||i(t,a)}for(;p;)w(g[p-1]);return g}(r,n,c,1,e,a,o,t.parentNode,O,$e,t,ge),S.r||s(S.c),S=S.p}},i(e){if(!n){for(let e=0;e<a.length;e+=1)A(r[e]);n=!0}},o(e){for(let e=0;e<r.length;e+=1)N(r[e]);n=!1},d(e){for(let t=0;t<r.length;t+=1)r[t].d(e);e&&p(t)}}}function be(e){let t,n,r,s,o,a,c,i,l,u,$,v,w,k,x,D,M,_,j,J,T=X(e[0].date)+"";const L=new P({}),Q=new U({props:{$$slots:{default:[ye]},$$scope:{ctx:e}}}),q=new G({});return{c(){z(L.$$.fragment),t=g(),n=h("main"),r=h("section"),s=h("h2"),s.textContent="What is JQuery Day ?",o=g(),a=h("p"),c=m("JQuery Day marks the day at which a popular library becomes as old as JQuery was the day the library is released.  This is calculated by taking the release date, figuring out how many days passed since JQuery's release ("),i=m(T),l=m(") and adding it again giving us "),u=h("strong"),u.textContent="Jquery Day",$=m("."),v=g(),w=h("section"),w.innerHTML="<p>Click on any of the libraries to set it as the new reference libary. Clicking the same library again will reset to JQuery.</p>",k=g(),z(Q.$$.fragment),x=g(),D=h("section"),D.innerHTML='<h2 class="svelte-48p2hj">Why this list?</h2> \n        <p>During discussion with other developers it is often mentioned that at &quot;least we do not live in the dark days of jquery anymore&quot;, but those days have been long over with JQuery being replaced by frameworks like those in this list.  Often people still remember how relieved they were when those frameworks were released and they no loner had to rely on JQuery.  What they do not seem to realize however is how long we have had some of these compared to how long we had to suffer from JQuery.</p>',M=g(),_=h("section"),_.innerHTML='<h2 class="svelte-48p2hj">Disclaimer</h2> \n        <p>This site has no intention whatsoever to pass judgement on any of the frameworks or libraries mentioned but is purely made to put certain things in perspective.</p> \n        <p>For those interested, the site is made in Svelte.</p>',j=g(),z(q.$$.fragment),y(s,"class","svelte-48p2hj"),y(r,"class","svelte-48p2hj"),y(w,"class","svelte-48p2hj"),y(D,"class","svelte-48p2hj"),y(_,"class","svelte-48p2hj")},m(e,p){H(L,e,p),d(e,t,p),d(e,n,p),f(n,r),f(r,s),f(r,o),f(r,a),f(a,c),f(a,i),f(a,l),f(a,u),f(a,$),f(n,v),f(n,w),f(n,k),H(Q,n,null),f(n,x),f(n,D),f(n,M),f(n,_),d(e,j,p),H(q,e,p),J=!0},p(e,[t]){(!J||1&t)&&T!==(T=X(e[0].date)+"")&&b(i,T);const n={};134&t&&(n.$$scope={dirty:t,ctx:e}),Q.$set(n)},i(e){J||(A(L.$$.fragment,e),A(Q.$$.fragment,e),A(q.$$.fragment,e),J=!0)},o(e){N(L.$$.fragment,e),N(Q.$$.fragment,e),N(q.$$.fragment,e),J=!1},d(e){F(L,e),e&&p(t),e&&p(n),F(Q),e&&p(j),F(q,e)}}}function ve(e,t,n){let r,s,o;l(e,ne,e=>n(0,r=e)),l(e,ue,e=>n(1,s=e)),l(e,re,e=>n(2,o=e));return[r,s,o,e=>function(e,t,n=t){return e.set(n),t}(re,o=e)]}class we extends R{constructor(e){super(),B(this,e,ve,be,a,{})}}document.addEventListener("DOMContentLoaded",()=>{new we({target:document.querySelector("wrapper")})})}();

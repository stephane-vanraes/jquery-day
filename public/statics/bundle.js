!function(t,e){t.getElementById("livereloadscript")||((e=t.createElement("script")).async=1,e.src="//"+(window.location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",e.id="livereloadscript",t.head.appendChild(e))}(window.document),function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function i(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function u(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function h(){return p(" ")}function g(){return p("")}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e){e=""+e,t.data!==e&&(t.data=e)}function y(t,e,n){t.classList[n?"add":"remove"](e)}let b;function v(t){b=t}const w=[],x=[],D=[],k=[],_=Promise.resolve();let M=!1;function J(t){D.push(t)}let j=!1;const C=new Set;function E(){if(!j){j=!0;do{for(let t=0;t<w.length;t+=1){const e=w[t];v(e),S(e.$$)}for(w.length=0;x.length;)x.pop()();for(let t=0;t<D.length;t+=1){const e=D[t];C.has(e)||(C.add(e),e())}D.length=0}while(w.length);for(;k.length;)k.pop()();M=!1,j=!1,C.clear()}}function S(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(J)}}const T=new Set;let q;function A(t,e){t&&t.i&&(T.delete(t),t.i(e))}function Q(t,e,n,r){if(t&&t.o){if(T.has(t))return;T.add(t),q.c.push(()=>{T.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function L(t,e){Q(t,1,1,()=>{e.delete(t.key)})}function N(t){t&&t.c()}function O(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:u}=t.$$;a&&a.m(e,r),J(()=>{const e=c.map(n).filter(o);i?i.push(...e):s(e),t.$$.on_mount=[]}),u.forEach(J)}function z(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function B(t,e){-1===t.$$.dirty[0]&&(w.push(t),M||(M=!0,_.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function F(e,n,o,a,c,i,u=[-1]){const l=b;v(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:r(),dirty:u};let p=!1;d.ctx=o?o(e,f,(t,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=s)&&(d.bound[t]&&d.bound[t](s),p&&B(e,t)),n}):[],d.update(),p=!0,s(d.before_update),d.fragment=!!a&&a(d.ctx),n.target&&(n.hydrate?d.fragment&&d.fragment.l(function(t){return Array.from(t.childNodes)}(n.target)):d.fragment&&d.fragment.c(),n.intro&&A(e.$$.fragment),O(e,n.target,n.anchor),E()),v(l)}class H{$destroy(){z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function R(e){let n;return{c(){n=d("footer"),n.innerHTML='<span class="svelte-1aqmg2y">© 2020 Stéphane Vanraes</span> \n  <span class="svelte-1aqmg2y">This list is for informational (and entertainment) purposes only and does\n    not reflect any opinion on the mentioned frameworks.</span>',m(n,"class","svelte-1aqmg2y")},m(t,e){l(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class V extends H{constructor(t){super(),F(this,t,null,R,a,{})}}function G(e){let n;return{c(){n=d("header"),n.innerHTML='<h1 class="svelte-1fmib6z">JQuery Day</h1> \n  <a href="https://github.com/stephane-vanraes/jquery-day" class="svelte-1fmib6z"><span class="svelte-1fmib6z">Github</span></a>',m(n,"class","svelte-1fmib6z")},m(t,e){l(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class I extends H{constructor(t){super(),F(this,t,null,G,a,{})}}function K(t){let e,n;const r=t[1].default,s=function(t,e,n,r){if(t){const s=i(t,e,n,r);return t[0](s)}}(r,t,t[0],null);return{c(){e=d("div"),s&&s.c(),m(e,"class","svelte-nv02h")},m(t,r){l(t,e,r),s&&s.m(e,null),n=!0},p(t,[e]){s&&s.p&&1&e&&s.p(i(r,t,t[0],null),function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(r,t[0],e,null))},i(t){n||(A(s,t),n=!0)},o(t){Q(s,t),n=!1},d(t){t&&f(e),s&&s.d(t)}}}function P(t,e,n){let{$$slots:r={},$$scope:s}=e;return t.$set=t=>{"$$scope"in t&&n(0,s=t.$$scope)},[s,r]}class W extends H{constructor(t){super(),F(this,t,P,K,a,{})}}const Y=t=>{const e=t.getFullYear(),n=t.getMonth(),r=t.getDate();return`${(t=>{switch(t){case 0:return"January";case 1:return"February";case 2:return"March";case 3:return"April";case 4:return"May";case 5:return"June";case 6:return"July";case 7:return"August";case 8:return"September";case 9:return"October";case 10:return"November";case 11:return"December"}})(n)} ${r}, ${e}`},U=[];function X(t,e){return{subscribe:Z(t,e).subscribe}}function Z(e,n=t){let r;const s=[];function o(t){if(a(e,t)&&(e=t,r)){const t=!U.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),U.push(n,e)}if(t){for(let t=0;t<U.length;t+=2)U[t][0](U[t+1]);U.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,c=t){const i=[a,c];return s.push(i),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(i);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const tt=X({name:"JQuery",date:new Date(2006,7,26)}),et={name:"React",date:new Date(2013,4,29),src:"/statics/react.png"},nt={name:"Angular",date:new Date(2010,9,20),src:"/statics/angular.png"},rt={name:"Knockout",date:new Date(2010,5,5),src:"/statics/knockout.png"},st={name:"Svelte",date:new Date(2016,10,26),src:"/statics/svelte.png"},ot={name:"Vue",date:new Date(2014,1,1),src:"/statics/vue.png"},at={name:"Backbone",date:new Date(2010,9,13),src:"/statics/backbone.png"},ct=X([rt,nt,et,ot,st,{name:"Ember",date:new Date(2011,11,7),src:"/statics/ember.png"},at].sort((t,e)=>t.date>e.date?1:-1));function it(e){let n,r,s,o,a,c,i,g,b,v,w,x,D,k,_,M,J,j,C=Y(e[1])+"",E=Y(e[3])+"";return{c(){n=d("div"),r=d("div"),s=d("img"),a=h(),c=d("h3"),i=p(e[0]),g=h(),b=d("div"),v=d("span"),v.textContent="Released",w=h(),x=d("span"),D=p(C),k=h(),_=d("span"),_.textContent="JQuery Date",M=h(),J=d("span"),j=p(E),s.src!==(o=e[2])&&m(s,"src",o),m(s,"alt",""),m(s,"class","svelte-1vxbdp8"),m(c,"class","svelte-1vxbdp8"),m(r,"class","img svelte-1vxbdp8"),m(v,"class","svelte-1vxbdp8"),m(x,"class","svelte-1vxbdp8"),m(_,"class","svelte-1vxbdp8"),m(J,"class","svelte-1vxbdp8"),m(b,"class","details svelte-1vxbdp8"),m(n,"class","lib svelte-1vxbdp8"),y(n,"past",e[4])},m(t,e){l(t,n,e),u(n,r),u(r,s),u(r,a),u(r,c),u(c,i),u(n,g),u(n,b),u(b,v),u(b,w),u(b,x),u(x,D),u(b,k),u(b,_),u(b,M),u(b,J),u(J,j)},p(t,[e]){4&e&&s.src!==(o=t[2])&&m(s,"src",o),1&e&&$(i,t[0]),2&e&&C!==(C=Y(t[1])+"")&&$(D,C),8&e&&E!==(E=Y(t[3])+"")&&$(j,E),16&e&&y(n,"past",t[4])},i:t,o:t,d(t){t&&f(n)}}}function ut(t,e,n){let r;c(t,tt,t=>n(7,r=t));let s,o,a,i,{name:u=""}=e,{date:l=new Date}=e,{src:f=""}=e;return t.$set=t=>{"name"in t&&n(0,u=t.name),"date"in t&&n(1,l=t.date),"src"in t&&n(2,f=t.src)},t.$$.update=()=>{7&t.$$.dirty&&console.log(u,l,f),2&t.$$.dirty&&(s=Math.round((Date.now()-l.getTime())/864e5)),130&t.$$.dirty&&n(6,o=Math.round((l.getTime()-r.date.getTime())/864e5)),2&t.$$.dirty&&n(3,a=new Date(l)),74&t.$$.dirty&&a.setDate(l.getDate()+o),8&t.$$.dirty&&n(4,i=a<Date.now())},[u,l,f,a,i]}class lt extends H{constructor(t){super(),F(this,t,ut,it,a,{name:0,date:1,src:2})}}function ft(t,e,n){const r=t.slice();return r[2]=e[n],r}function dt(t,n){let r,s;const o=[n[2]];let a={};for(let t=0;t<o.length;t+=1)a=e(a,o[t]);const c=new lt({props:a});return{key:t,first:null,c(){r=g(),N(c.$$.fragment),this.first=r},m(t,e){l(t,r,e),O(c,t,e),s=!0},p(t,e){const n=2&e?function(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],c=e[o];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)s[t]||(n[t]=c[t],s[t]=1);t[o]=c}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}(o,[(r=t[2],"object"==typeof r&&null!==r?r:{})]):{};var r;c.$set(n)},i(t){s||(A(c.$$.fragment,t),s=!0)},o(t){Q(c.$$.fragment,t),s=!1},d(t){t&&f(r),z(c,t)}}}function pt(t){let e,n,r=[],o=new Map,a=t[1];const c=t=>t[2].name;for(let e=0;e<a.length;e+=1){let n=ft(t,a,e),s=c(n);o.set(s,r[e]=dt(s,n))}return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=g()},m(t,s){for(let e=0;e<r.length;e+=1)r[e].m(t,s);l(t,e,s),n=!0},p(t,n){if(2&n){const a=t[1];q={r:0,c:[],p:q},r=function(t,e,n,r,s,o,a,c,i,u,l,f){let d=t.length,p=o.length,h=d;const g={};for(;h--;)g[t[h].key]=h;const m=[],$=new Map,y=new Map;for(h=p;h--;){const t=f(s,o,h),c=n(t);let i=a.get(c);i?r&&i.p(t,e):(i=u(c,t),i.c()),$.set(c,m[h]=i),c in g&&y.set(c,Math.abs(h-g[c]))}const b=new Set,v=new Set;function w(t){A(t,1),t.m(c,l),a.set(t.key,t),l=t.first,p--}for(;d&&p;){const e=m[p-1],n=t[d-1],r=e.key,s=n.key;e===n?(l=e.first,d--,p--):$.has(s)?!a.has(r)||b.has(r)?w(e):v.has(s)?d--:y.get(r)>y.get(s)?(v.add(r),w(e)):(b.add(s),d--):(i(n,a),d--)}for(;d--;){const e=t[d];$.has(e.key)||i(e,a)}for(;p;)w(m[p-1]);return m}(r,n,c,1,t,a,o,e.parentNode,L,dt,e,ft),q.r||s(q.c),q=q.p}},i(t){if(!n){for(let t=0;t<a.length;t+=1)A(r[t]);n=!0}},o(t){for(let t=0;t<r.length;t+=1)Q(r[t]);n=!1},d(t){for(let e=0;e<r.length;e+=1)r[e].d(t);t&&f(e)}}}function ht(t){let e,n,r,s,o,a,c,i,g,y,b,v,w,x=Y(t[0].date)+"";const D=new I({}),k=new W({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),_=new V({});return{c(){N(D.$$.fragment),e=h(),n=d("section"),r=d("h2"),r.textContent="What is JQuery Day ?",s=h(),o=d("p"),a=p("JQuery Day marks the day at which a popular library becomes as old as JQuery was the day the library is released.  This is calculated by taking the release date, figuring out how many days passed since JQuery's release ("),c=p(x),i=p(") and adding it again giving us "),g=d("strong"),g.textContent="Jquery Day",y=p("."),b=h(),N(k.$$.fragment),v=h(),N(_.$$.fragment),m(r,"class","svelte-48p2hj"),m(n,"class","svelte-48p2hj")},m(t,f){O(D,t,f),l(t,e,f),l(t,n,f),u(n,r),u(n,s),u(n,o),u(o,a),u(o,c),u(o,i),u(o,g),u(o,y),l(t,b,f),O(k,t,f),l(t,v,f),O(_,t,f),w=!0},p(t,[e]){(!w||1&e)&&x!==(x=Y(t[0].date)+"")&&$(c,x);const n={};34&e&&(n.$$scope={dirty:e,ctx:t}),k.$set(n)},i(t){w||(A(D.$$.fragment,t),A(k.$$.fragment,t),A(_.$$.fragment,t),w=!0)},o(t){Q(D.$$.fragment,t),Q(k.$$.fragment,t),Q(_.$$.fragment,t),w=!1},d(t){z(D,t),t&&f(e),t&&f(n),t&&f(b),z(k,t),t&&f(v),z(_,t)}}}function gt(t,e,n){let r,s;return c(t,tt,t=>n(0,r=t)),c(t,ct,t=>n(1,s=t)),[r,s]}class mt extends H{constructor(t){super(),F(this,t,gt,ht,a,{})}}document.addEventListener("DOMContentLoaded",()=>{new mt({target:document.querySelector("wrapper")})})}();

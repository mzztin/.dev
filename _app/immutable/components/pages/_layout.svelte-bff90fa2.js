import{S as A,i as N,s as j,l as $,m as g,n as E,h as u,C as H,p as l,b,D as d,B as y,r as x,u as B,v as W,E as C,F as S,G as U,H as J,I as K,a as D,J as V,c as M,K as Y,L as Q,w as O,x as I,y as L,f as T,t as k,d as X,M as Z,N as ee,O as te,z as P,g as se}from"../../chunks/index-a69c9355.js";import{P as ae}from"../../chunks/LanguageSelector.svelte_svelte_type_style_lang-dfc0dd3d.js";/* empty css                                                            */import{t as z,l as ne,s as re}from"../../chunks/index-7e7c907e.js";import{p as le}from"../../chunks/stores-6afeb0b8.js";import"../../chunks/index-b44d4f55.js";function oe(i){let e,s,t;return{c(){e=$("div"),s=$("img"),this.h()},l(r){e=g(r,"DIV",{class:!0});var a=E(e);s=g(a,"IMG",{src:!0,alt:!0,class:!0}),a.forEach(u),this.h()},h(){H(s.src,t=ae)||l(s,"src",t),l(s,"alt","brand"),l(s,"class","svelte-1wxj88j"),l(e,"class","container svelte-1wxj88j")},m(r,a){b(r,e,a),d(e,s)},p:y,i:y,o:y,d(r){r&&u(e)}}}class ie extends A{constructor(e){super(),N(this,e,null,oe,j,{})}}function ce(i){let e,s,t=i[0].FOOTER+"",r;return{c(){e=$("footer"),s=$("p"),r=x(t),this.h()},l(a){e=g(a,"FOOTER",{class:!0});var o=E(e);s=g(o,"P",{class:!0});var f=E(s);r=B(f,t),f.forEach(u),o.forEach(u),this.h()},h(){l(s,"class","svelte-1dck895"),l(e,"class","svelte-1dck895")},m(a,o){b(a,e,o),d(e,s),d(s,r)},p(a,[o]){o&1&&t!==(t=a[0].FOOTER+"")&&W(r,t)},i:y,o:y,d(a){a&&u(e)}}}function ue(i,e,s){let t;return C(i,z,r=>s(0,t=r)),[t]}class me extends A{constructor(e){super(),N(this,e,ue,ce,j,{})}}function fe(i){let e,s,t,r,a,o,f,m,h,c,_,v,n;return{c(){e=$("div"),s=$("p"),t=$("span"),r=x("EN"),f=x(`
		|
		`),m=$("span"),h=x("DE"),this.h()},l(p){e=g(p,"DIV",{class:!0});var w=E(e);s=g(w,"P",{class:!0});var F=E(s);t=g(F,"SPAN",{style:!0,class:!0});var R=E(t);r=B(R,"EN"),R.forEach(u),f=B(F,`
		|
		`),m=g(F,"SPAN",{class:!0,style:!0});var q=E(m);h=B(q,"DE"),q.forEach(u),F.forEach(u),w.forEach(u),this.h()},h(){l(t,"style",a=i[0]==="EN"?"font-weight: bold;":""),l(t,"class",o=S(`${i[0]==="EN"?"active":""}`)+" svelte-1jiy099"),l(m,"class",c=S(`${i[0]==="DE"?"active":""}`)+" svelte-1jiy099"),l(m,"style",_=i[0]==="DE"?"font-weight: bold;":""),l(s,"class","svelte-1jiy099"),l(e,"class","selector svelte-1jiy099")},m(p,w){b(p,e,w),d(e,s),d(s,t),d(t,r),d(s,f),d(s,m),d(m,h),v||(n=[U(t,"click",i[2]),U(m,"click",i[3])],v=!0)},p(p,[w]){w&1&&a!==(a=p[0]==="EN"?"font-weight: bold;":"")&&l(t,"style",a),w&1&&o!==(o=S(`${p[0]==="EN"?"active":""}`)+" svelte-1jiy099")&&l(t,"class",o),w&1&&c!==(c=S(`${p[0]==="DE"?"active":""}`)+" svelte-1jiy099")&&l(m,"class",c),w&1&&_!==(_=p[0]==="DE"?"font-weight: bold;":"")&&l(m,"style",_)},i:y,o:y,d(p){p&&u(e),v=!1,J(n)}}}function pe(i,e,s){let t;C(i,ne,f=>s(0,t=f));const r=f=>{re(f)};return[t,r,()=>r("EN"),()=>r("DE")]}class _e extends A{constructor(e){super(),N(this,e,pe,fe,j,{})}}function he(i){let e,s,t,r,a,o,f=i[0].BACK_BUTTON+"",m;return{c(){e=$("div"),s=$("a"),t=K("svg"),r=K("path"),a=D(),o=$("p"),m=x(f),this.h()},l(h){e=g(h,"DIV",{class:!0});var c=E(e);s=g(c,"A",{href:!0,class:!0});var _=E(s);t=V(_,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0});var v=E(t);r=V(v,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),E(r).forEach(u),v.forEach(u),a=M(_),o=g(_,"P",{class:!0});var n=E(o);m=B(n,f),n.forEach(u),_.forEach(u),c.forEach(u),this.h()},h(){l(r,"stroke-linecap","round"),l(r,"stroke-linejoin","round"),l(r,"d","M10 19l-7-7m0 0l7-7m-7 7h18"),l(t,"xmlns","http://www.w3.org/2000/svg"),l(t,"class","h-6 w-6 svelte-xvubnx"),l(t,"fill","none"),l(t,"viewBox","0 0 24 24"),l(t,"stroke","currentColor"),l(t,"stroke-width","2"),l(o,"class","svelte-xvubnx"),l(s,"href","/"),l(s,"class","svelte-xvubnx"),l(e,"class","back svelte-xvubnx")},m(h,c){b(h,e,c),d(e,s),d(s,t),d(t,r),d(s,a),d(s,o),d(o,m)},p(h,[c]){c&1&&f!==(f=h[0].BACK_BUTTON+"")&&W(m,f)},i:y,o:y,d(h){h&&u(e)}}}function de(i,e,s){let t;return C(i,z,r=>s(0,t=r)),[t]}class ve extends A{constructor(e){super(),N(this,e,de,he,j,{})}}function $e(i){let e,s,t,r,a,o,f,m,h;return document.title=e=i[0].TITLE,{c(){s=$("meta"),t=$("meta"),r=$("meta"),a=$("meta"),o=$("meta"),f=$("meta"),m=$("meta"),h=$("meta"),this.h()},l(c){const _=Y('[data-svelte="svelte-1knhsst"]',document.head);s=g(_,"META",{name:!0,content:!0}),t=g(_,"META",{name:!0,content:!0}),r=g(_,"META",{name:!0,content:!0}),a=g(_,"META",{name:!0,content:!0}),o=g(_,"META",{property:!0,content:!0}),f=g(_,"META",{property:!0,content:!0}),m=g(_,"META",{property:!0,content:!0}),h=g(_,"META",{name:!0,content:!0}),_.forEach(u),this.h()},h(){l(s,"name","og:title"),l(s,"content","Martin - Developer"),l(t,"name","og:description"),l(t,"content","Woah! This is Martin's personal website"),l(r,"name","description"),l(r,"content","Woah! This is Martin's personal website"),l(a,"name","og:image"),l(a,"content","https://mzztin.dev/martin.png"),l(o,"property","og:url"),l(o,"content","https://mzztin.dev"),l(f,"property","og:locale"),l(f,"content","en_US"),l(m,"property","og:type"),l(m,"content","website"),l(h,"name","theme-color"),l(h,"content","#D3D3D3")},m(c,_){d(document.head,s),d(document.head,t),d(document.head,r),d(document.head,a),d(document.head,o),d(document.head,f),d(document.head,m),d(document.head,h)},p(c,[_]){_&1&&e!==(e=c[0].TITLE)&&(document.title=e)},i:y,o:y,d(c){u(s),u(t),u(r),u(a),u(o),u(f),u(m),u(h)}}}function ge(i,e,s){let t;return C(i,z,r=>s(0,t=r)),[t]}class Ee extends A{constructor(e){super(),N(this,e,ge,$e,j,{})}}function G(i){let e,s,t,r;return e=new ve({}),t=new ie({}),{c(){O(e.$$.fragment),s=D(),O(t.$$.fragment)},l(a){I(e.$$.fragment,a),s=M(a),I(t.$$.fragment,a)},m(a,o){L(e,a,o),b(a,s,o),L(t,a,o),r=!0},i(a){r||(T(e.$$.fragment,a),T(t.$$.fragment,a),r=!0)},o(a){k(e.$$.fragment,a),k(t.$$.fragment,a),r=!1},d(a){P(e,a),a&&u(s),P(t,a)}}}function ye(i){let e,s,t,r,a,o,f,m,h;e=new Ee({}),t=new _e({});let c=i[0].url.pathname!=="/"&&G();const _=i[2].default,v=Q(_,i,i[1],null);return m=new me({}),{c(){O(e.$$.fragment),s=D(),O(t.$$.fragment),r=D(),c&&c.c(),a=D(),o=$("body"),v&&v.c(),f=D(),O(m.$$.fragment),this.h()},l(n){I(e.$$.fragment,n),s=M(n),I(t.$$.fragment,n),r=M(n),c&&c.l(n),a=M(n),o=g(n,"BODY",{class:!0});var p=E(o);v&&v.l(p),p.forEach(u),f=M(n),I(m.$$.fragment,n),this.h()},h(){l(o,"class","svelte-1iq7whr")},m(n,p){L(e,n,p),b(n,s,p),L(t,n,p),b(n,r,p),c&&c.m(n,p),b(n,a,p),b(n,o,p),v&&v.m(o,null),b(n,f,p),L(m,n,p),h=!0},p(n,[p]){n[0].url.pathname!=="/"?c?p&1&&T(c,1):(c=G(),c.c(),T(c,1),c.m(a.parentNode,a)):c&&(se(),k(c,1,1,()=>{c=null}),X()),v&&v.p&&(!h||p&2)&&Z(v,_,n,n[1],h?te(_,n[1],p,null):ee(n[1]),null)},i(n){h||(T(e.$$.fragment,n),T(t.$$.fragment,n),T(c),T(v,n),T(m.$$.fragment,n),h=!0)},o(n){k(e.$$.fragment,n),k(t.$$.fragment,n),k(c),k(v,n),k(m.$$.fragment,n),h=!1},d(n){P(e,n),n&&u(s),P(t,n),n&&u(r),c&&c.d(n),n&&u(a),n&&u(o),v&&v.d(n),n&&u(f),P(m,n)}}}function be(i,e,s){let t;C(i,le,o=>s(0,t=o));let{$$slots:r={},$$scope:a}=e;return i.$$set=o=>{"$$scope"in o&&s(1,a=o.$$scope)},[t,a,r]}class Ne extends A{constructor(e){super(),N(this,e,be,ye,j,{})}}export{Ne as default};
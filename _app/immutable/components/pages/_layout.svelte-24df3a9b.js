import{S as B,i as L,s as I,l as v,m as $,n as y,h as u,C as Q,p as l,b as T,D as d,B as w,r as A,u as j,v as x,E as F,F as V,G as W,H,I as U,a as N,J as q,c as M,K as J,L as Y,w as P,x as C,y as S,f as k,t as b,d as X,M as Z,N as tt,O as et,z as R,g as st}from"../../chunks/index-a69c9355.js";import{P as at}from"../../chunks/LanguageSelector.svelte_svelte_type_style_lang-dfc0dd3d.js";/* empty css                                                            */import{t as z,l as nt,s as rt}from"../../chunks/index-7e7c907e.js";import{p as lt}from"../../chunks/stores-6afeb0b8.js";import"../../chunks/index-b44d4f55.js";function ot(i){let t,s,e;return{c(){t=v("div"),s=v("img"),this.h()},l(r){t=$(r,"DIV",{class:!0});var a=y(t);s=$(a,"IMG",{src:!0,alt:!0,class:!0}),a.forEach(u),this.h()},h(){Q(s.src,e=at)||l(s,"src",e),l(s,"alt","brand"),l(s,"class","svelte-1mhkago"),l(t,"class","container svelte-1mhkago")},m(r,a){T(r,t,a),d(t,s)},p:w,i:w,o:w,d(r){r&&u(t)}}}class ct extends B{constructor(t){super(),L(this,t,null,ot,I,{})}}function it(i){let t,s,e=i[0].FOOTER+"",r;return{c(){t=v("footer"),s=v("p"),r=A(e),this.h()},l(a){t=$(a,"FOOTER",{class:!0});var o=y(t);s=$(o,"P",{class:!0});var p=y(s);r=j(p,e),p.forEach(u),o.forEach(u),this.h()},h(){l(s,"class","svelte-1dck895"),l(t,"class","svelte-1dck895")},m(a,o){T(a,t,o),d(t,s),d(s,r)},p(a,[o]){o&1&&e!==(e=a[0].FOOTER+"")&&x(r,e)},i:w,o:w,d(a){a&&u(t)}}}function ut(i,t,s){let e;return F(i,z,r=>s(0,e=r)),[e]}class mt extends B{constructor(t){super(),L(this,t,ut,it,I,{})}}function ft(i){let t,s,e,r,a,o,p,f,h,c,E,_,n;return{c(){t=v("div"),s=v("p"),e=v("span"),r=A("EN"),p=A(`
		|
		`),f=v("span"),h=A("DE"),this.h()},l(m){t=$(m,"DIV",{class:!0});var g=y(t);s=$(g,"P",{class:!0});var D=y(s);e=$(D,"SPAN",{style:!0,class:!0});var O=y(e);r=j(O,"EN"),O.forEach(u),p=j(D,`
		|
		`),f=$(D,"SPAN",{class:!0,style:!0});var G=y(f);h=j(G,"DE"),G.forEach(u),D.forEach(u),g.forEach(u),this.h()},h(){l(e,"style",a=i[0]==="EN"?"font-weight: bold;":""),l(e,"class",o=V(`${i[0]==="EN"?"active":""}`)+" svelte-1jiy099"),l(f,"class",c=V(`${i[0]==="DE"?"active":""}`)+" svelte-1jiy099"),l(f,"style",E=i[0]==="DE"?"font-weight: bold;":""),l(s,"class","svelte-1jiy099"),l(t,"class","selector svelte-1jiy099")},m(m,g){T(m,t,g),d(t,s),d(s,e),d(e,r),d(s,p),d(s,f),d(f,h),_||(n=[W(e,"click",i[2]),W(f,"click",i[3])],_=!0)},p(m,[g]){g&1&&a!==(a=m[0]==="EN"?"font-weight: bold;":"")&&l(e,"style",a),g&1&&o!==(o=V(`${m[0]==="EN"?"active":""}`)+" svelte-1jiy099")&&l(e,"class",o),g&1&&c!==(c=V(`${m[0]==="DE"?"active":""}`)+" svelte-1jiy099")&&l(f,"class",c),g&1&&E!==(E=m[0]==="DE"?"font-weight: bold;":"")&&l(f,"style",E)},i:w,o:w,d(m){m&&u(t),_=!1,H(n)}}}function pt(i,t,s){let e;F(i,nt,p=>s(0,e=p));const r=p=>{rt(p)};return[e,r,()=>r("EN"),()=>r("DE")]}class _t extends B{constructor(t){super(),L(this,t,pt,ft,I,{})}}function dt(i){let t,s,e,r,a,o,p=i[0].BACK_BUTTON+"",f;return{c(){t=v("div"),s=v("a"),e=U("svg"),r=U("path"),a=N(),o=v("p"),f=A(p),this.h()},l(h){t=$(h,"DIV",{class:!0});var c=y(t);s=$(c,"A",{href:!0,class:!0});var E=y(s);e=q(E,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0});var _=y(e);r=q(_,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),y(r).forEach(u),_.forEach(u),a=M(E),o=$(E,"P",{});var n=y(o);f=j(n,p),n.forEach(u),E.forEach(u),c.forEach(u),this.h()},h(){l(r,"stroke-linecap","round"),l(r,"stroke-linejoin","round"),l(r,"d","M10 19l-7-7m0 0l7-7m-7 7h18"),l(e,"xmlns","http://www.w3.org/2000/svg"),l(e,"class","h-6 w-6 svelte-sc9j6g"),l(e,"fill","none"),l(e,"viewBox","0 0 24 24"),l(e,"stroke","currentColor"),l(e,"stroke-width","2"),l(s,"href","/"),l(s,"class","svelte-sc9j6g"),l(t,"class","back svelte-sc9j6g")},m(h,c){T(h,t,c),d(t,s),d(s,e),d(e,r),d(s,a),d(s,o),d(o,f)},p(h,[c]){c&1&&p!==(p=h[0].BACK_BUTTON+"")&&x(f,p)},i:w,o:w,d(h){h&&u(t)}}}function ht(i,t,s){let e;return F(i,z,r=>s(0,e=r)),[e]}class gt extends B{constructor(t){super(),L(this,t,ht,dt,I,{})}}function vt(i){let t,s,e,r,a,o,p,f,h,c,E,_,n;return document.title=t=i[0].TITLE,{c(){s=v("meta"),e=v("meta"),r=v("meta"),a=v("meta"),o=v("meta"),p=v("meta"),f=v("meta"),h=v("meta"),c=v("script"),_=v("script"),n=A(`window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag("js", new Date());

		gtag("config", "G-6NDVBT2QWE");`),this.h()},l(m){const g=J('[data-svelte="svelte-48ybx5"]',document.head);s=$(g,"META",{name:!0,content:!0}),e=$(g,"META",{name:!0,content:!0}),r=$(g,"META",{name:!0,content:!0}),a=$(g,"META",{name:!0,content:!0}),o=$(g,"META",{property:!0,content:!0}),p=$(g,"META",{property:!0,content:!0}),f=$(g,"META",{property:!0,content:!0}),h=$(g,"META",{name:!0,content:!0}),c=$(g,"SCRIPT",{src:!0});var D=y(c);D.forEach(u),_=$(g,"SCRIPT",{});var O=y(_);n=j(O,`window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag("js", new Date());

		gtag("config", "G-6NDVBT2QWE");`),O.forEach(u),g.forEach(u),this.h()},h(){l(s,"name","og:title"),l(s,"content","Martin - Developer"),l(e,"name","og:description"),l(e,"content","Woah! This is Martin's personal website"),l(r,"name","description"),l(r,"content","Woah! This is Martin's personal website"),l(a,"name","og:image"),l(a,"content","https://mzztin.dev/martin.png"),l(o,"property","og:url"),l(o,"content","https://mzztin.dev"),l(p,"property","og:locale"),l(p,"content","en_US"),l(f,"property","og:type"),l(f,"content","website"),l(h,"name","theme-color"),l(h,"content","#D3D3D3"),c.async=!0,Q(c.src,E="https://www.googletagmanager.com/gtag/js?id=G-6NDVBT2QWE")||l(c,"src",E)},m(m,g){d(document.head,s),d(document.head,e),d(document.head,r),d(document.head,a),d(document.head,o),d(document.head,p),d(document.head,f),d(document.head,h),d(document.head,c),d(document.head,_),d(_,n)},p(m,[g]){g&1&&t!==(t=m[0].TITLE)&&(document.title=t)},i:w,o:w,d(m){u(s),u(e),u(r),u(a),u(o),u(p),u(f),u(h),u(c),u(_)}}}function $t(i,t,s){let e;return F(i,z,r=>s(0,e=r)),[e]}class Et extends B{constructor(t){super(),L(this,t,$t,vt,I,{})}}function K(i){let t,s,e,r;return t=new gt({}),e=new ct({}),{c(){P(t.$$.fragment),s=N(),P(e.$$.fragment)},l(a){C(t.$$.fragment,a),s=M(a),C(e.$$.fragment,a)},m(a,o){S(t,a,o),T(a,s,o),S(e,a,o),r=!0},i(a){r||(k(t.$$.fragment,a),k(e.$$.fragment,a),r=!0)},o(a){b(t.$$.fragment,a),b(e.$$.fragment,a),r=!1},d(a){R(t,a),a&&u(s),R(e,a)}}}function yt(i){let t,s,e,r,a,o,p,f,h;t=new Et({}),e=new _t({});let c=i[0].url.pathname!=="/"&&K();const E=i[2].default,_=Y(E,i,i[1],null);return f=new mt({}),{c(){P(t.$$.fragment),s=N(),P(e.$$.fragment),r=N(),c&&c.c(),a=N(),o=v("body"),_&&_.c(),p=N(),P(f.$$.fragment),this.h()},l(n){C(t.$$.fragment,n),s=M(n),C(e.$$.fragment,n),r=M(n),c&&c.l(n),a=M(n),o=$(n,"BODY",{class:!0});var m=y(o);_&&_.l(m),m.forEach(u),p=M(n),C(f.$$.fragment,n),this.h()},h(){l(o,"class","svelte-1dag3hc")},m(n,m){S(t,n,m),T(n,s,m),S(e,n,m),T(n,r,m),c&&c.m(n,m),T(n,a,m),T(n,o,m),_&&_.m(o,null),T(n,p,m),S(f,n,m),h=!0},p(n,[m]){n[0].url.pathname!=="/"?c?m&1&&k(c,1):(c=K(),c.c(),k(c,1),c.m(a.parentNode,a)):c&&(st(),b(c,1,1,()=>{c=null}),X()),_&&_.p&&(!h||m&2)&&Z(_,E,n,n[1],h?et(E,n[1],m,null):tt(n[1]),null)},i(n){h||(k(t.$$.fragment,n),k(e.$$.fragment,n),k(c),k(_,n),k(f.$$.fragment,n),h=!0)},o(n){b(t.$$.fragment,n),b(e.$$.fragment,n),b(c),b(_,n),b(f.$$.fragment,n),h=!1},d(n){R(t,n),n&&u(s),R(e,n),n&&u(r),c&&c.d(n),n&&u(a),n&&u(o),_&&_.d(n),n&&u(p),R(f,n)}}}function wt(i,t,s){let e;F(i,lt,o=>s(0,e=o));let{$$slots:r={},$$scope:a}=t;return i.$$set=o=>{"$$scope"in o&&s(1,a=o.$$scope)},[e,a,r]}class At extends B{constructor(t){super(),L(this,t,wt,yt,I,{})}}export{At as default};

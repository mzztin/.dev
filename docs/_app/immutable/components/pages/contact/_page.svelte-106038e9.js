import{S as $,i as w,s as z,l as E,r as H,a as M,m as A,n as N,u as L,h as _,c as S,p as a,b as P,D as n,P as j,G as F,v as y,B as X,H as J,E as K}from"../../../chunks/index-e92758bc.js";import{t as Q}from"../../../chunks/index-96523b76.js";/* empty css                                                               *//* empty css                                                         */import"../../../chunks/index-455e55b6.js";function W(s){let u,p=s[2].CONTACT_PAGE.TITLE+"",c,i,t,o,h,C,r,I,B,T,O=s[2].CONTACT_PAGE.SUBMIT_BUTTON+"",G,b,f,m,d=s[2].CONTACT_PAGE.OTHER_INFORMATION+"",U,R,D;return{c(){u=E("h1"),c=H(p),i=M(),t=E("form"),o=E("input"),C=M(),r=E("textarea"),B=M(),T=E("button"),G=H(O),b=M(),f=E("div"),m=E("h3"),U=H(d),this.h()},l(e){u=A(e,"H1",{class:!0});var l=N(u);c=L(l,p),l.forEach(_),i=S(e),t=A(e,"FORM",{class:!0});var v=N(t);o=A(v,"INPUT",{placeholder:!0,type:!0,class:!0}),C=S(v),r=A(v,"TEXTAREA",{placeholder:!0,contenteditable:!0,class:!0}),N(r).forEach(_),B=S(v),T=A(v,"BUTTON",{type:!0,class:!0});var k=N(T);G=L(k,O),k.forEach(_),v.forEach(_),b=S(e),f=A(e,"DIV",{class:!0});var q=N(f);m=A(q,"H3",{class:!0});var V=N(m);U=L(V,d),V.forEach(_),q.forEach(_),this.h()},h(){a(u,"class","svelte-1p2aoj2"),a(o,"placeholder",h=s[2].CONTACT_PAGE.EMAIL_INPUT),a(o,"type","email"),a(o,"class","svelte-1p2aoj2"),a(r,"placeholder",I=s[2].CONTACT_PAGE.MESSAGE_INPUT),a(r,"contenteditable","true"),a(r,"class","svelte-1p2aoj2"),a(T,"type","button"),a(T,"class","svelte-1p2aoj2"),a(t,"class","svelte-1p2aoj2"),a(m,"class","svelte-1p2aoj2"),a(f,"class","discord svelte-1p2aoj2")},m(e,l){P(e,u,l),n(u,c),P(e,i,l),P(e,t,l),n(t,o),j(o,s[0]),n(t,C),n(t,r),j(r,s[1]),n(t,B),n(t,T),n(T,G),P(e,b,l),P(e,f,l),n(f,m),n(m,U),R||(D=[F(o,"input",s[4]),F(r,"input",s[5]),F(T,"click",s[3])],R=!0)},p(e,[l]){l&4&&p!==(p=e[2].CONTACT_PAGE.TITLE+"")&&y(c,p),l&4&&h!==(h=e[2].CONTACT_PAGE.EMAIL_INPUT)&&a(o,"placeholder",h),l&1&&o.value!==e[0]&&j(o,e[0]),l&4&&I!==(I=e[2].CONTACT_PAGE.MESSAGE_INPUT)&&a(r,"placeholder",I),l&2&&j(r,e[1]),l&4&&O!==(O=e[2].CONTACT_PAGE.SUBMIT_BUTTON+"")&&y(G,O),l&4&&d!==(d=e[2].CONTACT_PAGE.OTHER_INFORMATION+"")&&y(U,d)},i:X,o:X,d(e){e&&_(u),e&&_(i),e&&_(t),e&&_(b),e&&_(f),R=!1,J(D)}}}function Y(s,u,p){let c;K(s,Q,r=>p(2,c=r));let i,t;const o=()=>{console.log(`email: ${i} message: ${t}`)};function h(){i=this.value,p(0,i)}function C(){t=this.value,p(1,t)}return[i,t,c,o,h,C]}class le extends ${constructor(u){super(),w(this,u,Y,W,z,{})}}export{le as default};
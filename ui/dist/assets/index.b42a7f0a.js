var we=Object.defineProperty,Fe=Object.defineProperties;var Ne=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var je=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable;var ee=(l,e,t)=>e in l?we(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t,te=(l,e)=>{for(var t in e||(e={}))je.call(e,t)&&ee(l,t,e[t]);if(x)for(var t of x(e))ke.call(e,t)&&ee(l,t,e[t]);return l},le=(l,e)=>Fe(l,Ne(e));import{d as Ce,w as E,g as ue,S as J,i as Q,s as U,e as p,a as g,b as A,c as B,t as N,f as F,h as f,j as M,n as ne,H as Le,k as de,l as V,m as se,o as W,p as ge,q as me,r as C,u as q,v as pe,x as X,y as H,z as _e,A as Oe,B as be}from"./vendor.df09dbf1.js";const Ie=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}};Ie();const ve=E(!1),Y=E({serverName:"serverName",slots:0}),P=E({});function S(l){const e=ue(P)[l];return e?`<span class="mr-1">${e.icon||""}</span> ${e.label}`:""}function Ge(l){const e=ue(P)[l];return e?e.color:""}const z=E([]),he=E({}),He=Ce([z,P],([l,e])=>{const t={};return Object.keys(e).forEach(i=>{t[i]=l.filter(n=>(n==null?void 0:n.job)===i)}),t});window.addEventListener("message",({data:l})=>{l.visible!==void 0&&ve.set(l.visible),l.CONFIG!==void 0&&Y.set(l.CONFIG),l.Factions!==void 0&&P.set(l.Factions),l.players!==void 0&&z.set(l.players),l.myData!==void 0&&he.set(l.myData)});function re(l){let e,t=S(l[2])+"",i;return{c(){e=p("div"),g(e,"class",i=`badge rounded-md badge-${l[4]}`)},m(n,s){A(n,e,s),e.innerHTML=t},p(n,s){s&4&&t!==(t=S(n[2])+"")&&(e.innerHTML=t),s&16&&i!==(i=`badge rounded-md badge-${n[4]}`)&&g(e,"class",i)},d(n){n&&B(e)}}}function Me(l){let e,t,i,n,s,a,o=(l[1]||"unknown")+"",d,r,m,c,b,j,I,L,_=l[2]&&re(l);return{c(){e=p("div"),t=p("div"),i=p("div"),n=N(l[0]),s=F(),a=p("span"),d=N(o),r=F(),_&&_.c(),m=F(),c=p("span"),b=p("i"),j=N(l[3]),I=N("ms"),g(i,"class","border border-white rounded-full text-md w-7 h-7 flex items-center justify-center pb-0.5"),g(a,"class","font-bold"),g(t,"class","flex gap-2 items-center"),g(b,"class","fa-solid fa-tower-broadcast mr-1"),g(c,"class",L=`${l[5]} text-sm text-right`),g(e,"class","flex justify-between items-center flex-wrap gap-3 bg-base-300/80 p-2 rounded-lg")},m(v,y){A(v,e,y),f(e,t),f(t,i),f(i,n),f(t,s),f(t,a),f(a,d),f(t,r),_&&_.m(t,null),f(e,m),f(e,c),f(c,b),f(c,j),f(c,I)},p(v,[y]){y&1&&M(n,v[0]),y&2&&o!==(o=(v[1]||"unknown")+"")&&M(d,o),v[2]?_?_.p(v,y):(_=re(v),_.c(),_.m(t,null)):_&&(_.d(1),_=null),y&8&&M(j,v[3]),y&32&&L!==(L=`${v[5]} text-sm text-right`)&&g(c,"class",L)},i:ne,o:ne,d(v){v&&B(e),_&&_.d()}}}function qe(l,e,t){let i,n,{serverId:s=0}=e,{name:a=""}=e,{job:o=""}=e,{ping:d=0}=e;return l.$$set=r=>{"serverId"in r&&t(0,s=r.serverId),"name"in r&&t(1,a=r.name),"job"in r&&t(2,o=r.job),"ping"in r&&t(3,d=r.ping)},l.$$.update=()=>{l.$$.dirty&8&&t(5,i=d<40?"text-success":d>=40&&d<=120?"text-warning":d>120?"text-error":""),l.$$.dirty&4&&t(4,n=o?Ge(o):"")},[s,a,o,d,n,i]}class ye extends J{constructor(e){super();Q(this,e,qe,Me,U,{serverId:0,name:1,job:2,ping:3})}}function ie(l,e,t){const i=l.slice();return i[6]=e[t],i}function ae(l){var m;let e,t,i=((m=l[3][l[6].name])==null?void 0:m.length)+"",n,s,a,o=S(l[6].name)+"",d,r;return{c(){e=p("div"),t=p("span"),n=N(i),s=F(),a=new Le(!1),d=F(),g(t,"class","font-bold mr-1"),a.a=d,g(e,"class",r=`badge rounded-md badge-${l[6].color}`)},m(c,b){A(c,e,b),f(e,t),f(t,n),f(t,s),a.m(o,e),f(e,d)},p(c,b){var j;b&9&&i!==(i=((j=c[3][c[6].name])==null?void 0:j.length)+"")&&M(n,i),b&1&&o!==(o=S(c[6].name)+"")&&a.p(o),b&1&&r!==(r=`badge rounded-md badge-${c[6].color}`)&&g(e,"class",r)},d(c){c&&B(e)}}}function Ae(l){let e,t,i,n,s,a,o,d=l[1].serverName+"",r,m,c=l[2].length+"",b,j,I=l[1].slots+"",L,_,v,y,Z,G,O,D=l[0],h=[];for(let u=0;u<D.length;u+=1)h[u]=ae(ie(l,D,u));const K=[l[4]];let R={};for(let u=0;u<K.length;u+=1)R=de(R,K[u]);return G=new ye({props:R}),{c(){e=p("div"),t=p("div"),i=p("img"),s=F(),a=p("div"),o=p("h4"),r=N(d),m=F(),b=N(c),j=N("/"),L=N(I),_=N(" players"),v=F(),y=p("div");for(let u=0;u<h.length;u+=1)h[u].c();Z=F(),V(G.$$.fragment),se(i.src,n=l[1].icon)||g(i,"src",n),g(i,"alt",""),g(i,"class","rounded-full w-12 h-12"),g(o,"class","text-xl font-bold"),g(a,"class","ml-2"),g(t,"class","flex items-center mx-10 lg:mx-0"),g(y,"class","my-2 lg:m-0 flex gap-2"),g(e,"class","bg-base-300/90 p-2 flex justify-center md:justify-between items-center flex-wrap rounded-t-lg")},m(u,k){A(u,e,k),f(e,t),f(t,i),f(t,s),f(t,a),f(a,o),f(o,r),f(a,m),f(a,b),f(a,j),f(a,L),f(a,_),f(e,v),f(e,y);for(let T=0;T<h.length;T+=1)h[T].m(y,null);f(e,Z),W(G,e,null),O=!0},p(u,[k]){if((!O||k&2&&!se(i.src,n=u[1].icon))&&g(i,"src",n),(!O||k&2)&&d!==(d=u[1].serverName+"")&&M(r,d),(!O||k&4)&&c!==(c=u[2].length+"")&&M(b,c),(!O||k&2)&&I!==(I=u[1].slots+"")&&M(L,I),k&9){D=u[0];let w;for(w=0;w<D.length;w+=1){const $=ie(u,D,w);h[w]?h[w].p($,k):(h[w]=ae($),h[w].c(),h[w].m(y,null))}for(;w<h.length;w+=1)h[w].d(1);h.length=D.length}const T=k&16?ge(K,[me(u[4])]):{};G.$set(T)},i(u){O||(C(G.$$.fragment,u),O=!0)},o(u){q(G.$$.fragment,u),O=!1},d(u){u&&B(e),pe(h,u),X(G)}}}function Be(l,e,t){let i,n,s,a,o,d;return H(l,P,r=>t(5,n=r)),H(l,Y,r=>t(1,s=r)),H(l,z,r=>t(2,a=r)),H(l,He,r=>t(3,o=r)),H(l,he,r=>t(4,d=r)),l.$$.update=()=>{l.$$.dirty&32&&t(0,i=Object.keys(n).map(r=>le(te({},n[r]),{name:r})))},[i,s,a,o,d,n]}class De extends J{constructor(e){super();Q(this,e,Be,Ae,U,{})}}function oe(l,e,t){const i=l.slice();return i[2]=e[t],i}function ce(l){let e,t,i,n,s;t=new De({});let a=l[1],o=[];for(let r=0;r<a.length;r+=1)o[r]=fe(oe(l,a,r));const d=r=>q(o[r],1,1,()=>{o[r]=null});return{c(){e=p("div"),V(t.$$.fragment),i=F(),n=p("div");for(let r=0;r<o.length;r+=1)o[r].c();g(n,"class","bg-base-200/80 rounded-b-lg p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-h-[83vh] gap-3 overflow-y-auto"),g(e,"class","p-10")},m(r,m){A(r,e,m),W(t,e,null),f(e,i),f(e,n);for(let c=0;c<o.length;c+=1)o[c].m(n,null);s=!0},p(r,m){if(m&2){a=r[1];let c;for(c=0;c<a.length;c+=1){const b=oe(r,a,c);o[c]?(o[c].p(b,m),C(o[c],1)):(o[c]=fe(b),o[c].c(),C(o[c],1),o[c].m(n,null))}for(be(),c=a.length;c<o.length;c+=1)d(c);_e()}},i(r){if(!s){C(t.$$.fragment,r);for(let m=0;m<a.length;m+=1)C(o[m]);s=!0}},o(r){q(t.$$.fragment,r),o=o.filter(Boolean);for(let m=0;m<o.length;m+=1)q(o[m]);s=!1},d(r){r&&B(e),X(t),pe(o,r)}}}function fe(l){let e,t;const i=[l[2]];let n={};for(let s=0;s<i.length;s+=1)n=de(n,i[s]);return e=new ye({props:n}),{c(){V(e.$$.fragment)},m(s,a){W(e,s,a),t=!0},p(s,a){const o=a&2?ge(i,[me(s[2])]):{};e.$set(o)},i(s){t||(C(e.$$.fragment,s),t=!0)},o(s){q(e.$$.fragment,s),t=!1},d(s){X(e,s)}}}function Pe(l){let e,t,i,n=l[0]&&ce(l);return{c(){n&&n.c(),e=F(),t=p("div"),t.innerHTML=`<div class="badge badge-info">a</div> 
  <div class="badge badge-success">b</div> 
  <div class="badge badge-warning">c</div> 
  <div class="badge badge-error">d</div>`,g(t,"class","absolute -top-10")},m(s,a){n&&n.m(s,a),A(s,e,a),A(s,t,a),i=!0},p(s,[a]){s[0]?n?(n.p(s,a),a&1&&C(n,1)):(n=ce(s),n.c(),C(n,1),n.m(e.parentNode,e)):n&&(be(),q(n,1,1,()=>{n=null}),_e())},i(s){i||(C(n),i=!0)},o(s){q(n),i=!1},d(s){n&&n.d(s),s&&B(e),s&&B(t)}}}function Te(l,e,t){let i,n;return H(l,ve,s=>t(0,i=s)),H(l,z,s=>t(1,n=s)),Oe(async()=>{const s=await fetch(`https://${GetParentResourceName()}/getConfig`),{CONFIG:a,Factions:o}=await s.json();a!==void 0&&Y.set(a),o!==void 0&&P.set(o)}),[i,n]}class Ee extends J{constructor(e){super();Q(this,e,Te,Pe,U,{})}}new Ee({target:document.body});

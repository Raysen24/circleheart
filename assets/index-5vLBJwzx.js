var Cm=Object.defineProperty;var Rm=(r,e,t)=>e in r?Cm(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Le=(r,e,t)=>Rm(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Ui(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function vd(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Xn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Gs={duration:.5,overwrite:!1,delay:0},Bu,cn,Ct,ei=1e8,Mt=1/ei,Ec=Math.PI*2,Pm=Ec/4,Lm=0,xd=Math.sqrt,Dm=Math.cos,Im=Math.sin,en=function(e){return typeof e=="string"},Dt=function(e){return typeof e=="function"},Xi=function(e){return typeof e=="number"},ku=function(e){return typeof e>"u"},wi=function(e){return typeof e=="object"},wn=function(e){return e!==!1},zu=function(){return typeof window<"u"},Qa=function(e){return Dt(e)||en(e)},Sd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},un=Array.isArray,Tc=/(?:-?\.?\d|\.)+/gi,Md=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,As=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Al=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,yd=/[+-]=-?[.\d]+/,Ed=/[^,'"\[\]\s]+/gi,Um=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Pt,gi,bc,Hu,Yn={},Qo={},Td,bd=function(e){return(Qo=jr(e,Yn))&&Dn},Gu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ua=function(e,t){return!t&&console.warn(e)},wd=function(e,t){return e&&(Yn[e]=t)&&Qo&&(Qo[e]=t)||Yn},Na=function(){return 0},Nm={suppressEvents:!0,isStart:!0,kill:!1},Oo={suppressEvents:!0,kill:!1},Om={suppressEvents:!0},Vu={},hr=[],wc={},Ad,zn={},Cl={},Th=30,Fo=[],Wu="",Xu=function(e){var t=e[0],n,i;if(wi(t)||Dt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Fo.length;i--&&!Fo[i].targetTest(t););n=Fo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Zd(e[i],n)))||e.splice(i,1);return e},Hr=function(e){return e._gsap||Xu(ti(e))[0]._gsap},Cd=function(e,t,n){return(n=e[t])&&Dt(n)?e[t]():ku(n)&&e.getAttribute&&e.getAttribute(t)||n},An=function(e,t){return(e=e.split(",")).forEach(t)||e},Bt=function(e){return Math.round(e*1e5)/1e5||0},Qt=function(e){return Math.round(e*1e7)/1e7||0},Ds=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Fm=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},el=function(){var e=hr.length,t=hr.slice(0),n,i;for(wc={},hr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Rd=function(e,t,n,i){hr.length&&!cn&&el(),e.render(t,n,cn&&t<0&&(e._initted||e._startAt)),hr.length&&!cn&&el()},Pd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ed).length<2?t:en(e)?e.trim():e},Ld=function(e){return e},si=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Bm=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},jr=function(e,t){for(var n in t)e[n]=t[n];return e},bh=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=wi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},tl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Sa=function(e){var t=e.parent||Pt,n=e.keyframes?Bm(un(e.keyframes)):si;if(wn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},km=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Dd=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},_l=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},mr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Gr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},zm=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ac=function(e,t,n,i){return e._startAt&&(cn?e._startAt.revert(Oo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Hm=function r(e){return!e||e._ts&&r(e.parent)},wh=function(e){return e._repeat?Vs(e._tTime,e=e.duration()+e._rDelay)*e:0},Vs=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},nl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},gl=function(e){return e._end=Qt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Mt)||0))},vl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Qt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),gl(e),n._dirty||Gr(n,e)),e},Id=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=nl(e.rawTime(),t),(!t._dur||Ya(0,t.totalDuration(),n)-t._tTime>Mt)&&t.render(n,!0)),Gr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Mt}},Si=function(e,t,n,i){return t.parent&&mr(t),t._start=Qt((Xi(n)?n:n||e!==Pt?Kn(e,n,t):e._time)+t._delay),t._end=Qt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Dd(e,t,"_first","_last",e._sort?"_start":0),Cc(t)||(e._recent=t),i||Id(e,t),e._ts<0&&vl(e,e._tTime),e},Ud=function(e,t){return(Yn.ScrollTrigger||Gu("scrollTrigger",t))&&Yn.ScrollTrigger.create(t,e)},Nd=function(e,t,n,i,s){if($u(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!cn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ad!==Hn.frame)return hr.push(e),e._lazy=[s,i],1},Gm=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Cc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Vm=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&Gm(e)&&!(!e._initted&&Cc(e))||(e._ts<0||e._dp._ts<0)&&!Cc(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=Ya(0,e._tDur,t),u=Vs(l,o),e._yoyo&&u&1&&(a=1-a),u!==Vs(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||cn||i||e._zTime===Mt||!t&&e._zTime){if(!e._initted&&Nd(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Mt:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Ac(e,t,n,!0),e._onUpdate&&!n&&Vn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Vn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&mr(e,1),!n&&!cn&&(Vn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Wm=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ws=function(e,t,n,i){var s=e._repeat,a=Qt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Qt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&vl(e,e._tTime=e._tDur*o),e.parent&&gl(e),n||Gr(e.parent,e),e},Ah=function(e){return e instanceof Mn?Gr(e):Ws(e,e._dur)},Xm={_start:0,endTime:Na,totalDuration:Na},Kn=function r(e,t,n){var i=e.labels,s=e._recent||Xm,a=e.duration()>=ei?s.endTime(!1):e._dur,o,l,c;return en(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(un(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Ma=function(e,t,n){var i=Xi(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=wn(l.vars.inherit)&&l.parent;a.immediateRender=wn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Vt(t[0],a,t[s+1])},Sr=function(e,t){return e||e===0?t(e):t},Ya=function(e,t,n){return n<e?e:n>t?t:n},ln=function(e,t){return!en(e)||!(t=Um.exec(e))?"":t[1]},Ym=function(e,t,n){return Sr(n,function(i){return Ya(e,t,i)})},Rc=[].slice,Od=function(e,t){return e&&wi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&wi(e[0]))&&!e.nodeType&&e!==gi},$m=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return en(i)&&!t||Od(i,1)?(s=n).push.apply(s,ti(i)):n.push(i)})||n},ti=function(e,t,n){return Ct&&!t&&Ct.selector?Ct.selector(e):en(e)&&!n&&(bc||!Xs())?Rc.call((t||Hu).querySelectorAll(e),0):un(e)?$m(e,n):Od(e)?Rc.call(e,0):e?[e]:[]},Pc=function(e){return e=ti(e)[0]||Ua("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ti(t,n.querySelectorAll?n:n===e?Ua("Invalid scope")||Hu.createElement("div"):e)}},Fd=function(e){return e.sort(function(){return .5-Math.random()})},Bd=function(e){if(Dt(e))return e;var t=wi(e)?e:{each:e},n=Vr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return en(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,d,g){var v=(g||t).length,p=a[v],m,E,S,y,C,w,b,P,O;if(!p){if(O=t.grid==="auto"?0:(t.grid||[1,ei])[1],!O){for(b=-ei;b<(b=g[O++].getBoundingClientRect().left)&&O<v;);O<v&&O--}for(p=a[v]=[],m=l?Math.min(O,v)*u-.5:i%O,E=O===ei?0:l?v*h/O-.5:i/O|0,b=0,P=ei,w=0;w<v;w++)S=w%O-m,y=E-(w/O|0),p[w]=C=c?Math.abs(c==="y"?y:S):xd(S*S+y*y),C>b&&(b=C),C<P&&(P=C);i==="random"&&Fd(p),p.max=b-P,p.min=P,p.v=v=(parseFloat(t.amount)||parseFloat(t.each)*(O>v?v-1:c?c==="y"?v/O:O:Math.max(O,v/O))||0)*(i==="edges"?-1:1),p.b=v<0?s-v:s,p.u=ln(t.amount||t.each)||0,n=n&&v<0?qd(n):n}return v=(p[f]-p.min)/p.max||0,Qt(p.b+(n?n(v):v)*p.v)+p.u}},Lc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Qt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Xi(n)?0:ln(n))}},kd=function(e,t){var n=un(e),i,s;return!n&&wi(e)&&(i=n=e.radius||ei,e.values?(e=ti(e.values),(s=!Xi(e[0]))&&(i*=i)):e=Lc(e.increment)),Sr(t,n?Dt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=ei,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-o,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:a,s||u===a||Xi(a)?u:u+ln(a)}:Lc(e))},zd=function(e,t,n,i){return Sr(un(e)?!t:n===!0?!!(n=0):!i,function(){return un(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},qm=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},Km=function(e,t){return function(n){return e(parseFloat(n))+(t||ln(n))}},jm=function(e,t,n){return Gd(e,t,0,1,n)},Hd=function(e,t,n){return Sr(n,function(i){return e[~~t(i)]})},Zm=function r(e,t,n){var i=t-e;return un(e)?Hd(e,r(0,e.length),t):Sr(n,function(s){return(i+(s-e)%i)%i+e})},Jm=function r(e,t,n){var i=t-e,s=i*2;return un(e)?Hd(e,r(0,e.length-1),t):Sr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Oa=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?Ed:Tc),n+=e.substr(t,i-t)+zd(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Gd=function(e,t,n,i,s){var a=t-e,o=i-n;return Sr(s,function(l){return n+((l-e)/a*o||0)})},Qm=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=en(e),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(un(e)&&!un(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var v=Math.min(f,~~g);return u[v](g-v)},n=t}else i||(e=jr(un(e)?[]:{},e));if(!u){for(l in t)Yu.call(o,e,l,"get",t[l]);s=function(g){return ju(g,o)||(a?e.p:e)}}}return Sr(n,s)},Ch=function(e,t,n){var i=e.labels,s=ei,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Vn=function(e,t,n){var i=e.vars,s=i[t],a=Ct,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&hr.length&&el(),o&&(Ct=o),u=l?s.apply(c,l):s.call(c),Ct=a,u},fa=function(e){return mr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!cn),e.progress()<1&&Vn(e,"onInterrupt"),e},Cs,Vd=[],Wd=function(e){if(e)if(e=!e.name&&e.default||e,zu()||e.headless){var t=e.name,n=Dt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Na,render:ju,add:Yu,kill:m_,modifier:p_,rawVars:0},a={targetTest:0,get:0,getSetter:Ku,aliases:{},register:0};if(Xs(),e!==i){if(zn[t])return;si(i,si(tl(e,s),a)),jr(i.prototype,jr(s,tl(e,a))),zn[i.prop=t]=i,e.targetTest&&(Fo.push(i),Vu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}wd(t,i),e.register&&e.register(Dn,i,Cn)}else Vd.push(e)},xt=255,da={aqua:[0,xt,xt],lime:[0,xt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,xt],navy:[0,0,128],white:[xt,xt,xt],olive:[128,128,0],yellow:[xt,xt,0],orange:[xt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[xt,0,0],pink:[xt,192,203],cyan:[0,xt,xt],transparent:[xt,xt,xt,0]},Rl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*xt+.5|0},Xd=function(e,t,n){var i=e?Xi(e)?[e>>16,e>>8&xt,e&xt]:0:da.black,s,a,o,l,c,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),da[e])i=da[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&xt,i&xt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&xt,e&xt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Tc),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Rl(l+1/3,s,a),i[1]=Rl(l,s,a),i[2]=Rl(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Md),n&&i.length<4&&(i[3]=1),i}else i=e.match(Tc)||da.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/xt,a=i[1]/xt,o=i[2]/xt,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(a-o)/d+(a<o?6:0):h===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Yd=function(e){var t=[],n=[],i=-1;return e.split(fr).forEach(function(s){var a=s.match(As)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Rh=function(e,t,n){var i="",s=(e+i).match(fr),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=Xd(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Yd(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(fr,"1").split(As),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(fr),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},fr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in da)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),e_=/hsl[a]?\(/,$d=function(e){var t=e.join(" "),n;if(fr.lastIndex=0,fr.test(t))return n=e_.test(t),e[1]=Rh(e[1],n),e[0]=Rh(e[0],n,Yd(e[1])),!0},Fa,Hn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,f,d,g=function v(p){var m=r()-i,E=p===!0,S,y,C,w;if((m>e||m<0)&&(n+=m-t),i+=m,C=i-n,S=C-a,(S>0||E)&&(w=++h.frame,f=C-h.time*1e3,h.time=C=C/1e3,a+=S+(S>=s?4:s-S),y=1),E||(l=c(v)),y)for(d=0;d<o.length;d++)o[d](C,f,w,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Td&&(!bc&&zu()&&(gi=bc=window,Hu=gi.document||{},Yn.gsap=Dn,(gi.gsapVersions||(gi.gsapVersions=[])).push(Dn.version),bd(Qo||gi.GreenSockGlobals||!gi.gsap&&gi||{}),Vd.forEach(Wd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},Fa=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Fa=0,c=Na},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),a=h.time*1e3+s},add:function(p,m,E){var S=m?function(y,C,w,b){p(y,C,w,b),h.remove(S)}:p;return h.remove(p),o[E?"unshift":"push"](S),Xs(),S},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},h}(),Xs=function(){return!Fa&&Hn.wake()},ct={},t_=/^[\d.\-M][\d.\-,\s]/,n_=/["']/g,i_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(n_,"").trim():+c,i=l.substr(o+1).trim();return t},r_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},s_=function(e){var t=(e+"").split("("),n=ct[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[i_(t[1])]:r_(e).split(",").map(Pd)):ct._CE&&t_.test(e)?ct._CE("",e):n},qd=function(e){return function(t){return 1-e(1-t)}},Kd=function r(e,t){for(var n=e._first,i;n;)n instanceof Mn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Vr=function(e,t){return e&&(Dt(e)?e:ct[e]||s_(e))||t},is=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return An(e,function(o){ct[o]=Yn[o]=s,ct[a=o.toLowerCase()]=n;for(var l in s)ct[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ct[o+"."+l]=s[l]}),s},jd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Pl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Ec*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Im((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:jd(o);return s=Ec/s,l.config=function(c,u){return r(e,c,u)},l},Ll=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:jd(n);return i.config=function(s){return r(e,s)},i};An("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;is(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ct.Linear.easeNone=ct.none=ct.Linear.easeIn;is("Elastic",Pl("in"),Pl("out"),Pl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};is("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);is("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});is("Circ",function(r){return-(xd(1-r*r)-1)});is("Sine",function(r){return r===1?1:-Dm(r*Pm)+1});is("Back",Ll("in"),Ll("out"),Ll());ct.SteppedEase=ct.steps=Yn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Mt;return function(o){return((i*Ya(0,a,o)|0)+s)*n}}};Gs.ease=ct["quad.out"];An("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Wu+=r+","+r+"Params,"});var Zd=function(e,t){this.id=Lm++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Cd,this.set=t?t.getSetter:Ku},Ba=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ws(this,+t.duration,1,1),this.data=t.data,Ct&&(this._ctx=Ct,Ct.data.push(this)),Fa||Hn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ws(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Xs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(vl(this,n),!s._dp||s.parent||Id(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Si(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Mt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Rd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+wh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+wh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Vs(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Mt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?nl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Mt?0:this._rts,this.totalTime(Ya(-Math.abs(this._delay),this._tDur,s),i!==!1),gl(this),zm(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Xs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Mt&&(this._tTime-=Mt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Si(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(wn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?nl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Om);var i=cn;return cn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),cn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ah(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ah(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Kn(this,n),wn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,wn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Mt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Mt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Mt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=Dt(n)?n:Ld,o=function(){var c=i.then;i.then=null,Dt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){fa(this)},r}();si(Ba.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Mt,_prom:0,_ps:!1,_rts:1});var Mn=function(r){vd(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=wn(n.sortChildren),Pt&&Si(n.parent||Pt,Ui(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Ud(Ui(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Ma(0,arguments,this),this},t.from=function(i,s,a){return Ma(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Ma(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Sa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Vt(i,s,Kn(this,a),1),this},t.call=function(i,s,a){return Si(this,Vt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Vt(i,a,Kn(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Sa(a).immediateRender=wn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,Sa(o).immediateRender=wn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Qt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,v,p,m,E,S,y,C,w,b;if(this!==Pt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,y=this._start,S=this._ts,m=!S,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(f=Qt(u%p),u===l?(v=this._repeat,f=c):(v=~~(u/p),v&&v===u/p&&(f=c,v--),f>c&&(f=c)),C=Vs(this._tTime,p),!o&&this._tTime&&C!==v&&this._tTime-C*p-this._dur<=0&&(C=v),w&&v&1&&(f=c-f,b=1),v!==C&&!this._lock){var P=w&&C&1,O=P===(w&&v&1);if(v<C&&(P=!P),o=P?0:u%c?c:u,this._lock=1,this.render(o||(b?0:Qt(v*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Vn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,O&&(this._lock=2,o=P?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Kd(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=Wm(this,Qt(o),Qt(f)),E&&(u-=f-(f=E._start))),this._tTime=u,this._time=f,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!s&&!v&&(Vn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&E!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,a),f!==this._time||!this._ts&&!m){E=0,g&&(u+=this._zTime=-Mt);break}}d=g}else{d=this._last;for(var _=i<0?i:f;d;){if(g=d._prev,(d._act||_<=d._end)&&d._ts&&E!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(_-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(_-d._start)*d._ts,s,a||cn&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!m){E=0,g&&(u+=this._zTime=_?-Mt:Mt);break}}d=g}}if(E&&!s&&(this.pause(),E.render(f>=o?0:-Mt)._zTime=f>=o?1:-1,this._ts))return this._start=y,gl(this),this.render(i,s,a);this._onUpdate&&!s&&Vn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&mr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Vn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Xi(s)||(s=Kn(this,s,i)),!(i instanceof Ba)){if(un(i))return i.forEach(function(o){return a.add(o,s)}),this;if(en(i))return this.addLabel(i,s);if(Dt(i))i=Vt.delayedCall(0,i);else return this}return this!==i?Si(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-ei);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Vt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return en(i)?this.removeLabel(i):Dt(i)?this.killTweensOf(i):(_l(this,i),i===this._recent&&(this._recent=this._last),Gr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Qt(Hn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Kn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Vt.delayedCall(0,s||Na,a);return o.data="isPause",this._hasPause=1,Si(this,o,Kn(this,i))},t.removePause=function(i){var s=this._first;for(i=Kn(this,i);s;)s._start===i&&s.data==="isPause"&&mr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)ar!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=ti(i),l=this._first,c=Xi(s),u;l;)l instanceof Vt?Fm(l._targets,o)&&(c?(!ar||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=Kn(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=Vt.to(a,si({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Mt,onStart:function(){if(a.pause(),!d){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&Ws(g,p,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,si({startAt:{time:Kn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Ch(this,Kn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Ch(this,Kn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Mt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Gr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Gr(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=ei,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Si(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ws(a,a===Pt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Pt._ts&&(Rd(Pt,nl(i,Pt)),Ad=Hn.frame),Hn.frame>=Th){Th+=Xn.autoSleep||120;var s=Pt._first;if((!s||!s._ts)&&Xn.autoSleep&&Hn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Hn.sleep()}}},e}(Ba);si(Mn.prototype,{_lock:0,_hasPause:0,_forcing:0});var a_=function(e,t,n,i,s,a,o){var l=new Cn(this._pt,e,t,0,1,ip,null,s),c=0,u=0,h,f,d,g,v,p,m,E;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Oa(i)),a&&(E=[n,i],a(E,e,t),n=E[0],i=E[1]),f=n.match(Al)||[];h=Al.exec(i);)g=h[0],v=i.substring(c,h.index),d?d=(d+1)%5:v.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:v||u===1?v:",",s:p,c:g.charAt(1)==="="?Ds(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=Al.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(yd.test(i)||m)&&(l.e=0),this._pt=l,l},Yu=function(e,t,n,i,s,a,o,l,c,u){Dt(i)&&(i=i(s||0,e,a));var h=e[t],f=n!=="get"?n:Dt(h)?c?e[t.indexOf("set")||!Dt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Dt(h)?c?h_:tp:qu,g;if(en(i)&&(~i.indexOf("random(")&&(i=Oa(i)),i.charAt(1)==="="&&(g=Ds(f,i)+(ln(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Dc)return!isNaN(f*i)&&i!==""?(g=new Cn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?d_:np,0,d),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&Gu(t,i),a_.call(this,e,t,f,i,d,l||Xn.stringFilter,c))},o_=function(e,t,n,i,s){if(Dt(e)&&(e=ya(e,s,t,n,i)),!wi(e)||e.style&&e.nodeType||un(e)||Sd(e))return en(e)?ya(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=ya(e[o],s,t,n,i);return a},Jd=function(e,t,n,i,s,a){var o,l,c,u;if(zn[e]&&(o=new zn[e]).init(s,o.rawVars?t[e]:o_(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Cn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Cs))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},ar,Dc,$u=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=e._dur,v=e._startAt,p=e._targets,m=e.parent,E=m&&m.data==="nested"?m.vars.targets:p,S=e._overwrite==="auto"&&!Bu,y=e.timeline,C,w,b,P,O,_,x,D,B,W,Y,z,X;if(y&&(!f||!s)&&(s="none"),e._ease=Vr(s,Gs.ease),e._yEase=h?qd(Vr(h===!0?s:h,Gs.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!y&&!!i.runBackwards,!y||f&&!i.stagger){if(D=p[0]?Hr(p[0]).harness:0,z=D&&i[D.prop],C=tl(i,Vu),v&&(v._zTime<0&&v.progress(1),t<0&&u&&o&&!d?v.render(-1,!0):v.revert(u&&g?Oo:Nm),v._lazy=0),a){if(mr(e._startAt=Vt.set(p,si({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!v&&wn(l),startAt:null,delay:0,onUpdate:c&&function(){return Vn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(cn||!o&&!d)&&e._startAt.revert(Oo),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!v){if(t&&(o=!1),b=si({overwrite:!1,data:"isFromStart",lazy:o&&!v&&wn(l),immediateRender:o,stagger:0,parent:m},C),z&&(b[D.prop]=z),mr(e._startAt=Vt.set(p,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(cn?e._startAt.revert(Oo):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Mt,Mt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&wn(l)||l&&!g,w=0;w<p.length;w++){if(O=p[w],x=O._gsap||Xu(p)[w]._gsap,e._ptLookup[w]=W={},wc[x.id]&&hr.length&&el(),Y=E===p?w:E.indexOf(O),D&&(B=new D).init(O,z||C,e,Y,E)!==!1&&(e._pt=P=new Cn(e._pt,O,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(G){W[G]=P}),B.priority&&(_=1)),!D||z)for(b in C)zn[b]&&(B=Jd(b,C,e,Y,O,E))?B.priority&&(_=1):W[b]=P=Yu.call(e,O,b,"get",C[b],Y,E,0,i.stringFilter);e._op&&e._op[w]&&e.kill(O,e._op[w]),S&&e._pt&&(ar=e,Pt.killTweensOf(O,W,e.globalTime(t)),X=!e.parent,ar=0),e._pt&&l&&(wc[x.id]=1)}_&&rp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!X,f&&t<=0&&y.render(ei,!0,!0)},l_=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Dc=1,e.vars[t]="+=0",$u(e,o),Dc=0,l?Ua(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=Bt(n)+ln(h.e)),h.b&&(h.b=u.s+ln(h.b))},c_=function(e,t){var n=e[0]?Hr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=jr({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},u_=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(un(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},ya=function(e,t,n,i,s){return Dt(e)?e.call(t,n,i,s):en(e)&&~e.indexOf("random(")?Oa(e):e},Qd=Wu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ep={};An(Qd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return ep[r]=1});var Vt=function(r){vd(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Sa(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,v=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,E=i.parent||Pt,S=(un(n)||Sd(n)?Xi(n[0]):"length"in i)?[n]:ti(n),y,C,w,b,P,O,_,x;if(o._targets=S.length?Xu(S):Ua("GSAP target "+n+" not found. https://gsap.com",!Xn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||f||Qa(c)||Qa(u)){if(i=o.vars,y=o.timeline=new Mn({data:"nested",defaults:v||{},targets:E&&E.data==="nested"?E.vars.targets:S}),y.kill(),y.parent=y._dp=Ui(o),y._start=0,f||Qa(c)||Qa(u)){if(b=S.length,_=f&&Bd(f),wi(f))for(P in f)~Qd.indexOf(P)&&(x||(x={}),x[P]=f[P]);for(C=0;C<b;C++)w=tl(i,ep),w.stagger=0,m&&(w.yoyoEase=m),x&&jr(w,x),O=S[C],w.duration=+ya(c,Ui(o),C,O,S),w.delay=(+ya(u,Ui(o),C,O,S)||0)-o._delay,!f&&b===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),y.to(O,w,_?_(C,O,S):0),y._ease=ct.none;y.duration()?c=u=0:o.timeline=0}else if(g){Sa(si(y.vars.defaults,{ease:"none"})),y._ease=Vr(g.ease||i.ease||"none");var D=0,B,W,Y;if(un(g))g.forEach(function(z){return y.to(S,z,">")}),y.duration();else{w={};for(P in g)P==="ease"||P==="easeEach"||u_(P,g[P],w,g.easeEach);for(P in w)for(B=w[P].sort(function(z,X){return z.t-X.t}),D=0,C=0;C<B.length;C++)W=B[C],Y={ease:W.e,duration:(W.t-(C?B[C-1].t:0))/100*c},Y[P]=W.v,y.to(S,Y,D),D+=Y.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return d===!0&&!Bu&&(ar=Ui(o),Pt.killTweensOf(S),ar=0),Si(E,Ui(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===Qt(E._time)&&wn(h)&&Hm(Ui(o))&&E.data!=="nested")&&(o._tTime=-Mt,o.render(Math.max(0,-u)||0)),p&&Ud(Ui(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Mt&&!u?l:i<Mt?0:i,f,d,g,v,p,m,E,S,y;if(!c)Vm(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,S=this.timeline,this._repeat){if(v=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(v*100+i,s,a);if(f=Qt(h%v),h===l?(g=this._repeat,f=c):(g=~~(h/v),g&&g===Qt(h/v)&&(f=c,g--),f>c&&(f=c)),m=this._yoyo&&g&1,m&&(y=this._yEase,f=c-f),p=Vs(this._tTime,v),f===o&&!a&&this._initted&&g===p)return this._tTime=h,this;g!==p&&(S&&this._yEase&&Kd(S,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==v&&this._initted&&(this._lock=a=1,this.render(Qt(v*g),!0).invalidate()._lock=0))}if(!this._initted){if(Nd(this,u?i:f,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=E=(y||this._ease)(f/c),this._from&&(this.ratio=E=1-E),f&&!o&&!s&&!g&&(Vn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(E,d.d),d=d._next;S&&S.render(i<0?i:S._dur*S._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Ac(this,i,s,a),Vn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Vn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Ac(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&mr(this,1),!s&&!(u&&!o)&&(h||o||m)&&(Vn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Fa||Hn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||$u(this,c),u=this._ease(c/this._dur),l_(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(vl(this,0),this.parent||Dd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?fa(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ar&&ar.vars.overwrite!==!0)._first||fa(this),this.parent&&a!==this.timeline.totalDuration()&&Ws(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?ti(i):o,c=this._ptLookup,u=this._pt,h,f,d,g,v,p,m;if((!s||s==="all")&&km(o,l))return s==="all"&&(this._pt=0),fa(this);for(h=this._op=this._op||[],s!=="all"&&(en(s)&&(v={},An(s,function(E){return v[E]=1}),s=v),s=c_(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){f=c[m],s==="all"?(h[m]=s,g=f,d={}):(d=h[m]=h[m]||{},g=s);for(v in g)p=f&&f[v],p&&((!("kill"in p.d)||p.d.kill(v)===!0)&&_l(this,p,"_pt"),delete f[v]),d!=="all"&&(d[v]=1)}return this._initted&&!this._pt&&u&&fa(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ma(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Ma(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Pt.killTweensOf(i,s,a)},e}(Ba);si(Vt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});An("staggerTo,staggerFrom,staggerFromTo",function(r){Vt[r]=function(){var e=new Mn,t=Rc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var qu=function(e,t,n){return e[t]=n},tp=function(e,t,n){return e[t](n)},h_=function(e,t,n,i){return e[t](i.fp,n)},f_=function(e,t,n){return e.setAttribute(t,n)},Ku=function(e,t){return Dt(e[t])?tp:ku(e[t])&&e.setAttribute?f_:qu},np=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},d_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ip=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},ju=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},p_=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},m_=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?_l(this,t,"_pt"):t.dep||(n=1),t=i;return!n},__=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},rp=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Cn=function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||np,this.d=l||this,this.set=c||qu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=__,this.m=n,this.mt=s,this.tween=i},r}();An(Wu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Vu[r]=1});Yn.TweenMax=Yn.TweenLite=Vt;Yn.TimelineLite=Yn.TimelineMax=Mn;Pt=new Mn({sortChildren:!1,defaults:Gs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Xn.stringFilter=$d;var Wr=[],Bo={},g_=[],Ph=0,v_=0,Dl=function(e){return(Bo[e]||g_).map(function(t){return t()})},Ic=function(){var e=Date.now(),t=[];e-Ph>2&&(Dl("matchMediaInit"),Wr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=gi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Dl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Ph=e,Dl("matchMedia"))},sp=function(){function r(t,n){this.selector=n&&Pc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=v_++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Dt(n)&&(s=i,i=n,n=Dt);var a=this,o=function(){var c=Ct,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Pc(s)),Ct=a,h=i.apply(a,arguments),Dt(h)&&a._r.push(h),Ct=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Dt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Ct;Ct=null,n(this),Ct=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Vt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Mn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Vt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Wr.length;a--;)Wr[a].id===this.id&&Wr.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),x_=function(){function r(t){this.contexts=[],this.scope=t,Ct&&Ct.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){wi(n)||(n={matches:n});var a=new sp(0,s||this.scope),o=a.conditions={},l,c,u;Ct&&!a.selector&&(a.selector=Ct.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=gi.matchMedia(n[c]),l&&(Wr.indexOf(a)<0&&Wr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ic):l.addEventListener("change",Ic)));return u&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),il={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Wd(i)})},timeline:function(e){return new Mn(e)},getTweensOf:function(e,t){return Pt.getTweensOf(e,t)},getProperty:function(e,t,n,i){en(e)&&(e=ti(e)[0]);var s=Hr(e||{}).get,a=n?Ld:Pd;return n==="native"&&(n=""),e&&(t?a((zn[t]&&zn[t].get||s)(e,t,n,i)):function(o,l,c){return a((zn[o]&&zn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=ti(e),e.length>1){var i=e.map(function(u){return Dn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var a=zn[t],o=Hr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Cs._pt=0,h.init(e,n?u+n:u,Cs,0,[e]),h.render(1,h),Cs._pt&&ju(1,Cs)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Dn.to(e,jr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Pt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Vr(e.ease,Gs.ease)),bh(Gs,e||{})},config:function(e){return bh(Xn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!zn[o]&&!Yn[o]&&Ua(t+" effect requires "+o+" plugin.")}),Cl[t]=function(o,l,c){return n(ti(o),si(l||{},s),c)},a&&(Mn.prototype[t]=function(o,l,c){return this.add(Cl[t](o,wi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ct[e]=Vr(t)},parseEase:function(e,t){return arguments.length?Vr(e,t):ct},getById:function(e){return Pt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Mn(e),i,s;for(n.smoothChildTiming=wn(e.smoothChildTiming),Pt.remove(n),n._dp=0,n._time=n._tTime=Pt._time,i=Pt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Vt&&i.vars.onComplete===i._targets[0]))&&Si(n,i,i._start-i._delay),i=s;return Si(Pt,n,0),n},context:function(e,t){return e?new sp(e,t):Ct},matchMedia:function(e){return new x_(e)},matchMediaRefresh:function(){return Wr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Ic()},addEventListener:function(e,t){var n=Bo[e]||(Bo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Bo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Zm,wrapYoyo:Jm,distribute:Bd,random:zd,snap:kd,normalize:jm,getUnit:ln,clamp:Ym,splitColor:Xd,toArray:ti,selector:Pc,mapRange:Gd,pipe:qm,unitize:Km,interpolate:Qm,shuffle:Fd},install:bd,effects:Cl,ticker:Hn,updateRoot:Mn.updateRoot,plugins:zn,globalTimeline:Pt,core:{PropTween:Cn,globals:wd,Tween:Vt,Timeline:Mn,Animation:Ba,getCache:Hr,_removeLinkedListItem:_l,reverting:function(){return cn},context:function(e){return e&&Ct&&(Ct.data.push(e),e._ctx=Ct),Ct},suppressOverwrites:function(e){return Bu=e}}};An("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return il[r]=Vt[r]});Hn.add(Mn.updateRoot);Cs=il.to({},{duration:0});var S_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},M_=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=S_(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Il=function(e,t){return{name:e,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(en(s)&&(l={},An(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}M_(o,s)}}}},Dn=il.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)cn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Il("roundProps",Lc),Il("modifiers"),Il("snap",kd))||il;Vt.version=Mn.version=Dn.version="3.12.5";Td=1;zu()&&Xs();ct.Power0;ct.Power1;ct.Power2;ct.Power3;ct.Power4;ct.Linear;ct.Quad;ct.Cubic;ct.Quart;ct.Quint;ct.Strong;ct.Elastic;ct.Back;ct.SteppedEase;ct.Bounce;ct.Sine;ct.Expo;ct.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Lh,or,Is,Zu,Fr,Dh,Ju,y_=function(){return typeof window<"u"},Yi={},Pr=180/Math.PI,Us=Math.PI/180,ss=Math.atan2,Ih=1e8,Qu=/([A-Z])/g,E_=/(left|right|width|margin|padding|x)/i,T_=/[\s,\(]\S/,Mi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Uc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},b_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},w_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},A_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},ap=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},op=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},C_=function(e,t,n){return e.style[t]=n},R_=function(e,t,n){return e.style.setProperty(t,n)},P_=function(e,t,n){return e._gsap[t]=n},L_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},D_=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},I_=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Lt="transform",Rn=Lt+"Origin",U_=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in Yi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Mi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Ni(i,o)}):this.tfm[e]=a.x?a[e]:Ni(i,e),e===Rn&&(this.tfm.zOrigin=a.zOrigin);else return Mi.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Lt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Rn,t,"")),e=Lt}(s||t)&&this.props.push(e,t,s[e])},lp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},N_=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Qu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Ju(),(!s||!s.isStart)&&!n[Lt]&&(lp(n),i.zOrigin&&n[Rn]&&(n[Rn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},cp=function(e,t){var n={target:e,props:[],revert:N_,save:U_};return e._gsap||Dn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},up,Nc=function(e,t){var n=or.createElementNS?or.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):or.createElement(e);return n&&n.style?n:or.createElement(e)},Ei=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Qu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Ys(t)||t,1)||""},Uh="O,Moz,ms,Ms,Webkit".split(","),Ys=function(e,t,n){var i=t||Fr,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Uh[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Uh[a]:"")+e},Oc=function(){y_()&&window.document&&(Lh=window,or=Lh.document,Is=or.documentElement,Fr=Nc("div")||{style:{}},Nc("div"),Lt=Ys(Lt),Rn=Lt+"Origin",Fr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",up=!!Ys("perspective"),Ju=Dn.core.reverting,Zu=1)},Ul=function r(e){var t=Nc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(Is.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Is.removeChild(t),this.style.cssText=s,a},Nh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},hp=function(e){var t;try{t=e.getBBox()}catch{t=Ul.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Ul||(t=Ul.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Nh(e,["x","cx","x1"])||0,y:+Nh(e,["y","cy","y1"])||0,width:0,height:0}:t},fp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&hp(e))},Zr=function(e,t){if(t){var n=e.style,i;t in Yi&&t!==Rn&&(t=Lt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Qu,"-$1").toLowerCase())):n.removeAttribute(t)}},lr=function(e,t,n,i,s,a){var o=new Cn(e._pt,t,n,0,1,a?op:ap);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Oh={deg:1,rad:1,turn:1},O_={grid:1,flex:1},_r=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Fr.style,l=E_.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,v,p,m;if(i===a||!s||Oh[i]||Oh[a])return s;if(a!=="px"&&!f&&(s=r(e,t,n,"px")),m=e.getCTM&&fp(e),(d||a==="%")&&(Yi[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],Bt(d?s/g*h:s/100*g);if(o[l?"width":"height"]=h+(f?a:i),v=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===or||!v.appendChild)&&(v=or.body),p=v._gsap,p&&d&&p.width&&l&&p.time===Hn.time&&!p.uncache)return Bt(s/p.width*h);if(d&&(t==="height"||t==="width")){var E=e.style[t];e.style[t]=h+i,g=e[u],E?e.style[t]=E:Zr(e,t)}else(d||a==="%")&&!O_[Ei(v,"display")]&&(o.position=Ei(e,"position")),v===e&&(o.position="static"),v.appendChild(Fr),g=Fr[u],v.removeChild(Fr),o.position="absolute";return l&&d&&(p=Hr(v),p.time=Hn.time,p.width=v[u]),Bt(f?g*s/h:g&&s?h/g*s:0)},Ni=function(e,t,n,i){var s;return Zu||Oc(),t in Mi&&t!=="transform"&&(t=Mi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Yi[t]&&t!=="transform"?(s=za(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:sl(Ei(e,Rn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=rl[t]&&rl[t](e,t,n)||Ei(e,t)||Cd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?_r(e,t,s,n)+n:s},F_=function(e,t,n,i){if(!n||n==="none"){var s=Ys(t,e,1),a=s&&Ei(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Ei(e,"borderTopColor"))}var o=new Cn(this._pt,e.style,t,0,1,ip),l=0,c=0,u,h,f,d,g,v,p,m,E,S,y,C;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(v=e.style[t],e.style[t]=i,i=Ei(e,t)||i,v?e.style[t]=v:Zr(e,t)),u=[n,i],$d(u),n=u[0],i=u[1],f=n.match(As)||[],C=i.match(As)||[],C.length){for(;h=As.exec(i);)p=h[0],E=i.substring(l,h.index),g?g=(g+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(g=1),p!==(v=f[c++]||"")&&(d=parseFloat(v)||0,y=v.substr((d+"").length),p.charAt(1)==="="&&(p=Ds(d,p)+y),m=parseFloat(p),S=p.substr((m+"").length),l=As.lastIndex-S.length,S||(S=S||Xn.units[t]||y,l===i.length&&(i+=S,o.e+=S)),y!==S&&(d=_r(e,t,v,S)||0),o._pt={_next:o._pt,p:E||c===1?E:",",s:d,c:m-d,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?op:ap;return yd.test(i)&&(o.e=0),this._pt=o,o},Fh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},B_=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Fh[n]||n,t[1]=Fh[i]||i,t.join(" ")},k_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Yi[o]&&(l=1,o=o==="transformOrigin"?Rn:Lt),Zr(n,o);l&&(Zr(n,Lt),a&&(a.svg&&n.removeAttribute("transform"),za(n,1),a.uncache=1,lp(i)))}},rl={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Cn(e._pt,t,n,0,0,k_);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},ka=[1,0,0,1,0,0],dp={},pp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Bh=function(e){var t=Ei(e,Lt);return pp(t)?ka:t.substr(7).match(Md).map(Bt)},eh=function(e,t){var n=e._gsap||Hr(e),i=e.style,s=Bh(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ka:s):(s===ka&&!e.offsetParent&&e!==Is&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,Is.appendChild(e)),s=Bh(e),l?i.display=l:Zr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Is.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Fc=function(e,t,n,i,s,a){var o=e._gsap,l=s||eh(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],g=l[1],v=l[2],p=l[3],m=l[4],E=l[5],S=t.split(" "),y=parseFloat(S[0])||0,C=parseFloat(S[1])||0,w,b,P,O;n?l!==ka&&(b=d*p-g*v)&&(P=y*(p/b)+C*(-v/b)+(v*E-p*m)/b,O=y*(-g/b)+C*(d/b)-(d*E-g*m)/b,y=P,C=O):(w=hp(e),y=w.x+(~S[0].indexOf("%")?y/100*w.width:y),C=w.y+(~(S[1]||S[0]).indexOf("%")?C/100*w.height:C)),i||i!==!1&&o.smooth?(m=y-c,E=C-u,o.xOffset=h+(m*d+E*v)-m,o.yOffset=f+(m*g+E*p)-E):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=C,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Rn]="0px 0px",a&&(lr(a,o,"xOrigin",c,y),lr(a,o,"yOrigin",u,C),lr(a,o,"xOffset",h,o.xOffset),lr(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+C)},za=function(e,t){var n=e._gsap||new Zd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Ei(e,Rn)||"0",u,h,f,d,g,v,p,m,E,S,y,C,w,b,P,O,_,x,D,B,W,Y,z,X,G,re,R,ae,Oe,Xe,q,Q;return u=h=f=v=p=m=E=S=y=0,d=g=1,n.svg=!!(e.getCTM&&fp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Lt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Lt]!=="none"?l[Lt]:"")),i.scale=i.rotate=i.translate="none"),b=eh(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),Fc(e,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,b)),C=n.xOrigin||0,w=n.yOrigin||0,b!==ka&&(x=b[0],D=b[1],B=b[2],W=b[3],u=Y=b[4],h=z=b[5],b.length===6?(d=Math.sqrt(x*x+D*D),g=Math.sqrt(W*W+B*B),v=x||D?ss(D,x)*Pr:0,E=B||W?ss(B,W)*Pr+v:0,E&&(g*=Math.abs(Math.cos(E*Us))),n.svg&&(u-=C-(C*x+w*B),h-=w-(C*D+w*W))):(Q=b[6],Xe=b[7],R=b[8],ae=b[9],Oe=b[10],q=b[11],u=b[12],h=b[13],f=b[14],P=ss(Q,Oe),p=P*Pr,P&&(O=Math.cos(-P),_=Math.sin(-P),X=Y*O+R*_,G=z*O+ae*_,re=Q*O+Oe*_,R=Y*-_+R*O,ae=z*-_+ae*O,Oe=Q*-_+Oe*O,q=Xe*-_+q*O,Y=X,z=G,Q=re),P=ss(-B,Oe),m=P*Pr,P&&(O=Math.cos(-P),_=Math.sin(-P),X=x*O-R*_,G=D*O-ae*_,re=B*O-Oe*_,q=W*_+q*O,x=X,D=G,B=re),P=ss(D,x),v=P*Pr,P&&(O=Math.cos(P),_=Math.sin(P),X=x*O+D*_,G=Y*O+z*_,D=D*O-x*_,z=z*O-Y*_,x=X,Y=G),p&&Math.abs(p)+Math.abs(v)>359.9&&(p=v=0,m=180-m),d=Bt(Math.sqrt(x*x+D*D+B*B)),g=Bt(Math.sqrt(z*z+Q*Q)),P=ss(Y,z),E=Math.abs(P)>2e-4?P*Pr:0,y=q?1/(q<0?-q:q):0),n.svg&&(X=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!pp(Ei(e,Lt)),X&&e.setAttribute("transform",X))),Math.abs(E)>90&&Math.abs(E)<270&&(s?(d*=-1,E+=v<=0?180:-180,v+=v<=0?180:-180):(g*=-1,E+=E<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Bt(d),n.scaleY=Bt(g),n.rotation=Bt(v)+o,n.rotationX=Bt(p)+o,n.rotationY=Bt(m)+o,n.skewX=E+o,n.skewY=S+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Rn]=sl(c)),n.xOffset=n.yOffset=0,n.force3D=Xn.force3D,n.renderTransform=n.svg?H_:up?mp:z_,n.uncache=0,n},sl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Nl=function(e,t,n){var i=ln(t);return Bt(parseFloat(t)+parseFloat(_r(e,"x",n+"px",i)))+i},z_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,mp(e,t)},yr="0deg",ia="0px",Er=") ",mp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,v=n.scaleY,p=n.transformPerspective,m=n.force3D,E=n.target,S=n.zOrigin,y="",C=m==="auto"&&e&&e!==1||m===!0;if(S&&(h!==yr||u!==yr)){var w=parseFloat(u)*Us,b=Math.sin(w),P=Math.cos(w),O;w=parseFloat(h)*Us,O=Math.cos(w),a=Nl(E,a,b*O*-S),o=Nl(E,o,-Math.sin(w)*-S),l=Nl(E,l,P*O*-S+S)}p!==ia&&(y+="perspective("+p+Er),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(C||a!==ia||o!==ia||l!==ia)&&(y+=l!==ia||C?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Er),c!==yr&&(y+="rotate("+c+Er),u!==yr&&(y+="rotateY("+u+Er),h!==yr&&(y+="rotateX("+h+Er),(f!==yr||d!==yr)&&(y+="skew("+f+", "+d+Er),(g!==1||v!==1)&&(y+="scale("+g+", "+v+Er),E.style[Lt]=y||"translate(0, 0)"},H_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,v=n.yOrigin,p=n.xOffset,m=n.yOffset,E=n.forceCSS,S=parseFloat(a),y=parseFloat(o),C,w,b,P,O;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Us,c*=Us,C=Math.cos(l)*h,w=Math.sin(l)*h,b=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=Us,O=Math.tan(c-u),O=Math.sqrt(1+O*O),b*=O,P*=O,u&&(O=Math.tan(u),O=Math.sqrt(1+O*O),C*=O,w*=O)),C=Bt(C),w=Bt(w),b=Bt(b),P=Bt(P)):(C=h,P=f,w=b=0),(S&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(S=_r(d,"x",a,"px"),y=_r(d,"y",o,"px")),(g||v||p||m)&&(S=Bt(S+g-(g*C+v*b)+p),y=Bt(y+v-(g*w+v*P)+m)),(i||s)&&(O=d.getBBox(),S=Bt(S+i/100*O.width),y=Bt(y+s/100*O.height)),O="matrix("+C+","+w+","+b+","+P+","+S+","+y+")",d.setAttribute("transform",O),E&&(d.style[Lt]=O)},G_=function(e,t,n,i,s){var a=360,o=en(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Pr:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Ih)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Ih)%a-~~(c/a)*a)),e._pt=f=new Cn(e._pt,t,n,i,c,b_),f.e=u,f.u="deg",e._props.push(n),f},kh=function(e,t){for(var n in t)e[n]=t[n];return e},V_=function(e,t,n){var i=kh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Lt]=t,o=za(n,1),Zr(n,Lt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Lt],a[Lt]=t,o=za(n,1),a[Lt]=c);for(l in Yi)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=ln(c),g=ln(u),h=d!==g?_r(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Cn(e._pt,o,l,h,f-h,Uc),e._pt.u=g||0,e._props.push(l));kh(o,i)};An("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});rl[e>1?"border"+r:r]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=a.map(function(g){return Ni(o,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},a.forEach(function(g,v){return d[g]=f[v]=f[v]||f[(v-1)/2|0]}),o.init(l,d,h)}});var _p={name:"css",register:Oc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,d,g,v,p,m,E,S,y,C,w,b,P;Zu||Oc(),this.styles=this.styles||cp(e),P=this.styles.props,this.tween=n;for(v in t)if(v!=="autoRound"&&(u=t[v],!(zn[v]&&Jd(v,t,n,i,e,s)))){if(d=typeof u,g=rl[v],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Oa(u)),g)g(this,e,v,u,n)&&(b=1);else if(v.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(v)+"").trim(),u+="",fr.lastIndex=0,fr.test(c)||(p=ln(c),m=ln(u)),m?p!==m&&(c=_r(e,v,c,m)+m):p&&(u+=p),this.add(o,"setProperty",c,u,i,s,0,0,v),a.push(v),P.push(v,0,o[v]);else if(d!=="undefined"){if(l&&v in l?(c=typeof l[v]=="function"?l[v].call(n,i,e,s):l[v],en(c)&&~c.indexOf("random(")&&(c=Oa(c)),ln(c+"")||c==="auto"||(c+=Xn.units[v]||ln(Ni(e,v))||""),(c+"").charAt(1)==="="&&(c=Ni(e,v))):c=Ni(e,v),f=parseFloat(c),E=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),E&&(u=u.substr(2)),h=parseFloat(u),v in Mi&&(v==="autoAlpha"&&(f===1&&Ni(e,"visibility")==="hidden"&&h&&(f=0),P.push("visibility",0,o.visibility),lr(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),v!=="scale"&&v!=="transform"&&(v=Mi[v],~v.indexOf(",")&&(v=v.split(",")[0]))),S=v in Yi,S){if(this.styles.save(v),y||(C=e._gsap,C.renderTransform&&!t.parseTransform||za(e,t.parseTransform),w=t.smoothOrigin!==!1&&C.smooth,y=this._pt=new Cn(this._pt,o,Lt,0,1,C.renderTransform,C,0,-1),y.dep=1),v==="scale")this._pt=new Cn(this._pt,C,"scaleY",C.scaleY,(E?Ds(C.scaleY,E+h):h)-C.scaleY||0,Uc),this._pt.u=0,a.push("scaleY",v),v+="X";else if(v==="transformOrigin"){P.push(Rn,0,o[Rn]),u=B_(u),C.svg?Fc(e,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==C.zOrigin&&lr(this,C,"zOrigin",C.zOrigin,m),lr(this,o,v,sl(c),sl(u)));continue}else if(v==="svgOrigin"){Fc(e,u,1,w,0,this);continue}else if(v in dp){G_(this,C,v,f,E?Ds(f,E+u):u);continue}else if(v==="smoothOrigin"){lr(this,C,"smooth",C.smooth,u);continue}else if(v==="force3D"){C[v]=u;continue}else if(v==="transform"){V_(this,u,e);continue}}else v in o||(v=Ys(v)||v);if(S||(h||h===0)&&(f||f===0)&&!T_.test(u)&&v in o)p=(c+"").substr((f+"").length),h||(h=0),m=ln(u)||(v in Xn.units?Xn.units[v]:p),p!==m&&(f=_r(e,v,c,m)),this._pt=new Cn(this._pt,S?C:o,v,f,(E?Ds(f,E+h):h)-f,!S&&(m==="px"||v==="zIndex")&&t.autoRound!==!1?A_:Uc),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=w_);else if(v in o)F_.call(this,e,v,c,E?E+u:u);else if(v in e)this.add(e,v,c||e[v],E?E+u:u,i,s);else if(v!=="parseTransform"){Gu(v,u);continue}S||(v in o?P.push(v,0,o[v]):P.push(v,1,c||e[v])),a.push(v)}}b&&rp(this)},render:function(e,t){if(t.tween._time||!Ju())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ni,aliases:Mi,getSetter:function(e,t,n){var i=Mi[t];return i&&i.indexOf(",")<0&&(t=i),t in Yi&&t!==Rn&&(e._gsap.x||Ni(e,"x"))?n&&Dh===n?t==="scale"?L_:P_:(Dh=n||{})&&(t==="scale"?D_:I_):e.style&&!ku(e.style[t])?C_:~t.indexOf("-")?R_:Ku(e,t)},core:{_removeProperty:Zr,_getMatrix:eh}};Dn.utils.checkPrefix=Ys;Dn.core.getStyleSaver=cp;(function(r,e,t,n){var i=An(r+","+e+","+t,function(s){Yi[s]=1});An(e,function(s){Xn.units[s]="deg",dp[s]=1}),Mi[i[13]]=r+","+e,An(n,function(s){var a=s.split(":");Mi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");An("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Xn.units[r]="px"});Dn.registerPlugin(_p);var et=Dn.registerPlugin(_p)||Dn;et.core.Tween;function W_(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function X_(r,e,t){return e&&W_(r.prototype,e),r}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var nn,ko,Gn,cr,ur,Ns,gp,Lr,Ea,vp,ki,ui,xp,Sp=function(){return nn||typeof window<"u"&&(nn=window.gsap)&&nn.registerPlugin&&nn},Mp=1,Rs=[],nt=[],Ti=[],Ta=Date.now,Bc=function(e,t){return t},Y_=function(){var e=Ea.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,nt),i.push.apply(i,Ti),nt=n,Ti=i,Bc=function(a,o){return t[a](o)}},dr=function(e,t){return~Ti.indexOf(e)&&Ti[Ti.indexOf(e)+1][t]},ba=function(e){return!!~vp.indexOf(e)},dn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},fn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},eo="scrollLeft",to="scrollTop",kc=function(){return ki&&ki.isPressed||nt.cache++},al=function(e,t){var n=function i(s){if(s||s===0){Mp&&(Gn.history.scrollRestoration="manual");var a=ki&&ki.isPressed;s=i.v=Math.round(s)||(ki&&ki.iOS?1:0),e(s),i.cacheID=nt.cache,a&&Bc("ss",s)}else(t||nt.cache!==i.cacheID||Bc("ref"))&&(i.cacheID=nt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},yn={s:eo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:al(function(r){return arguments.length?Gn.scrollTo(r,Xt.sc()):Gn.pageXOffset||cr[eo]||ur[eo]||Ns[eo]||0})},Xt={s:to,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:yn,sc:al(function(r){return arguments.length?Gn.scrollTo(yn.sc(),r):Gn.pageYOffset||cr[to]||ur[to]||Ns[to]||0})},Tn=function(e,t){return(t&&t._ctx&&t._ctx.selector||nn.utils.toArray)(e)[0]||(typeof e=="string"&&nn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},gr=function(e,t){var n=t.s,i=t.sc;ba(e)&&(e=cr.scrollingElement||ur);var s=nt.indexOf(e),a=i===Xt.sc?1:2;!~s&&(s=nt.push(e)-1),nt[s+a]||dn(e,"scroll",kc);var o=nt[s+a],l=o||(nt[s+a]=al(dr(e,n),!0)||(ba(e)?i:al(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=nn.getProperty(e,"scrollBehavior")==="smooth"),l},zc=function(e,t,n){var i=e,s=e,a=Ta(),o=a,l=t||50,c=Math.max(500,l*3),u=function(g,v){var p=Ta();v||p-a>l?(s=i,i=g,o=a,a=p):n?i+=g:i=s+(g-s)/(p-o)*(a-o)},h=function(){s=i=n?0:i,o=a=0},f=function(g){var v=o,p=s,m=Ta();return(g||g===0)&&g!==i&&u(g),a===o||m-o>c?0:(i+(n?p:-p))/((n?m:a)-v)*1e3};return{update:u,reset:h,getVelocity:f}},ra=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},zh=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},yp=function(){Ea=nn.core.globals().ScrollTrigger,Ea&&Ea.core&&Y_()},Ep=function(e){return nn=e||Sp(),!ko&&nn&&typeof document<"u"&&document.body&&(Gn=window,cr=document,ur=cr.documentElement,Ns=cr.body,vp=[Gn,cr,ur,Ns],nn.utils.clamp,xp=nn.core.context||function(){},Lr="onpointerenter"in Ns?"pointer":"mouse",gp=zt.isTouch=Gn.matchMedia&&Gn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Gn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ui=zt.eventTypes=("ontouchstart"in ur?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ur?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Mp=0},500),yp(),ko=1),ko};yn.op=Xt;nt.cache=0;var zt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){ko||Ep(nn)||console.warn("Please gsap.registerPlugin(Observer)"),Ea||yp();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,v=n.event,p=n.onDragStart,m=n.onDragEnd,E=n.onDrag,S=n.onPress,y=n.onRelease,C=n.onRight,w=n.onLeft,b=n.onUp,P=n.onDown,O=n.onChangeX,_=n.onChangeY,x=n.onChange,D=n.onToggleX,B=n.onToggleY,W=n.onHover,Y=n.onHoverEnd,z=n.onMove,X=n.ignoreCheck,G=n.isNormalizer,re=n.onGestureStart,R=n.onGestureEnd,ae=n.onWheel,Oe=n.onEnable,Xe=n.onDisable,q=n.onClick,Q=n.scrollSpeed,fe=n.capture,oe=n.allowClicks,be=n.lockAxis,ye=n.onLockAxis;this.target=o=Tn(o)||ur,this.vars=n,d&&(d=nn.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,Q=Q||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Gn.getComputedStyle(Ns).lineHeight)||22);var Ye,We,Ge,L,st,Fe,ze,F=this,Je=0,Pe=0,A=n.passive||!u,M=gr(o,yn),V=gr(o,Xt),Z=M(),te=V(),j=~a.indexOf("touch")&&!~a.indexOf("pointer")&&ui[0]==="pointerdown",Se=ba(o),ie=o.ownerDocument||cr,de=[0,0,0],Ve=[0,0,0],ne=0,ve=function(){return ne=Ta()},xe=function(Ee,ut){return(F.event=Ee)&&d&&~d.indexOf(Ee.target)||ut&&j&&Ee.pointerType!=="touch"||X&&X(Ee,ut)},Ie=function(){F._vx.reset(),F._vy.reset(),We.pause(),h&&h(F)},ge=function(){var Ee=F.deltaX=zh(de),ut=F.deltaY=zh(Ve),pe=Math.abs(Ee)>=i,Ue=Math.abs(ut)>=i;x&&(pe||Ue)&&x(F,Ee,ut,de,Ve),pe&&(C&&F.deltaX>0&&C(F),w&&F.deltaX<0&&w(F),O&&O(F),D&&F.deltaX<0!=Je<0&&D(F),Je=F.deltaX,de[0]=de[1]=de[2]=0),Ue&&(P&&F.deltaY>0&&P(F),b&&F.deltaY<0&&b(F),_&&_(F),B&&F.deltaY<0!=Pe<0&&B(F),Pe=F.deltaY,Ve[0]=Ve[1]=Ve[2]=0),(L||Ge)&&(z&&z(F),Ge&&(E(F),Ge=!1),L=!1),Fe&&!(Fe=!1)&&ye&&ye(F),st&&(ae(F),st=!1),Ye=0},$e=function(Ee,ut,pe){de[pe]+=Ee,Ve[pe]+=ut,F._vx.update(Ee),F._vy.update(ut),c?Ye||(Ye=requestAnimationFrame(ge)):ge()},Be=function(Ee,ut){be&&!ze&&(F.axis=ze=Math.abs(Ee)>Math.abs(ut)?"x":"y",Fe=!0),ze!=="y"&&(de[2]+=Ee,F._vx.update(Ee,!0)),ze!=="x"&&(Ve[2]+=ut,F._vy.update(ut,!0)),c?Ye||(Ye=requestAnimationFrame(ge)):ge()},at=function(Ee){if(!xe(Ee,1)){Ee=ra(Ee,u);var ut=Ee.clientX,pe=Ee.clientY,Ue=ut-F.x,Ce=pe-F.y,He=F.isDragging;F.x=ut,F.y=pe,(He||Math.abs(F.startX-ut)>=s||Math.abs(F.startY-pe)>=s)&&(E&&(Ge=!0),He||(F.isDragging=!0),Be(Ue,Ce),He||p&&p(F))}},I=F.onPress=function(Ae){xe(Ae,1)||Ae&&Ae.button||(F.axis=ze=null,We.pause(),F.isPressed=!0,Ae=ra(Ae),Je=Pe=0,F.startX=F.x=Ae.clientX,F.startY=F.y=Ae.clientY,F._vx.reset(),F._vy.reset(),dn(G?o:ie,ui[1],at,A,!0),F.deltaX=F.deltaY=0,S&&S(F))},ee=F.onRelease=function(Ae){if(!xe(Ae,1)){fn(G?o:ie,ui[1],at,!0);var Ee=!isNaN(F.y-F.startY),ut=F.isDragging,pe=ut&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),Ue=ra(Ae);!pe&&Ee&&(F._vx.reset(),F._vy.reset(),u&&oe&&nn.delayedCall(.08,function(){if(Ta()-ne>300&&!Ae.defaultPrevented){if(Ae.target.click)Ae.target.click();else if(ie.createEvent){var Ce=ie.createEvent("MouseEvents");Ce.initMouseEvent("click",!0,!0,Gn,1,Ue.screenX,Ue.screenY,Ue.clientX,Ue.clientY,!1,!1,!1,!1,0,null),Ae.target.dispatchEvent(Ce)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,h&&ut&&!G&&We.restart(!0),m&&ut&&m(F),y&&y(F,pe)}},K=function(Ee){return Ee.touches&&Ee.touches.length>1&&(F.isGesturing=!0)&&re(Ee,F.isDragging)},J=function(){return(F.isGesturing=!1)||R(F)},le=function(Ee){if(!xe(Ee)){var ut=M(),pe=V();$e((ut-Z)*Q,(pe-te)*Q,1),Z=ut,te=pe,h&&We.restart(!0)}},ce=function(Ee){if(!xe(Ee)){Ee=ra(Ee,u),ae&&(st=!0);var ut=(Ee.deltaMode===1?l:Ee.deltaMode===2?Gn.innerHeight:1)*g;$e(Ee.deltaX*ut,Ee.deltaY*ut,0),h&&!G&&We.restart(!0)}},qe=function(Ee){if(!xe(Ee)){var ut=Ee.clientX,pe=Ee.clientY,Ue=ut-F.x,Ce=pe-F.y;F.x=ut,F.y=pe,L=!0,h&&We.restart(!0),(Ue||Ce)&&Be(Ue,Ce)}},gt=function(Ee){F.event=Ee,W(F)},wt=function(Ee){F.event=Ee,Y(F)},tt=function(Ee){return xe(Ee)||ra(Ee,u)&&q(F)};We=F._dc=nn.delayedCall(f||.25,Ie).pause(),F.deltaX=F.deltaY=0,F._vx=zc(0,50,!0),F._vy=zc(0,50,!0),F.scrollX=M,F.scrollY=V,F.isDragging=F.isGesturing=F.isPressed=!1,xp(this),F.enable=function(Ae){return F.isEnabled||(dn(Se?ie:o,"scroll",kc),a.indexOf("scroll")>=0&&dn(Se?ie:o,"scroll",le,A,fe),a.indexOf("wheel")>=0&&dn(o,"wheel",ce,A,fe),(a.indexOf("touch")>=0&&gp||a.indexOf("pointer")>=0)&&(dn(o,ui[0],I,A,fe),dn(ie,ui[2],ee),dn(ie,ui[3],ee),oe&&dn(o,"click",ve,!0,!0),q&&dn(o,"click",tt),re&&dn(ie,"gesturestart",K),R&&dn(ie,"gestureend",J),W&&dn(o,Lr+"enter",gt),Y&&dn(o,Lr+"leave",wt),z&&dn(o,Lr+"move",qe)),F.isEnabled=!0,Ae&&Ae.type&&I(Ae),Oe&&Oe(F)),F},F.disable=function(){F.isEnabled&&(Rs.filter(function(Ae){return Ae!==F&&ba(Ae.target)}).length||fn(Se?ie:o,"scroll",kc),F.isPressed&&(F._vx.reset(),F._vy.reset(),fn(G?o:ie,ui[1],at,!0)),fn(Se?ie:o,"scroll",le,fe),fn(o,"wheel",ce,fe),fn(o,ui[0],I,fe),fn(ie,ui[2],ee),fn(ie,ui[3],ee),fn(o,"click",ve,!0),fn(o,"click",tt),fn(ie,"gesturestart",K),fn(ie,"gestureend",J),fn(o,Lr+"enter",gt),fn(o,Lr+"leave",wt),fn(o,Lr+"move",qe),F.isEnabled=F.isPressed=F.isDragging=!1,Xe&&Xe(F))},F.kill=F.revert=function(){F.disable();var Ae=Rs.indexOf(F);Ae>=0&&Rs.splice(Ae,1),ki===F&&(ki=0)},Rs.push(F),G&&ba(o)&&(ki=F),F.enable(v)},X_(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();zt.version="3.12.5";zt.create=function(r){return new zt(r)};zt.register=Ep;zt.getAll=function(){return Rs.slice()};zt.getById=function(r){return Rs.filter(function(e){return e.vars.id===r})[0]};Sp()&&nn.registerPlugin(zt);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Me,ys,lt,Rt,hi,bt,Tp,ol,Ha,wa,pa,no,an,xl,Hc,gn,Hh,Gh,Es,bp,Ol,wp,_n,Gc,Ap,Cp,ir,Vc,th,Os,nh,ll,Wc,Fl,io=1,on=Date.now,Bl=on(),ii=0,ma=0,Vh=function(e,t,n){var i=kn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Wh=function(e,t){return t&&(!kn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},$_=function r(){return ma&&requestAnimationFrame(r)},Xh=function(){return xl=1},Yh=function(){return xl=0},vi=function(e){return e},_a=function(e){return Math.round(e*1e5)/1e5||0},Rp=function(){return typeof window<"u"},Pp=function(){return Me||Rp()&&(Me=window.gsap)&&Me.registerPlugin&&Me},Jr=function(e){return!!~Tp.indexOf(e)},Lp=function(e){return(e==="Height"?nh:lt["inner"+e])||hi["client"+e]||bt["client"+e]},Dp=function(e){return dr(e,"getBoundingClientRect")||(Jr(e)?function(){return Wo.width=lt.innerWidth,Wo.height=nh,Wo}:function(){return Oi(e)})},q_=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=dr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?Lp(s):e["client"+s])||0}},K_=function(e,t){return!t||~Ti.indexOf(e)?Dp(e):function(){return Wo}},yi=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=dr(e,n))?a()-Dp(e)()[s]:Jr(e)?(hi[n]||bt[n])-Lp(i):e[n]-e["offset"+i])},ro=function(e,t){for(var n=0;n<Es.length;n+=3)(!t||~t.indexOf(Es[n+1]))&&e(Es[n],Es[n+1],Es[n+2])},kn=function(e){return typeof e=="string"},En=function(e){return typeof e=="function"},ga=function(e){return typeof e=="number"},Dr=function(e){return typeof e=="object"},sa=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},kl=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},as=Math.abs,Ip="left",Up="top",ih="right",rh="bottom",Xr="width",Yr="height",Aa="Right",Ca="Left",Ra="Top",Pa="Bottom",Gt="padding",jn="margin",$s="Width",sh="Height",Wt="px",Zn=function(e){return lt.getComputedStyle(e)},j_=function(e){var t=Zn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},$h=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Oi=function(e,t){var n=t&&Zn(e)[Hc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Me.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},cl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Np=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},Z_=function(e){return function(t){return Me.utils.snap(Np(e),t)}},ah=function(e){var t=Me.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},J_=function(e){return function(t,n){return ah(Np(e))(t,n.direction)}},so=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Jt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Zt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ao=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},qh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},oo={toggleActions:"play",anticipatePin:0},ul={top:0,left:0,center:.5,bottom:1,right:1},zo=function(e,t){if(kn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in ul?ul[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},lo=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,g=Rt.createElement("div"),v=Jr(n)||dr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=v?bt:n,E=e.indexOf("start")!==-1,S=E?c:u,y="border-color:"+S+";font-size:"+h+";color:"+S+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&v?"fixed;":"absolute;"),(p||l||!v)&&(y+=(i===Xt?ih:rh)+":"+(a+parseFloat(f))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=E,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],Ho(g,0,i,E),g},Ho=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+$s]=1,s["border"+o+$s]=0,s[n.p]=t+"px",Me.set(e,s)},Qe=[],Xc={},Ga,Kh=function(){return on()-ii>34&&(Ga||(Ga=requestAnimationFrame(Gi)))},os=function(){(!_n||!_n.isPressed||_n.startX>bt.clientWidth)&&(nt.cache++,_n?Ga||(Ga=requestAnimationFrame(Gi)):Gi(),ii||es("scrollStart"),ii=on())},zl=function(){Cp=lt.innerWidth,Ap=lt.innerHeight},va=function(){nt.cache++,!an&&!wp&&!Rt.fullscreenElement&&!Rt.webkitFullscreenElement&&(!Gc||Cp!==lt.innerWidth||Math.abs(lt.innerHeight-Ap)>lt.innerHeight*.25)&&ol.restart(!0)},Qr={},Q_=[],Op=function r(){return Zt(ke,"scrollEnd",r)||Br(!0)},es=function(e){return Qr[e]&&Qr[e].map(function(t){return t()})||Q_},Fn=[],Fp=function(e){for(var t=0;t<Fn.length;t+=5)(!e||Fn[t+4]&&Fn[t+4].query===e)&&(Fn[t].style.cssText=Fn[t+1],Fn[t].getBBox&&Fn[t].setAttribute("transform",Fn[t+2]||""),Fn[t+3].uncache=1)},oh=function(e,t){var n;for(gn=0;gn<Qe.length;gn++)n=Qe[gn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));ll=!0,t&&Fp(t),t||es("revert")},Bp=function(e,t){nt.cache++,(t||!vn)&&nt.forEach(function(n){return En(n)&&n.cacheID++&&(n.rec=0)}),kn(e)&&(lt.history.scrollRestoration=th=e)},vn,$r=0,jh,eg=function(){if(jh!==$r){var e=jh=$r;requestAnimationFrame(function(){return e===$r&&Br(!0)})}},kp=function(){bt.appendChild(Os),nh=!_n&&Os.offsetHeight||lt.innerHeight,bt.removeChild(Os)},Zh=function(e){return Ha(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Br=function(e,t){if(ii&&!e&&!ll){Jt(ke,"scrollEnd",Op);return}kp(),vn=ke.isRefreshing=!0,nt.forEach(function(i){return En(i)&&++i.cacheID&&(i.rec=i())});var n=es("refreshInit");bp&&ke.sort(),t||oh(),nt.forEach(function(i){En(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Qe.slice(0).forEach(function(i){return i.refresh()}),ll=!1,Qe.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Wc=1,Zh(!0),Qe.forEach(function(i){var s=yi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Zh(!1),Wc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),nt.forEach(function(i){En(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Bp(th,1),ol.pause(),$r++,vn=2,Gi(2),Qe.forEach(function(i){return En(i.vars.onRefresh)&&i.vars.onRefresh(i)}),vn=ke.isRefreshing=!1,es("refresh")},Yc=0,Go=1,La,Gi=function(e){if(e===2||!vn&&!ll){ke.isUpdating=!0,La&&La.update(0);var t=Qe.length,n=on(),i=n-Bl>=50,s=t&&Qe[0].scroll();if(Go=Yc>s?-1:1,vn||(Yc=s),i&&(ii&&!xl&&n-ii>200&&(ii=0,es("scrollEnd")),pa=Bl,Bl=n),Go<0){for(gn=t;gn-- >0;)Qe[gn]&&Qe[gn].update(0,i);Go=1}else for(gn=0;gn<t;gn++)Qe[gn]&&Qe[gn].update(0,i);ke.isUpdating=!1}Ga=0},$c=[Ip,Up,rh,ih,jn+Pa,jn+Aa,jn+Ra,jn+Ca,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Vo=$c.concat([Xr,Yr,"boxSizing","max"+$s,"max"+sh,"position",jn,Gt,Gt+Ra,Gt+Aa,Gt+Pa,Gt+Ca]),tg=function(e,t,n){Fs(n);var i=e._gsap;if(i.spacerIsNative)Fs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Hl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=$c.length,a=t.style,o=e.style,l;s--;)l=$c[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[rh]=o[ih]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Xr]=cl(e,yn)+Wt,a[Yr]=cl(e,Xt)+Wt,a[Gt]=o[jn]=o[Up]=o[Ip]="0",Fs(i),o[Xr]=o["max"+$s]=n[Xr],o[Yr]=o["max"+sh]=n[Yr],o[Gt]=n[Gt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},ng=/([A-Z])/g,Fs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Me.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(ng,"-$1").toLowerCase())}},co=function(e){for(var t=Vo.length,n=e.style,i=[],s=0;s<t;s++)i.push(Vo[s],n[Vo[s]]);return i.t=e,i},ig=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Wo={left:0,top:0},Jh=function(e,t,n,i,s,a,o,l,c,u,h,f,d,g){En(e)&&(e=e(l)),kn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?zo("0"+e.substr(3),n):0));var v=d?d.time():0,p,m,E;if(d&&d.seek(0),isNaN(e)||(e=+e),ga(e))d&&(e=Me.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),o&&Ho(o,n,i,!0);else{En(t)&&(t=t(l));var S=(e||"0").split(" "),y,C,w,b;E=Tn(t,l)||bt,y=Oi(E)||{},(!y||!y.left&&!y.top)&&Zn(E).display==="none"&&(b=E.style.display,E.style.display="block",y=Oi(E),b?E.style.display=b:E.style.removeProperty("display")),C=zo(S[0],y[i.d]),w=zo(S[1]||"0",n),e=y[i.p]-c[i.p]-u+C+s-w,o&&Ho(o,w,i,n-w<20||o._isStart&&w>20),n-=n-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var P=e+n,O=a._isStart;p="scroll"+i.d2,Ho(a,P,i,O&&P>20||!O&&(h?Math.max(bt[p],hi[p]):a.parentNode[p])<=P+1),h&&(c=Oi(o),h&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Wt))}return d&&E&&(p=Oi(E),d.seek(f),m=Oi(E),d._caScrollDist=p[i.p]-m[i.p],e=e/d._caScrollDist*f),d&&d.seek(v),d?e:Math.round(e)},rg=/(webkit|moz|length|cssText|inset)/i,Qh=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===bt){e._stOrig=s.cssText,o=Zn(e);for(a in o)!+a&&!rg.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Me.core.getCache(e).uncache=1,t.appendChild(e)}},zp=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=a,a}},uo=function(e,t,n){var i={};i[t.p]="+="+n,Me.set(e,i)},ef=function(e,t){var n=gr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,h){var f=a.tween,d=l.onComplete,g={};c=c||n();var v=zp(n,c,function(){f.kill(),a.tween=0});return h=u&&h||0,u=u||o-c,f&&f.kill(),l[i]=o,l.inherit=!1,l.modifiers=g,g[i]=function(){return v(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){nt.cache++,a.tween&&Gi()},l.onComplete=function(){a.tween=0,d&&d.call(f)},f=a.tween=Me.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Jt(e,"wheel",n.wheelHandler),ke.isTouch&&Jt(e,"touchmove",n.wheelHandler),s},ke=function(){function r(t,n){ys||r.register(Me)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Vc(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ma){this.update=this.refresh=this.kill=vi;return}n=$h(kn(n)||ga(n)||n.nodeType?{trigger:n}:n,oo);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,v=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,E=s.onSnapComplete,S=s.once,y=s.snap,C=s.pinReparent,w=s.pinSpacer,b=s.containerAnimation,P=s.fastScrollEnd,O=s.preventOverlaps,_=n.horizontal||n.containerAnimation&&n.horizontal!==!1?yn:Xt,x=!h&&h!==0,D=Tn(n.scroller||lt),B=Me.core.getCache(D),W=Jr(D),Y=("pinType"in n?n.pinType:dr(D,"pinType")||W&&"fixed")==="fixed",z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=x&&n.toggleActions.split(" "),G="markers"in n?n.markers:oo.markers,re=W?0:parseFloat(Zn(D)["border"+_.p2+$s])||0,R=this,ae=n.onRefreshInit&&function(){return n.onRefreshInit(R)},Oe=q_(D,W,_),Xe=K_(D,W),q=0,Q=0,fe=0,oe=gr(D,_),be,ye,Ye,We,Ge,L,st,Fe,ze,F,Je,Pe,A,M,V,Z,te,j,Se,ie,de,Ve,ne,ve,xe,Ie,ge,$e,Be,at,I,ee,K,J,le,ce,qe,gt,wt;if(R._startClamp=R._endClamp=!1,R._dir=_,p*=45,R.scroller=D,R.scroll=b?b.time.bind(b):oe,We=oe(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(bp=1,n.refreshPriority===-9999&&(La=R)),B.tweenScroll=B.tweenScroll||{top:ef(D,Xt),left:ef(D,yn)},R.tweenTo=be=B.tweenScroll[_.p],R.scrubDuration=function(pe){K=ga(pe)&&pe,K?ee?ee.duration(pe):ee=Me.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:K,paused:!0,onComplete:function(){return m&&m(R)}}):(ee&&ee.progress(1).kill(),ee=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(h),at=0,l||(l=i.vars.id)),y&&((!Dr(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in bt.style&&Me.set(W?[bt,hi]:D,{scrollBehavior:"auto"}),nt.forEach(function(pe){return En(pe)&&pe.target===(W?Rt.scrollingElement||hi:D)&&(pe.smooth=!1)}),Ye=En(y.snapTo)?y.snapTo:y.snapTo==="labels"?Z_(i):y.snapTo==="labelsDirectional"?J_(i):y.directional!==!1?function(pe,Ue){return ah(y.snapTo)(pe,on()-Q<500?0:Ue.direction)}:Me.utils.snap(y.snapTo),J=y.duration||{min:.1,max:2},J=Dr(J)?wa(J.min,J.max):wa(J,J),le=Me.delayedCall(y.delay||K/2||.1,function(){var pe=oe(),Ue=on()-Q<500,Ce=be.tween;if((Ue||Math.abs(R.getVelocity())<10)&&!Ce&&!xl&&q!==pe){var He=(pe-L)/M,Ut=i&&!x?i.totalProgress():He,Ke=Ue?0:(Ut-I)/(on()-pa)*1e3||0,At=Me.utils.clamp(-He,1-He,as(Ke/2)*Ke/.185),Nt=He+(y.inertia===!1?0:At),yt,vt,mt=y,In=mt.onStart,Et=mt.onInterrupt,T=mt.onComplete;if(yt=Ye(Nt,R),ga(yt)||(yt=Nt),vt=Math.round(L+yt*M),pe<=st&&pe>=L&&vt!==pe){if(Ce&&!Ce._initted&&Ce.data<=as(vt-pe))return;y.inertia===!1&&(At=yt-He),be(vt,{duration:J(as(Math.max(as(Nt-Ut),as(yt-Ut))*.185/Ke/.05||0)),ease:y.ease||"power3",data:as(vt-pe),onInterrupt:function(){return le.restart(!0)&&Et&&Et(R)},onComplete:function(){R.update(),q=oe(),i&&(ee?ee.resetTo("totalProgress",yt,i._tTime/i._tDur):i.progress(yt)),at=I=i&&!x?i.totalProgress():R.progress,E&&E(R),T&&T(R)}},pe,At*M,vt-pe-At*M),In&&In(R,be.tween)}}else R.isActive&&q!==pe&&le.restart(!0)}).pause()),l&&(Xc[l]=R),f=R.trigger=Tn(f||d!==!0&&d),wt=f&&f._gsap&&f._gsap.stRevert,wt&&(wt=wt(R)),d=d===!0?f:Tn(d),kn(o)&&(o={targets:f,className:o}),d&&(g===!1||g===jn||(g=!g&&d.parentNode&&d.parentNode.style&&Zn(d.parentNode).display==="flex"?!1:Gt),R.pin=d,ye=Me.core.getCache(d),ye.spacer?V=ye.pinState:(w&&(w=Tn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),ye.spacerIsNative=!!w,w&&(ye.spacerState=co(w))),ye.spacer=j=w||Rt.createElement("div"),j.classList.add("pin-spacer"),l&&j.classList.add("pin-spacer-"+l),ye.pinState=V=co(d)),n.force3D!==!1&&Me.set(d,{force3D:!0}),R.spacer=j=ye.spacer,Be=Zn(d),ve=Be[g+_.os2],ie=Me.getProperty(d),de=Me.quickSetter(d,_.a,Wt),Hl(d,j,Be),te=co(d)),G){Pe=Dr(G)?$h(G,qh):qh,F=lo("scroller-start",l,D,_,Pe,0),Je=lo("scroller-end",l,D,_,Pe,0,F),Se=F["offset"+_.op.d2];var tt=Tn(dr(D,"content")||D);Fe=this.markerStart=lo("start",l,tt,_,Pe,Se,0,b),ze=this.markerEnd=lo("end",l,tt,_,Pe,Se,0,b),b&&(gt=Me.quickSetter([Fe,ze],_.a,Wt)),!Y&&!(Ti.length&&dr(D,"fixedMarkers")===!0)&&(j_(W?bt:D),Me.set([F,Je],{force3D:!0}),Ie=Me.quickSetter(F,_.a,Wt),$e=Me.quickSetter(Je,_.a,Wt))}if(b){var Ae=b.vars.onUpdate,Ee=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){R.update(0,0,1),Ae&&Ae.apply(b,Ee||[])})}if(R.previous=function(){return Qe[Qe.indexOf(R)-1]},R.next=function(){return Qe[Qe.indexOf(R)+1]},R.revert=function(pe,Ue){if(!Ue)return R.kill(!0);var Ce=pe!==!1||!R.enabled,He=an;Ce!==R.isReverted&&(Ce&&(ce=Math.max(oe(),R.scroll.rec||0),fe=R.progress,qe=i&&i.progress()),Fe&&[Fe,ze,F,Je].forEach(function(Ut){return Ut.style.display=Ce?"none":"block"}),Ce&&(an=R,R.update(Ce)),d&&(!C||!R.isActive)&&(Ce?tg(d,j,V):Hl(d,j,Zn(d),xe)),Ce||R.update(Ce),an=He,R.isReverted=Ce)},R.refresh=function(pe,Ue,Ce,He){if(!((an||!R.enabled)&&!Ue)){if(d&&pe&&ii){Jt(r,"scrollEnd",Op);return}!vn&&ae&&ae(R),an=R,be.tween&&!Ce&&(be.tween.kill(),be.tween=0),ee&&ee.pause(),v&&i&&i.revert({kill:!1}).invalidate(),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Ut=Oe(),Ke=Xe(),At=b?b.duration():yi(D,_),Nt=M<=.01,yt=0,vt=He||0,mt=Dr(Ce)?Ce.end:n.end,In=n.endTrigger||f,Et=Dr(Ce)?Ce.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),T=R.pinnedContainer=n.pinnedContainer&&Tn(n.pinnedContainer,R),N=f&&Math.max(0,Qe.indexOf(R))||0,k=N,H,U,se,_e,he,ue,we,Ne,Te,ot,it,_t,qt;for(G&&Dr(Ce)&&(_t=Me.getProperty(F,_.p),qt=Me.getProperty(Je,_.p));k--;)ue=Qe[k],ue.end||ue.refresh(0,1)||(an=R),we=ue.pin,we&&(we===f||we===d||we===T)&&!ue.isReverted&&(ot||(ot=[]),ot.unshift(ue),ue.revert(!0,!0)),ue!==Qe[k]&&(N--,k--);for(En(Et)&&(Et=Et(R)),Et=Vh(Et,"start",R),L=Jh(Et,f,Ut,_,oe(),Fe,F,R,Ke,re,Y,At,b,R._startClamp&&"_startClamp")||(d?-.001:0),En(mt)&&(mt=mt(R)),kn(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(kn(Et)?Et.split(" ")[0]:"")+mt:(yt=zo(mt.substr(2),Ut),mt=kn(Et)?Et:(b?Me.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,L):L)+yt,In=f)),mt=Vh(mt,"end",R),st=Math.max(L,Jh(mt||(In?"100% 0":At),In,Ut,_,oe()+yt,ze,Je,R,Ke,re,Y,At,b,R._endClamp&&"_endClamp"))||-.001,yt=0,k=N;k--;)ue=Qe[k],we=ue.pin,we&&ue.start-ue._pinPush<=L&&!b&&ue.end>0&&(H=ue.end-(R._startClamp?Math.max(0,ue.start):ue.start),(we===f&&ue.start-ue._pinPush<L||we===T)&&isNaN(Et)&&(yt+=H*(1-ue.progress)),we===d&&(vt+=H));if(L+=yt,st+=yt,R._startClamp&&(R._startClamp+=yt),R._endClamp&&!vn&&(R._endClamp=st||-.001,st=Math.min(st,yi(D,_))),M=st-L||(L-=.01)&&.001,Nt&&(fe=Me.utils.clamp(0,1,Me.utils.normalize(L,st,ce))),R._pinPush=vt,Fe&&yt&&(H={},H[_.a]="+="+yt,T&&(H[_.p]="-="+oe()),Me.set([Fe,ze],H)),d&&!(Wc&&R.end>=yi(D,_)))H=Zn(d),_e=_===Xt,se=oe(),Ve=parseFloat(ie(_.a))+vt,!At&&st>1&&(it=(W?Rt.scrollingElement||hi:D).style,it={style:it,value:it["overflow"+_.a.toUpperCase()]},W&&Zn(bt)["overflow"+_.a.toUpperCase()]!=="scroll"&&(it.style["overflow"+_.a.toUpperCase()]="scroll")),Hl(d,j,H),te=co(d),U=Oi(d,!0),Ne=Y&&gr(D,_e?yn:Xt)(),g?(xe=[g+_.os2,M+vt+Wt],xe.t=j,k=g===Gt?cl(d,_)+M+vt:0,k&&(xe.push(_.d,k+Wt),j.style.flexBasis!=="auto"&&(j.style.flexBasis=k+Wt)),Fs(xe),T&&Qe.forEach(function(rt){rt.pin===T&&rt.vars.pinSpacing!==!1&&(rt._subPinOffset=!0)}),Y&&oe(ce)):(k=cl(d,_),k&&j.style.flexBasis!=="auto"&&(j.style.flexBasis=k+Wt)),Y&&(he={top:U.top+(_e?se-L:Ne)+Wt,left:U.left+(_e?Ne:se-L)+Wt,boxSizing:"border-box",position:"fixed"},he[Xr]=he["max"+$s]=Math.ceil(U.width)+Wt,he[Yr]=he["max"+sh]=Math.ceil(U.height)+Wt,he[jn]=he[jn+Ra]=he[jn+Aa]=he[jn+Pa]=he[jn+Ca]="0",he[Gt]=H[Gt],he[Gt+Ra]=H[Gt+Ra],he[Gt+Aa]=H[Gt+Aa],he[Gt+Pa]=H[Gt+Pa],he[Gt+Ca]=H[Gt+Ca],Z=ig(V,he,C),vn&&oe(0)),i?(Te=i._initted,Ol(1),i.render(i.duration(),!0,!0),ne=ie(_.a)-Ve+M+vt,ge=Math.abs(M-ne)>1,Y&&ge&&Z.splice(Z.length-2,2),i.render(0,!0,!0),Te||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Ol(0)):ne=M,it&&(it.value?it.style["overflow"+_.a.toUpperCase()]=it.value:it.style.removeProperty("overflow-"+_.a));else if(f&&oe()&&!b)for(U=f.parentNode;U&&U!==bt;)U._pinOffset&&(L-=U._pinOffset,st-=U._pinOffset),U=U.parentNode;ot&&ot.forEach(function(rt){return rt.revert(!1,!0)}),R.start=L,R.end=st,We=Ge=vn?ce:oe(),!b&&!vn&&(We<ce&&oe(ce),R.scroll.rec=0),R.revert(!1,!0),Q=on(),le&&(q=-1,le.restart(!0)),an=0,i&&x&&(i._initted||qe)&&i.progress()!==qe&&i.progress(qe||0,!0).render(i.time(),!0,!0),(Nt||fe!==R.progress||b||v)&&(i&&!x&&i.totalProgress(b&&L<-.001&&!fe?Me.utils.normalize(L,st,0):fe,!0),R.progress=Nt||(We-L)/M===fe?0:fe),d&&g&&(j._pinOffset=Math.round(R.progress*ne)),ee&&ee.invalidate(),isNaN(_t)||(_t-=Me.getProperty(F,_.p),qt-=Me.getProperty(Je,_.p),uo(F,_,_t),uo(Fe,_,_t-(He||0)),uo(Je,_,qt),uo(ze,_,qt-(He||0))),Nt&&!vn&&R.update(),u&&!vn&&!A&&(A=!0,u(R),A=!1)}},R.getVelocity=function(){return(oe()-Ge)/(on()-pa)*1e3||0},R.endAnimation=function(){sa(R.callbackAnimation),i&&(ee?ee.progress(1):i.paused()?x||sa(i,R.direction<0,1):sa(i,i.reversed()))},R.labelToScroll=function(pe){return i&&i.labels&&(L||R.refresh()||L)+i.labels[pe]/i.duration()*M||0},R.getTrailing=function(pe){var Ue=Qe.indexOf(R),Ce=R.direction>0?Qe.slice(0,Ue).reverse():Qe.slice(Ue+1);return(kn(pe)?Ce.filter(function(He){return He.vars.preventOverlaps===pe}):Ce).filter(function(He){return R.direction>0?He.end<=L:He.start>=st})},R.update=function(pe,Ue,Ce){if(!(b&&!Ce&&!pe)){var He=vn===!0?ce:R.scroll(),Ut=pe?0:(He-L)/M,Ke=Ut<0?0:Ut>1?1:Ut||0,At=R.progress,Nt,yt,vt,mt,In,Et,T,N;if(Ue&&(Ge=We,We=b?oe():He,y&&(I=at,at=i&&!x?i.totalProgress():Ke)),p&&d&&!an&&!io&&ii&&(!Ke&&L<He+(He-Ge)/(on()-pa)*p?Ke=1e-4:Ke===1&&st>He+(He-Ge)/(on()-pa)*p&&(Ke=.9999)),Ke!==At&&R.enabled){if(Nt=R.isActive=!!Ke&&Ke<1,yt=!!At&&At<1,Et=Nt!==yt,In=Et||!!Ke!=!!At,R.direction=Ke>At?1:-1,R.progress=Ke,In&&!an&&(vt=Ke&&!At?0:Ke===1?1:At===1?2:3,x&&(mt=!Et&&X[vt+1]!=="none"&&X[vt+1]||X[vt],N=i&&(mt==="complete"||mt==="reset"||mt in i))),O&&(Et||N)&&(N||h||!i)&&(En(O)?O(R):R.getTrailing(O).forEach(function(se){return se.endAnimation()})),x||(ee&&!an&&!io?(ee._dp._time-ee._start!==ee._time&&ee.render(ee._dp._time-ee._start),ee.resetTo?ee.resetTo("totalProgress",Ke,i._tTime/i._tDur):(ee.vars.totalProgress=Ke,ee.invalidate().restart())):i&&i.totalProgress(Ke,!!(an&&(Q||pe)))),d){if(pe&&g&&(j.style[g+_.os2]=ve),!Y)de(_a(Ve+ne*Ke));else if(In){if(T=!pe&&Ke>At&&st+1>He&&He+1>=yi(D,_),C)if(!pe&&(Nt||T)){var k=Oi(d,!0),H=He-L;Qh(d,bt,k.top+(_===Xt?H:0)+Wt,k.left+(_===Xt?0:H)+Wt)}else Qh(d,j);Fs(Nt||T?Z:te),ge&&Ke<1&&Nt||de(Ve+(Ke===1&&!T?ne:0))}}y&&!be.tween&&!an&&!io&&le.restart(!0),o&&(Et||S&&Ke&&(Ke<1||!Fl))&&Ha(o.targets).forEach(function(se){return se.classList[Nt||S?"add":"remove"](o.className)}),a&&!x&&!pe&&a(R),In&&!an?(x&&(N&&(mt==="complete"?i.pause().totalProgress(1):mt==="reset"?i.restart(!0).pause():mt==="restart"?i.restart(!0):i[mt]()),a&&a(R)),(Et||!Fl)&&(c&&Et&&kl(R,c),z[vt]&&kl(R,z[vt]),S&&(Ke===1?R.kill(!1,1):z[vt]=0),Et||(vt=Ke===1?1:3,z[vt]&&kl(R,z[vt]))),P&&!Nt&&Math.abs(R.getVelocity())>(ga(P)?P:2500)&&(sa(R.callbackAnimation),ee?ee.progress(1):sa(i,mt==="reverse"?1:!Ke,1))):x&&a&&!an&&a(R)}if($e){var U=b?He/b.duration()*(b._caScrollDist||0):He;Ie(U+(F._isFlipped?1:0)),$e(U)}gt&&gt(-He/b.duration()*(b._caScrollDist||0))}},R.enable=function(pe,Ue){R.enabled||(R.enabled=!0,Jt(D,"resize",va),W||Jt(D,"scroll",os),ae&&Jt(r,"refreshInit",ae),pe!==!1&&(R.progress=fe=0,We=Ge=q=oe()),Ue!==!1&&R.refresh())},R.getTween=function(pe){return pe&&be?be.tween:ee},R.setPositions=function(pe,Ue,Ce,He){if(b){var Ut=b.scrollTrigger,Ke=b.duration(),At=Ut.end-Ut.start;pe=Ut.start+At*pe/Ke,Ue=Ut.start+At*Ue/Ke}R.refresh(!1,!1,{start:Wh(pe,Ce&&!!R._startClamp),end:Wh(Ue,Ce&&!!R._endClamp)},He),R.update()},R.adjustPinSpacing=function(pe){if(xe&&pe){var Ue=xe.indexOf(_.d)+1;xe[Ue]=parseFloat(xe[Ue])+pe+Wt,xe[1]=parseFloat(xe[1])+pe+Wt,Fs(xe)}},R.disable=function(pe,Ue){if(R.enabled&&(pe!==!1&&R.revert(!0,!0),R.enabled=R.isActive=!1,Ue||ee&&ee.pause(),ce=0,ye&&(ye.uncache=1),ae&&Zt(r,"refreshInit",ae),le&&(le.pause(),be.tween&&be.tween.kill()&&(be.tween=0)),!W)){for(var Ce=Qe.length;Ce--;)if(Qe[Ce].scroller===D&&Qe[Ce]!==R)return;Zt(D,"resize",va),W||Zt(D,"scroll",os)}},R.kill=function(pe,Ue){R.disable(pe,Ue),ee&&!Ue&&ee.kill(),l&&delete Xc[l];var Ce=Qe.indexOf(R);Ce>=0&&Qe.splice(Ce,1),Ce===gn&&Go>0&&gn--,Ce=0,Qe.forEach(function(He){return He.scroller===R.scroller&&(Ce=1)}),Ce||vn||(R.scroll.rec=0),i&&(i.scrollTrigger=null,pe&&i.revert({kill:!1}),Ue||i.kill()),Fe&&[Fe,ze,F,Je].forEach(function(He){return He.parentNode&&He.parentNode.removeChild(He)}),La===R&&(La=0),d&&(ye&&(ye.uncache=1),Ce=0,Qe.forEach(function(He){return He.pin===d&&Ce++}),Ce||(ye.spacer=0)),n.onKill&&n.onKill(R)},Qe.push(R),R.enable(!1,!1),wt&&wt(R),i&&i.add&&!M){var ut=R.update;R.update=function(){R.update=ut,L||st||R.refresh()},Me.delayedCall(.01,R.update),M=.01,L=st=0}else R.refresh();d&&eg()},r.register=function(n){return ys||(Me=n||Pp(),Rp()&&window.document&&r.enable(),ys=ma),ys},r.defaults=function(n){if(n)for(var i in n)oo[i]=n[i];return oo},r.disable=function(n,i){ma=0,Qe.forEach(function(a){return a[i?"kill":"disable"](n)}),Zt(lt,"wheel",os),Zt(Rt,"scroll",os),clearInterval(no),Zt(Rt,"touchcancel",vi),Zt(bt,"touchstart",vi),so(Zt,Rt,"pointerdown,touchstart,mousedown",Xh),so(Zt,Rt,"pointerup,touchend,mouseup",Yh),ol.kill(),ro(Zt);for(var s=0;s<nt.length;s+=3)ao(Zt,nt[s],nt[s+1]),ao(Zt,nt[s],nt[s+2])},r.enable=function(){if(lt=window,Rt=document,hi=Rt.documentElement,bt=Rt.body,Me&&(Ha=Me.utils.toArray,wa=Me.utils.clamp,Vc=Me.core.context||vi,Ol=Me.core.suppressOverwrites||vi,th=lt.history.scrollRestoration||"auto",Yc=lt.pageYOffset,Me.core.globals("ScrollTrigger",r),bt)){ma=1,Os=document.createElement("div"),Os.style.height="100vh",Os.style.position="absolute",kp(),$_(),zt.register(Me),r.isTouch=zt.isTouch,ir=zt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Gc=zt.isTouch===1,Jt(lt,"wheel",os),Tp=[lt,Rt,hi,bt],Me.matchMedia?(r.matchMedia=function(l){var c=Me.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},Me.addEventListener("matchMediaInit",function(){return oh()}),Me.addEventListener("matchMediaRevert",function(){return Fp()}),Me.addEventListener("matchMedia",function(){Br(0,1),es("matchMedia")}),Me.matchMedia("(orientation: portrait)",function(){return zl(),zl})):console.warn("Requires GSAP 3.11.0 or later"),zl(),Jt(Rt,"scroll",os);var n=bt.style,i=n.borderTopStyle,s=Me.core.Animation.prototype,a,o;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=Oi(bt),Xt.m=Math.round(a.top+Xt.sc())||0,yn.m=Math.round(a.left+yn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),no=setInterval(Kh,250),Me.delayedCall(.5,function(){return io=0}),Jt(Rt,"touchcancel",vi),Jt(bt,"touchstart",vi),so(Jt,Rt,"pointerdown,touchstart,mousedown",Xh),so(Jt,Rt,"pointerup,touchend,mouseup",Yh),Hc=Me.utils.checkPrefix("transform"),Vo.push(Hc),ys=on(),ol=Me.delayedCall(.2,Br).pause(),Es=[Rt,"visibilitychange",function(){var l=lt.innerWidth,c=lt.innerHeight;Rt.hidden?(Hh=l,Gh=c):(Hh!==l||Gh!==c)&&va()},Rt,"DOMContentLoaded",Br,lt,"load",Br,lt,"resize",va],ro(Jt),Qe.forEach(function(l){return l.enable(0,1)}),o=0;o<nt.length;o+=3)ao(Zt,nt[o],nt[o+1]),ao(Zt,nt[o],nt[o+2])}},r.config=function(n){"limitCallbacks"in n&&(Fl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(no)||(no=i)&&setInterval(Kh,i),"ignoreMobileResize"in n&&(Gc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ro(Zt)||ro(Jt,n.autoRefreshEvents||"none"),wp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Tn(n),a=nt.indexOf(s),o=Jr(s);~a&&nt.splice(a,o?6:2),i&&(o?Ti.unshift(lt,i,bt,i,hi,i):Ti.unshift(s,i))},r.clearMatchMedia=function(n){Qe.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(kn(n)?Tn(n):n).getBoundingClientRect(),o=a[s?Xr:Yr]*i||0;return s?a.right-o>0&&a.left+o<lt.innerWidth:a.bottom-o>0&&a.top+o<lt.innerHeight},r.positionInViewport=function(n,i,s){kn(n)&&(n=Tn(n));var a=n.getBoundingClientRect(),o=a[s?Xr:Yr],l=i==null?o/2:i in ul?ul[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/lt.innerWidth:(a.top+l)/lt.innerHeight},r.killAll=function(n){if(Qe.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Qr.killAll||[];Qr={},i.forEach(function(s){return s()})}},r}();ke.version="3.12.5";ke.saveStyles=function(r){return r?Ha(r).forEach(function(e){if(e&&e.style){var t=Fn.indexOf(e);t>=0&&Fn.splice(t,5),Fn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Me.core.getCache(e),Vc())}}):Fn};ke.revert=function(r,e){return oh(!r,e)};ke.create=function(r,e){return new ke(r,e)};ke.refresh=function(r){return r?va():(ys||ke.register())&&Br(!0)};ke.update=function(r){return++nt.cache&&Gi(r===!0?2:0)};ke.clearScrollMemory=Bp;ke.maxScroll=function(r,e){return yi(r,e?yn:Xt)};ke.getScrollFunc=function(r,e){return gr(Tn(r),e?yn:Xt)};ke.getById=function(r){return Xc[r]};ke.getAll=function(){return Qe.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ke.isScrolling=function(){return!!ii};ke.snapDirectional=ah;ke.addEventListener=function(r,e){var t=Qr[r]||(Qr[r]=[]);~t.indexOf(e)||t.push(e)};ke.removeEventListener=function(r,e){var t=Qr[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ke.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var h=[],f=[],d=Me.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&En(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return En(s)&&(s=s(),Jt(ke,"refresh",function(){return s=e.batchMax()})),Ha(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(ke.create(c))}),t};var tf=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Gl=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(zt.isTouch?" pinch-zoom":""):"none",e===hi&&r(bt,t)},ho={auto:1,scroll:1},sg=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Me.core.getCache(s),o=on(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==bt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ho[(l=Zn(s)).overflowY]||ho[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Jr(s)&&(ho[(l=Zn(s)).overflowY]||ho[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Hp=function(e,t,n,i){return zt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&sg,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Jt(Rt,zt.eventTypes[0],rf,!1,!0)},onDisable:function(){return Zt(Rt,zt.eventTypes[0],rf,!0)}})},ag=/(input|label|select|textarea)/i,nf,rf=function(e){var t=ag.test(e.target.tagName);(t||nf)&&(e._gsapAllow=!0,nf=t)},og=function(e){Dr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Tn(e.target)||hi,u=Me.core.globals().ScrollSmoother,h=u&&u.get(),f=ir&&(e.content&&Tn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=gr(c,Xt),g=gr(c,yn),v=1,p=(zt.isTouch&&lt.visualViewport?lt.visualViewport.scale*lt.visualViewport.width:lt.outerWidth)/lt.innerWidth,m=0,E=En(i)?function(){return i(o)}:function(){return i||2.8},S,y,C=Hp(c,e.type,!0,s),w=function(){return y=!1},b=vi,P=vi,O=function(){l=yi(c,Xt),P=wa(ir?1:0,l),n&&(b=wa(0,yi(c,yn))),S=$r},_=function(){f._gsap.y=_a(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},x=function(){if(y){requestAnimationFrame(w);var G=_a(o.deltaY/2),re=P(d.v-G);if(f&&re!==d.v+d.offset){d.offset=re-d.v;var R=_a((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",f._gsap.y=R+"px",d.cacheID=nt.cache,Gi()}return!0}d.offset&&_(),y=!0},D,B,W,Y,z=function(){O(),D.isActive()&&D.vars.scrollY>l&&(d()>l?D.progress(1)&&d(l):D.resetTo("scrollY",l))};return f&&Me.set(f,{y:"+=0"}),e.ignoreCheck=function(X){return ir&&X.type==="touchmove"&&x()||v>1.05&&X.type!=="touchstart"||o.isGesturing||X.touches&&X.touches.length>1},e.onPress=function(){y=!1;var X=v;v=_a((lt.visualViewport&&lt.visualViewport.scale||1)/p),D.pause(),X!==v&&Gl(c,v>1.01?!0:n?!1:"x"),B=g(),W=d(),O(),S=$r},e.onRelease=e.onGestureStart=function(X,G){if(d.offset&&_(),!G)Y.restart(!0);else{nt.cache++;var re=E(),R,ae;n&&(R=g(),ae=R+re*.05*-X.velocityX/.227,re*=tf(g,R,ae,yi(c,yn)),D.vars.scrollX=b(ae)),R=d(),ae=R+re*.05*-X.velocityY/.227,re*=tf(d,R,ae,yi(c,Xt)),D.vars.scrollY=P(ae),D.invalidate().duration(re).play(.01),(ir&&D.vars.scrollY>=l||R>=l-1)&&Me.to({},{onUpdate:z,duration:re})}a&&a(X)},e.onWheel=function(){D._ts&&D.pause(),on()-m>1e3&&(S=0,m=on())},e.onChange=function(X,G,re,R,ae){if($r!==S&&O(),G&&n&&g(b(R[2]===G?B+(X.startX-X.x):g()+G-R[1])),re){d.offset&&_();var Oe=ae[2]===re,Xe=Oe?W+X.startY-X.y:d()+re-ae[1],q=P(Xe);Oe&&Xe!==q&&(W+=q-Xe),d(q)}(re||G)&&Gi()},e.onEnable=function(){Gl(c,n?!1:"x"),ke.addEventListener("refresh",z),Jt(lt,"resize",z),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),C.enable()},e.onDisable=function(){Gl(c,!0),Zt(lt,"resize",z),ke.removeEventListener("refresh",z),C.kill()},e.lockAxis=e.lockAxis!==!1,o=new zt(e),o.iOS=ir,ir&&!d()&&d(1),ir&&Me.ticker.add(vi),Y=o._dc,D=Me.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:zp(d,d(),function(){return D.pause()})},onUpdate:Gi,onComplete:Y.vars.onComplete}),o};ke.sort=function(r){return Qe.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};ke.observe=function(r){return new zt(r)};ke.normalizeScroll=function(r){if(typeof r>"u")return _n;if(r===!0&&_n)return _n.enable();if(r===!1){_n&&_n.kill(),_n=r;return}var e=r instanceof zt?r:og(r);return _n&&_n.target===e.target&&_n.kill(),Jr(e.target)&&(_n=e),e};ke.core={_getVelocityProp:zc,_inputObserver:Hp,_scrollers:nt,_proxies:Ti,bridge:{ss:function(){ii||es("scrollStart"),ii=on()},ref:function(){return an}}};Pp()&&Me.registerPlugin(ke);var lg="1.1.14";function Gp(r,e,t){return Math.max(r,Math.min(e,t))}function cg(r,e,t){return(1-t)*r+t*e}function ug(r,e,t,n){return cg(r,e,1-Math.exp(-t*n))}function hg(r,e){return(r%e+e)%e}var fg=class{constructor(){Le(this,"isRunning",!1);Le(this,"value",0);Le(this,"from",0);Le(this,"to",0);Le(this,"currentTime",0);Le(this,"lerp");Le(this,"duration");Le(this,"easing");Le(this,"onUpdate")}advance(r){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=Gp(0,this.currentTime/this.duration,1);e=n>=1;const i=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=ug(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:a}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=a}};function dg(r,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(i,n)},e)}}var pg=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){Le(this,"width",0);Le(this,"height",0);Le(this,"scrollHeight",0);Le(this,"scrollWidth",0);Le(this,"debouncedResize");Le(this,"wrapperResizeObserver");Le(this,"contentResizeObserver");Le(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Le(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Le(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=e,t&&(this.debouncedResize=dg(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,e;(r=this.wrapperResizeObserver)==null||r.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Vp=class{constructor(){Le(this,"events",{})}emit(r,...e){var n;let t=this.events[r]||[];for(let i=0,s=t.length;i<s;i++)(n=t[i])==null||n.call(t,...e)}on(r,e){var t;return(t=this.events[r])!=null&&t.push(e)||(this.events[r]=[e]),()=>{var n;this.events[r]=(n=this.events[r])==null?void 0:n.filter(i=>e!==i)}}off(r,e){var t;this.events[r]=(t=this.events[r])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}},sf=100/6,ji={passive:!1},mg=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){Le(this,"touchStart",{x:0,y:0});Le(this,"lastDelta",{x:0,y:0});Le(this,"window",{width:0,height:0});Le(this,"emitter",new Vp);Le(this,"onTouchStart",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Le(this,"onTouchMove",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Le(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Le(this,"onWheel",r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=n===1?sf:n===2?this.window.width:1,s=n===1?sf:n===2?this.window.height:1;e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})});Le(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,ji),this.element.addEventListener("touchstart",this.onTouchStart,ji),this.element.addEventListener("touchmove",this.onTouchMove,ji),this.element.addEventListener("touchend",this.onTouchEnd,ji)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,ji),this.element.removeEventListener("touchstart",this.onTouchStart,ji),this.element.removeEventListener("touchmove",this.onTouchMove,ji),this.element.removeEventListener("touchend",this.onTouchEnd,ji)}},_g=class{constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaMultiplier:a=35,duration:o,easing:l=y=>Math.min(1,1.001-Math.pow(2,-10*y)),lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:f="vertical",touchMultiplier:d=1,wheelMultiplier:g=1,autoResize:v=!0,prevent:p,virtualScroll:m,overscroll:E=!0,__experimental__naiveDimensions:S=!1}={}){Le(this,"_isScrolling",!1);Le(this,"_isStopped",!1);Le(this,"_isLocked",!1);Le(this,"_preventNextNativeScrollEvent",!1);Le(this,"_resetVelocityTimeout",null);Le(this,"isTouching");Le(this,"time",0);Le(this,"userData",{});Le(this,"lastVelocity",0);Le(this,"velocity",0);Le(this,"direction",0);Le(this,"options");Le(this,"targetScroll");Le(this,"animatedScroll");Le(this,"animate",new fg);Le(this,"emitter",new Vp);Le(this,"dimensions");Le(this,"virtualScroll");Le(this,"onPointerDown",r=>{r.button===1&&this.reset()});Le(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(this.isTouching=n.type==="touchstart"||n.type==="touchmove",this.options.syncTouch&&i&&n.type==="touchstart"&&!this.isStopped&&!this.isLocked){this.reset();return}const o=e===0&&t===0,l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(p=>{var m,E,S;return p instanceof HTMLElement&&(typeof u=="function"&&(u==null?void 0:u(p))||((m=p.hasAttribute)==null?void 0:m.call(p,"data-lenis-prevent"))||i&&((E=p.hasAttribute)==null?void 0:E.call(p,"data-lenis-prevent-touch"))||s&&((S=p.hasAttribute)==null?void 0:S.call(p,"data-lenis-prevent-wheel")))}))return;if(this.isStopped||this.isLocked){n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.preventDefault();const d=i&&this.options.syncTouch,v=i&&n.type==="touchend"&&Math.abs(f)>5;v&&(f=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:v?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Le(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isScrolling="native",this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});window.lenisVersion=lg,(!r||r===document.documentElement||r===document.body)&&(r=window),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaMultiplier:a,duration:o,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:h,touchMultiplier:d,wheelMultiplier:g,autoResize:v,prevent:p,virtualScroll:m,overscroll:E,__experimental__naiveDimensions:S},this.dimensions=new pg(r,e,{autoResize:v}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new mg(t,{touchMultiplier:d,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName()}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}setScroll(r){this.isHorizontal?this.rootElement.scrollLeft=r:this.rootElement.scrollTop=r}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(r){const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001)}scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,duration:i=this.options.duration,easing:s=this.options.easing,lerp:a=this.options.lerp,onStart:o,onComplete:l,force:c=!1,programmatic:u=!0,userData:h}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof r=="string"&&["top","left","start"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let f;if(typeof r=="string"?f=document.querySelector(r):r instanceof HTMLElement&&(r!=null&&r.nodeType)&&(f=r),f){if(this.options.wrapper!==window){const g=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?g.left:g.top}const d=f.getBoundingClientRect();r=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):r=Gp(0,r,this.limit),r===this.targetScroll){o==null||o(this),l==null||l(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l==null||l(this),this.userData={};return}u||(this.targetScroll=r),this.animate.fromTo(this.animatedScroll,r,{duration:i,easing:s,lerp:a,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",o==null||o(this)},onUpdate:(f,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),u&&(this.targetScroll=f),d||this.emit(),d&&(this.reset(),this.emit(),l==null||l(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?hg(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lh="169",gg=0,af=1,vg=2,Wp=1,xg=2,Ii=3,vr=0,Pn=1,Fi=2,pr=0,Bs=1,qc=2,of=3,lf=4,Sg=5,Nr=100,Mg=101,yg=102,Eg=103,Tg=104,bg=200,wg=201,Ag=202,Cg=203,Kc=204,jc=205,Rg=206,Pg=207,Lg=208,Dg=209,Ig=210,Ug=211,Ng=212,Og=213,Fg=214,Zc=0,Jc=1,Qc=2,qs=3,eu=4,tu=5,nu=6,iu=7,Xp=0,Bg=1,kg=2,Vi=0,zg=1,Hg=2,Gg=3,Vg=4,Wg=5,Xg=6,Yg=7,Yp=300,Ks=301,js=302,ru=303,su=304,Sl=306,au=1e3,kr=1001,ou=1002,ni=1003,$g=1004,fo=1005,fi=1006,Vl=1007,zr=1008,$i=1009,$p=1010,qp=1011,Va=1012,ch=1013,ts=1014,zi=1015,$a=1016,uh=1017,hh=1018,Zs=1020,Kp=35902,jp=1021,Zp=1022,pi=1023,Jp=1024,Qp=1025,ks=1026,Js=1027,em=1028,fh=1029,tm=1030,dh=1031,ph=1033,Xo=33776,Yo=33777,$o=33778,qo=33779,lu=35840,cu=35841,uu=35842,hu=35843,fu=36196,du=37492,pu=37496,mu=37808,_u=37809,gu=37810,vu=37811,xu=37812,Su=37813,Mu=37814,yu=37815,Eu=37816,Tu=37817,bu=37818,wu=37819,Au=37820,Cu=37821,Ko=36492,Ru=36494,Pu=36495,nm=36283,Lu=36284,Du=36285,Iu=36286,qg=3200,Kg=3201,jg=0,Zg=1,sr="",bn="srgb",Mr="srgb-linear",mh="display-p3",Ml="display-p3-linear",hl="linear",Tt="srgb",fl="rec709",dl="p3",ls=7680,cf=519,Jg=512,Qg=513,e0=514,im=515,t0=516,n0=517,i0=518,r0=519,uf=35044,hf="300 es",Hi=2e3,pl=2001;class ea{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ff=1234567;const Da=Math.PI/180,Wa=180/Math.PI;function ta(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[r&255]+rn[r>>8&255]+rn[r>>16&255]+rn[r>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function xn(r,e,t){return Math.max(e,Math.min(t,r))}function _h(r,e){return(r%e+e)%e}function s0(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function a0(r,e,t){return r!==e?(t-r)/(e-r):0}function Ia(r,e,t){return(1-t)*r+t*e}function o0(r,e,t,n){return Ia(r,e,1-Math.exp(-t*n))}function l0(r,e=1){return e-Math.abs(_h(r,e*2)-e)}function c0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function u0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function h0(r,e){return r+Math.floor(Math.random()*(e-r+1))}function f0(r,e){return r+Math.random()*(e-r)}function d0(r){return r*(.5-Math.random())}function p0(r){r!==void 0&&(ff=r);let e=ff+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function m0(r){return r*Da}function _0(r){return r*Wa}function g0(r){return(r&r-1)===0&&r!==0}function v0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function x0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function S0(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),d=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*h,l*f,o*c);break;case"YZY":r.set(l*f,o*u,l*h,o*c);break;case"ZXZ":r.set(l*h,l*f,o*u,o*c);break;case"XZX":r.set(o*u,l*g,l*d,o*c);break;case"YXY":r.set(l*d,o*u,l*g,o*c);break;case"ZYZ":r.set(l*g,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ts(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function pn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const df={DEG2RAD:Da,RAD2DEG:Wa,generateUUID:ta,clamp:xn,euclideanModulo:_h,mapLinear:s0,inverseLerp:a0,lerp:Ia,damp:o0,pingpong:l0,smoothstep:c0,smootherstep:u0,randInt:h0,randFloat:f0,randFloatSpread:d0,seededRandom:p0,degToRad:m0,radToDeg:_0,isPowerOfTwo:g0,ceilPowerOfTwo:v0,floorPowerOfTwo:x0,setQuaternionFromProperEuler:S0,normalize:pn,denormalize:Ts};class pt{constructor(e=0,t=0){pt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,n,i,s,a,o,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],v=i[0],p=i[3],m=i[6],E=i[1],S=i[4],y=i[7],C=i[2],w=i[5],b=i[8];return s[0]=a*v+o*E+l*C,s[3]=a*p+o*S+l*w,s[6]=a*m+o*y+l*b,s[1]=c*v+u*E+h*C,s[4]=c*p+u*S+h*w,s[7]=c*m+u*y+h*b,s[2]=f*v+d*E+g*C,s[5]=f*p+d*S+g*w,s[8]=f*m+d*y+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,d=c*s-a*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(i*c-u*n)*v,e[2]=(o*n-i*a)*v,e[3]=f*v,e[4]=(u*t-i*l)*v,e[5]=(i*s-o*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Wl.makeScale(e,t)),this}rotate(e){return this.premultiply(Wl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wl=new Ze;function rm(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Xa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function M0(){const r=Xa("canvas");return r.style.display="block",r}const pf={};function jo(r){r in pf||(pf[r]=!0,console.warn(r))}function y0(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function E0(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function T0(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const mf=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_f=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),aa={[Mr]:{transfer:hl,primaries:fl,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[bn]:{transfer:Tt,primaries:fl,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ml]:{transfer:hl,primaries:dl,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(_f),fromReference:r=>r.applyMatrix3(mf)},[mh]:{transfer:Tt,primaries:dl,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(_f),fromReference:r=>r.applyMatrix3(mf).convertLinearToSRGB()}},b0=new Set([Mr,Ml]),ft={enabled:!0,_workingColorSpace:Mr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!b0.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=aa[e].toReference,i=aa[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return aa[r].primaries},getTransfer:function(r){return r===sr?hl:aa[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(aa[e].luminanceCoefficients)}};function zs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Xl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let cs;class w0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{cs===void 0&&(cs=Xa("canvas")),cs.width=e.width,cs.height=e.height;const n=cs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=cs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=zs(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zs(t[n]/255)*255):t[n]=zs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let A0=0;class sm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=ta(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Yl(i[a].image)):s.push(Yl(i[a]))}else s=Yl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Yl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?w0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let C0=0;class hn extends ea{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,n=kr,i=kr,s=fi,a=zr,o=pi,l=$i,c=hn.DEFAULT_ANISOTROPY,u=sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=ta(),this.name="",this.source=new sm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case au:e.x=e.x-Math.floor(e.x);break;case kr:e.x=e.x<0?0:1;break;case ou:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case au:e.y=e.y-Math.floor(e.y);break;case kr:e.y=e.y<0?0:1;break;case ou:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Yp;hn.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,t=0,n=0,i=1){kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,y=(d+1)/2,C=(m+1)/2,w=(u+f)/4,b=(h+v)/4,P=(g+p)/4;return S>y&&S>C?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=w/n,s=b/n):y>C?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=w/i,s=P/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=b/s,i=P/s),this.set(n,i,s,t),this}let E=Math.sqrt((p-g)*(p-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(h-v)/E,this.z=(f-u)/E,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class R0 extends ea{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new hn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new sm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends R0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class am extends hn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ni,this.minFilter=ni,this.wrapR=kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class P0 extends hn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ni,this.minFilter=ni,this.wrapR=kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qa{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[a+0],d=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==f||c!==d||u!==g){let p=1-o;const m=l*f+c*d+u*g+h*v,E=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const C=Math.sqrt(S),w=Math.atan2(C,m*E);p=Math.sin(p*w)/C,o=Math.sin(o*w)/C}const y=o*E;if(l=l*p+f*y,c=c*p+d*y,u=u*p+g*y,h=h*p+v*y,p===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-o*d,e[t+2]=c*g+u*d+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,n=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $l.copy(this).projectOnVector(e),this.sub($l)}reflect(e){return this.sub($l.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $l=new $,gf=new qa;class Ka{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,oi):oi.fromBufferAttribute(s,a),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),po.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),po.copy(n.boundingBox)),po.applyMatrix4(e.matrixWorld),this.union(po)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oa),mo.subVectors(this.max,oa),us.subVectors(e.a,oa),hs.subVectors(e.b,oa),fs.subVectors(e.c,oa),Zi.subVectors(hs,us),Ji.subVectors(fs,hs),Tr.subVectors(us,fs);let t=[0,-Zi.z,Zi.y,0,-Ji.z,Ji.y,0,-Tr.z,Tr.y,Zi.z,0,-Zi.x,Ji.z,0,-Ji.x,Tr.z,0,-Tr.x,-Zi.y,Zi.x,0,-Ji.y,Ji.x,0,-Tr.y,Tr.x,0];return!ql(t,us,hs,fs,mo)||(t=[1,0,0,0,1,0,0,0,1],!ql(t,us,hs,fs,mo))?!1:(_o.crossVectors(Zi,Ji),t=[_o.x,_o.y,_o.z],ql(t,us,hs,fs,mo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ci=[new $,new $,new $,new $,new $,new $,new $,new $],oi=new $,po=new Ka,us=new $,hs=new $,fs=new $,Zi=new $,Ji=new $,Tr=new $,oa=new $,mo=new $,_o=new $,br=new $;function ql(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){br.fromArray(r,s);const o=i.x*Math.abs(br.x)+i.y*Math.abs(br.y)+i.z*Math.abs(br.z),l=e.dot(br),c=t.dot(br),u=n.dot(br);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const L0=new Ka,la=new $,Kl=new $;class yl{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):L0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);const t=la.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(la,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add(Kl)),this.expandByPoint(la.copy(e.center).sub(Kl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ri=new $,jl=new $,go=new $,Qi=new $,Zl=new $,vo=new $,Jl=new $;class gh{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){jl.copy(e).add(t).multiplyScalar(.5),go.copy(t).sub(e).normalize(),Qi.copy(this.origin).sub(jl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(go),o=Qi.dot(this.direction),l=-Qi.dot(go),c=Qi.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(jl).addScaledVector(go,f),d}intersectSphere(e,t){Ri.subVectors(e.center,this.origin);const n=Ri.dot(this.direction),i=Ri.dot(Ri)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,n,i,s){Zl.subVectors(t,e),vo.subVectors(n,e),Jl.crossVectors(Zl,vo);let a=this.direction.dot(Jl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qi.subVectors(this.origin,e);const l=o*this.direction.dot(vo.crossVectors(Qi,vo));if(l<0)return null;const c=o*this.direction.dot(Zl.cross(Qi));if(c<0||l+c>a)return null;const u=-o*Qi.dot(Jl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,t,n,i,s,a,o,l,c,u,h,f,d,g,v,p){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,h,f,d,g,v,p)}set(e,t,n,i,s,a,o,l,c,u,h,f,d,g,v,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ds.setFromMatrixColumn(e,0).length(),s=1/ds.setFromMatrixColumn(e,1).length(),a=1/ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,d=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,v=c*h;t[0]=f+v*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,v=c*h;t[0]=f-v*o,t[4]=-a*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-f*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-v*h}else if(e.order==="XZY"){const f=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(D0,e,I0)}lookAt(e,t,n){const i=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),er.crossVectors(n,Nn),er.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),er.crossVectors(n,Nn)),er.normalize(),xo.crossVectors(Nn,er),i[0]=er.x,i[4]=xo.x,i[8]=Nn.x,i[1]=er.y,i[5]=xo.y,i[9]=Nn.y,i[2]=er.z,i[6]=xo.z,i[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],v=n[6],p=n[10],m=n[14],E=n[3],S=n[7],y=n[11],C=n[15],w=i[0],b=i[4],P=i[8],O=i[12],_=i[1],x=i[5],D=i[9],B=i[13],W=i[2],Y=i[6],z=i[10],X=i[14],G=i[3],re=i[7],R=i[11],ae=i[15];return s[0]=a*w+o*_+l*W+c*G,s[4]=a*b+o*x+l*Y+c*re,s[8]=a*P+o*D+l*z+c*R,s[12]=a*O+o*B+l*X+c*ae,s[1]=u*w+h*_+f*W+d*G,s[5]=u*b+h*x+f*Y+d*re,s[9]=u*P+h*D+f*z+d*R,s[13]=u*O+h*B+f*X+d*ae,s[2]=g*w+v*_+p*W+m*G,s[6]=g*b+v*x+p*Y+m*re,s[10]=g*P+v*D+p*z+m*R,s[14]=g*O+v*B+p*X+m*ae,s[3]=E*w+S*_+y*W+C*G,s[7]=E*b+S*x+y*Y+C*re,s[11]=E*P+S*D+y*z+C*R,s[15]=E*O+S*B+y*X+C*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],v=e[7],p=e[11],m=e[15];return g*(+s*l*h-i*c*h-s*o*f+n*c*f+i*o*d-n*l*d)+v*(+t*l*d-t*c*f+s*a*f-i*a*d+i*c*u-s*l*u)+p*(+t*c*h-t*o*d-s*a*h+n*a*d+s*o*u-n*c*u)+m*(-i*o*u-t*l*h+t*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],v=e[13],p=e[14],m=e[15],E=h*p*c-v*f*c+v*l*d-o*p*d-h*l*m+o*f*m,S=g*f*c-u*p*c-g*l*d+a*p*d+u*l*m-a*f*m,y=u*v*c-g*h*c+g*o*d-a*v*d-u*o*m+a*h*m,C=g*h*l-u*v*l-g*o*f+a*v*f+u*o*p-a*h*p,w=t*E+n*S+i*y+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=E*b,e[1]=(v*f*s-h*p*s-v*i*d+n*p*d+h*i*m-n*f*m)*b,e[2]=(o*p*s-v*l*s+v*i*c-n*p*c-o*i*m+n*l*m)*b,e[3]=(h*l*s-o*f*s-h*i*c+n*f*c+o*i*d-n*l*d)*b,e[4]=S*b,e[5]=(u*p*s-g*f*s+g*i*d-t*p*d-u*i*m+t*f*m)*b,e[6]=(g*l*s-a*p*s-g*i*c+t*p*c+a*i*m-t*l*m)*b,e[7]=(a*f*s-u*l*s+u*i*c-t*f*c-a*i*d+t*l*d)*b,e[8]=y*b,e[9]=(g*h*s-u*v*s-g*n*d+t*v*d+u*n*m-t*h*m)*b,e[10]=(a*v*s-g*o*s+g*n*c-t*v*c-a*n*m+t*o*m)*b,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*d-t*o*d)*b,e[12]=C*b,e[13]=(u*v*i-g*h*i+g*n*f-t*v*f-u*n*p+t*h*p)*b,e[14]=(g*o*i-a*v*i-g*n*l+t*v*l+a*n*p-t*o*p)*b,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*f+t*o*f)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,d=s*u,g=s*h,v=a*u,p=a*h,m=o*h,E=l*c,S=l*u,y=l*h,C=n.x,w=n.y,b=n.z;return i[0]=(1-(v+m))*C,i[1]=(d+y)*C,i[2]=(g-S)*C,i[3]=0,i[4]=(d-y)*w,i[5]=(1-(f+m))*w,i[6]=(p+E)*w,i[7]=0,i[8]=(g+S)*b,i[9]=(p-E)*b,i[10]=(1-(f+v))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ds.set(i[0],i[1],i[2]).length();const a=ds.set(i[4],i[5],i[6]).length(),o=ds.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],li.copy(this);const c=1/s,u=1/a,h=1/o;return li.elements[0]*=c,li.elements[1]*=c,li.elements[2]*=c,li.elements[4]*=u,li.elements[5]*=u,li.elements[6]*=u,li.elements[8]*=h,li.elements[9]*=h,li.elements[10]*=h,t.setFromRotationMatrix(li),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Hi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,g;if(o===Hi)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===pl)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Hi){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(a-s),f=(t+e)*c,d=(n+i)*u;let g,v;if(o===Hi)g=(a+s)*h,v=-2*h;else if(o===pl)g=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ds=new $,li=new It,D0=new $(0,0,0),I0=new $(1,1,1),er=new $,xo=new $,Nn=new $,vf=new It,xf=new qa;class qi{constructor(e=0,t=0,n=0,i=qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(xn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(xn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-xn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(xn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-xn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xf.setFromEuler(this),this.setFromQuaternion(xf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qi.DEFAULT_ORDER="XYZ";class vh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let U0=0;const Sf=new $,ps=new qa,Pi=new It,So=new $,ca=new $,N0=new $,O0=new qa,Mf=new $(1,0,0),yf=new $(0,1,0),Ef=new $(0,0,1),Tf={type:"added"},F0={type:"removed"},ms={type:"childadded",child:null},Ql={type:"childremoved",child:null};class Ln extends ea{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const e=new $,t=new qi,n=new qa,i=new $(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new It},normalMatrix:{value:new Ze}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(Mf,e)}rotateY(e){return this.rotateOnAxis(yf,e)}rotateZ(e){return this.rotateOnAxis(Ef,e)}translateOnAxis(e,t){return Sf.copy(e).applyQuaternion(this.quaternion),this.position.add(Sf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mf,e)}translateY(e){return this.translateOnAxis(yf,e)}translateZ(e){return this.translateOnAxis(Ef,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?So.copy(e):So.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(ca,So,this.up):Pi.lookAt(So,ca,this.up),this.quaternion.setFromRotationMatrix(Pi),i&&(Pi.extractRotation(i.matrixWorld),ps.setFromRotationMatrix(Pi),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tf),ms.child=e,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(F0),Ql.child=e,this.dispatchEvent(Ql),Ql.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tf),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,e,N0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,O0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ln.DEFAULT_UP=new $(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new $,Li=new $,ec=new $,Di=new $,_s=new $,gs=new $,bf=new $,tc=new $,nc=new $,ic=new $,rc=new kt,sc=new kt,ac=new kt;class di{constructor(e=new $,t=new $,n=new $){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ci.subVectors(e,t),i.cross(ci);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ci.subVectors(i,t),Li.subVectors(n,t),ec.subVectors(e,t);const a=ci.dot(ci),o=ci.dot(Li),l=ci.dot(ec),c=Li.dot(Li),u=Li.dot(ec),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Di.x),l.addScaledVector(a,Di.y),l.addScaledVector(o,Di.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return rc.setScalar(0),sc.setScalar(0),ac.setScalar(0),rc.fromBufferAttribute(e,t),sc.fromBufferAttribute(e,n),ac.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(rc,s.x),a.addScaledVector(sc,s.y),a.addScaledVector(ac,s.z),a}static isFrontFacing(e,t,n,i){return ci.subVectors(n,t),Li.subVectors(e,t),ci.cross(Li).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ci.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return di.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;_s.subVectors(i,n),gs.subVectors(s,n),tc.subVectors(e,n);const l=_s.dot(tc),c=gs.dot(tc);if(l<=0&&c<=0)return t.copy(n);nc.subVectors(e,i);const u=_s.dot(nc),h=gs.dot(nc);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(_s,a);ic.subVectors(e,s);const d=_s.dot(ic),g=gs.dot(ic);if(g>=0&&d<=g)return t.copy(s);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(gs,o);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return bf.subVectors(s,i),o=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(bf,o);const m=1/(p+v+f);return a=v*m,o=f*m,t.copy(n).addScaledVector(_s,a).addScaledVector(gs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const om={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function oc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class dt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ft.workingColorSpace){if(e=_h(e,1),t=xn(t,0,1),n=xn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=oc(a,s,e+1/3),this.g=oc(a,s,e),this.b=oc(a,s,e-1/3)}return ft.toWorkingColorSpace(this,i),this}setStyle(e,t=bn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bn){const n=om[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}copyLinearToSRGB(e){return this.r=Xl(e.r),this.g=Xl(e.g),this.b=Xl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return ft.fromWorkingColorSpace(sn.copy(this),e),Math.round(xn(sn.r*255,0,255))*65536+Math.round(xn(sn.g*255,0,255))*256+Math.round(xn(sn.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(sn.copy(this),t);const n=sn.r,i=sn.g,s=sn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=bn){ft.fromWorkingColorSpace(sn.copy(this),e);const t=sn.r,n=sn.g,i=sn.b;return e!==bn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+t,tr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(tr),e.getHSL(Mo);const n=Ia(tr.h,Mo.h,t),i=Ia(tr.s,Mo.s,t),s=Ia(tr.l,Mo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new dt;dt.NAMES=om;let B0=0;class ja extends ea{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=ta(),this.name="",this.type="Material",this.blending=Bs,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kc,this.blendDst=jc,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(n.blending=this.blending),this.side!==vr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Kc&&(n.blendSrc=this.blendSrc),this.blendDst!==jc&&(n.blendDst=this.blendDst),this.blendEquation!==Nr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class rr extends ja{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=Xp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ht=new $,yo=new pt;class mi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=uf,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)yo.fromBufferAttribute(this,t),yo.applyMatrix3(e),this.setXY(t,yo.x,yo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ts(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ts(t,this.array)),t}setX(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ts(t,this.array)),t}setY(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ts(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ts(t,this.array)),t}setW(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array),i=pn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array),i=pn(i,this.array),s=pn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uf&&(e.usage=this.usage),e}}class lm extends mi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cm extends mi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class bi extends mi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let k0=0;const qn=new It,lc=new Ln,vs=new $,On=new Ka,ua=new Ka,Kt=new $;class Ai extends ea{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=ta(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rm(e)?cm:lm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,n){return qn.makeTranslation(e,t,n),this.applyMatrix4(qn),this}scale(e,t,n){return qn.makeScale(e,t,n),this.applyMatrix4(qn),this}lookAt(e){return lc.lookAt(e),lc.updateMatrix(),this.applyMatrix4(lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new bi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ka);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];On.setFromBufferAttribute(s),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const n=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ua.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(On.min,ua.min),On.expandByPoint(Kt),Kt.addVectors(On.max,ua.max),On.expandByPoint(Kt)):(On.expandByPoint(ua.min),On.expandByPoint(ua.max))}On.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Kt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Kt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Kt.fromBufferAttribute(o,c),l&&(vs.fromBufferAttribute(e,c),Kt.add(vs)),i=Math.max(i,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new $,l[P]=new $;const c=new $,u=new $,h=new $,f=new pt,d=new pt,g=new pt,v=new $,p=new $;function m(P,O,_){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,O),h.fromBufferAttribute(n,_),f.fromBufferAttribute(s,P),d.fromBufferAttribute(s,O),g.fromBufferAttribute(s,_),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const x=1/(d.x*g.y-g.x*d.y);isFinite(x)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(x),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(x),o[P].add(v),o[O].add(v),o[_].add(v),l[P].add(p),l[O].add(p),l[_].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let P=0,O=E.length;P<O;++P){const _=E[P],x=_.start,D=_.count;for(let B=x,W=x+D;B<W;B+=3)m(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const S=new $,y=new $,C=new $,w=new $;function b(P){C.fromBufferAttribute(i,P),w.copy(C);const O=o[P];S.copy(O),S.sub(C.multiplyScalar(C.dot(O))).normalize(),y.crossVectors(w,O);const x=y.dot(l[P])<0?-1:1;a.setXYZW(P,S.x,S.y,S.z,x)}for(let P=0,O=E.length;P<O;++P){const _=E[P],x=_.start,D=_.count;for(let B=x,W=x+D;B<W;B+=3)b(e.getX(B+0)),b(e.getX(B+1)),b(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new $,s=new $,a=new $,o=new $,l=new $,c=new $,u=new $,h=new $;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*u;for(let m=0;m<u;m++)f[g++]=c[d++]}return new mi(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ai,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wf=new It,wr=new gh,Eo=new yl,Af=new $,To=new $,bo=new $,wo=new $,cc=new $,Ao=new $,Cf=new $,Co=new $;class Sn extends Ln{constructor(e=new Ai,t=new rr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Ao.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(cc.fromBufferAttribute(h,e),a?Ao.addScaledVector(cc,u):Ao.addScaledVector(cc.sub(t),u))}t.add(Ao)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(s),wr.copy(e.ray).recast(e.near),!(Eo.containsPoint(wr.origin)===!1&&(wr.intersectSphere(Eo,Af)===null||wr.origin.distanceToSquared(Af)>(e.far-e.near)**2))&&(wf.copy(s).invert(),wr.copy(e.ray).applyMatrix4(wf),!(n.boundingBox!==null&&wr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,wr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const p=f[g],m=a[p.materialIndex],E=Math.max(p.start,d.start),S=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let y=E,C=S;y<C;y+=3){const w=o.getX(y),b=o.getX(y+1),P=o.getX(y+2);i=Ro(this,m,e,n,c,u,h,w,b,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const E=o.getX(p),S=o.getX(p+1),y=o.getX(p+2);i=Ro(this,a,e,n,c,u,h,E,S,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const p=f[g],m=a[p.materialIndex],E=Math.max(p.start,d.start),S=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=E,C=S;y<C;y+=3){const w=y,b=y+1,P=y+2;i=Ro(this,m,e,n,c,u,h,w,b,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const E=p,S=p+1,y=p+2;i=Ro(this,a,e,n,c,u,h,E,S,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function z0(r,e,t,n,i,s,a,o){let l;if(e.side===Pn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===vr,o),l===null)return null;Co.copy(o),Co.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Co);return c<t.near||c>t.far?null:{distance:c,point:Co.clone(),object:r}}function Ro(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,To),r.getVertexPosition(l,bo),r.getVertexPosition(c,wo);const u=z0(r,e,t,n,To,bo,wo,Cf);if(u){const h=new $;di.getBarycoord(Cf,To,bo,wo,h),i&&(u.uv=di.getInterpolatedAttribute(i,o,l,c,h,new pt)),s&&(u.uv1=di.getInterpolatedAttribute(s,o,l,c,h,new pt)),a&&(u.normal=di.getInterpolatedAttribute(a,o,l,c,h,new $),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new $,materialIndex:0};di.getNormal(To,bo,wo,f.normal),u.face=f,u.barycoord=h}return u}class Za extends Ai{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new bi(c,3)),this.setAttribute("normal",new bi(u,3)),this.setAttribute("uv",new bi(h,2));function g(v,p,m,E,S,y,C,w,b,P,O){const _=y/b,x=C/P,D=y/2,B=C/2,W=w/2,Y=b+1,z=P+1;let X=0,G=0;const re=new $;for(let R=0;R<z;R++){const ae=R*x-B;for(let Oe=0;Oe<Y;Oe++){const Xe=Oe*_-D;re[v]=Xe*E,re[p]=ae*S,re[m]=W,c.push(re.x,re.y,re.z),re[v]=0,re[p]=0,re[m]=w>0?1:-1,u.push(re.x,re.y,re.z),h.push(Oe/b),h.push(1-R/P),X+=1}}for(let R=0;R<P;R++)for(let ae=0;ae<b;ae++){const Oe=f+ae+Y*R,Xe=f+ae+Y*(R+1),q=f+(ae+1)+Y*(R+1),Q=f+(ae+1)+Y*R;l.push(Oe,Xe,Q),l.push(Xe,q,Q),G+=6}o.addGroup(d,G,O),d+=G,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function mn(r){const e={};for(let t=0;t<r.length;t++){const n=Qs(r[t]);for(const i in n)e[i]=n[i]}return e}function H0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function um(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const G0={clone:Qs,merge:mn};var V0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,W0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xr extends ja{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=V0,this.fragmentShader=W0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=H0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class hm extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const nr=new $,Rf=new pt,Pf=new pt;class Jn extends hm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Da*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wa*2*Math.atan(Math.tan(Da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(nr.x,nr.y).multiplyScalar(-e/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(nr.x,nr.y).multiplyScalar(-e/nr.z)}getViewSize(e,t){return this.getViewBounds(e,Rf,Pf),t.subVectors(Pf,Rf)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Da*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xs=-90,Ss=1;class X0 extends Ln{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Jn(xs,Ss,e,t);i.layers=this.layers,this.add(i);const s=new Jn(xs,Ss,e,t);s.layers=this.layers,this.add(s);const a=new Jn(xs,Ss,e,t);a.layers=this.layers,this.add(a);const o=new Jn(xs,Ss,e,t);o.layers=this.layers,this.add(o);const l=new Jn(xs,Ss,e,t);l.layers=this.layers,this.add(l);const c=new Jn(xs,Ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Hi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===pl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class fm extends hn{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ks,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Y0 extends ns{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new fm(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Za(5,5,5),s=new xr({name:"CubemapFromEquirect",uniforms:Qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:pr});s.uniforms.tEquirect.value=t;const a=new Sn(i,s),o=t.minFilter;return t.minFilter===zr&&(t.minFilter=fi),new X0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const uc=new $,$0=new $,q0=new Ze;class Ir{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=uc.subVectors(n,t).cross($0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(uc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||q0.getNormalMatrix(e),i=this.coplanarPoint(uc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new yl,Po=new $;class dm{constructor(e=new Ir,t=new Ir,n=new Ir,i=new Ir,s=new Ir,a=new Ir){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hi){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],g=i[9],v=i[10],p=i[11],m=i[12],E=i[13],S=i[14],y=i[15];if(n[0].setComponents(l-s,f-c,p-d,y-m).normalize(),n[1].setComponents(l+s,f+c,p+d,y+m).normalize(),n[2].setComponents(l+a,f+u,p+g,y+E).normalize(),n[3].setComponents(l-a,f-u,p-g,y-E).normalize(),n[4].setComponents(l-o,f-h,p-v,y-S).normalize(),t===Hi)n[5].setComponents(l+o,f+h,p+v,y+S).normalize();else if(t===pl)n[5].setComponents(o,h,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(e){return Ar.center.set(0,0,0),Ar.radius=.7071067811865476,Ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Po.x=i.normal.x>0?e.max.x:e.min.x,Po.y=i.normal.y>0?e.max.y:e.min.y,Po.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Po)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pm(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function K0(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],v=h[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const v=h[d];r.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class Bi extends Ai{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,d=[],g=[],v=[],p=[];for(let m=0;m<u;m++){const E=m*f-a;for(let S=0;S<c;S++){const y=S*h-s;g.push(y,-E,0),v.push(0,0,1),p.push(S/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let E=0;E<o;E++){const S=E+c*m,y=E+c*(m+1),C=E+1+c*(m+1),w=E+1+c*m;d.push(S,y,w),d.push(y,C,w)}this.setIndex(d),this.setAttribute("position",new bi(g,3)),this.setAttribute("normal",new bi(v,3)),this.setAttribute("uv",new bi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bi(e.width,e.height,e.widthSegments,e.heightSegments)}}var j0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Z0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,J0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Q0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ev=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,av=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ov=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_v=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ev=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Av=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Rv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Iv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ov=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Vv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$v=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ex=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ix=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ax=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ox=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ux=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,px=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ex=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ax=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Px=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Dx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ix=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ux=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ox=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,iS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_S=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,SS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ES=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,TS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,AS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:j0,alphahash_pars_fragment:Z0,alphamap_fragment:J0,alphamap_pars_fragment:Q0,alphatest_fragment:ev,alphatest_pars_fragment:tv,aomap_fragment:nv,aomap_pars_fragment:iv,batching_pars_vertex:rv,batching_vertex:sv,begin_vertex:av,beginnormal_vertex:ov,bsdfs:lv,iridescence_fragment:cv,bumpmap_pars_fragment:uv,clipping_planes_fragment:hv,clipping_planes_pars_fragment:fv,clipping_planes_pars_vertex:dv,clipping_planes_vertex:pv,color_fragment:mv,color_pars_fragment:_v,color_pars_vertex:gv,color_vertex:vv,common:xv,cube_uv_reflection_fragment:Sv,defaultnormal_vertex:Mv,displacementmap_pars_vertex:yv,displacementmap_vertex:Ev,emissivemap_fragment:Tv,emissivemap_pars_fragment:bv,colorspace_fragment:wv,colorspace_pars_fragment:Av,envmap_fragment:Cv,envmap_common_pars_fragment:Rv,envmap_pars_fragment:Pv,envmap_pars_vertex:Lv,envmap_physical_pars_fragment:Gv,envmap_vertex:Dv,fog_vertex:Iv,fog_pars_vertex:Uv,fog_fragment:Nv,fog_pars_fragment:Ov,gradientmap_pars_fragment:Fv,lightmap_pars_fragment:Bv,lights_lambert_fragment:kv,lights_lambert_pars_fragment:zv,lights_pars_begin:Hv,lights_toon_fragment:Vv,lights_toon_pars_fragment:Wv,lights_phong_fragment:Xv,lights_phong_pars_fragment:Yv,lights_physical_fragment:$v,lights_physical_pars_fragment:qv,lights_fragment_begin:Kv,lights_fragment_maps:jv,lights_fragment_end:Zv,logdepthbuf_fragment:Jv,logdepthbuf_pars_fragment:Qv,logdepthbuf_pars_vertex:ex,logdepthbuf_vertex:tx,map_fragment:nx,map_pars_fragment:ix,map_particle_fragment:rx,map_particle_pars_fragment:sx,metalnessmap_fragment:ax,metalnessmap_pars_fragment:ox,morphinstance_vertex:lx,morphcolor_vertex:cx,morphnormal_vertex:ux,morphtarget_pars_vertex:hx,morphtarget_vertex:fx,normal_fragment_begin:dx,normal_fragment_maps:px,normal_pars_fragment:mx,normal_pars_vertex:_x,normal_vertex:gx,normalmap_pars_fragment:vx,clearcoat_normal_fragment_begin:xx,clearcoat_normal_fragment_maps:Sx,clearcoat_pars_fragment:Mx,iridescence_pars_fragment:yx,opaque_fragment:Ex,packing:Tx,premultiplied_alpha_fragment:bx,project_vertex:wx,dithering_fragment:Ax,dithering_pars_fragment:Cx,roughnessmap_fragment:Rx,roughnessmap_pars_fragment:Px,shadowmap_pars_fragment:Lx,shadowmap_pars_vertex:Dx,shadowmap_vertex:Ix,shadowmask_pars_fragment:Ux,skinbase_vertex:Nx,skinning_pars_vertex:Ox,skinning_vertex:Fx,skinnormal_vertex:Bx,specularmap_fragment:kx,specularmap_pars_fragment:zx,tonemapping_fragment:Hx,tonemapping_pars_fragment:Gx,transmission_fragment:Vx,transmission_pars_fragment:Wx,uv_pars_fragment:Xx,uv_pars_vertex:Yx,uv_vertex:$x,worldpos_vertex:qx,background_vert:Kx,background_frag:jx,backgroundCube_vert:Zx,backgroundCube_frag:Jx,cube_vert:Qx,cube_frag:eS,depth_vert:tS,depth_frag:nS,distanceRGBA_vert:iS,distanceRGBA_frag:rS,equirect_vert:sS,equirect_frag:aS,linedashed_vert:oS,linedashed_frag:lS,meshbasic_vert:cS,meshbasic_frag:uS,meshlambert_vert:hS,meshlambert_frag:fS,meshmatcap_vert:dS,meshmatcap_frag:pS,meshnormal_vert:mS,meshnormal_frag:_S,meshphong_vert:gS,meshphong_frag:vS,meshphysical_vert:xS,meshphysical_frag:SS,meshtoon_vert:MS,meshtoon_frag:yS,points_vert:ES,points_frag:TS,shadow_vert:bS,shadow_frag:wS,sprite_vert:AS,sprite_frag:CS},me={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},xi={basic:{uniforms:mn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:mn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new dt(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:mn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:mn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:mn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new dt(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:mn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:mn([me.points,me.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:mn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:mn([me.common,me.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:mn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:mn([me.sprite,me.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:mn([me.common,me.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:mn([me.lights,me.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};xi.physical={uniforms:mn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Lo={r:0,b:0,g:0},Cr=new qi,RS=new It;function PS(r,e,t,n,i,s,a){const o=new dt(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?t:e).get(S)),S}function v(E){let S=!1;const y=g(E);y===null?m(o,l):y&&y.isColor&&(m(y,1),S=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(E,S){const y=g(S);y&&(y.isCubeTexture||y.mapping===Sl)?(u===void 0&&(u=new Sn(new Za(1,1,1),new xr({name:"BackgroundCubeMaterial",uniforms:Qs(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Cr.copy(S.backgroundRotation),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(RS.makeRotationFromEuler(Cr)),u.material.toneMapped=ft.getTransfer(y.colorSpace)!==Tt,(h!==y||f!==y.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,d=r.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Sn(new Bi(2,2),new xr({name:"BackgroundMaterial",uniforms:Qs(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ft.getTransfer(y.colorSpace)!==Tt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,d=r.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function m(E,S){E.getRGB(Lo,um(r)),n.buffers.color.setClear(Lo.r,Lo.g,Lo.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(E,S=1){o.set(E),l=S,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,m(o,l)},render:v,addToRenderList:p}}function LS(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(_,x,D,B,W){let Y=!1;const z=h(B,D,x);s!==z&&(s=z,c(s.object)),Y=d(_,B,D,W),Y&&g(_,B,D,W),W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,y(_,x,D,B),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return r.createVertexArray()}function c(_){return r.bindVertexArray(_)}function u(_){return r.deleteVertexArray(_)}function h(_,x,D){const B=D.wireframe===!0;let W=n[_.id];W===void 0&&(W={},n[_.id]=W);let Y=W[x.id];Y===void 0&&(Y={},W[x.id]=Y);let z=Y[B];return z===void 0&&(z=f(l()),Y[B]=z),z}function f(_){const x=[],D=[],B=[];for(let W=0;W<t;W++)x[W]=0,D[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:D,attributeDivisors:B,object:_,attributes:{},index:null}}function d(_,x,D,B){const W=s.attributes,Y=x.attributes;let z=0;const X=D.getAttributes();for(const G in X)if(X[G].location>=0){const R=W[G];let ae=Y[G];if(ae===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(ae=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(ae=_.instanceColor)),R===void 0||R.attribute!==ae||ae&&R.data!==ae.data)return!0;z++}return s.attributesNum!==z||s.index!==B}function g(_,x,D,B){const W={},Y=x.attributes;let z=0;const X=D.getAttributes();for(const G in X)if(X[G].location>=0){let R=Y[G];R===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(R=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(R=_.instanceColor));const ae={};ae.attribute=R,R&&R.data&&(ae.data=R.data),W[G]=ae,z++}s.attributes=W,s.attributesNum=z,s.index=B}function v(){const _=s.newAttributes;for(let x=0,D=_.length;x<D;x++)_[x]=0}function p(_){m(_,0)}function m(_,x){const D=s.newAttributes,B=s.enabledAttributes,W=s.attributeDivisors;D[_]=1,B[_]===0&&(r.enableVertexAttribArray(_),B[_]=1),W[_]!==x&&(r.vertexAttribDivisor(_,x),W[_]=x)}function E(){const _=s.newAttributes,x=s.enabledAttributes;for(let D=0,B=x.length;D<B;D++)x[D]!==_[D]&&(r.disableVertexAttribArray(D),x[D]=0)}function S(_,x,D,B,W,Y,z){z===!0?r.vertexAttribIPointer(_,x,D,W,Y):r.vertexAttribPointer(_,x,D,B,W,Y)}function y(_,x,D,B){v();const W=B.attributes,Y=D.getAttributes(),z=x.defaultAttributeValues;for(const X in Y){const G=Y[X];if(G.location>=0){let re=W[X];if(re===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(re=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(re=_.instanceColor)),re!==void 0){const R=re.normalized,ae=re.itemSize,Oe=e.get(re);if(Oe===void 0)continue;const Xe=Oe.buffer,q=Oe.type,Q=Oe.bytesPerElement,fe=q===r.INT||q===r.UNSIGNED_INT||re.gpuType===ch;if(re.isInterleavedBufferAttribute){const oe=re.data,be=oe.stride,ye=re.offset;if(oe.isInstancedInterleavedBuffer){for(let Ye=0;Ye<G.locationSize;Ye++)m(G.location+Ye,oe.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ye=0;Ye<G.locationSize;Ye++)p(G.location+Ye);r.bindBuffer(r.ARRAY_BUFFER,Xe);for(let Ye=0;Ye<G.locationSize;Ye++)S(G.location+Ye,ae/G.locationSize,q,R,be*Q,(ye+ae/G.locationSize*Ye)*Q,fe)}else{if(re.isInstancedBufferAttribute){for(let oe=0;oe<G.locationSize;oe++)m(G.location+oe,re.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let oe=0;oe<G.locationSize;oe++)p(G.location+oe);r.bindBuffer(r.ARRAY_BUFFER,Xe);for(let oe=0;oe<G.locationSize;oe++)S(G.location+oe,ae/G.locationSize,q,R,ae*Q,ae/G.locationSize*oe*Q,fe)}}else if(z!==void 0){const R=z[X];if(R!==void 0)switch(R.length){case 2:r.vertexAttrib2fv(G.location,R);break;case 3:r.vertexAttrib3fv(G.location,R);break;case 4:r.vertexAttrib4fv(G.location,R);break;default:r.vertexAttrib1fv(G.location,R)}}}}E()}function C(){P();for(const _ in n){const x=n[_];for(const D in x){const B=x[D];for(const W in B)u(B[W].object),delete B[W];delete x[D]}delete n[_]}}function w(_){if(n[_.id]===void 0)return;const x=n[_.id];for(const D in x){const B=x[D];for(const W in B)u(B[W].object),delete B[W];delete x[D]}delete n[_.id]}function b(_){for(const x in n){const D=n[x];if(D[_.id]===void 0)continue;const B=D[_.id];for(const W in B)u(B[W].object),delete B[W];delete D[_.id]}}function P(){O(),a=!0,s!==i&&(s=i,c(s.object))}function O(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:O,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:p,disableUnusedAttributes:E}}function DS(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v];for(let v=0;v<f.length;v++)t.update(g,n,f[v])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function IS(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(b){return!(b!==pi&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const P=b===$a&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==$i&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==zi&&!P)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const b=e.get("EXT_clip_control");b.clipControlEXT(b.LOWER_LEFT_EXT,b.ZERO_TO_ONE_EXT)}const d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),E=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:C,maxSamples:w}}function US(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Ir,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,m=r.get(h);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const E=s?0:n,S=E*4;let y=m.clippingState||null;l.value=y,y=u(g,f,S,d);for(let C=0;C!==S;++C)y[C]=t[C];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=d+v*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,y=d;S!==v;++S,y+=4)a.copy(h[S]).applyMatrix4(E,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function NS(r){let e=new WeakMap;function t(a,o){return o===ru?a.mapping=Ks:o===su&&(a.mapping=js),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ru||o===su)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Y0(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class OS extends hm{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ps=4,Lf=[.125,.215,.35,.446,.526,.582],Or=20,hc=new OS,Df=new dt;let fc=null,dc=0,pc=0,mc=!1;const Ur=(1+Math.sqrt(5))/2,Ms=1/Ur,If=[new $(-Ur,Ms,0),new $(Ur,Ms,0),new $(-Ms,0,Ur),new $(Ms,0,Ur),new $(0,Ur,-Ms),new $(0,Ur,Ms),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class Uf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){fc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fc,dc,pc),this._renderer.xr.enabled=mc,e.scissorTest=!1,Do(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ks||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fi,minFilter:fi,generateMipmaps:!1,type:$a,format:pi,colorSpace:Mr,depthBuffer:!1},i=Nf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FS(s)),this._blurMaterial=BS(s,e,t)}return i}_compileMaterial(e){const t=new Sn(this._lodPlanes[0],e);this._renderer.compile(t,hc)}_sceneToCubeUV(e,t,n,i){const o=new Jn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Df),u.toneMapping=Vi,u.autoClear=!1;const d=new rr({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),g=new Sn(new Za,d);let v=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,v=!0):(d.color.copy(Df),v=!0);for(let m=0;m<6;m++){const E=m%3;E===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):E===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const S=this._cubeSize;Do(i,E*S,m>2?S:0,S,S),u.setRenderTarget(i),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ks||e.mapping===js;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Of());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Sn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Do(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,hc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=If[(i-s-1)%If.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Sn(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Or-1),v=s/g,p=isFinite(s)?1+Math.floor(u*v):Or;p>Or&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Or}`);const m=[];let E=0;for(let b=0;b<Or;++b){const P=b/v,O=Math.exp(-P*P/2);m.push(O),b===0?E+=O:b<p&&(E+=2*O)}for(let b=0;b<m.length;b++)m[b]=m[b]/E;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;const y=this._sizeLods[i],C=3*y*(i>S-Ps?i-S+Ps:0),w=4*(this._cubeSize-y);Do(t,C,w,3*y,2*y),l.setRenderTarget(t),l.render(h,hc)}}function FS(r){const e=[],t=[],n=[];let i=r;const s=r-Ps+1+Lf.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Ps?l=Lf[a-r+Ps-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,v=3,p=2,m=1,E=new Float32Array(v*g*d),S=new Float32Array(p*g*d),y=new Float32Array(m*g*d);for(let w=0;w<d;w++){const b=w%3*2/3-1,P=w>2?0:-1,O=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];E.set(O,v*g*w),S.set(f,p*g*w);const _=[w,w,w,w,w,w];y.set(_,m*g*w)}const C=new Ai;C.setAttribute("position",new mi(E,v)),C.setAttribute("uv",new mi(S,p)),C.setAttribute("faceIndex",new mi(y,m)),e.push(C),i>Ps&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Nf(r,e,t){const n=new ns(r,e,t);return n.texture.mapping=Sl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Do(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function BS(r,e,t){const n=new Float32Array(Or),i=new $(0,1,0);return new xr({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Of(){return new xr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Ff(){return new xr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function xh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kS(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ru||l===su,u=l===Ks||l===js;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Uf(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new Uf(r)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function zS(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&jo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function HS(r,e,t,n){const i={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)e.remove(v[p])}f.removeEventListener("dispose",a),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const v=d[g];for(let p=0,m=v.length;p<m;p++)e.update(v[p],r.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let v=0;if(d!==null){const E=d.array;v=d.version;for(let S=0,y=E.length;S<y;S+=3){const C=E[S+0],w=E[S+1],b=E[S+2];f.push(C,w,w,b,b,C)}}else if(g!==void 0){const E=g.array;v=g.version;for(let S=0,y=E.length/3-1;S<y;S+=3){const C=S+0,w=S+1,b=S+2;f.push(C,w,w,b,b,C)}}else return;const p=new(rm(f)?cm:lm)(f,1);p.version=v;const m=s.get(h);m&&e.remove(m),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function GS(r,e,t){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*a),t.update(d,n,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*a,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];t.update(p,n,1)}function h(f,d,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/a,d[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,v,0,g);let m=0;for(let E=0;E<g;E++)m+=d[E];for(let E=0;E<v.length;E++)t.update(m,n,v[E])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function VS(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function WS(r,e,t){const n=new WeakMap,i=new kt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let _=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var d=_;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),p===!0&&(y=3);let C=o.attributes.position.count*y,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const b=new Float32Array(C*w*4*h),P=new am(b,C,w,h);P.type=zi,P.needsUpdate=!0;const O=y*4;for(let x=0;x<h;x++){const D=m[x],B=E[x],W=S[x],Y=C*w*4*x;for(let z=0;z<D.count;z++){const X=z*O;g===!0&&(i.fromBufferAttribute(D,z),b[Y+X+0]=i.x,b[Y+X+1]=i.y,b[Y+X+2]=i.z,b[Y+X+3]=0),v===!0&&(i.fromBufferAttribute(B,z),b[Y+X+4]=i.x,b[Y+X+5]=i.y,b[Y+X+6]=i.z,b[Y+X+7]=0),p===!0&&(i.fromBufferAttribute(W,z),b[Y+X+8]=i.x,b[Y+X+9]=i.y,b[Y+X+10]=i.z,b[Y+X+11]=W.itemSize===4?i.w:1)}}f={count:h,texture:P,size:new pt(C,w)},n.set(o,f),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",v),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function XS(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class mm extends hn{constructor(e,t,n,i,s,a,o,l,c,u=ks){if(u!==ks&&u!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ks&&(n=ts),n===void 0&&u===Js&&(n=Zs),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ni,this.minFilter=l!==void 0?l:ni,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const _m=new hn,Bf=new mm(1,1),gm=new am,vm=new P0,xm=new fm,kf=[],zf=[],Hf=new Float32Array(16),Gf=new Float32Array(9),Vf=new Float32Array(4);function na(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=kf[i];if(s===void 0&&(s=new Float32Array(i),kf[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Yt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function $t(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function El(r,e){let t=zf[e];t===void 0&&(t=new Int32Array(e),zf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function YS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function $S(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;r.uniform2fv(this.addr,e),$t(t,e)}}function qS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;r.uniform3fv(this.addr,e),$t(t,e)}}function KS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;r.uniform4fv(this.addr,e),$t(t,e)}}function jS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;Vf.set(n),r.uniformMatrix2fv(this.addr,!1,Vf),$t(t,n)}}function ZS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;Gf.set(n),r.uniformMatrix3fv(this.addr,!1,Gf),$t(t,n)}}function JS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;Hf.set(n),r.uniformMatrix4fv(this.addr,!1,Hf),$t(t,n)}}function QS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function eM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;r.uniform2iv(this.addr,e),$t(t,e)}}function tM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;r.uniform3iv(this.addr,e),$t(t,e)}}function nM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;r.uniform4iv(this.addr,e),$t(t,e)}}function iM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function rM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;r.uniform2uiv(this.addr,e),$t(t,e)}}function sM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;r.uniform3uiv(this.addr,e),$t(t,e)}}function aM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;r.uniform4uiv(this.addr,e),$t(t,e)}}function oM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Bf.compareFunction=im,s=Bf):s=_m,t.setTexture2D(e||s,i)}function lM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||vm,i)}function cM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||xm,i)}function uM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||gm,i)}function hM(r){switch(r){case 5126:return YS;case 35664:return $S;case 35665:return qS;case 35666:return KS;case 35674:return jS;case 35675:return ZS;case 35676:return JS;case 5124:case 35670:return QS;case 35667:case 35671:return eM;case 35668:case 35672:return tM;case 35669:case 35673:return nM;case 5125:return iM;case 36294:return rM;case 36295:return sM;case 36296:return aM;case 35678:case 36198:case 36298:case 36306:case 35682:return oM;case 35679:case 36299:case 36307:return lM;case 35680:case 36300:case 36308:case 36293:return cM;case 36289:case 36303:case 36311:case 36292:return uM}}function fM(r,e){r.uniform1fv(this.addr,e)}function dM(r,e){const t=na(e,this.size,2);r.uniform2fv(this.addr,t)}function pM(r,e){const t=na(e,this.size,3);r.uniform3fv(this.addr,t)}function mM(r,e){const t=na(e,this.size,4);r.uniform4fv(this.addr,t)}function _M(r,e){const t=na(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function gM(r,e){const t=na(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function vM(r,e){const t=na(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function xM(r,e){r.uniform1iv(this.addr,e)}function SM(r,e){r.uniform2iv(this.addr,e)}function MM(r,e){r.uniform3iv(this.addr,e)}function yM(r,e){r.uniform4iv(this.addr,e)}function EM(r,e){r.uniform1uiv(this.addr,e)}function TM(r,e){r.uniform2uiv(this.addr,e)}function bM(r,e){r.uniform3uiv(this.addr,e)}function wM(r,e){r.uniform4uiv(this.addr,e)}function AM(r,e,t){const n=this.cache,i=e.length,s=El(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||_m,s[a])}function CM(r,e,t){const n=this.cache,i=e.length,s=El(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||vm,s[a])}function RM(r,e,t){const n=this.cache,i=e.length,s=El(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||xm,s[a])}function PM(r,e,t){const n=this.cache,i=e.length,s=El(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||gm,s[a])}function LM(r){switch(r){case 5126:return fM;case 35664:return dM;case 35665:return pM;case 35666:return mM;case 35674:return _M;case 35675:return gM;case 35676:return vM;case 5124:case 35670:return xM;case 35667:case 35671:return SM;case 35668:case 35672:return MM;case 35669:case 35673:return yM;case 5125:return EM;case 36294:return TM;case 36295:return bM;case 36296:return wM;case 35678:case 36198:case 36298:case 36306:case 35682:return AM;case 35679:case 36299:case 36307:return CM;case 35680:case 36300:case 36308:case 36293:return RM;case 36289:case 36303:case 36311:case 36292:return PM}}class DM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hM(t.type)}}class IM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=LM(t.type)}}class UM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const _c=/(\w+)(\])?(\[|\.)?/g;function Wf(r,e){r.seq.push(e),r.map[e.id]=e}function NM(r,e,t){const n=r.name,i=n.length;for(_c.lastIndex=0;;){const s=_c.exec(n),a=_c.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Wf(t,c===void 0?new DM(o,r,e):new IM(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new UM(o),Wf(t,h)),t=h}}}class Zo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);NM(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Xf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const OM=37297;let FM=0;function BM(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function kM(r){const e=ft.getPrimaries(ft.workingColorSpace),t=ft.getPrimaries(r);let n;switch(e===t?n="":e===dl&&t===fl?n="LinearDisplayP3ToLinearSRGB":e===fl&&t===dl&&(n="LinearSRGBToLinearDisplayP3"),r){case Mr:case Ml:return[n,"LinearTransferOETF"];case bn:case mh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Yf(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+BM(r.getShaderSource(e),a)}else return i}function zM(r,e){const t=kM(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function HM(r,e){let t;switch(e){case zg:t="Linear";break;case Hg:t="Reinhard";break;case Gg:t="Cineon";break;case Vg:t="ACESFilmic";break;case Xg:t="AgX";break;case Yg:t="Neutral";break;case Wg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Io=new $;function GM(){ft.getLuminanceCoefficients(Io);const r=Io.x.toFixed(4),e=Io.y.toFixed(4),t=Io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function WM(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function XM(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function xa(r){return r!==""}function $f(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uu(r){return r.replace(YM,qM)}const $M=new Map;function qM(r,e){let t=je[e];if(t===void 0){const n=$M.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Uu(t)}const KM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kf(r){return r.replace(KM,jM)}function jM(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function jf(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ZM(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Wp?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===xg?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function JM(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ks:case js:e="ENVMAP_TYPE_CUBE";break;case Sl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function QM(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case js:e="ENVMAP_MODE_REFRACTION";break}return e}function ey(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Xp:e="ENVMAP_BLENDING_MULTIPLY";break;case Bg:e="ENVMAP_BLENDING_MIX";break;case kg:e="ENVMAP_BLENDING_ADD";break}return e}function ty(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ny(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=ZM(t),c=JM(t),u=QM(t),h=ey(t),f=ty(t),d=VM(t),g=WM(s),v=i.createProgram();let p,m,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xa).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xa).join(`
`),m.length>0&&(m+=`
`)):(p=[jf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),m=[jf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vi?"#define TONE_MAPPING":"",t.toneMapping!==Vi?je.tonemapping_pars_fragment:"",t.toneMapping!==Vi?HM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,zM("linearToOutputTexel",t.outputColorSpace),GM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xa).join(`
`)),a=Uu(a),a=$f(a,t),a=qf(a,t),o=Uu(o),o=$f(o,t),o=qf(o,t),a=Kf(a),o=Kf(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===hf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=E+p+a,y=E+m+o,C=Xf(i,i.VERTEX_SHADER,S),w=Xf(i,i.FRAGMENT_SHADER,y);i.attachShader(v,C),i.attachShader(v,w),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function b(x){if(r.debug.checkShaderErrors){const D=i.getProgramInfoLog(v).trim(),B=i.getShaderInfoLog(C).trim(),W=i.getShaderInfoLog(w).trim();let Y=!0,z=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,C,w);else{const X=Yf(i,C,"vertex"),G=Yf(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+x.name+`
Material Type: `+x.type+`

Program Info Log: `+D+`
`+X+`
`+G)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(B===""||W==="")&&(z=!1);z&&(x.diagnostics={runnable:Y,programLog:D,vertexShader:{log:B,prefix:p},fragmentShader:{log:W,prefix:m}})}i.deleteShader(C),i.deleteShader(w),P=new Zo(i,v),O=XM(i,v)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let O;this.getAttributes=function(){return O===void 0&&b(this),O};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(v,OM)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=FM++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=w,this}let iy=0;class ry{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new sy(e),t.set(e,n)),n}}class sy{constructor(e){this.id=iy++,this.code=e,this.usedTimes=0}}function ay(r,e,t,n,i,s,a){const o=new vh,l=new ry,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.reverseDepthBuffer,d=i.vertexTextures;let g=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,x,D,B,W){const Y=B.fog,z=W.geometry,X=_.isMeshStandardMaterial?B.environment:null,G=(_.isMeshStandardMaterial?t:e).get(_.envMap||X),re=G&&G.mapping===Sl?G.image.height:null,R=v[_.type];_.precision!==null&&(g=i.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const ae=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Oe=ae!==void 0?ae.length:0;let Xe=0;z.morphAttributes.position!==void 0&&(Xe=1),z.morphAttributes.normal!==void 0&&(Xe=2),z.morphAttributes.color!==void 0&&(Xe=3);let q,Q,fe,oe;if(R){const Ae=xi[R];q=Ae.vertexShader,Q=Ae.fragmentShader}else q=_.vertexShader,Q=_.fragmentShader,l.update(_),fe=l.getVertexShaderID(_),oe=l.getFragmentShaderID(_);const be=r.getRenderTarget(),ye=W.isInstancedMesh===!0,Ye=W.isBatchedMesh===!0,We=!!_.map,Ge=!!_.matcap,L=!!G,st=!!_.aoMap,Fe=!!_.lightMap,ze=!!_.bumpMap,F=!!_.normalMap,Je=!!_.displacementMap,Pe=!!_.emissiveMap,A=!!_.metalnessMap,M=!!_.roughnessMap,V=_.anisotropy>0,Z=_.clearcoat>0,te=_.dispersion>0,j=_.iridescence>0,Se=_.sheen>0,ie=_.transmission>0,de=V&&!!_.anisotropyMap,Ve=Z&&!!_.clearcoatMap,ne=Z&&!!_.clearcoatNormalMap,ve=Z&&!!_.clearcoatRoughnessMap,xe=j&&!!_.iridescenceMap,Ie=j&&!!_.iridescenceThicknessMap,ge=Se&&!!_.sheenColorMap,$e=Se&&!!_.sheenRoughnessMap,Be=!!_.specularMap,at=!!_.specularColorMap,I=!!_.specularIntensityMap,ee=ie&&!!_.transmissionMap,K=ie&&!!_.thicknessMap,J=!!_.gradientMap,le=!!_.alphaMap,ce=_.alphaTest>0,qe=!!_.alphaHash,gt=!!_.extensions;let wt=Vi;_.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(wt=r.toneMapping);const tt={shaderID:R,shaderType:_.type,shaderName:_.name,vertexShader:q,fragmentShader:Q,defines:_.defines,customVertexShaderID:fe,customFragmentShaderID:oe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Ye,batchingColor:Ye&&W._colorsTexture!==null,instancing:ye,instancingColor:ye&&W.instanceColor!==null,instancingMorph:ye&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:be===null?r.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Mr,alphaToCoverage:!!_.alphaToCoverage,map:We,matcap:Ge,envMap:L,envMapMode:L&&G.mapping,envMapCubeUVHeight:re,aoMap:st,lightMap:Fe,bumpMap:ze,normalMap:F,displacementMap:d&&Je,emissiveMap:Pe,normalMapObjectSpace:F&&_.normalMapType===Zg,normalMapTangentSpace:F&&_.normalMapType===jg,metalnessMap:A,roughnessMap:M,anisotropy:V,anisotropyMap:de,clearcoat:Z,clearcoatMap:Ve,clearcoatNormalMap:ne,clearcoatRoughnessMap:ve,dispersion:te,iridescence:j,iridescenceMap:xe,iridescenceThicknessMap:Ie,sheen:Se,sheenColorMap:ge,sheenRoughnessMap:$e,specularMap:Be,specularColorMap:at,specularIntensityMap:I,transmission:ie,transmissionMap:ee,thicknessMap:K,gradientMap:J,opaque:_.transparent===!1&&_.blending===Bs&&_.alphaToCoverage===!1,alphaMap:le,alphaTest:ce,alphaHash:qe,combine:_.combine,mapUv:We&&p(_.map.channel),aoMapUv:st&&p(_.aoMap.channel),lightMapUv:Fe&&p(_.lightMap.channel),bumpMapUv:ze&&p(_.bumpMap.channel),normalMapUv:F&&p(_.normalMap.channel),displacementMapUv:Je&&p(_.displacementMap.channel),emissiveMapUv:Pe&&p(_.emissiveMap.channel),metalnessMapUv:A&&p(_.metalnessMap.channel),roughnessMapUv:M&&p(_.roughnessMap.channel),anisotropyMapUv:de&&p(_.anisotropyMap.channel),clearcoatMapUv:Ve&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:ne&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:$e&&p(_.sheenRoughnessMap.channel),specularMapUv:Be&&p(_.specularMap.channel),specularColorMapUv:at&&p(_.specularColorMap.channel),specularIntensityMapUv:I&&p(_.specularIntensityMap.channel),transmissionMapUv:ee&&p(_.transmissionMap.channel),thicknessMapUv:K&&p(_.thicknessMap.channel),alphaMapUv:le&&p(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(F||V),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!z.attributes.uv&&(We||le),fog:!!Y,useFog:_.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:W.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:Xe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:wt,decodeVideoTexture:We&&_.map.isVideoTexture===!0&&ft.getTransfer(_.map.colorSpace)===Tt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Fi,flipSided:_.side===Pn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:gt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&_.extensions.multiDraw===!0||Ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function E(_){const x=[];if(_.shaderID?x.push(_.shaderID):(x.push(_.customVertexShaderID),x.push(_.customFragmentShaderID)),_.defines!==void 0)for(const D in _.defines)x.push(D),x.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(S(x,_),y(x,_),x.push(r.outputColorSpace)),x.push(_.customProgramCacheKey),x.join()}function S(_,x){_.push(x.precision),_.push(x.outputColorSpace),_.push(x.envMapMode),_.push(x.envMapCubeUVHeight),_.push(x.mapUv),_.push(x.alphaMapUv),_.push(x.lightMapUv),_.push(x.aoMapUv),_.push(x.bumpMapUv),_.push(x.normalMapUv),_.push(x.displacementMapUv),_.push(x.emissiveMapUv),_.push(x.metalnessMapUv),_.push(x.roughnessMapUv),_.push(x.anisotropyMapUv),_.push(x.clearcoatMapUv),_.push(x.clearcoatNormalMapUv),_.push(x.clearcoatRoughnessMapUv),_.push(x.iridescenceMapUv),_.push(x.iridescenceThicknessMapUv),_.push(x.sheenColorMapUv),_.push(x.sheenRoughnessMapUv),_.push(x.specularMapUv),_.push(x.specularColorMapUv),_.push(x.specularIntensityMapUv),_.push(x.transmissionMapUv),_.push(x.thicknessMapUv),_.push(x.combine),_.push(x.fogExp2),_.push(x.sizeAttenuation),_.push(x.morphTargetsCount),_.push(x.morphAttributeCount),_.push(x.numDirLights),_.push(x.numPointLights),_.push(x.numSpotLights),_.push(x.numSpotLightMaps),_.push(x.numHemiLights),_.push(x.numRectAreaLights),_.push(x.numDirLightShadows),_.push(x.numPointLightShadows),_.push(x.numSpotLightShadows),_.push(x.numSpotLightShadowsWithMaps),_.push(x.numLightProbes),_.push(x.shadowMapType),_.push(x.toneMapping),_.push(x.numClippingPlanes),_.push(x.numClipIntersection),_.push(x.depthPacking)}function y(_,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.alphaToCoverage&&o.enable(20),_.push(o.mask)}function C(_){const x=v[_.type];let D;if(x){const B=xi[x];D=G0.clone(B.uniforms)}else D=_.uniforms;return D}function w(_,x){let D;for(let B=0,W=u.length;B<W;B++){const Y=u[B];if(Y.cacheKey===x){D=Y,++D.usedTimes;break}}return D===void 0&&(D=new ny(r,x,_,s),u.push(D)),D}function b(_){if(--_.usedTimes===0){const x=u.indexOf(_);u[x]=u[u.length-1],u.pop(),_.destroy()}}function P(_){l.remove(_)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:E,getUniforms:C,acquireProgram:w,releaseProgram:b,releaseShaderCache:P,programs:u,dispose:O}}function oy(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function ly(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Zf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Jf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,d,g,v,p){let m=r[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:v,group:p},r[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=v,m.group=p),e++,m}function o(h,f,d,g,v,p){const m=a(h,f,d,g,v,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(h,f,d,g,v,p){const m=a(h,f,d,g,v,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||ly),n.length>1&&n.sort(f||Zf),i.length>1&&i.sort(f||Zf)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function cy(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Jf,r.set(n,[a])):i>=s.length?(a=new Jf,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function uy(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new dt};break;case"SpotLight":t={position:new $,direction:new $,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new $,halfWidth:new $,halfHeight:new $};break}return r[e.id]=t,t}}}function hy(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let fy=0;function dy(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function py(r){const e=new uy,t=hy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new $);const i=new $,s=new It,a=new It;function o(c){let u=0,h=0,f=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let d=0,g=0,v=0,p=0,m=0,E=0,S=0,y=0,C=0,w=0,b=0;c.sort(dy);for(let O=0,_=c.length;O<_;O++){const x=c[O],D=x.color,B=x.intensity,W=x.distance,Y=x.shadow&&x.shadow.map?x.shadow.map.texture:null;if(x.isAmbientLight)u+=D.r*B,h+=D.g*B,f+=D.b*B;else if(x.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(x.sh.coefficients[z],B);b++}else if(x.isDirectionalLight){const z=e.get(x);if(z.color.copy(x.color).multiplyScalar(x.intensity),x.castShadow){const X=x.shadow,G=t.get(x);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=Y,n.directionalShadowMatrix[d]=x.shadow.matrix,E++}n.directional[d]=z,d++}else if(x.isSpotLight){const z=e.get(x);z.position.setFromMatrixPosition(x.matrixWorld),z.color.copy(D).multiplyScalar(B),z.distance=W,z.coneCos=Math.cos(x.angle),z.penumbraCos=Math.cos(x.angle*(1-x.penumbra)),z.decay=x.decay,n.spot[v]=z;const X=x.shadow;if(x.map&&(n.spotLightMap[C]=x.map,C++,X.updateMatrices(x),x.castShadow&&w++),n.spotLightMatrix[v]=X.matrix,x.castShadow){const G=t.get(x);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=Y,y++}v++}else if(x.isRectAreaLight){const z=e.get(x);z.color.copy(D).multiplyScalar(B),z.halfWidth.set(x.width*.5,0,0),z.halfHeight.set(0,x.height*.5,0),n.rectArea[p]=z,p++}else if(x.isPointLight){const z=e.get(x);if(z.color.copy(x.color).multiplyScalar(x.intensity),z.distance=x.distance,z.decay=x.decay,x.castShadow){const X=x.shadow,G=t.get(x);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,G.shadowCameraNear=X.camera.near,G.shadowCameraFar=X.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=x.shadow.matrix,S++}n.point[g]=z,g++}else if(x.isHemisphereLight){const z=e.get(x);z.skyColor.copy(x.color).multiplyScalar(B),z.groundColor.copy(x.groundColor).multiplyScalar(B),n.hemi[m]=z,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==E||P.numPointShadows!==S||P.numSpotShadows!==y||P.numSpotMaps!==C||P.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=b,P.directionalLength=d,P.pointLength=g,P.spotLength=v,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=E,P.numPointShadows=S,P.numSpotShadows=y,P.numSpotMaps=C,P.numLightProbes=b,n.version=fy++)}function l(c,u){let h=0,f=0,d=0,g=0,v=0;const p=u.matrixWorldInverse;for(let m=0,E=c.length;m<E;m++){const S=c[m];if(S.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),h++}else if(S.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),d++}else if(S.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(p),a.identity(),s.copy(S.matrixWorld),s.premultiply(p),a.extractRotation(s),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:n}}function Qf(r){const e=new py(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function my(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Qf(r),e.set(i,[o])):s>=a.length?(o=new Qf(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class _y extends ja{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gy extends ja{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Sy(r,e,t){let n=new dm;const i=new pt,s=new pt,a=new kt,o=new _y({depthPacking:Kg}),l=new gy,c={},u=t.maxTextureSize,h={[vr]:Pn,[Pn]:vr,[Fi]:Fi},f=new xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:vy,fragmentShader:xy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ai;g.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Sn(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wp;let m=this.type;this.render=function(w,b,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const O=r.getRenderTarget(),_=r.getActiveCubeFace(),x=r.getActiveMipmapLevel(),D=r.state;D.setBlending(pr),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const B=m!==Ii&&this.type===Ii,W=m===Ii&&this.type!==Ii;for(let Y=0,z=w.length;Y<z;Y++){const X=w[Y],G=X.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const re=G.getFrameExtents();if(i.multiply(re),s.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/re.x),i.x=s.x*re.x,G.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/re.y),i.y=s.y*re.y,G.mapSize.y=s.y)),G.map===null||B===!0||W===!0){const ae=this.type!==Ii?{minFilter:ni,magFilter:ni}:{};G.map!==null&&G.map.dispose(),G.map=new ns(i.x,i.y,ae),G.map.texture.name=X.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const R=G.getViewportCount();for(let ae=0;ae<R;ae++){const Oe=G.getViewport(ae);a.set(s.x*Oe.x,s.y*Oe.y,s.x*Oe.z,s.y*Oe.w),D.viewport(a),G.updateMatrices(X,ae),n=G.getFrustum(),y(b,P,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===Ii&&E(G,P),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(O,_,x)};function E(w,b){const P=e.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ns(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(b,null,P,f,v,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(b,null,P,d,v,null)}function S(w,b,P,O){let _=null;const x=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(x!==void 0)_=x;else if(_=P.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const D=_.uuid,B=b.uuid;let W=c[D];W===void 0&&(W={},c[D]=W);let Y=W[B];Y===void 0&&(Y=_.clone(),W[B]=Y,b.addEventListener("dispose",C)),_=Y}if(_.visible=b.visible,_.wireframe=b.wireframe,O===Ii?_.side=b.shadowSide!==null?b.shadowSide:b.side:_.side=b.shadowSide!==null?b.shadowSide:h[b.side],_.alphaMap=b.alphaMap,_.alphaTest=b.alphaTest,_.map=b.map,_.clipShadows=b.clipShadows,_.clippingPlanes=b.clippingPlanes,_.clipIntersection=b.clipIntersection,_.displacementMap=b.displacementMap,_.displacementScale=b.displacementScale,_.displacementBias=b.displacementBias,_.wireframeLinewidth=b.wireframeLinewidth,_.linewidth=b.linewidth,P.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const D=r.properties.get(_);D.light=P}return _}function y(w,b,P,O,_){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&_===Ii)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const B=e.update(w),W=w.material;if(Array.isArray(W)){const Y=B.groups;for(let z=0,X=Y.length;z<X;z++){const G=Y[z],re=W[G.materialIndex];if(re&&re.visible){const R=S(w,re,O,_);w.onBeforeShadow(r,w,b,P,B,R,G),r.renderBufferDirect(P,null,B,R,w,G),w.onAfterShadow(r,w,b,P,B,R,G)}}}else if(W.visible){const Y=S(w,W,O,_);w.onBeforeShadow(r,w,b,P,B,Y,null),r.renderBufferDirect(P,null,B,Y,w,null),w.onAfterShadow(r,w,b,P,B,Y,null)}}const D=w.children;for(let B=0,W=D.length;B<W;B++)y(D[B],b,P,O,_)}function C(w){w.target.removeEventListener("dispose",C);for(const P in c){const O=c[P],_=w.target.uuid;_ in O&&(O[_].dispose(),delete O[_])}}}const My={[Zc]:Jc,[Qc]:nu,[eu]:iu,[qs]:tu,[Jc]:Zc,[nu]:Qc,[iu]:eu,[tu]:qs};function yy(r){function e(){let I=!1;const ee=new kt;let K=null;const J=new kt(0,0,0,0);return{setMask:function(le){K!==le&&!I&&(r.colorMask(le,le,le,le),K=le)},setLocked:function(le){I=le},setClear:function(le,ce,qe,gt,wt){wt===!0&&(le*=gt,ce*=gt,qe*=gt),ee.set(le,ce,qe,gt),J.equals(ee)===!1&&(r.clearColor(le,ce,qe,gt),J.copy(ee))},reset:function(){I=!1,K=null,J.set(-1,0,0,0)}}}function t(){let I=!1,ee=!1,K=null,J=null,le=null;return{setReversed:function(ce){ee=ce},setTest:function(ce){ce?fe(r.DEPTH_TEST):oe(r.DEPTH_TEST)},setMask:function(ce){K!==ce&&!I&&(r.depthMask(ce),K=ce)},setFunc:function(ce){if(ee&&(ce=My[ce]),J!==ce){switch(ce){case Zc:r.depthFunc(r.NEVER);break;case Jc:r.depthFunc(r.ALWAYS);break;case Qc:r.depthFunc(r.LESS);break;case qs:r.depthFunc(r.LEQUAL);break;case eu:r.depthFunc(r.EQUAL);break;case tu:r.depthFunc(r.GEQUAL);break;case nu:r.depthFunc(r.GREATER);break;case iu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}J=ce}},setLocked:function(ce){I=ce},setClear:function(ce){le!==ce&&(r.clearDepth(ce),le=ce)},reset:function(){I=!1,K=null,J=null,le=null}}}function n(){let I=!1,ee=null,K=null,J=null,le=null,ce=null,qe=null,gt=null,wt=null;return{setTest:function(tt){I||(tt?fe(r.STENCIL_TEST):oe(r.STENCIL_TEST))},setMask:function(tt){ee!==tt&&!I&&(r.stencilMask(tt),ee=tt)},setFunc:function(tt,Ae,Ee){(K!==tt||J!==Ae||le!==Ee)&&(r.stencilFunc(tt,Ae,Ee),K=tt,J=Ae,le=Ee)},setOp:function(tt,Ae,Ee){(ce!==tt||qe!==Ae||gt!==Ee)&&(r.stencilOp(tt,Ae,Ee),ce=tt,qe=Ae,gt=Ee)},setLocked:function(tt){I=tt},setClear:function(tt){wt!==tt&&(r.clearStencil(tt),wt=tt)},reset:function(){I=!1,ee=null,K=null,J=null,le=null,ce=null,qe=null,gt=null,wt=null}}}const i=new e,s=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,g=!1,v=null,p=null,m=null,E=null,S=null,y=null,C=null,w=new dt(0,0,0),b=0,P=!1,O=null,_=null,x=null,D=null,B=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,z=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=z>=1):X.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=z>=2);let G=null,re={};const R=r.getParameter(r.SCISSOR_BOX),ae=r.getParameter(r.VIEWPORT),Oe=new kt().fromArray(R),Xe=new kt().fromArray(ae);function q(I,ee,K,J){const le=new Uint8Array(4),ce=r.createTexture();r.bindTexture(I,ce),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qe=0;qe<K;qe++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(ee,0,r.RGBA,1,1,J,0,r.RGBA,r.UNSIGNED_BYTE,le):r.texImage2D(ee+qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,le);return ce}const Q={};Q[r.TEXTURE_2D]=q(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),fe(r.DEPTH_TEST),s.setFunc(qs),Fe(!1),ze(af),fe(r.CULL_FACE),L(pr);function fe(I){c[I]!==!0&&(r.enable(I),c[I]=!0)}function oe(I){c[I]!==!1&&(r.disable(I),c[I]=!1)}function be(I,ee){return u[I]!==ee?(r.bindFramebuffer(I,ee),u[I]=ee,I===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ee),I===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ee),!0):!1}function ye(I,ee){let K=f,J=!1;if(I){K=h.get(ee),K===void 0&&(K=[],h.set(ee,K));const le=I.textures;if(K.length!==le.length||K[0]!==r.COLOR_ATTACHMENT0){for(let ce=0,qe=le.length;ce<qe;ce++)K[ce]=r.COLOR_ATTACHMENT0+ce;K.length=le.length,J=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,J=!0);J&&r.drawBuffers(K)}function Ye(I){return d!==I?(r.useProgram(I),d=I,!0):!1}const We={[Nr]:r.FUNC_ADD,[Mg]:r.FUNC_SUBTRACT,[yg]:r.FUNC_REVERSE_SUBTRACT};We[Eg]=r.MIN,We[Tg]=r.MAX;const Ge={[bg]:r.ZERO,[wg]:r.ONE,[Ag]:r.SRC_COLOR,[Kc]:r.SRC_ALPHA,[Ig]:r.SRC_ALPHA_SATURATE,[Lg]:r.DST_COLOR,[Rg]:r.DST_ALPHA,[Cg]:r.ONE_MINUS_SRC_COLOR,[jc]:r.ONE_MINUS_SRC_ALPHA,[Dg]:r.ONE_MINUS_DST_COLOR,[Pg]:r.ONE_MINUS_DST_ALPHA,[Ug]:r.CONSTANT_COLOR,[Ng]:r.ONE_MINUS_CONSTANT_COLOR,[Og]:r.CONSTANT_ALPHA,[Fg]:r.ONE_MINUS_CONSTANT_ALPHA};function L(I,ee,K,J,le,ce,qe,gt,wt,tt){if(I===pr){g===!0&&(oe(r.BLEND),g=!1);return}if(g===!1&&(fe(r.BLEND),g=!0),I!==Sg){if(I!==v||tt!==P){if((p!==Nr||S!==Nr)&&(r.blendEquation(r.FUNC_ADD),p=Nr,S=Nr),tt)switch(I){case Bs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case qc:r.blendFunc(r.ONE,r.ONE);break;case of:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case lf:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Bs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case qc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case of:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case lf:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}m=null,E=null,y=null,C=null,w.set(0,0,0),b=0,v=I,P=tt}return}le=le||ee,ce=ce||K,qe=qe||J,(ee!==p||le!==S)&&(r.blendEquationSeparate(We[ee],We[le]),p=ee,S=le),(K!==m||J!==E||ce!==y||qe!==C)&&(r.blendFuncSeparate(Ge[K],Ge[J],Ge[ce],Ge[qe]),m=K,E=J,y=ce,C=qe),(gt.equals(w)===!1||wt!==b)&&(r.blendColor(gt.r,gt.g,gt.b,wt),w.copy(gt),b=wt),v=I,P=!1}function st(I,ee){I.side===Fi?oe(r.CULL_FACE):fe(r.CULL_FACE);let K=I.side===Pn;ee&&(K=!K),Fe(K),I.blending===Bs&&I.transparent===!1?L(pr):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),i.setMask(I.colorWrite);const J=I.stencilWrite;a.setTest(J),J&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Je(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?fe(r.SAMPLE_ALPHA_TO_COVERAGE):oe(r.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(I){O!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),O=I)}function ze(I){I!==gg?(fe(r.CULL_FACE),I!==_&&(I===af?r.cullFace(r.BACK):I===vg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):oe(r.CULL_FACE),_=I}function F(I){I!==x&&(Y&&r.lineWidth(I),x=I)}function Je(I,ee,K){I?(fe(r.POLYGON_OFFSET_FILL),(D!==ee||B!==K)&&(r.polygonOffset(ee,K),D=ee,B=K)):oe(r.POLYGON_OFFSET_FILL)}function Pe(I){I?fe(r.SCISSOR_TEST):oe(r.SCISSOR_TEST)}function A(I){I===void 0&&(I=r.TEXTURE0+W-1),G!==I&&(r.activeTexture(I),G=I)}function M(I,ee,K){K===void 0&&(G===null?K=r.TEXTURE0+W-1:K=G);let J=re[K];J===void 0&&(J={type:void 0,texture:void 0},re[K]=J),(J.type!==I||J.texture!==ee)&&(G!==K&&(r.activeTexture(K),G=K),r.bindTexture(I,ee||Q[I]),J.type=I,J.texture=ee)}function V(){const I=re[G];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Z(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ve(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(I){Oe.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Oe.copy(I))}function ge(I){Xe.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),Xe.copy(I))}function $e(I,ee){let K=l.get(ee);K===void 0&&(K=new WeakMap,l.set(ee,K));let J=K.get(I);J===void 0&&(J=r.getUniformBlockIndex(ee,I.name),K.set(I,J))}function Be(I,ee){const J=l.get(ee).get(I);o.get(ee)!==J&&(r.uniformBlockBinding(ee,J,I.__bindingPointIndex),o.set(ee,J))}function at(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},G=null,re={},u={},h=new WeakMap,f=[],d=null,g=!1,v=null,p=null,m=null,E=null,S=null,y=null,C=null,w=new dt(0,0,0),b=0,P=!1,O=null,_=null,x=null,D=null,B=null,Oe.set(0,0,r.canvas.width,r.canvas.height),Xe.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:fe,disable:oe,bindFramebuffer:be,drawBuffers:ye,useProgram:Ye,setBlending:L,setMaterial:st,setFlipSided:Fe,setCullFace:ze,setLineWidth:F,setPolygonOffset:Je,setScissorTest:Pe,activeTexture:A,bindTexture:M,unbindTexture:V,compressedTexImage2D:Z,compressedTexImage3D:te,texImage2D:ve,texImage3D:xe,updateUBOMapping:$e,uniformBlockBinding:Be,texStorage2D:Ve,texStorage3D:ne,texSubImage2D:j,texSubImage3D:Se,compressedTexSubImage2D:ie,compressedTexSubImage3D:de,scissor:Ie,viewport:ge,reset:at}}function ed(r,e,t,n){const i=Ey(n);switch(t){case jp:return r*e;case Jp:return r*e;case Qp:return r*e*2;case em:return r*e/i.components*i.byteLength;case fh:return r*e/i.components*i.byteLength;case tm:return r*e*2/i.components*i.byteLength;case dh:return r*e*2/i.components*i.byteLength;case Zp:return r*e*3/i.components*i.byteLength;case pi:return r*e*4/i.components*i.byteLength;case ph:return r*e*4/i.components*i.byteLength;case Xo:case Yo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case $o:case qo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case cu:case hu:return Math.max(r,16)*Math.max(e,8)/4;case lu:case uu:return Math.max(r,8)*Math.max(e,8)/2;case fu:case du:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case pu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case mu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case _u:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case gu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case vu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case xu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Su:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Mu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case yu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Eu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Tu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case bu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case wu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Au:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Cu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ko:case Ru:case Pu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case nm:case Lu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Du:case Iu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ey(r){switch(r){case $i:case $p:return{byteLength:1,components:1};case Va:case qp:case $a:return{byteLength:2,components:1};case uh:case hh:return{byteLength:2,components:4};case ts:case ch:case zi:return{byteLength:4,components:1};case Kp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Ty(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return d?new OffscreenCanvas(A,M):Xa("canvas")}function v(A,M,V){let Z=1;const te=Pe(A);if((te.width>V||te.height>V)&&(Z=V/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const j=Math.floor(Z*te.width),Se=Math.floor(Z*te.height);h===void 0&&(h=g(j,Se));const ie=M?g(j,Se):h;return ie.width=j,ie.height=Se,ie.getContext("2d").drawImage(A,0,0,j,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+j+"x"+Se+")."),ie}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==ni&&A.minFilter!==fi}function m(A){r.generateMipmap(A)}function E(A,M,V,Z,te=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=M;if(M===r.RED&&(V===r.FLOAT&&(j=r.R32F),V===r.HALF_FLOAT&&(j=r.R16F),V===r.UNSIGNED_BYTE&&(j=r.R8)),M===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(j=r.R8UI),V===r.UNSIGNED_SHORT&&(j=r.R16UI),V===r.UNSIGNED_INT&&(j=r.R32UI),V===r.BYTE&&(j=r.R8I),V===r.SHORT&&(j=r.R16I),V===r.INT&&(j=r.R32I)),M===r.RG&&(V===r.FLOAT&&(j=r.RG32F),V===r.HALF_FLOAT&&(j=r.RG16F),V===r.UNSIGNED_BYTE&&(j=r.RG8)),M===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(j=r.RG8UI),V===r.UNSIGNED_SHORT&&(j=r.RG16UI),V===r.UNSIGNED_INT&&(j=r.RG32UI),V===r.BYTE&&(j=r.RG8I),V===r.SHORT&&(j=r.RG16I),V===r.INT&&(j=r.RG32I)),M===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&(j=r.RGB8UI),V===r.UNSIGNED_SHORT&&(j=r.RGB16UI),V===r.UNSIGNED_INT&&(j=r.RGB32UI),V===r.BYTE&&(j=r.RGB8I),V===r.SHORT&&(j=r.RGB16I),V===r.INT&&(j=r.RGB32I)),M===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),V===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),V===r.UNSIGNED_INT&&(j=r.RGBA32UI),V===r.BYTE&&(j=r.RGBA8I),V===r.SHORT&&(j=r.RGBA16I),V===r.INT&&(j=r.RGBA32I)),M===r.RGB&&V===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),M===r.RGBA){const Se=te?hl:ft.getTransfer(Z);V===r.FLOAT&&(j=r.RGBA32F),V===r.HALF_FLOAT&&(j=r.RGBA16F),V===r.UNSIGNED_BYTE&&(j=Se===Tt?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function S(A,M){let V;return A?M===null||M===ts||M===Zs?V=r.DEPTH24_STENCIL8:M===zi?V=r.DEPTH32F_STENCIL8:M===Va&&(V=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ts||M===Zs?V=r.DEPTH_COMPONENT24:M===zi?V=r.DEPTH_COMPONENT32F:M===Va&&(V=r.DEPTH_COMPONENT16),V}function y(A,M){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==ni&&A.minFilter!==fi?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function C(A){const M=A.target;M.removeEventListener("dispose",C),b(M),M.isVideoTexture&&u.delete(M)}function w(A){const M=A.target;M.removeEventListener("dispose",w),O(M)}function b(A){const M=n.get(A);if(M.__webglInit===void 0)return;const V=A.source,Z=f.get(V);if(Z){const te=Z[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&P(A),Object.keys(Z).length===0&&f.delete(V)}n.remove(A)}function P(A){const M=n.get(A);r.deleteTexture(M.__webglTexture);const V=A.source,Z=f.get(V);delete Z[M.__cacheKey],a.memory.textures--}function O(A){const M=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let te=0;te<M.__webglFramebuffer[Z].length;te++)r.deleteFramebuffer(M.__webglFramebuffer[Z][te]);else r.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)r.deleteFramebuffer(M.__webglFramebuffer[Z]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=A.textures;for(let Z=0,te=V.length;Z<te;Z++){const j=n.get(V[Z]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(V[Z])}n.remove(A)}let _=0;function x(){_=0}function D(){const A=_;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),_+=1,A}function B(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function W(A,M){const V=n.get(A);if(A.isVideoTexture&&F(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){const Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(V,A,M);return}}t.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+M)}function Y(A,M){const V=n.get(A);if(A.version>0&&V.__version!==A.version){Xe(V,A,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+M)}function z(A,M){const V=n.get(A);if(A.version>0&&V.__version!==A.version){Xe(V,A,M);return}t.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+M)}function X(A,M){const V=n.get(A);if(A.version>0&&V.__version!==A.version){q(V,A,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+M)}const G={[au]:r.REPEAT,[kr]:r.CLAMP_TO_EDGE,[ou]:r.MIRRORED_REPEAT},re={[ni]:r.NEAREST,[$g]:r.NEAREST_MIPMAP_NEAREST,[fo]:r.NEAREST_MIPMAP_LINEAR,[fi]:r.LINEAR,[Vl]:r.LINEAR_MIPMAP_NEAREST,[zr]:r.LINEAR_MIPMAP_LINEAR},R={[Jg]:r.NEVER,[r0]:r.ALWAYS,[Qg]:r.LESS,[im]:r.LEQUAL,[e0]:r.EQUAL,[i0]:r.GEQUAL,[t0]:r.GREATER,[n0]:r.NOTEQUAL};function ae(A,M){if(M.type===zi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===fi||M.magFilter===Vl||M.magFilter===fo||M.magFilter===zr||M.minFilter===fi||M.minFilter===Vl||M.minFilter===fo||M.minFilter===zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,G[M.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,G[M.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,G[M.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,re[M.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,re[M.minFilter]),M.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,R[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ni||M.minFilter!==fo&&M.minFilter!==zr||M.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");r.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Oe(A,M){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",C));const Z=M.source;let te=f.get(Z);te===void 0&&(te={},f.set(Z,te));const j=B(M);if(j!==A.__cacheKey){te[j]===void 0&&(te[j]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,V=!0),te[j].usedTimes++;const Se=te[A.__cacheKey];Se!==void 0&&(te[A.__cacheKey].usedTimes--,Se.usedTimes===0&&P(M)),A.__cacheKey=j,A.__webglTexture=te[j].texture}return V}function Xe(A,M,V){let Z=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=r.TEXTURE_3D);const te=Oe(A,M),j=M.source;t.bindTexture(Z,A.__webglTexture,r.TEXTURE0+V);const Se=n.get(j);if(j.version!==Se.__version||te===!0){t.activeTexture(r.TEXTURE0+V);const ie=ft.getPrimaries(ft.workingColorSpace),de=M.colorSpace===sr?null:ft.getPrimaries(M.colorSpace),Ve=M.colorSpace===sr||ie===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let ne=v(M.image,!1,i.maxTextureSize);ne=Je(M,ne);const ve=s.convert(M.format,M.colorSpace),xe=s.convert(M.type);let Ie=E(M.internalFormat,ve,xe,M.colorSpace,M.isVideoTexture);ae(Z,M);let ge;const $e=M.mipmaps,Be=M.isVideoTexture!==!0,at=Se.__version===void 0||te===!0,I=j.dataReady,ee=y(M,ne);if(M.isDepthTexture)Ie=S(M.format===Js,M.type),at&&(Be?t.texStorage2D(r.TEXTURE_2D,1,Ie,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,Ie,ne.width,ne.height,0,ve,xe,null));else if(M.isDataTexture)if($e.length>0){Be&&at&&t.texStorage2D(r.TEXTURE_2D,ee,Ie,$e[0].width,$e[0].height);for(let K=0,J=$e.length;K<J;K++)ge=$e[K],Be?I&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,ge.width,ge.height,ve,xe,ge.data):t.texImage2D(r.TEXTURE_2D,K,Ie,ge.width,ge.height,0,ve,xe,ge.data);M.generateMipmaps=!1}else Be?(at&&t.texStorage2D(r.TEXTURE_2D,ee,Ie,ne.width,ne.height),I&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ne.width,ne.height,ve,xe,ne.data)):t.texImage2D(r.TEXTURE_2D,0,Ie,ne.width,ne.height,0,ve,xe,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Be&&at&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ee,Ie,$e[0].width,$e[0].height,ne.depth);for(let K=0,J=$e.length;K<J;K++)if(ge=$e[K],M.format!==pi)if(ve!==null)if(Be){if(I)if(M.layerUpdates.size>0){const le=ed(ge.width,ge.height,M.format,M.type);for(const ce of M.layerUpdates){const qe=ge.data.subarray(ce*le/ge.data.BYTES_PER_ELEMENT,(ce+1)*le/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,ce,ge.width,ge.height,1,ve,qe,0,0)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,ge.width,ge.height,ne.depth,ve,ge.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,K,Ie,ge.width,ge.height,ne.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?I&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,ge.width,ge.height,ne.depth,ve,xe,ge.data):t.texImage3D(r.TEXTURE_2D_ARRAY,K,Ie,ge.width,ge.height,ne.depth,0,ve,xe,ge.data)}else{Be&&at&&t.texStorage2D(r.TEXTURE_2D,ee,Ie,$e[0].width,$e[0].height);for(let K=0,J=$e.length;K<J;K++)ge=$e[K],M.format!==pi?ve!==null?Be?I&&t.compressedTexSubImage2D(r.TEXTURE_2D,K,0,0,ge.width,ge.height,ve,ge.data):t.compressedTexImage2D(r.TEXTURE_2D,K,Ie,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?I&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,ge.width,ge.height,ve,xe,ge.data):t.texImage2D(r.TEXTURE_2D,K,Ie,ge.width,ge.height,0,ve,xe,ge.data)}else if(M.isDataArrayTexture)if(Be){if(at&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ee,Ie,ne.width,ne.height,ne.depth),I)if(M.layerUpdates.size>0){const K=ed(ne.width,ne.height,M.format,M.type);for(const J of M.layerUpdates){const le=ne.data.subarray(J*K/ne.data.BYTES_PER_ELEMENT,(J+1)*K/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,ne.width,ne.height,1,ve,xe,le)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ve,xe,ne.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ie,ne.width,ne.height,ne.depth,0,ve,xe,ne.data);else if(M.isData3DTexture)Be?(at&&t.texStorage3D(r.TEXTURE_3D,ee,Ie,ne.width,ne.height,ne.depth),I&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ve,xe,ne.data)):t.texImage3D(r.TEXTURE_3D,0,Ie,ne.width,ne.height,ne.depth,0,ve,xe,ne.data);else if(M.isFramebufferTexture){if(at)if(Be)t.texStorage2D(r.TEXTURE_2D,ee,Ie,ne.width,ne.height);else{let K=ne.width,J=ne.height;for(let le=0;le<ee;le++)t.texImage2D(r.TEXTURE_2D,le,Ie,K,J,0,ve,xe,null),K>>=1,J>>=1}}else if($e.length>0){if(Be&&at){const K=Pe($e[0]);t.texStorage2D(r.TEXTURE_2D,ee,Ie,K.width,K.height)}for(let K=0,J=$e.length;K<J;K++)ge=$e[K],Be?I&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,ve,xe,ge):t.texImage2D(r.TEXTURE_2D,K,Ie,ve,xe,ge);M.generateMipmaps=!1}else if(Be){if(at){const K=Pe(ne);t.texStorage2D(r.TEXTURE_2D,ee,Ie,K.width,K.height)}I&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ve,xe,ne)}else t.texImage2D(r.TEXTURE_2D,0,Ie,ve,xe,ne);p(M)&&m(Z),Se.__version=j.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function q(A,M,V){if(M.image.length!==6)return;const Z=Oe(A,M),te=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+V);const j=n.get(te);if(te.version!==j.__version||Z===!0){t.activeTexture(r.TEXTURE0+V);const Se=ft.getPrimaries(ft.workingColorSpace),ie=M.colorSpace===sr?null:ft.getPrimaries(M.colorSpace),de=M.colorSpace===sr||Se===ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ve=M.isCompressedTexture||M.image[0].isCompressedTexture,ne=M.image[0]&&M.image[0].isDataTexture,ve=[];for(let J=0;J<6;J++)!Ve&&!ne?ve[J]=v(M.image[J],!0,i.maxCubemapSize):ve[J]=ne?M.image[J].image:M.image[J],ve[J]=Je(M,ve[J]);const xe=ve[0],Ie=s.convert(M.format,M.colorSpace),ge=s.convert(M.type),$e=E(M.internalFormat,Ie,ge,M.colorSpace),Be=M.isVideoTexture!==!0,at=j.__version===void 0||Z===!0,I=te.dataReady;let ee=y(M,xe);ae(r.TEXTURE_CUBE_MAP,M);let K;if(Ve){Be&&at&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ee,$e,xe.width,xe.height);for(let J=0;J<6;J++){K=ve[J].mipmaps;for(let le=0;le<K.length;le++){const ce=K[le];M.format!==pi?Ie!==null?Be?I&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,0,0,ce.width,ce.height,Ie,ce.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,$e,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,0,0,ce.width,ce.height,Ie,ge,ce.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,$e,ce.width,ce.height,0,Ie,ge,ce.data)}}}else{if(K=M.mipmaps,Be&&at){K.length>0&&ee++;const J=Pe(ve[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ee,$e,J.width,J.height)}for(let J=0;J<6;J++)if(ne){Be?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ve[J].width,ve[J].height,Ie,ge,ve[J].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,$e,ve[J].width,ve[J].height,0,Ie,ge,ve[J].data);for(let le=0;le<K.length;le++){const qe=K[le].image[J].image;Be?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,0,0,qe.width,qe.height,Ie,ge,qe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,$e,qe.width,qe.height,0,Ie,ge,qe.data)}}else{Be?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ie,ge,ve[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,$e,Ie,ge,ve[J]);for(let le=0;le<K.length;le++){const ce=K[le];Be?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,0,0,Ie,ge,ce.image[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,$e,Ie,ge,ce.image[J])}}}p(M)&&m(r.TEXTURE_CUBE_MAP),j.__version=te.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Q(A,M,V,Z,te,j){const Se=s.convert(V.format,V.colorSpace),ie=s.convert(V.type),de=E(V.internalFormat,Se,ie,V.colorSpace);if(!n.get(M).__hasExternalTextures){const ne=Math.max(1,M.width>>j),ve=Math.max(1,M.height>>j);te===r.TEXTURE_3D||te===r.TEXTURE_2D_ARRAY?t.texImage3D(te,j,de,ne,ve,M.depth,0,Se,ie,null):t.texImage2D(te,j,de,ne,ve,0,Se,ie,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),ze(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,te,n.get(V).__webglTexture,0,Fe(M)):(te===r.TEXTURE_2D||te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,te,n.get(V).__webglTexture,j),t.bindFramebuffer(r.FRAMEBUFFER,null)}function fe(A,M,V){if(r.bindRenderbuffer(r.RENDERBUFFER,A),M.depthBuffer){const Z=M.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,j=S(M.stencilBuffer,te),Se=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ie=Fe(M);ze(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,j,M.width,M.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,j,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,j,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,A)}else{const Z=M.textures;for(let te=0;te<Z.length;te++){const j=Z[te],Se=s.convert(j.format,j.colorSpace),ie=s.convert(j.type),de=E(j.internalFormat,Se,ie,j.colorSpace),Ve=Fe(M);V&&ze(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ve,de,M.width,M.height):ze(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ve,de,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,de,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function oe(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const Z=n.get(M.depthTexture).__webglTexture,te=Fe(M);if(M.depthTexture.format===ks)ze(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0);else if(M.depthTexture.format===Js)ze(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function be(A){const M=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=Z}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");oe(M.__webglFramebuffer,A)}else if(V){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=r.createRenderbuffer(),fe(M.__webglDepthbuffer[Z],A,!1);else{const te=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,j)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),fe(M.__webglDepthbuffer,A,!1);else{const Z=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,te),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,te)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ye(A,M,V){const Z=n.get(A);M!==void 0&&Q(Z.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&be(A)}function Ye(A){const M=A.texture,V=n.get(A),Z=n.get(M);A.addEventListener("dispose",w);const te=A.textures,j=A.isWebGLCubeRenderTarget===!0,Se=te.length>1;if(Se||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=M.version,a.memory.textures++),j){V.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[ie]=[];for(let de=0;de<M.mipmaps.length;de++)V.__webglFramebuffer[ie][de]=r.createFramebuffer()}else V.__webglFramebuffer[ie]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let ie=0;ie<M.mipmaps.length;ie++)V.__webglFramebuffer[ie]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(Se)for(let ie=0,de=te.length;ie<de;ie++){const Ve=n.get(te[ie]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=r.createTexture(),a.memory.textures++)}if(A.samples>0&&ze(A)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ie=0;ie<te.length;ie++){const de=te[ie];V.__webglColorRenderbuffer[ie]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[ie]);const Ve=s.convert(de.format,de.colorSpace),ne=s.convert(de.type),ve=E(de.internalFormat,Ve,ne,de.colorSpace,A.isXRRenderTarget===!0),xe=Fe(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,xe,ve,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,V.__webglColorRenderbuffer[ie])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),fe(V.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),ae(r.TEXTURE_CUBE_MAP,M);for(let ie=0;ie<6;ie++)if(M.mipmaps&&M.mipmaps.length>0)for(let de=0;de<M.mipmaps.length;de++)Q(V.__webglFramebuffer[ie][de],A,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,de);else Q(V.__webglFramebuffer[ie],A,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);p(M)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ie=0,de=te.length;ie<de;ie++){const Ve=te[ie],ne=n.get(Ve);t.bindTexture(r.TEXTURE_2D,ne.__webglTexture),ae(r.TEXTURE_2D,Ve),Q(V.__webglFramebuffer,A,Ve,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,0),p(Ve)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let ie=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ie=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ie,Z.__webglTexture),ae(ie,M),M.mipmaps&&M.mipmaps.length>0)for(let de=0;de<M.mipmaps.length;de++)Q(V.__webglFramebuffer[de],A,M,r.COLOR_ATTACHMENT0,ie,de);else Q(V.__webglFramebuffer,A,M,r.COLOR_ATTACHMENT0,ie,0);p(M)&&m(ie),t.unbindTexture()}A.depthBuffer&&be(A)}function We(A){const M=A.textures;for(let V=0,Z=M.length;V<Z;V++){const te=M[V];if(p(te)){const j=A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Se=n.get(te).__webglTexture;t.bindTexture(j,Se),m(j),t.unbindTexture()}}}const Ge=[],L=[];function st(A){if(A.samples>0){if(ze(A)===!1){const M=A.textures,V=A.width,Z=A.height;let te=r.COLOR_BUFFER_BIT;const j=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Se=n.get(A),ie=M.length>1;if(ie)for(let de=0;de<M.length;de++)t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let de=0;de<M.length;de++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=r.STENCIL_BUFFER_BIT)),ie){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Se.__webglColorRenderbuffer[de]);const Ve=n.get(M[de]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ve,0)}r.blitFramebuffer(0,0,V,Z,0,0,V,Z,te,r.NEAREST),l===!0&&(Ge.length=0,L.length=0,Ge.push(r.COLOR_ATTACHMENT0+de),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ge.push(j),L.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,L)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ge))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ie)for(let de=0;de<M.length;de++){t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,Se.__webglColorRenderbuffer[de]);const Ve=n.get(M[de]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,Ve,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const M=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Fe(A){return Math.min(i.maxSamples,A.samples)}function ze(A){const M=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function F(A){const M=a.render.frame;u.get(A)!==M&&(u.set(A,M),A.update())}function Je(A,M){const V=A.colorSpace,Z=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==Mr&&V!==sr&&(ft.getTransfer(V)===Tt?(Z!==pi||te!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}function Pe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=x,this.setTexture2D=W,this.setTexture2DArray=Y,this.setTexture3D=z,this.setTextureCube=X,this.rebindTextures=ye,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=ze}function by(r,e){function t(n,i=sr){let s;const a=ft.getTransfer(i);if(n===$i)return r.UNSIGNED_BYTE;if(n===uh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===hh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Kp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===$p)return r.BYTE;if(n===qp)return r.SHORT;if(n===Va)return r.UNSIGNED_SHORT;if(n===ch)return r.INT;if(n===ts)return r.UNSIGNED_INT;if(n===zi)return r.FLOAT;if(n===$a)return r.HALF_FLOAT;if(n===jp)return r.ALPHA;if(n===Zp)return r.RGB;if(n===pi)return r.RGBA;if(n===Jp)return r.LUMINANCE;if(n===Qp)return r.LUMINANCE_ALPHA;if(n===ks)return r.DEPTH_COMPONENT;if(n===Js)return r.DEPTH_STENCIL;if(n===em)return r.RED;if(n===fh)return r.RED_INTEGER;if(n===tm)return r.RG;if(n===dh)return r.RG_INTEGER;if(n===ph)return r.RGBA_INTEGER;if(n===Xo||n===Yo||n===$o||n===qo)if(a===Tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Xo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Xo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$o)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lu||n===cu||n===uu||n===hu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===lu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fu||n===du||n===pu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===fu||n===du)return a===Tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===pu)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===mu||n===_u||n===gu||n===vu||n===xu||n===Su||n===Mu||n===yu||n===Eu||n===Tu||n===bu||n===wu||n===Au||n===Cu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===mu)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_u)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gu)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vu)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xu)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Su)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mu)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yu)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Eu)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Tu)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bu)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wu)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Au)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cu)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ko||n===Ru||n===Pu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ko)return a===Tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ru)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nm||n===Lu||n===Du||n===Iu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ko)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Lu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Du)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Iu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class wy extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bn extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ay={type:"move"};class gc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ay)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Bn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Cy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ry=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Py{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new hn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new xr({vertexShader:Cy,fragmentShader:Ry,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Sn(new Bi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ly extends ea{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const v=new Py,p=t.getContextAttributes();let m=null,E=null;const S=[],y=[],C=new pt;let w=null;const b=new Jn;b.layers.enable(1),b.viewport=new kt;const P=new Jn;P.layers.enable(2),P.viewport=new kt;const O=[b,P],_=new wy;_.layers.enable(1),_.layers.enable(2);let x=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=S[q];return Q===void 0&&(Q=new gc,S[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=S[q];return Q===void 0&&(Q=new gc,S[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=S[q];return Q===void 0&&(Q=new gc,S[q]=Q),Q.getHandSpace()};function B(q){const Q=y.indexOf(q.inputSource);if(Q===-1)return;const fe=S[Q];fe!==void 0&&(fe.update(q.inputSource,q.frame,c||a),fe.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",Y);for(let q=0;q<S.length;q++){const Q=y[q];Q!==null&&(y[q]=null,S[q].disconnect(Q))}x=null,D=null,v.reset(),e.setRenderTarget(m),d=null,f=null,h=null,i=null,E=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",W),i.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new ns(d.framebufferWidth,d.framebufferHeight,{format:pi,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,fe=null,oe=null;p.depth&&(oe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=p.stencil?Js:ks,fe=p.stencil?Zs:ts);const be={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(be),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new ns(f.textureWidth,f.textureHeight,{format:pi,type:$i,depthTexture:new mm(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Xe.setContext(i),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y(q){for(let Q=0;Q<q.removed.length;Q++){const fe=q.removed[Q],oe=y.indexOf(fe);oe>=0&&(y[oe]=null,S[oe].disconnect(fe))}for(let Q=0;Q<q.added.length;Q++){const fe=q.added[Q];let oe=y.indexOf(fe);if(oe===-1){for(let ye=0;ye<S.length;ye++)if(ye>=y.length){y.push(fe),oe=ye;break}else if(y[ye]===null){y[ye]=fe,oe=ye;break}if(oe===-1)break}const be=S[oe];be&&be.connect(fe)}}const z=new $,X=new $;function G(q,Q,fe){z.setFromMatrixPosition(Q.matrixWorld),X.setFromMatrixPosition(fe.matrixWorld);const oe=z.distanceTo(X),be=Q.projectionMatrix.elements,ye=fe.projectionMatrix.elements,Ye=be[14]/(be[10]-1),We=be[14]/(be[10]+1),Ge=(be[9]+1)/be[5],L=(be[9]-1)/be[5],st=(be[8]-1)/be[0],Fe=(ye[8]+1)/ye[0],ze=Ye*st,F=Ye*Fe,Je=oe/(-st+Fe),Pe=Je*-st;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Pe),q.translateZ(Je),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),be[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const A=Ye+Je,M=We+Je,V=ze-Pe,Z=F+(oe-Pe),te=Ge*We/M*A,j=L*We/M*A;q.projectionMatrix.makePerspective(V,Z,te,j,A,M),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function re(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let Q=q.near,fe=q.far;v.texture!==null&&(v.depthNear>0&&(Q=v.depthNear),v.depthFar>0&&(fe=v.depthFar)),_.near=P.near=b.near=Q,_.far=P.far=b.far=fe,(x!==_.near||D!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),x=_.near,D=_.far);const oe=q.parent,be=_.cameras;re(_,oe);for(let ye=0;ye<be.length;ye++)re(be[ye],oe);be.length===2?G(_,b,P):_.projectionMatrix.copy(b.projectionMatrix),R(q,_,oe)};function R(q,Q,fe){fe===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(fe.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Wa*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let ae=null;function Oe(q,Q){if(u=Q.getViewerPose(c||a),g=Q,u!==null){const fe=u.views;d!==null&&(e.setRenderTargetFramebuffer(E,d.framebuffer),e.setRenderTarget(E));let oe=!1;fe.length!==_.cameras.length&&(_.cameras.length=0,oe=!0);for(let ye=0;ye<fe.length;ye++){const Ye=fe[ye];let We=null;if(d!==null)We=d.getViewport(Ye);else{const L=h.getViewSubImage(f,Ye);We=L.viewport,ye===0&&(e.setRenderTargetTextures(E,L.colorTexture,f.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(E))}let Ge=O[ye];Ge===void 0&&(Ge=new Jn,Ge.layers.enable(ye),Ge.viewport=new kt,O[ye]=Ge),Ge.matrix.fromArray(Ye.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Ye.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(We.x,We.y,We.width,We.height),ye===0&&(_.matrix.copy(Ge.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),oe===!0&&_.cameras.push(Ge)}const be=i.enabledFeatures;if(be&&be.includes("depth-sensing")){const ye=h.getDepthInformation(fe[0]);ye&&ye.isValid&&ye.texture&&v.init(e,ye,i.renderState)}}for(let fe=0;fe<S.length;fe++){const oe=y[fe],be=S[fe];oe!==null&&be!==void 0&&be.update(oe,Q,c||a)}ae&&ae(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Xe=new pm;Xe.setAnimationLoop(Oe),this.setAnimationLoop=function(q){ae=q},this.dispose=function(){}}}const Rr=new qi,Dy=new It;function Iy(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,um(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,E,S,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),v(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,E,S):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Pn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Pn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const E=e.get(m),S=E.envMap,y=E.envMapRotation;S&&(p.envMap.value=S,Rr.copy(y),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),p.envMapRotation.value.setFromMatrix4(Dy.makeRotationFromEuler(Rr)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,E,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*E,p.scale.value=S*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,E){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Pn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const E=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Uy(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){const y=S.program;n.uniformBlockBinding(E,y)}function c(E,S){let y=i[E.id];y===void 0&&(g(E),y=u(E),i[E.id]=y,E.addEventListener("dispose",p));const C=S.program;n.updateUBOMapping(E,C);const w=e.render.frame;s[E.id]!==w&&(f(E),s[E.id]=w)}function u(E){const S=h();E.__bindingPointIndex=S;const y=r.createBuffer(),C=E.__size,w=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,C,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,y),y}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const S=i[E.id],y=E.uniforms,C=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let w=0,b=y.length;w<b;w++){const P=Array.isArray(y[w])?y[w]:[y[w]];for(let O=0,_=P.length;O<_;O++){const x=P[O];if(d(x,w,O,C)===!0){const D=x.__offset,B=Array.isArray(x.value)?x.value:[x.value];let W=0;for(let Y=0;Y<B.length;Y++){const z=B[Y],X=v(z);typeof z=="number"||typeof z=="boolean"?(x.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,D+W,x.__data)):z.isMatrix3?(x.__data[0]=z.elements[0],x.__data[1]=z.elements[1],x.__data[2]=z.elements[2],x.__data[3]=0,x.__data[4]=z.elements[3],x.__data[5]=z.elements[4],x.__data[6]=z.elements[5],x.__data[7]=0,x.__data[8]=z.elements[6],x.__data[9]=z.elements[7],x.__data[10]=z.elements[8],x.__data[11]=0):(z.toArray(x.__data,W),W+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,x.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(E,S,y,C){const w=E.value,b=S+"_"+y;if(C[b]===void 0)return typeof w=="number"||typeof w=="boolean"?C[b]=w:C[b]=w.clone(),!0;{const P=C[b];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return C[b]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(E){const S=E.uniforms;let y=0;const C=16;for(let b=0,P=S.length;b<P;b++){const O=Array.isArray(S[b])?S[b]:[S[b]];for(let _=0,x=O.length;_<x;_++){const D=O[_],B=Array.isArray(D.value)?D.value:[D.value];for(let W=0,Y=B.length;W<Y;W++){const z=B[W],X=v(z),G=y%C,re=G%X.boundary,R=G+re;y+=re,R!==0&&C-R<X.storage&&(y+=C-R),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=X.storage}}}const w=y%C;return w>0&&(y+=C-w),E.__size=y,E.__cache={},this}function v(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function p(E){const S=E.target;S.removeEventListener("dispose",p);const y=a.indexOf(S.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function m(){for(const E in i)r.deleteBuffer(i[E]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}class Ny{constructor(e={}){const{canvas:t=M0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const d=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const m=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this.toneMapping=Vi,this.toneMappingExposure=1;const S=this;let y=!1,C=0,w=0,b=null,P=-1,O=null;const _=new kt,x=new kt;let D=null;const B=new dt(0);let W=0,Y=t.width,z=t.height,X=1,G=null,re=null;const R=new kt(0,0,Y,z),ae=new kt(0,0,Y,z);let Oe=!1;const Xe=new dm;let q=!1,Q=!1;const fe=new It,oe=new It,be=new $,ye=new kt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function Ge(){return b===null?X:1}let L=n;function st(T,N){return t.getContext(T,N)}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lh}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",ce,!1),L===null){const N="webgl2";if(L=st(N,T),L===null)throw st(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Fe,ze,F,Je,Pe,A,M,V,Z,te,j,Se,ie,de,Ve,ne,ve,xe,Ie,ge,$e,Be,at,I;function ee(){Fe=new zS(L),Fe.init(),Be=new by(L,Fe),ze=new IS(L,Fe,e,Be),F=new yy(L),ze.reverseDepthBuffer&&F.buffers.depth.setReversed(!0),Je=new VS(L),Pe=new oy,A=new Ty(L,Fe,F,Pe,ze,Be,Je),M=new NS(S),V=new kS(S),Z=new K0(L),at=new LS(L,Z),te=new HS(L,Z,Je,at),j=new XS(L,te,Z,Je),Ie=new WS(L,ze,A),ne=new US(Pe),Se=new ay(S,M,V,Fe,ze,at,ne),ie=new Iy(S,Pe),de=new cy,Ve=new my(Fe),xe=new PS(S,M,V,F,j,f,l),ve=new Sy(S,j,ze),I=new Uy(L,Je,ze,F),ge=new DS(L,Fe,Je),$e=new GS(L,Fe,Je),Je.programs=Se.programs,S.capabilities=ze,S.extensions=Fe,S.properties=Pe,S.renderLists=de,S.shadowMap=ve,S.state=F,S.info=Je}ee();const K=new Ly(S,L);this.xr=K,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=Fe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Fe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(Y,z,!1))},this.getSize=function(T){return T.set(Y,z)},this.setSize=function(T,N,k=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,z=N,t.width=Math.floor(T*X),t.height=Math.floor(N*X),k===!0&&(t.style.width=T+"px",t.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(Y*X,z*X).floor()},this.setDrawingBufferSize=function(T,N,k){Y=T,z=N,X=k,t.width=Math.floor(T*k),t.height=Math.floor(N*k),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(_)},this.getViewport=function(T){return T.copy(R)},this.setViewport=function(T,N,k,H){T.isVector4?R.set(T.x,T.y,T.z,T.w):R.set(T,N,k,H),F.viewport(_.copy(R).multiplyScalar(X).round())},this.getScissor=function(T){return T.copy(ae)},this.setScissor=function(T,N,k,H){T.isVector4?ae.set(T.x,T.y,T.z,T.w):ae.set(T,N,k,H),F.scissor(x.copy(ae).multiplyScalar(X).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(T){F.setScissorTest(Oe=T)},this.setOpaqueSort=function(T){G=T},this.setTransparentSort=function(T){re=T},this.getClearColor=function(T){return T.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(T=!0,N=!0,k=!0){let H=0;if(T){let U=!1;if(b!==null){const se=b.texture.format;U=se===ph||se===dh||se===fh}if(U){const se=b.texture.type,_e=se===$i||se===ts||se===Va||se===Zs||se===uh||se===hh,he=xe.getClearColor(),ue=xe.getClearAlpha(),we=he.r,Ne=he.g,Te=he.b;_e?(d[0]=we,d[1]=Ne,d[2]=Te,d[3]=ue,L.clearBufferuiv(L.COLOR,0,d)):(g[0]=we,g[1]=Ne,g[2]=Te,g[3]=ue,L.clearBufferiv(L.COLOR,0,g))}else H|=L.COLOR_BUFFER_BIT}N&&(H|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),k&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),de.dispose(),Ve.dispose(),Pe.dispose(),M.dispose(),V.dispose(),j.dispose(),at.dispose(),I.dispose(),Se.dispose(),K.dispose(),K.removeEventListener("sessionstart",ut),K.removeEventListener("sessionend",pe),Ue.stop()};function J(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=Je.autoReset,N=ve.enabled,k=ve.autoUpdate,H=ve.needsUpdate,U=ve.type;ee(),Je.autoReset=T,ve.enabled=N,ve.autoUpdate=k,ve.needsUpdate=H,ve.type=U}function ce(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function qe(T){const N=T.target;N.removeEventListener("dispose",qe),gt(N)}function gt(T){wt(T),Pe.remove(T)}function wt(T){const N=Pe.get(T).programs;N!==void 0&&(N.forEach(function(k){Se.releaseProgram(k)}),T.isShaderMaterial&&Se.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,k,H,U,se){N===null&&(N=Ye);const _e=U.isMesh&&U.matrixWorld.determinant()<0,he=mt(T,N,k,H,U);F.setMaterial(H,_e);let ue=k.index,we=1;if(H.wireframe===!0){if(ue=te.getWireframeAttribute(k),ue===void 0)return;we=2}const Ne=k.drawRange,Te=k.attributes.position;let ot=Ne.start*we,it=(Ne.start+Ne.count)*we;se!==null&&(ot=Math.max(ot,se.start*we),it=Math.min(it,(se.start+se.count)*we)),ue!==null?(ot=Math.max(ot,0),it=Math.min(it,ue.count)):Te!=null&&(ot=Math.max(ot,0),it=Math.min(it,Te.count));const _t=it-ot;if(_t<0||_t===1/0)return;at.setup(U,H,he,k,ue);let qt,rt=ge;if(ue!==null&&(qt=Z.get(ue),rt=$e,rt.setIndex(qt)),U.isMesh)H.wireframe===!0?(F.setLineWidth(H.wireframeLinewidth*Ge()),rt.setMode(L.LINES)):rt.setMode(L.TRIANGLES);else if(U.isLine){let Re=H.linewidth;Re===void 0&&(Re=1),F.setLineWidth(Re*Ge()),U.isLineSegments?rt.setMode(L.LINES):U.isLineLoop?rt.setMode(L.LINE_LOOP):rt.setMode(L.LINE_STRIP)}else U.isPoints?rt.setMode(L.POINTS):U.isSprite&&rt.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)rt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))rt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Re=U._multiDrawStarts,tn=U._multiDrawCounts,ht=U._multiDrawCount,ai=ue?Z.get(ue).bytesPerElement:1,rs=Pe.get(H).currentProgram.getUniforms();for(let Un=0;Un<ht;Un++)rs.setValue(L,"_gl_DrawID",Un),rt.render(Re[Un]/ai,tn[Un])}else if(U.isInstancedMesh)rt.renderInstances(ot,_t,U.count);else if(k.isInstancedBufferGeometry){const Re=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,tn=Math.min(k.instanceCount,Re);rt.renderInstances(ot,_t,tn)}else rt.render(ot,_t)};function tt(T,N,k){T.transparent===!0&&T.side===Fi&&T.forceSinglePass===!1?(T.side=Pn,T.needsUpdate=!0,Nt(T,N,k),T.side=vr,T.needsUpdate=!0,Nt(T,N,k),T.side=Fi):Nt(T,N,k)}this.compile=function(T,N,k=null){k===null&&(k=T),p=Ve.get(k),p.init(N),E.push(p),k.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),T!==k&&T.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const H=new Set;return T.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const se=U.material;if(se)if(Array.isArray(se))for(let _e=0;_e<se.length;_e++){const he=se[_e];tt(he,k,U),H.add(he)}else tt(se,k,U),H.add(se)}),E.pop(),p=null,H},this.compileAsync=function(T,N,k=null){const H=this.compile(T,N,k);return new Promise(U=>{function se(){if(H.forEach(function(_e){Pe.get(_e).currentProgram.isReady()&&H.delete(_e)}),H.size===0){U(T);return}setTimeout(se,10)}Fe.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Ae=null;function Ee(T){Ae&&Ae(T)}function ut(){Ue.stop()}function pe(){Ue.start()}const Ue=new pm;Ue.setAnimationLoop(Ee),typeof self<"u"&&Ue.setContext(self),this.setAnimationLoop=function(T){Ae=T,K.setAnimationLoop(T),T===null?Ue.stop():Ue.start()},K.addEventListener("sessionstart",ut),K.addEventListener("sessionend",pe),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(N),N=K.getCamera()),T.isScene===!0&&T.onBeforeRender(S,T,N,b),p=Ve.get(T,E.length),p.init(N),E.push(p),oe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Xe.setFromProjectionMatrix(oe),Q=this.localClippingEnabled,q=ne.init(this.clippingPlanes,Q),v=de.get(T,m.length),v.init(),m.push(v),K.enabled===!0&&K.isPresenting===!0){const se=S.xr.getDepthSensingMesh();se!==null&&Ce(se,N,-1/0,S.sortObjects)}Ce(T,N,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(G,re),We=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,We&&xe.addToRenderList(v,T),this.info.render.frame++,q===!0&&ne.beginShadows();const k=p.state.shadowsArray;ve.render(k,T,N),q===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=v.opaque,U=v.transmissive;if(p.setupLights(),N.isArrayCamera){const se=N.cameras;if(U.length>0)for(let _e=0,he=se.length;_e<he;_e++){const ue=se[_e];Ut(H,U,T,ue)}We&&xe.render(T);for(let _e=0,he=se.length;_e<he;_e++){const ue=se[_e];He(v,T,ue,ue.viewport)}}else U.length>0&&Ut(H,U,T,N),We&&xe.render(T),He(v,T,N);b!==null&&(A.updateMultisampleRenderTarget(b),A.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(S,T,N),at.resetDefaultState(),P=-1,O=null,E.pop(),E.length>0?(p=E[E.length-1],q===!0&&ne.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function Ce(T,N,k,H){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)k=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Xe.intersectsSprite(T)){H&&ye.setFromMatrixPosition(T.matrixWorld).applyMatrix4(oe);const _e=j.update(T),he=T.material;he.visible&&v.push(T,_e,he,k,ye.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Xe.intersectsObject(T))){const _e=j.update(T),he=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ye.copy(T.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),ye.copy(_e.boundingSphere.center)),ye.applyMatrix4(T.matrixWorld).applyMatrix4(oe)),Array.isArray(he)){const ue=_e.groups;for(let we=0,Ne=ue.length;we<Ne;we++){const Te=ue[we],ot=he[Te.materialIndex];ot&&ot.visible&&v.push(T,_e,ot,k,ye.z,Te)}}else he.visible&&v.push(T,_e,he,k,ye.z,null)}}const se=T.children;for(let _e=0,he=se.length;_e<he;_e++)Ce(se[_e],N,k,H)}function He(T,N,k,H){const U=T.opaque,se=T.transmissive,_e=T.transparent;p.setupLightsView(k),q===!0&&ne.setGlobalState(S.clippingPlanes,k),H&&F.viewport(_.copy(H)),U.length>0&&Ke(U,N,k),se.length>0&&Ke(se,N,k),_e.length>0&&Ke(_e,N,k),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Ut(T,N,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new ns(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?$a:$i,minFilter:zr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));const se=p.state.transmissionRenderTarget[H.id],_e=H.viewport||_;se.setSize(_e.z,_e.w);const he=S.getRenderTarget();S.setRenderTarget(se),S.getClearColor(B),W=S.getClearAlpha(),W<1&&S.setClearColor(16777215,.5),S.clear(),We&&xe.render(k);const ue=S.toneMapping;S.toneMapping=Vi;const we=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),q===!0&&ne.setGlobalState(S.clippingPlanes,H),Ke(T,k,H),A.updateMultisampleRenderTarget(se),A.updateRenderTargetMipmap(se),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Te=0,ot=N.length;Te<ot;Te++){const it=N[Te],_t=it.object,qt=it.geometry,rt=it.material,Re=it.group;if(rt.side===Fi&&_t.layers.test(H.layers)){const tn=rt.side;rt.side=Pn,rt.needsUpdate=!0,At(_t,k,H,qt,rt,Re),rt.side=tn,rt.needsUpdate=!0,Ne=!0}}Ne===!0&&(A.updateMultisampleRenderTarget(se),A.updateRenderTargetMipmap(se))}S.setRenderTarget(he),S.setClearColor(B,W),we!==void 0&&(H.viewport=we),S.toneMapping=ue}function Ke(T,N,k){const H=N.isScene===!0?N.overrideMaterial:null;for(let U=0,se=T.length;U<se;U++){const _e=T[U],he=_e.object,ue=_e.geometry,we=H===null?_e.material:H,Ne=_e.group;he.layers.test(k.layers)&&At(he,N,k,ue,we,Ne)}}function At(T,N,k,H,U,se){T.onBeforeRender(S,N,k,H,U,se),T.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),U.onBeforeRender(S,N,k,H,T,se),U.transparent===!0&&U.side===Fi&&U.forceSinglePass===!1?(U.side=Pn,U.needsUpdate=!0,S.renderBufferDirect(k,N,H,U,T,se),U.side=vr,U.needsUpdate=!0,S.renderBufferDirect(k,N,H,U,T,se),U.side=Fi):S.renderBufferDirect(k,N,H,U,T,se),T.onAfterRender(S,N,k,H,U,se)}function Nt(T,N,k){N.isScene!==!0&&(N=Ye);const H=Pe.get(T),U=p.state.lights,se=p.state.shadowsArray,_e=U.state.version,he=Se.getParameters(T,U.state,se,N,k),ue=Se.getProgramCacheKey(he);let we=H.programs;H.environment=T.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(T.isMeshStandardMaterial?V:M).get(T.envMap||H.environment),H.envMapRotation=H.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,we===void 0&&(T.addEventListener("dispose",qe),we=new Map,H.programs=we);let Ne=we.get(ue);if(Ne!==void 0){if(H.currentProgram===Ne&&H.lightsStateVersion===_e)return vt(T,he),Ne}else he.uniforms=Se.getUniforms(T),T.onBeforeCompile(he,S),Ne=Se.acquireProgram(he,ue),we.set(ue,Ne),H.uniforms=he.uniforms;const Te=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Te.clippingPlanes=ne.uniform),vt(T,he),H.needsLights=Et(T),H.lightsStateVersion=_e,H.needsLights&&(Te.ambientLightColor.value=U.state.ambient,Te.lightProbe.value=U.state.probe,Te.directionalLights.value=U.state.directional,Te.directionalLightShadows.value=U.state.directionalShadow,Te.spotLights.value=U.state.spot,Te.spotLightShadows.value=U.state.spotShadow,Te.rectAreaLights.value=U.state.rectArea,Te.ltc_1.value=U.state.rectAreaLTC1,Te.ltc_2.value=U.state.rectAreaLTC2,Te.pointLights.value=U.state.point,Te.pointLightShadows.value=U.state.pointShadow,Te.hemisphereLights.value=U.state.hemi,Te.directionalShadowMap.value=U.state.directionalShadowMap,Te.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Te.spotShadowMap.value=U.state.spotShadowMap,Te.spotLightMatrix.value=U.state.spotLightMatrix,Te.spotLightMap.value=U.state.spotLightMap,Te.pointShadowMap.value=U.state.pointShadowMap,Te.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=Ne,H.uniformsList=null,Ne}function yt(T){if(T.uniformsList===null){const N=T.currentProgram.getUniforms();T.uniformsList=Zo.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function vt(T,N){const k=Pe.get(T);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function mt(T,N,k,H,U){N.isScene!==!0&&(N=Ye),A.resetTextureUnits();const se=N.fog,_e=H.isMeshStandardMaterial?N.environment:null,he=b===null?S.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Mr,ue=(H.isMeshStandardMaterial?V:M).get(H.envMap||_e),we=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ne=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Te=!!k.morphAttributes.position,ot=!!k.morphAttributes.normal,it=!!k.morphAttributes.color;let _t=Vi;H.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(_t=S.toneMapping);const qt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,rt=qt!==void 0?qt.length:0,Re=Pe.get(H),tn=p.state.lights;if(q===!0&&(Q===!0||T!==O)){const $n=T===O&&H.id===P;ne.setState(H,T,$n)}let ht=!1;H.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==tn.state.version||Re.outputColorSpace!==he||U.isBatchedMesh&&Re.batching===!1||!U.isBatchedMesh&&Re.batching===!0||U.isBatchedMesh&&Re.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Re.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Re.instancing===!1||!U.isInstancedMesh&&Re.instancing===!0||U.isSkinnedMesh&&Re.skinning===!1||!U.isSkinnedMesh&&Re.skinning===!0||U.isInstancedMesh&&Re.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Re.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Re.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Re.instancingMorph===!1&&U.morphTexture!==null||Re.envMap!==ue||H.fog===!0&&Re.fog!==se||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ne.numPlanes||Re.numIntersection!==ne.numIntersection)||Re.vertexAlphas!==we||Re.vertexTangents!==Ne||Re.morphTargets!==Te||Re.morphNormals!==ot||Re.morphColors!==it||Re.toneMapping!==_t||Re.morphTargetsCount!==rt)&&(ht=!0):(ht=!0,Re.__version=H.version);let ai=Re.currentProgram;ht===!0&&(ai=Nt(H,N,U));let rs=!1,Un=!1,Tl=!1;const Ot=ai.getUniforms(),Ki=Re.uniforms;if(F.useProgram(ai.program)&&(rs=!0,Un=!0,Tl=!0),H.id!==P&&(P=H.id,Un=!0),rs||O!==T){ze.reverseDepthBuffer?(fe.copy(T.projectionMatrix),E0(fe),T0(fe),Ot.setValue(L,"projectionMatrix",fe)):Ot.setValue(L,"projectionMatrix",T.projectionMatrix),Ot.setValue(L,"viewMatrix",T.matrixWorldInverse);const $n=Ot.map.cameraPosition;$n!==void 0&&$n.setValue(L,be.setFromMatrixPosition(T.matrixWorld)),ze.logarithmicDepthBuffer&&Ot.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ot.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),O!==T&&(O=T,Un=!0,Tl=!0)}if(U.isSkinnedMesh){Ot.setOptional(L,U,"bindMatrix"),Ot.setOptional(L,U,"bindMatrixInverse");const $n=U.skeleton;$n&&($n.boneTexture===null&&$n.computeBoneTexture(),Ot.setValue(L,"boneTexture",$n.boneTexture,A))}U.isBatchedMesh&&(Ot.setOptional(L,U,"batchingTexture"),Ot.setValue(L,"batchingTexture",U._matricesTexture,A),Ot.setOptional(L,U,"batchingIdTexture"),Ot.setValue(L,"batchingIdTexture",U._indirectTexture,A),Ot.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&Ot.setValue(L,"batchingColorTexture",U._colorsTexture,A));const bl=k.morphAttributes;if((bl.position!==void 0||bl.normal!==void 0||bl.color!==void 0)&&Ie.update(U,k,ai),(Un||Re.receiveShadow!==U.receiveShadow)&&(Re.receiveShadow=U.receiveShadow,Ot.setValue(L,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ki.envMap.value=ue,Ki.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(Ki.envMapIntensity.value=N.environmentIntensity),Un&&(Ot.setValue(L,"toneMappingExposure",S.toneMappingExposure),Re.needsLights&&In(Ki,Tl),se&&H.fog===!0&&ie.refreshFogUniforms(Ki,se),ie.refreshMaterialUniforms(Ki,H,X,z,p.state.transmissionRenderTarget[T.id]),Zo.upload(L,yt(Re),Ki,A)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Zo.upload(L,yt(Re),Ki,A),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ot.setValue(L,"center",U.center),Ot.setValue(L,"modelViewMatrix",U.modelViewMatrix),Ot.setValue(L,"normalMatrix",U.normalMatrix),Ot.setValue(L,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const $n=H.uniformsGroups;for(let wl=0,Am=$n.length;wl<Am;wl++){const Eh=$n[wl];I.update(Eh,ai),I.bind(Eh,ai)}}return ai}function In(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function Et(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,N,k){Pe.get(T.texture).__webglTexture=N,Pe.get(T.depthTexture).__webglTexture=k;const H=Pe.get(T);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,N){const k=Pe.get(T);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,k=0){b=T,C=N,w=k;let H=!0,U=null,se=!1,_e=!1;if(T){const ue=Pe.get(T);if(ue.__useDefaultFramebuffer!==void 0)F.bindFramebuffer(L.FRAMEBUFFER,null),H=!1;else if(ue.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(ue.__hasExternalTextures)A.rebindTextures(T,Pe.get(T.texture).__webglTexture,Pe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Te=T.depthTexture;if(ue.__boundDepthTexture!==Te){if(Te!==null&&Pe.has(Te)&&(T.width!==Te.image.width||T.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}const we=T.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(_e=!0);const Ne=Pe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ne[N])?U=Ne[N][k]:U=Ne[N],se=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?U=Pe.get(T).__webglMultisampledFramebuffer:Array.isArray(Ne)?U=Ne[k]:U=Ne,_.copy(T.viewport),x.copy(T.scissor),D=T.scissorTest}else _.copy(R).multiplyScalar(X).floor(),x.copy(ae).multiplyScalar(X).floor(),D=Oe;if(F.bindFramebuffer(L.FRAMEBUFFER,U)&&H&&F.drawBuffers(T,U),F.viewport(_),F.scissor(x),F.setScissorTest(D),se){const ue=Pe.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,ue.__webglTexture,k)}else if(_e){const ue=Pe.get(T.texture),we=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ue.__webglTexture,k||0,we)}P=-1},this.readRenderTargetPixels=function(T,N,k,H,U,se,_e){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=Pe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(he=he[_e]),he){F.bindFramebuffer(L.FRAMEBUFFER,he);try{const ue=T.texture,we=ue.format,Ne=ue.type;if(!ze.textureFormatReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-H&&k>=0&&k<=T.height-U&&L.readPixels(N,k,H,U,Be.convert(we),Be.convert(Ne),se)}finally{const ue=b!==null?Pe.get(b).__webglFramebuffer:null;F.bindFramebuffer(L.FRAMEBUFFER,ue)}}},this.readRenderTargetPixelsAsync=async function(T,N,k,H,U,se,_e){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=Pe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(he=he[_e]),he){const ue=T.texture,we=ue.format,Ne=ue.type;if(!ze.textureFormatReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=T.width-H&&k>=0&&k<=T.height-U){F.bindFramebuffer(L.FRAMEBUFFER,he);const Te=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Te),L.bufferData(L.PIXEL_PACK_BUFFER,se.byteLength,L.STREAM_READ),L.readPixels(N,k,H,U,Be.convert(we),Be.convert(Ne),0);const ot=b!==null?Pe.get(b).__webglFramebuffer:null;F.bindFramebuffer(L.FRAMEBUFFER,ot);const it=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await y0(L,it,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Te),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,se),L.deleteBuffer(Te),L.deleteSync(it),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,N=null,k=0){T.isTexture!==!0&&(jo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,T=arguments[1]);const H=Math.pow(2,-k),U=Math.floor(T.image.width*H),se=Math.floor(T.image.height*H),_e=N!==null?N.x:0,he=N!==null?N.y:0;A.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,_e,he,U,se),F.unbindTexture()},this.copyTextureToTexture=function(T,N,k=null,H=null,U=0){T.isTexture!==!0&&(jo("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,T=arguments[1],N=arguments[2],U=arguments[3]||0,k=null);let se,_e,he,ue,we,Ne;k!==null?(se=k.max.x-k.min.x,_e=k.max.y-k.min.y,he=k.min.x,ue=k.min.y):(se=T.image.width,_e=T.image.height,he=0,ue=0),H!==null?(we=H.x,Ne=H.y):(we=0,Ne=0);const Te=Be.convert(N.format),ot=Be.convert(N.type);A.setTexture2D(N,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const it=L.getParameter(L.UNPACK_ROW_LENGTH),_t=L.getParameter(L.UNPACK_IMAGE_HEIGHT),qt=L.getParameter(L.UNPACK_SKIP_PIXELS),rt=L.getParameter(L.UNPACK_SKIP_ROWS),Re=L.getParameter(L.UNPACK_SKIP_IMAGES),tn=T.isCompressedTexture?T.mipmaps[U]:T.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,tn.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,tn.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,he),L.pixelStorei(L.UNPACK_SKIP_ROWS,ue),T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,we,Ne,se,_e,Te,ot,tn.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,we,Ne,tn.width,tn.height,Te,tn.data):L.texSubImage2D(L.TEXTURE_2D,U,we,Ne,se,_e,Te,ot,tn),L.pixelStorei(L.UNPACK_ROW_LENGTH,it),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_t),L.pixelStorei(L.UNPACK_SKIP_PIXELS,qt),L.pixelStorei(L.UNPACK_SKIP_ROWS,rt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Re),U===0&&N.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),F.unbindTexture()},this.copyTextureToTexture3D=function(T,N,k=null,H=null,U=0){T.isTexture!==!0&&(jo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,T=arguments[2],N=arguments[3],U=arguments[4]||0);let se,_e,he,ue,we,Ne,Te,ot,it;const _t=T.isCompressedTexture?T.mipmaps[U]:T.image;k!==null?(se=k.max.x-k.min.x,_e=k.max.y-k.min.y,he=k.max.z-k.min.z,ue=k.min.x,we=k.min.y,Ne=k.min.z):(se=_t.width,_e=_t.height,he=_t.depth,ue=0,we=0,Ne=0),H!==null?(Te=H.x,ot=H.y,it=H.z):(Te=0,ot=0,it=0);const qt=Be.convert(N.format),rt=Be.convert(N.type);let Re;if(N.isData3DTexture)A.setTexture3D(N,0),Re=L.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)A.setTexture2DArray(N,0),Re=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const tn=L.getParameter(L.UNPACK_ROW_LENGTH),ht=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ai=L.getParameter(L.UNPACK_SKIP_PIXELS),rs=L.getParameter(L.UNPACK_SKIP_ROWS),Un=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,_t.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_t.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ue),L.pixelStorei(L.UNPACK_SKIP_ROWS,we),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ne),T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Re,U,Te,ot,it,se,_e,he,qt,rt,_t.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Re,U,Te,ot,it,se,_e,he,qt,_t.data):L.texSubImage3D(Re,U,Te,ot,it,se,_e,he,qt,rt,_t),L.pixelStorei(L.UNPACK_ROW_LENGTH,tn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ht),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ai),L.pixelStorei(L.UNPACK_SKIP_ROWS,rs),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Un),U===0&&N.generateMipmaps&&L.generateMipmap(Re),F.unbindTexture()},this.initRenderTarget=function(T){Pe.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),F.unbindTexture()},this.resetState=function(){C=0,w=0,b=null,F.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===mh?"display-p3":"srgb",t.unpackColorSpace=ft.workingColorSpace===Ml?"display-p3":"srgb"}}class Oy extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Sm extends ja{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const td=new It,Nu=new gh,Uo=new yl,No=new $;class Fy extends Ln{constructor(e=new Ai,t=new Sm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(i),Uo.radius+=s,e.ray.intersectsSphere(Uo)===!1)return;td.copy(i).invert(),Nu.copy(e.ray).applyMatrix4(td);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,v=d;g<v;g++){const p=c.getX(g);No.fromBufferAttribute(h,p),nd(No,p,l,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,v=d;g<v;g++)No.fromBufferAttribute(h,g),nd(No,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function nd(r,e,t,n,i,s,a){const o=Nu.distanceSqToPoint(r);if(o<t){const l=new $;Nu.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class id extends hn{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sh extends Ai{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new $,u=new pt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=n+h/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new bi(a,3)),this.setAttribute("normal",new bi(o,3)),this.setAttribute("uv",new bi(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}const rd={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class By{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const ky=new By;class Mh{constructor(e){this.manager=e!==void 0?e:ky,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Mh.DEFAULT_MATERIAL_NAME="__DEFAULT";class zy extends Mh{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=rd.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Xa("img");function l(){u(),rd.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Hy extends Mh{constructor(e){super(e)}load(e,t,n,i){const s=new hn,a=new zy(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Gy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=sd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function sd(){return performance.now()}const ad=new It;class Vy{constructor(e,t,n=0,i=1/0){this.ray=new gh(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new vh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ad.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ad),this}intersectObject(e,t=!0,n=[]){return Ou(e,this,n,t),n.sort(od),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Ou(e[i],this,n,t);return n.sort(od),n}}function od(r,e){return r.distance-e.distance}function Ou(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)Ou(s[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lh);const jt=(r,e)=>r+Math.random()*(e-r),Ft=(r,e,t)=>r+(e-r)*t,Jo=r=>Math.min(1,Math.max(0,r)),Wy=r=>(r=Jo(r),r*r*(3-2*r)),ha=r=>1+2.70158*Math.pow(r-1,3)+1.70158*Math.pow(r-1,2),Xy=r=>r>=1?1:1-Math.pow(2,-10*r),vc={hero:{fx:.22,fy:-.02,scale:1,explode:0,spread:1,speed:.1,ofx:.22,ofy:-.02,formation:"orbit",interactive:!0,dark:!0,text:"hero",m:{fx:0,fy:.2,scale:.58}},story:{fx:.26,fy:-.22,scale:.7,explode:1,spread:1.3,speed:.06,ofx:.26,ofy:0,formation:"orbit",labels:!0,interactive:!0,m:{fx:0,fy:0,scale:.5,ofx:0,ofy:0,spread:1}},menu:{fx:.45,fy:-.34,scale:.55,explode:0,spread:2.4,speed:.04,ofx:0,ofy:0,formation:"orbit",m:{fx:.48,fy:-.44,scale:.35,ofx:0,ofy:0}},dressings:{fx:-.36,fy:.22,scale:.72,explode:0,spread:1.3,speed:.08,ofx:-.3,ofy:.1,formation:"orbit",dark:!0,text:"dressings",m:{fx:-.38,fy:.32,scale:.42}},builder:{fx:.25,fy:.14,scale:.84,explode:0,spread:1,speed:.1,ofx:.25,ofy:.1,formation:"orbit",interactive:!0,dark:!0,text:"builder",m:{fx:.36,fy:.36,scale:.42}},catering:{fx:-.43,fy:.3,scale:.42,explode:0,spread:2,speed:.04,ofx:0,ofy:0,formation:"orbit",m:{fx:-.44,fy:.4,scale:.3,ofx:0,ofy:0}},visit:{fx:0,fy:-.38,scale:.5,explode:0,spread:1,speed:.05,ofx:0,ofy:.05,formation:"heart",m:{fx:0,fy:-.42,scale:.36,ofx:0,ofy:.05}}},xc={"all-in":{sprite:"bowl-all-in",w:2.5},supreme:{sprite:"bowl-supreme",w:2.3},"big-omega":{sprite:"bowl-big-omega",w:2.4},sawadee:{sprite:"bowl-sawadee",w:2.4},"baby-o":{sprite:"bowl-baby-o",w:2.4},crunchy:{sprite:"bowl-crunchy",w:2.3}},Yy=[["lettuce","Mix greens",1.5],["carrot2","Carrot",.8],["corn","Sweet corn",.8],["edamame","Edamame",.85],["cabbage","Red cabbage",.9],["cucumber","Cucumber",.75],["beef","Smoked beef",.8],["egg","Egg",.6],["dr-caesar","House dressing",.5]],ld=[["tomato3",.62],["cucumber2",.55],["egg2",.46],["lettuce3",.7],["corn",.5],["edamame2",.5],["cashew",.55],["almond",.5],["avocado2",.5],["shrimp",.55],["prop-apple",.42],["cup-a",.5],["mushroom2",.42],["crouton",.5],["pickles",.45],["grapes",.42],["tomato",.4],["cup-b",.48],["carrot2",.5],["potato",.48],["salmon",.7],["noodle",.5],["prop-juice",.4],["cabbage",.5],["chicken",.42],["beef",.45],["egg",.45],["cup-d",.46]],$y={chicken:"chicken",shilin:"shilin",beef:"beef",patty:"patty",tuna:"tuna",shrimp:"shrimp",salmon:"salmon",edamame:"edamame"},qy={egg:["egg2",-.62,.02,.5],cheese:["crouton",.52,.5,.45],corn:["corn",.58,.1,.5],edamame:["edamame2",-.22,.58,.5],avocado:["avocado2",.62,-.38,.42],mushroom:["mushroom2",-.66,-.34,.45],tomato:["tomato3",.08,-.56,.6],almond:["almond",.42,.58,.45],cashew:["cashew",-.58,.48,.5],shirataki:["noodle",-.05,.2,.55]},Ky={hero:"FRESH",dressings:"POUR IT",builder:"YOURS"},jy=r=>`/images/cut/${r}.webp`;class Zy{constructor(e,t){this.canvas=e,this.labelRoot=t,this.renderer=new Ny({canvas:e,alpha:!0,antialias:!0,powerPreference:"high-performance"}),this.isMobile=window.innerWidth<=1024,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,this.isMobile?1.5:2)),this.renderer.outputColorSpace=bn,this.renderer.toneMapping=Vi,this.scene=new Oy,this.camera=new Jn(30,1,.1,50),this.camera.position.set(0,0,8),this.clock=new Gy,this.mouse=new pt,this.mouseSmooth=new pt,this.scrollVel=0,this.reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches,this.target={...vc.hero},this.poseName="hero",this.cur={x:0,y:-1.2,scale:.001,explode:0,spread:1,ox:0,oy:0,heart:0,labels:0,builder:0,dress:0,dark:0},this.dragRot=0,this.dragVel=0,this.dragging=!1,this.bounce=0,this.burst=0,this.explodeScroll=0,this.explodeLock=!1,this.style="bowl",this.styleT=1,this.pops=[],this.drips=[],this.visible=!0,this.sprites=[],this.loader=new Hy,this.texCache=new Map,this.pending=[],this.shadowTex=this.makeShadowTexture(),this.poolTex=this.makePoolTexture(),this.glowTex=this.makeGlowTexture(),this.dotTex=this.makeDotTexture(),this.build(),this.resize(),this.bindEvents(),this.ready=Promise.all(this.pending).then(()=>{var n;return((n=document.fonts)==null?void 0:n.ready)||Promise.resolve()}).then(()=>(this.buildTexts(),this)),this.renderer.setAnimationLoop(()=>this.tick())}tex(e){if(this.texCache.has(e))return this.texCache.get(e);const t={tex:null,aspect:1,promise:null};return t.promise=new Promise(n=>{this.loader.load(jy(e),i=>{i.colorSpace=bn,i.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),t.tex=i,t.aspect=i.image.width/i.image.height,n(t)},void 0,()=>{console.warn("missing cutout",e),n(t)})}),this.texCache.set(e,t),this.pending.push(t.promise),t}sprite(e,t,{shadow:n=.32,shadowDrop:i=.12}={}){const s=new Bn,a=new rr({transparent:!0,depthWrite:!1,toneMapped:!1}),o=new Sn(new Bi(1,1),a);o.visible=!1,s.add(o);const l=new Sn(new Bi(1,1),new rr({map:this.shadowTex,transparent:!0,depthWrite:!1,opacity:n,color:857357}));return l.position.z=-.03,l.visible=!1,s.add(l),s.userData={mesh:o,sh:l,width:t,name:e,shadowDrop:i,shadow:n},this.tex(e).promise.then(c=>{if(!c.tex)return;a.map=c.tex,a.needsUpdate=!0;const u=t/c.aspect;o.scale.set(t,u,1),o.visible=!0,l.scale.set(t*1.05,u*.5,1),l.position.y=-u*.42-i,l.visible=!0,s.userData.h=u}),this.sprites.push(s),s}canvasTex(e,t,n){const i=document.createElement("canvas");i.width=e,i.height=t,n(i.getContext("2d"),e,t);const s=new id(i);return s.colorSpace=bn,s}makeShadowTexture(){return this.canvasTex(256,128,e=>{const t=e.createRadialGradient(128,64,8,128,64,120);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.55,"rgba(255,255,255,.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.save(),e.scale(1,.5),e.translate(0,64),e.fillStyle=t,e.fillRect(0,0,256,256),e.restore()})}makeGlowTexture(){return this.canvasTex(512,512,e=>{const t=e.createRadialGradient(256,256,10,256,256,256);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,512,512)})}makeDotTexture(){return this.canvasTex(64,64,e=>{const t=e.createRadialGradient(32,32,2,32,32,30);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.4,"rgba(255,255,255,.6)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64)})}makePoolTexture(){return this.canvasTex(256,256,e=>{e.beginPath();for(let n=0;n<=40;n++){const i=n/40*Math.PI*2,s=95+Math.sin(i*3)*10+Math.cos(i*5)*8,a=128+Math.cos(i)*s,o=128+Math.sin(i)*s*.75;n?e.lineTo(a,o):e.moveTo(a,o)}e.closePath(),e.fillStyle="rgba(255,255,255,0.92)",e.fill();const t=e.createRadialGradient(100,95,2,100,95,60);t.addColorStop(0,"rgba(255,255,255,.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fill()})}textSprite(e,{width:t=4,color:n="#fff6e5",opacity:i=.16,font:s="400 320px Anton, Impact, sans-serif"}={}){const a=document.createElement("canvas"),o=a.getContext("2d");o.font=s;const l=o.measureText(e),c=Math.ceil(l.width)+60,u=400;a.width=c,a.height=u;const h=a.getContext("2d");h.font=s,h.textBaseline="middle",h.textAlign="center",h.fillStyle=n,h.fillText(e,c/2,u/2+10);const f=new id(a);f.colorSpace=bn,f.anisotropy=4;const d=new Sn(new Bi(t,t*u/c),new rr({map:f,transparent:!0,depthWrite:!1,opacity:i,toneMapped:!1}));return d.userData.baseOpacity=i,d}build(){const e=new Bn;this.root=e,this.scene.add(e),this.spot=new Sn(new Bi(6.5,6.5),new rr({map:this.glowTex,transparent:!0,depthWrite:!1,opacity:0,color:13625768,blending:qc})),this.spot.position.z=-1.6,e.add(this.spot),this.bowlGroup=new Bn,e.add(this.bowlGroup),this.bowlSprites={},this.bowlKey="all-in",this.bowl=this.getBowl("all-in"),this.bowl.scale.setScalar(1),this.bowl.visible=!0,this.wrap=this.sprite("wrap2",2.1,{shadow:.4}),this.wrap.scale.setScalar(.001),this.wrap.visible=!1,e.add(this.wrap),this.layers=Yy.map(([a,o,l],c)=>{var f;const u=this.sprite(a,l,{shadow:.28});e.add(u);const h=document.createElement("div");return h.className="lbl "+(c%2?"lbl--l":"lbl--r"),h.innerHTML=`<i></i><span>${o}</span>`,(f=this.labelRoot)==null||f.appendChild(h),{s:u,i:c,el:h,side:c%2?-1:1,w:l,tilt:jt(-.08,.08),phase:jt(0,6)}}),this.builderGroup=new Bn,e.add(this.builderGroup),this.builderGroup.scale.setScalar(.001),this.dressGroup=new Bn,e.add(this.dressGroup),this.dressGroup.scale.setScalar(.001),this.meatGroup=new Bn,this.meatGroup.position.z=.3,this.builderGroup.add(this.meatGroup),this.extrasGroup=new Bn,this.extrasGroup.position.z=.36,this.builderGroup.add(this.extrasGroup),this.extras=new Map,this.cupGroup=new Bn,this.cupGroup.position.set(.95,.95,.45),this.dressGroup.add(this.cupGroup),this.cupGroup.scale.setScalar(.001),this.poolMat=new rr({map:this.poolTex,transparent:!0,depthWrite:!1,opacity:.72,color:9185839}),this.pool=new Sn(new Bi(.95,.7),this.poolMat),this.pool.position.set(.05,.28,.33),this.pool.scale.setScalar(.001),this.dressGroup.add(this.pool),this.dripMat=new rr({transparent:!0,depthWrite:!1,color:9185839,opacity:.9}),this.dripGeo=new Sh(.035,12),this.orbit=new Bn,this.scene.add(this.orbit);const t=this.isMobile?12:ld.length;this.orbiters=ld.slice(0,t).map(([a,o],l)=>{const c=this.sprite(a,o,{shadow:.18,shadowDrop:.05});return this.orbit.add(c),c.scale.setScalar(.78),{s:c,a:l/t*Math.PI*2+jt(-.2,.2),r:jt(1.7,2.7),y:jt(-1.3,1.3),z:jt(-2.6,-.5),phase:jt(0,6),spin:jt(-.25,.25),ht:l/t,dir:l%2?1:-1}});const n=this.isMobile?60:140,i=new Float32Array(n*3);this.pVel=new Float32Array(n);for(let a=0;a<n;a++)i[a*3]=jt(-7,7),i[a*3+1]=jt(-4.5,4.5),i[a*3+2]=jt(-3,1.5),this.pVel[a]=jt(.05,.2);const s=new Ai;s.setAttribute("position",new mi(i,3)),this.pMat=new Sm({map:this.dotTex,size:.09,transparent:!0,depthWrite:!1,opacity:0,color:16773577,sizeAttenuation:!0}),this.particles=new Fy(s,this.pMat),this.scene.add(this.particles)}getBowl(e){if(this.bowlSprites[e])return this.bowlSprites[e];const t=xc[e]||xc["all-in"],n=this.sprite(t.sprite,t.w,{shadow:.42,shadowDrop:.05});return n.scale.setScalar(.001),n.visible=!1,this.bowlGroup.add(n),this.bowlSprites[e]=n,n}buildTexts(){this.texts={};for(const[e,t]of Object.entries(Ky)){const n=this.textSprite(t,{width:e==="hero"?5.2:4.4});n.position.z=-1.2,n.material.opacity=0,this.root.add(n),this.texts[e]=n}}bindEvents(){window.addEventListener("resize",()=>this.resize()),window.addEventListener("pointermove",t=>{if(this.mouse.set(t.clientX/this.vw*2-1,-(t.clientY/this.vh)*2+1),this.dragging){const n=t.clientX-this.lastX;this.dragVel=n*.004,this.dragRot=df.clamp(this.dragRot+this.dragVel,-.6,.6),this.lastX=t.clientX}else this.hoverCheck()}),this.canvas.addEventListener("pointerdown",t=>{this.hit&&(this.dragging=!0,this.lastX=t.clientX,this.downT=performance.now(),this.canvas.setPointerCapture(t.pointerId))});const e=()=>{this.dragging&&(this.dragging=!1,performance.now()-this.downT<250&&Math.abs(this.dragVel)<.01&&this.click())};this.canvas.addEventListener("pointerup",e),this.canvas.addEventListener("pointercancel",e),document.addEventListener("visibilitychange",()=>{this.visible=!document.hidden}),this.raycaster=new Vy}hoverCheck(){if(!this.target.interactive)return this.setHit(!1);this.raycaster.setFromCamera(this.mouse,this.camera);const e=(this.style==="bowl"?this.bowl:this.wrap).userData.mesh;this.setHit(e.visible&&this.raycaster.intersectObject(e,!1).length>0)}setHit(e){e!==this.hit&&(this.hit=e,this.canvas.classList.toggle("is-interactive",e),this.canvas.style.cursor=e?"grab":"",document.dispatchEvent(new CustomEvent("bowl:hover",{detail:e})))}click(){this.poseName==="story"?(this.explodeLock=!this.explodeLock,document.dispatchEvent(new CustomEvent("bowl:explode",{detail:this.explodeLock}))):this.toss()}resize(){const e=this.canvas.clientWidth||innerWidth,t=this.canvas.clientHeight||innerHeight;e===this.lastW&&t===this.lastH||(this.lastW=e,this.lastH=t,this.vw=e,this.vh=t,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.isMobile=e<=1024,this.viewH=2*this.camera.position.z*Math.tan(df.degToRad(this.camera.fov/2)),this.viewW=this.viewH*this.camera.aspect)}setPose(e){this.target={...vc[e]||vc.hero},this.poseName=e,this.target.interactive||this.setHit(!1),e!=="story"&&(this.explodeLock=!1)}setExplodeScroll(e){this.explodeScroll=e}setHeroScroll(e,t){this.heroScroll=e,this.heroPx=t||0}setStage(e){this.stageEl=e}setScrollVelocity(e){this.scrollVel=e}intro(){this.cur.scale=.001,this.cur.y=-1.4,this.burst=1}toss(){this.bounce=1,this.burst=1,document.dispatchEvent(new CustomEvent("bowl:toss"))}pop(e,t,n){this.pops.push({obj:e,from:e.scale.x,to:t,t:0,done:n})}setBowl(e){if(!xc[e]||e===this.bowlKey)return;const t=this.bowl,n=this.getBowl(e);this.pops=this.pops.filter(i=>i.obj!==t&&i.obj!==n),this.pop(t,0,()=>{this.bowl!==t&&(t.visible=!1)}),n.visible=!0,n.scale.setScalar(.001),this.bowl=n,this.bowlKey=e,this.pop(n,1),this.bounce=Math.max(this.bounce,.5),this.burst=Math.max(this.burst,.7),document.dispatchEvent(new CustomEvent("bowl:change",{detail:e}))}setMeat(e){if(this.meatGroup.children.slice().forEach(n=>this.pop(n,0,()=>this.meatGroup.remove(n))),!e)return;const t=this.sprite($y[e.id]||"chicken",e.id==="salmon"?1.15:e.id==="patty"?1:.9,{shadow:.3});t.position.set(.02,.32,0),t.rotation.z=jt(-.12,.12),t.scale.setScalar(.001),this.meatGroup.add(t),this.pop(t,1),this.bounce=Math.max(this.bounce,.45)}toggleExtra(e,t){if(t&&!this.extras.has(e)){const[n,i,s,a]=qy[e]||["corn",0,0,.5],o=this.sprite(n,a,{shadow:.25});o.position.set(i,s,.02*this.extras.size),o.rotation.z=jt(-.2,.2),o.scale.setScalar(.001),this.extrasGroup.add(o),this.extras.set(e,o),this.pop(o,1),this.bounce=Math.max(this.bounce,.3)}else if(!t&&this.extras.has(e)){const n=this.extras.get(e);this.extras.delete(e),this.pop(n,0,()=>this.extrasGroup.remove(n))}}setDressing(e,{silent:t=!1}={}){const n=new dt(e.hex);this.poolMat.color.copy(n),this.dripMat.color.copy(n),this.cupGroup.children.slice().forEach(s=>this.pop(s,0,()=>this.cupGroup.remove(s)));const i=this.sprite("dr-"+(e.img?e.img.replace("dressing-",""):e.id),.6,{shadow:.2,shadowDrop:.1});if(i.rotation.z=-.55,i.scale.setScalar(.001),this.cupGroup.add(i),this.pop(i,1),this.cupGroup.scale.setScalar(1),t){this.pool.scale.setScalar(1);return}this.pool.scale.setScalar(.001),this.pourT=0,this.pouring=!0;for(let s=0;s<7;s++){const a=new Sn(this.dripGeo,this.dripMat);a.position.set(.72,.75,.42),a.scale.setScalar(jt(.6,1.3)),this.dressGroup.add(a),this.drips.push({m:a,t:-s*.07,vx:jt(-.25,-.05),vy:jt(-.1,.2)})}}setStyle(e){e!==this.style&&(this.style=e,this.styleT=0)}tick(){if(!this.visible)return;const e=Math.min(this.clock.getDelta(),.05),t=this.clock.elapsedTime,n=1-Math.exp(-e*2.8),i=this.cur,s=this.target,a=this.isMobile,o=a&&s.m,l=o?{...s,...s.m,ofx:s.m.ofx??s.m.fx,ofy:s.m.ofy??s.m.fy}:s,c=o?1:a?.55:1,u=o?1:a?.72:1,h=a&&this.poseName==="hero"&&this.heroScroll||0,f=h>0?this.heroPx/this.vh*this.viewH:0;let d=null,g=null;if(a&&this.poseName==="story"&&this.stageEl){const _=this.stageEl.getBoundingClientRect(),x=_.top+_.height*.6;d=(this.vh/2-x)/this.vh*this.viewH,g=Jo((this.vh*.95-_.top)/(this.vh*.5))}const v=d!==null?1-Math.exp(-e*12):n;i.x=Ft(i.x,d!==null?0:l.fx*this.viewW*c,v),i.y=Ft(i.y,d!==null?d:l.fy*this.viewH+f,v),i.scale=Ft(i.scale,l.scale*u*(1-.2*h),n);const p=this.poseName==="story"?this.explodeLock?1:g!==null?g:l.explode*this.explodeScroll:l.explode;i.explode=Ft(i.explode,p,1-Math.exp(-e*3.5)),i.spread=Ft(i.spread,l.spread*(a?.75:1),n),i.ox=Ft(i.ox,d!==null?0:l.ofx*this.viewW*c,v),i.oy=Ft(i.oy,d!==null?d:l.ofy*this.viewH+f,v),i.heart=Ft(i.heart,l.formation==="heart"?1:0,n*.8),i.labels=Ft(i.labels,l.labels?1:0,n),i.builder=Ft(i.builder,this.poseName==="builder"?1:0,n),i.dress=Ft(i.dress,this.poseName==="builder"||this.poseName==="dressings"?1:0,n),i.dark=Ft(i.dark,l.dark?1:0,1-Math.exp(-e*2)),this.builderGroup.scale.setScalar(Math.max(.001,ha(Jo(i.builder)))),this.dressGroup.scale.setScalar(Math.max(.001,ha(Jo(i.dress)))),this.spot.material.opacity=.55*i.dark,this.spot.scale.setScalar(1+Math.sin(t*.6)*.04),this.pMat.opacity=.12+.55*i.dark;const m=this.particles.geometry.attributes.position;for(let _=0;_<m.count;_++){let x=m.getY(_)+this.pVel[_]*e,D=m.getX(_)+Math.sin(t*.5+_)*.002;x>4.6&&(x=-4.6,D=jt(-7,7)),m.setY(_,x),m.setX(_,D)}if(m.needsUpdate=!0,this.texts)for(const[_,x]of Object.entries(this.texts)){const D=l.text===_?x.userData.baseOpacity:0;x.material.opacity=Ft(x.material.opacity,D,n),x.position.x=-this.mouseSmooth.x*.25,x.position.y=-.1-this.mouseSmooth.y*.15,x.visible=x.material.opacity>.005}for(const _ of this.sprites){const x=_.userData;x.sh&&(x.sh.material.opacity=x.shadow*(1-.55*i.dark))}this.mouseSmooth.lerp(this.mouse,1-Math.exp(-e*4));const E=this.mouseSmooth.x,S=this.mouseSmooth.y;this.camera.position.x=E*.45,this.camera.position.y=S*.3,this.camera.lookAt(0,0,0),this.dragging||(this.dragRot=Ft(this.dragRot,0,1-Math.exp(-e*2)),this.dragVel*=.9),this.scrollVel*=.9,this.bounce=Math.max(0,this.bounce-e*1.2),this.burst=Math.max(0,this.burst-e*.75);const y=Math.sin(this.bounce*Math.PI)*.6,C=this.reduced?0:Math.sin(t*.8)*.06;this.root.position.set(i.x,i.y+C,0),this.root.scale.setScalar(i.scale),this.root.rotation.set(-S*.08,E*.12+this.dragRot,Math.sin(t*.5)*.02-this.scrollVel*15e-5),this.bowl.position.y=y*.15,this.wrap.position.y=y*.15;const w=Math.max(i.explode,y*.55),b=this.layers.length;for(const _ of this.layers){const x=Wy(w*1.35-_.i*(.35/b)),D=.42+_.i*(a?.3:.27),B=_.side*(a?.06:.12)*(_.i%3===0?1:.5);if(_.s.position.set(Ft(0,B,x),Ft(.15,D,x)+Math.sin(t*.9+_.phase)*.03*x,Ft(.02+_.i*.01,.12+_.i*.09,x)),_.s.rotation.z=_.tilt*x,_.s.scale.setScalar(Math.max(.001,x*(.85+.15*x))),_.s.visible=x>.001,_.el){const W=i.labels*x*(i.explode>.2?1:0);if(W>.02){const Y=new $(_.s.position.x+_.side*(_.w*.5+.18),_.s.position.y,_.s.position.z);this.root.localToWorld(Y),Y.project(this.camera);const z=(Y.x*.5+.5)*this.vw,X=(-Y.y*.5+.5)*this.vh;_.el.style.opacity=W,_.el.style.transform=`translate(${z.toFixed(1)}px, ${X.toFixed(1)}px) translate(${_.side>0?"0":"-100%"}, -50%)`}else _.el.style.opacity=0}}if(this.styleT<1){this.styleT=Math.min(1,this.styleT+e*2);const _=this.style==="wrap",x=_?this.wrap:this.bowl,D=_?this.bowl:this.wrap;if(this.styleT<.5){const B=1-this.styleT*2;D.visible=!0,D.scale.setScalar(Math.max(.001,B)),x.visible=!1}else{const B=(this.styleT-.5)*2;D.visible=!1,D.scale.setScalar(.001),x.visible=!0,x.scale.setScalar(Math.max(.001,ha(B)))}}if(this.pouring){this.pourT+=e;const _=this.pourT<.25?.001:Math.min(1,(this.pourT-.25)/.6);this.pool.scale.setScalar(Math.max(.001,ha(_))),this.pourT>1.2&&(this.pouring=!1)}this.cupGroup.rotation.z=Math.sin(t*2.2)*.04*(this.pouring?1:0),this.drips=this.drips.filter(_=>{if(_.t+=e,_.t<0)return!0;const x=_.t;return _.m.position.x=.72+_.vx*x*2.2,_.m.position.y=.75+_.vy*x-2.6*x*x,_.m.scale.setScalar(Math.max(.001,1-x*.6)),_.m.position.y<.28?(this.dressGroup.remove(_.m),!1):!0}),this.pops=this.pops.filter(_=>{var D;_.t=Math.min(1,_.t+e*2.4);const x=_.to>_.from?ha(_.t)*_.to:_.from*(1-_.t);return _.obj.scale.setScalar(Math.max(.001,x)),_.t>=1?((D=_.done)==null||D.call(_),!1):!0});const P=Xy(1-this.burst),O=1+Math.sin(P*Math.PI)*.3;for(const _ of this.orbiters){_.a+=e*l.speed*_.dir*(this.reduced?.3:1);const x=_.r*i.spread,D=Math.cos(_.a)*x,B=Math.sin(_.a)*.5*x+_.z,W=_.y*i.spread*(a?.42:.75)+Math.sin(t*.7+_.phase)*.12,Y=_.ht*Math.PI*2,z=16*Math.pow(Math.sin(Y),3)*.15*i.spread,X=(13*Math.cos(Y)-5*Math.cos(2*Y)-2*Math.cos(3*Y)-Math.cos(4*Y))*.15*i.spread+.2,G=i.ox+Ft(D,z,i.heart),re=i.oy+Ft(W,X,i.heart),R=Ft(B,Math.sin(t*.7+_.phase)*.2,i.heart),ae=i.x+(G-i.x)*P*O,Oe=i.y+(re-i.y)*P*O,Xe=Ft(.6,R,P);_.s.position.set(ae+E*.25*(1+_.z*.5),Oe+S*.18+y*.25*(1+Math.sin(_.phase)),Xe),_.s.rotation.z=Math.sin(t*.4+_.phase)*.18+_.spin*t*.2+(1-P)*2.5*_.dir,_.s.scale.setScalar(Math.max(.001,.78*(1+_.z*.08)*(.25+.75*P)*(1-.95*h)))}this.renderer.render(this.scene,this.camera)}}const Jy="6282194895838",Sc={instagram:"https://www.instagram.com/circle.heart.id",tiktok:"https://www.tiktok.com/@circle.heart.id"},cd=[{name:"Cendrawasih",address:"Jl. Cendrawasih No. 276, Makassar",grab:"https://app.grab.com/s/9u5XZyY3",gofood:"https://gofood.co.id/makassar/restaurant/circle-heart-salad-cendrawasih-3b252d25-0705-4335-ad89-0d2914bf6807",maps:"https://www.google.com/maps/search/?api=1&query=Circle+Heart+Salad+Jl+Cendrawasih+276+Makassar"},{name:"Tamalanrea (BTP)",address:"Jl. Tamalanrea Raya Blok M No. 1, Makassar",grab:"https://app.grab.com/s/loa3uhwG",gofood:"https://gofood.co.id/makassar/restaurant/circle-heart-salad-tamalanrea-btp-e340cb0b-53f6-492b-9fbb-9001a9c930dd",maps:"https://www.google.com/maps/search/?api=1&query=Circle+Heart+Salad+Tamalanrea+Raya+Blok+M+Makassar"}],Hs=[{id:"chicken",name:"Grilled Chicken",extra:0,color:14262374},{id:"shilin",name:"Shilin Chicken",extra:0,color:13208389},{id:"beef",name:"Smoked Beef",extra:0,color:10177083},{id:"patty",name:"Beef Patty",extra:0,color:7027242},{id:"tuna",name:"Grilled Tuna",extra:0,color:9190203},{id:"shrimp",name:"Spicy Lime Shrimp",extra:1e4,color:15764043},{id:"salmon",name:"Torched Baked Salmon",extra:3e4,color:15897962},{id:"edamame",name:"Edamame (Vegetarian)",extra:0,color:9291327}],qr=[{id:"truffle",name:"Cheesy Truffle Mayo",color:"#efd9a8",hex:15718824,img:"dressing-cheesy-truffle",extra:1e4,tag:"New",note:"Creamy and Savoury from Cheese Mayo with Aromatic Truffle Sauce. Such a Healthy Temptation !"},{id:"caesar",name:"Caesar King",color:"#8c2a2f",hex:9185839,img:"dressing-caesar",extra:0,tag:"Favourite",note:"Olive Oil Based dressing with Sweet and Tangy taste, Healthy and fresh with your favourite Salad."},{id:"thousand",name:"Thousand Island",color:"#e9834f",hex:15303503,img:"dressing-thousand-island",extra:0,note:"Spicy Homemade Mayo-Based Dressing. Balanced taste for those Spicy Lover."},{id:"thai",name:"Thai Dressing",color:"#9c2d3a",hex:10235194,img:"dressing-thai",extra:0,note:"Sweet and Spicy dressing with Signature Thai flavour, one bite will never be enough. (Oil Based)"},{id:"sesame",name:"Roasted Sesame",color:"#e6d3b3",hex:15127475,img:"dressing-roasted-sesame",extra:0,note:"Japanese Style Roasted Sesame Mayo. Savoury and Tasty!!"},{id:"sweetmayo",name:"Sweet Mayo",color:"#f0d24a",hex:15782474,img:"dressing-sweet-mayo",extra:0,note:"Sweet, Salty and Creamy Mayo dressing. kids to adult will love it from the first bite."},{id:"honey",name:"Honey Mustard Mayo",color:"#f2c01e",hex:15908894,img:"dressing-honey-mustard",extra:0,note:"Creamy Combination from Italian Herbs, Honey and Mustard Mayo. Perfect for your Salad."},{id:"ranch",name:"Ranch",color:"#f1ede4",hex:15855076,img:"dressing-ranch",extra:0,note:"The Old Fashioned Creamy And Salty Mayo Dressing. Its The Original Caesar Mayo Dressing. Savory!"},{id:"balsamic",name:"Balsamic Vinaigrette",color:"#2a1a16",hex:2759190,img:"dressing-balsamic",extra:0,tag:"Vegan",note:"VEGAN Friendly Dressing with Delicate Sweet, Sour and a bit of Salty Taste. (Oil Based)"},{id:"gochujang",name:"Korean Gochujang",color:"#a3402c",hex:10698796,img:"dressing-gochujang",extra:0,note:"Korean Alert !! Based on Korean Spicy Red Papper Paste, New K-Star To Your Salad !"},{id:"jungle",name:"Jungle Berry",color:"#c0163f",hex:12588607,img:"dressing-jungle-berry",extra:0,note:"Using Real Berries Pure and Lime Juice to make this Rich in Vitamin C Dressing, Eat this! Cheer Up your Day."}],Mm=["Mix Greens","Tomatoes","Cucumber","Corn","Onions","Eggs","Carrots","Red Cabbage","Smoked Beef","Almond","Sunflower Seeds","Choice of Meat","Choice of Dressing"],ym=["Macaroni","Edamame","Crabstick"],Ls={id:"all-in",name:"All In Salad",price:45e3,img:"all-in",wrap:"all-in-wrap",tag:"Build your own",size:"Regular",desc:"A category, not one dish: pick your meat and one of eleven dressings. Rp 45.000 with any dressing, Rp 55.000 with Cheesy Truffle Mayo.",contain:Mm,bowlOnly:ym,choice:!0},ml=[Ls,{id:"supreme",name:"Supreme",price:5e4,tag:"Best seller",img:"supreme",wrap:"supreme-wrap",kcal:[450,395],desc:"Yow! Preferred Salad for All Ages. Your Literally Everyday Favourite.",contain:["Mixed Greens","Shilin Chicken","Smoked Beef","Grated Parmesan","Tomatoes","Onions","Eggs","White & Red Cabbage","Wonton Strips","Caesar Dressing"],bowlOnly:["Macaroni","Corn","Cucumbers"]},{id:"truffle-lovers",name:"Truffle Lovers",price:55e3,tag:"New menu",img:"truffle-lovers",kcal:[473,455],desc:"NEW MENU ! High Quality Ingredients With Magical Cheesy Truffle Mayo Sauce - its A BOOM!",contain:["Mixed Greens","Red Cabbage","Edamame","Cucumber","Sauteed Italian Mushroom","Pickles","Smoked beef","Eggs","Croutons","Mozarella","Cheesy Truffle Mayo"],bowlOnly:["Macaroni"]},{id:"oliphers",name:"Olipher’s Salad",price:55e3,tag:"A little spicy",img:"oliphers",wrap:"oliphers-wrap",kcal:[490,430],desc:"Sssttt.. Its Always Someone's Favorite ! (a little Spicy)",contain:["Mixed Greens","Red and White Cabbage","Shilin Chicken","Grilled Chicken","Sauteed Italian Mushroom","Parmesan Cheese","Eggs","Onions","Corns","Tomatoes","Wonton Strips","Thai Dressing"],bowlOnly:["Macaroni"]},{id:"waldorf",name:"Waldorf Warrior",price:55e3,tag:"Classic twist",img:"waldorf",kcal:[415,396],desc:"Famous Waldorf Salad with New Twist !",contain:["Mixed Greens","Cucumber","Tomato","Onion","Grapes","Parmesan Cheese","Chasew Nut","Wonton Strips","Golden Raisins","Sauteed Italian Mushroom","Grilled Chicken","Potato and Balsamic Dressing"],bowlOnly:["Macaroni"]},{id:"crunchy",name:"Crunchy Salad",price:55e3,tag:"Extra crunch",img:"crunchy",wrap:"crunchy-wrap",kcal:[520,450],desc:"Crunch ! Krezzz ! Kriiukk ! Crunchy Sensation in Every Bite !",contain:["Mixed Greens","Potato","Carrots","Cucumbers","Corns","Edamame","Grilled Chicken","Eggs","Croutons","Almonds","Garlic Chips","Roasted Sesame Dressing"]},{id:"classic-caesar",name:"Classic Caesar",price:55e3,tag:"All time favourite",img:"classic-caesar",kcal:[440,405],desc:"All Time Favorite Salad ! The Classic Caesar Salad.",contain:["Mixed Greens","Red and White Cabbage","Smoked Beef","Grilled Chicken","Croutons","Cherry Tomatoes","Eggs","Parmesan Cheese","Cheddar Cheese","Salty and Savoury Ranch Dressing"],bowlOnly:["Macaroni"]},{id:"baby-o",name:"Baby-O",price:55e3,tag:"Comfort",img:"baby-o",kcal:[520,480],desc:"Its Super Yummy Baby!",contain:["Mixed Greens","Cucumber","Corns","Onions","Cherry Tomato","Croutons","Cheddar Cheese","Sauteed Mushroom","Japanese Eggs","Grilled Chicken","Honey Mustard Mayo"],bowlOnly:["Red & White Cabbage"]},{id:"san-shine",name:"Sanshine",price:5e4,tag:"Contains tuna",img:"san-shine",wrap:"san-shine-wrap",kcal:[405,390],desc:"Ohayo from Salad-San ! Contain *Tuna*",contain:["Mixed Greens","Tuna","Crabstick","Edamame","Shirataki Noodle","Red Cabbage","Cucumber","Corns","Onion","Carrots","Eggs","Roasted Sesame And Sweet Mayo Dressing"]},{id:"big-omega",name:"Big Omega",price:85e3,tag:"Premium",img:"big-omega",wrap:"big-omega-wrap",kcal:[520,480],desc:"The Healthiest Combo !",contain:["Combination of Torched Grilled Salmon","Mixed Greens","Avocadoes","Cherry Tomatoes","Grapes","Corns","Red and White Cabbages","Cucumbers","Onions","Whole Almonds","Sesame Seeds","Balsamic Vinaigrette Dressing"]},{id:"mamacita",name:"Mamacita",price:45e3,tag:"Mexican",img:"mamacita",wrap:"mamacita-wrap",kcal:[460,450],desc:"Mamamia! Mexican Taste in Your Hand.",contain:["Mixed greens","corns","tortilla chips","beef patty","onions","tomatoes","red bean","eggs","avocadoes","thousand island dressing"],bowlOnly:["Carrots","Macaroni"]},{id:"bibim-cha",name:"Bibim-cha Salad",price:6e4,tag:"Korean",img:"bibim-cha",wrap:"bibim-cha-wrap",desc:"KOREAN Alert!! Fusion of Most Comforting Food From Korea with Our Signature Salad.",contain:["Mixed Greens","Cucumber","Carrots","Corn","Red Cabbage","Shirataki","Edamame","Fish Cake","Danmuji","Egg","Organic Red Rice","Choice Of Meat","Choice of Dressing"],choice:!0},{id:"green-fit",name:"Green Fit",price:62e3,tag:"Refuel",img:"green-fit",desc:"Healthy Food That Will Refuel Your Energy and Mood.",contain:["Mixed greens","Kale","Edamame","White cabbage","Red cabbage","Apple","Shilin Chicken","Pumpkin Seeds","Steam Potato","Cucumber","Onions","Eggs with Caesar Dressing & Sweet Mayo"]},{id:"sawadee",name:"Sawadee",price:45e3,tag:"Contains shrimp",img:"sawadee",wrap:"sawadee-wrap",kcal:[380,400],desc:"Thai's special Salad. Contain *Shrimp*",contain:["Mixed Greens","Chili Lime Shrimp","Glass Noodle","Cucumber","Carrots","Chasew Nut","Crispy Garlic and Thai Spicy Dressing"],bowlOnly:["Corn","Edamame","Egg"]},{id:"red-asia",name:"Red Asia",price:62e3,tag:"Dragon fruit",img:"red-asia",desc:"New Experience of Taste and Tasty.",contain:["Mixed greens","Dragon fruit","Edamame","Cucumber","Chiaseeds","Corn","Red Cabbage","Macaroni","Croutons","Smoked beef","Cheddar cheese with Roasted Sesame & Balsamic Dressing"]},{id:"jungle-berry",name:"Jungle Berry",price:45e3,tag:"Vegan friendly",img:"jungle-berry",kcal:[410,400],desc:"Rich in Vitamin C!! *Vegan Friendly*",contain:["Mixed Greens","Carrots","Almonds","Golden Raisins","Cheese","Tomatoes","Cucumber","Chia Seeds","Oats","Jungle Berry Dressing"],bowlOnly:["Macaroni","Eggs"]}],Em=[{id:"medium-all-in",name:"All In Salad",size:"Medium",price:35e3,img:"medium-all-in",desc:"Medium Size, a little bit less in size but same great taste - All In Salad.",contain:Mm,bowlOnly:ym,choice:!0},{id:"medium-supreme",name:"Supreme Salad",size:"Medium",price:4e4,img:"medium-supreme",kcal:[310,330],desc:"Medium Size, a little bit less in size but same great taste - Supreme Salad.",contain:["Mixed Greens","Shilin Chicken","Smoked Beef","Grated Parmesan","Tomatoes","Onions","Eggs","White & Red Cabbage","Wonton Strips","Caesar Dressing"],bowlOnly:["Macaroni","Corn","Cucumbers"]}],Tm=[{id:"a-plus",name:"A+",price:42e3,img:"juss-a-plus",tag:"Beetroot",desc:"Fresh Beet, Apple, Orange, Carrots. NO Sugar, NO Water Added. Kombinasi Juss dengan buah beetroot yang kaya Nitrit untuk menurunkan tekanan darah dan meningkatkan stamina.",contain:["Beet","Apple","Orange","Carrots"]},{id:"abc",name:"ABC",price:4e4,img:"juss-abc",tag:"Vitamin A & C",desc:"Fresh Apple, Orange, Carrots. NO Sugar, NO Water Added. Kombinasi Juss yang tinggi kandungan Vitamin A dan C, Simply Delicious and Nutricious.",contain:["Apel","Orange","Carrots"]},{id:"green-booster",name:"Green Booster",price:4e4,img:"juss-green-booster",tag:"Detox",desc:"Kombinasi Juss yang akan meningkatkan kesehatan, mendetox sistem pencernaan, dan kaya akan anti-oksidan",contain:["Fresh Pear","Pineapple","Kale and Lemon"]},{id:"power-immune",name:"Power Immune",price:4e4,img:"juss-power-immune",tag:"Immunity",desc:"Cold Pressed Fresh Pineapple, Carrots, Orange. NO Sugar, NO Water Added,. Sebotol Juss yang dapat memenuhi kebutuhan Vitamin C harian, bantu lawan Batuk dan Pilek.",contain:["Pineapple","Carrots","Orange"]},{id:"red-delight",name:"Red Delight",price:4e4,img:"juss-red-delight",tag:"Dragon fruit",desc:"Kandungan Vitamin A&C Caang tinggi, Melancarkan Pencernaan dan Kaya Anti-Oksidan.",contain:["Fresh Dragon Fruit","Apple","Orange and Carrots"]},{id:"bye-bye-flu",name:"Bye Bye Flu",price:4e4,img:"juss-bye-bye-flu",tag:"Ginger",desc:"Kombinasi Juss yang kaya akan Vitamin dan Ginger sebagai Anti-Inflamasi. Perfect drink to boost your immune system.",contain:["Fresh Apple","Orange","Carrots","Ginger and Celery"]},{id:"mama-juss",name:"Mama Juss",price:4e4,img:"juss-mama",tag:"Kids love it",desc:"Kombinasi Juss yang kaya akan Vitamin C, baik untuk mata serta mencerahkan kulit. Rasanya yang pasti disukai anak-anak membuat para Moms sering membuat kombinasi Jus ini. Everybody Loves it",contain:["Fresh Tomatoes","Apple","Orange and Carrots"]}],bm=[{id:"club-sandwich",name:"Stuffed Club Sandwich",price:45e3,img:"club-sandwich",tag:"2 pcs",kcal:[350,400],desc:"2 pcs of Healthy Club Sandwich Stuffed with Salad.",contain:["Whole wheat toasted bread","Green Lettuce","Red Cabbage","Tomatoes","Carrots","Cucumbers","Boiled Egg","Japanese Egg","Choice of Meat"],choice:!0},{id:"sandwich-box",name:"Japanese Egg Sandwich",price:55e3,img:"sandwich-box",tag:"4 pcs",kcal:[508],desc:"4 pcs of Sandwich, stuffed with Japanese Egg filling",contain:["4 pcs whole Wheat Toast Bread","Japanese egg filling","Choice of Meat"],choice:!0},{id:"egg-sandwich",name:"Japanese Egg Sandwich with Side Salad",price:45e3,img:"egg-sandwich",tag:"Half & half",kcal:[400,450],desc:"Half Sandwich & Half Salad",contain:["Sandwich stuffed with Traditional Japanese beaten soft egg salad","on side mixed greens","red cabbage","corns","edamame","Tomato with your Favorite Dressing"]},{id:"oatmeal",name:"Overnight Oatmeal",price:45e3,img:"oatmeal",tag:"Chocolate / Vanilla",desc:"Comfort Food for your breakfast and grab to go Snack. *Available in Chocolate & Vanilla*",contain:["Silky pudding","Chia seeds pudding. Almond and golden raisins Overnight oats","Homade Granola"]},{id:"granola",name:"Granola",price:3e4,img:"granola",tag:"Chocolate / Vanilla",desc:"High Fiber snack. Healthy, NO Sugar Added, Made from 100% Rolled Oat. Contain Nuts. *Available in Chocolate & Vanilla*",contain:["Rolled Oat","Mixed Nuts (Almond, Pumpkin Seed, Sunflower Seed, Sesame Seed)","Honey"]}],wm=[{id:"hampers",name:"Hampers Salad",from:185e3,img:"hampers",tag:"Gift",desc:"3 Portion of your preferred Salad. All wrapped with special packaging for your special one. (Order by WA)",contain:["Choose from our salad menu"]},{id:"salad-cake",name:"Salad Cake",from:295e3,img:"salad-cake",tag:"Celebration",desc:"5 Portion of your preferred Salad (Minimum, Can be More). All wrapped with special packaging for your special one. (Order by WA)",contain:["Choose from our salad menu"]}],Mc={ingredients:[["Eggs",5e3],["Cheese",5e3],["Crabstick",5e3],["Corn",5e3],["Red Bean",5e3],["Edamame",5e3],["Macaroni",5e3],["Avocado",7e3],["Sauteed Italian Mushroom",7e3],["Parmesan Cheese",7e3],["Cherry Tomato",7e3],["Golden Raisins",7e3],["Almond",1e4],["Cashew Nut",1e4],["Shirataki Noodle",1e4]]},yc=[{id:"egg",name:"Extra Egg",price:5e3},{id:"cheese",name:"Cheese",price:5e3},{id:"corn",name:"Extra Corn",price:5e3},{id:"edamame",name:"Edamame",price:5e3},{id:"avocado",name:"Avocado",price:7e3},{id:"mushroom",name:"Italian Mushroom",price:7e3},{id:"tomato",name:"Cherry Tomato",price:7e3},{id:"almond",name:"Almond",price:1e4},{id:"cashew",name:"Cashew Nut",price:1e4},{id:"shirataki",name:"Shirataki Noodle",price:1e4}],ud={both:{title:"Lunch & Dinner",sub:"Both meals delivered",plans:[["Daily","1 hari",13e4,[{juss:1,price:162e3},{juss:2,price:194e3}]],["Weekly","5 hari",6e5,[{juss:5,price:76e4},{juss:10,price:9e5}]],["2 Weeks","10 hari",115e4,[{juss:10,price:147e4},{juss:20,price:175e4}]],["Monthly","20 hari",225e4,[{juss:20,price:285e4},{juss:40,price:345e4}]]]},one:{title:"Lunch or Dinner",sub:"Pick one meal",plans:[["Daily","1 hari",65e3,[{juss:1,price:1e5}]],["Weekly","5 hari",32e4,[{juss:5,price:48e4}]],["2 Weeks","10 hari",62e4,[{juss:10,price:92e4}]],["Monthly","20 hari",12e5,[{juss:20,price:182e4}]]]},notes:["Different healthy menu every day, 400–500 kcal max","No MSG, no trans fat, low salt, low sugar","Monday to Friday, one delivery between 10:00–12:00","Off on Saturday, Sunday and public holidays","Pre-order minimum H-1 (one day before)","Bundle it with Juss cold-pressed juice for a better price"]},_i=r=>"Rp "+r.toLocaleString("id-ID"),Qn=r=>r/1e3+"k",De=(r,e=document)=>e.querySelector(r),ri=(r,e=document)=>[...e.querySelectorAll(r)],Ja=r=>`https://wa.me/${Jy}?text=${encodeURIComponent(r)}`;let hd=null;async function Qy(){const r=await fetch("/images/doodles/sprite.svg").then(e=>e.text());hd=new DOMParser().parseFromString(r,"image/svg+xml"),ri(".dd[data-icon]").forEach(e=>{const t=hd.getElementById("dd-"+e.dataset.icon);t&&(e.innerHTML=`<svg viewBox="${t.getAttribute("viewBox")}" fill="currentColor">${t.innerHTML}</svg>`)})}const eE=new Set(["Best seller","Premium","New menu"]),tE=r=>r.kcal?`<span class="dish__kcal">${r.kcal.length>1?`wrap ${r.kcal[0]} · bowl ${r.kcal[1]}`:r.kcal[0]} kcal</span>`:"",nE=r=>r.from||r.choice?`<span class="price price--from"><small>from</small> ${_i(r.from||r.price)}</span>`:`<span class="price">${_i(r.price)}</span>`;function bs(r,e,{round:t=!0}={}){const n=eE.has(r.tag)?"dish__tag is-hot":"dish__tag",i=r.contain.slice(0,6).join(", ")+(r.contain.length>6?"…":"");return`
  <button class="dish tilt ${t?"":"dish--tall"}" data-kind="${e}" data-id="${r.id}" aria-label="${r.name} details">
    ${r.tag||r.size?`<span class="${n}">${r.tag||r.size}</span>`:""}
    <div class="dish__media">
      <img class="dish__img" src="/images/${r.img}.webp" alt="${r.name}" loading="lazy" />
      ${r.wrap?`<img class="dish__wrap" src="/images/${r.wrap}.webp" alt="" loading="lazy" />`:""}
    </div>
    <div class="dish__head"><h3>${r.name}</h3>${nE(r)}</div>
    ${tE(r)}
    <p class="dish__desc">${r.desc}</p>
    <p class="dish__contain"><b>${e==="juss"?"Made with":"Contain"}:</b> ${i}</p>
    <span class="dish__more">${r.from?"Order by WhatsApp →":"See everything inside →"}</span>
  </button>`}function iE(){return`<div class="allin">
    <div class="allin__hero">
      ${bs(Ls,"salads")}
      <div class="allin__copy">
        <p class="eyebrow">All In Salad · Regular size</p>
        <h3>One salad, your way.</h3>
        <p>Everything in the bowl, then your choice of meat and one of eleven house dressings. ${_i(Ls.price)} with any dressing, ${_i(Ls.price+1e4)} with Cheesy Truffle Mayo.</p>
        <p class="allin__meats"><b>Choice of meat:</b> ${Hs.map(r=>r.name+(r.extra?` (+${Qn(r.extra)})`:"")).join(", ")}.</p>
      </div>
    </div>
    <div class="menu__grid menu__grid--dressings">${qr.map(r=>`
      <article class="dcard tilt">
        ${r.tag?`<span class="dish__tag ${r.tag==="New"?"is-hot":""}">${r.tag}</span>`:""}
        <img src="/images/${r.img}.webp" alt="${r.name}" loading="lazy" />
        <div><h4>${r.name}</h4><p>${r.note}</p><span class="price">${_i(Ls.price+r.extra)}</span></div>
      </article>`).join("")}</div>
  </div>`}function rE(){const r=t=>`<ul>${t.map(([n,i])=>`<li><span>${n}</span><span>${Qn(i)}</span></li>`).join("")}</ul>`,e=Math.ceil(Mc.ingredients.length/2);return`<div class="extras">
    <article class="card tilt"><h3>Additional toppings</h3>${r(Mc.ingredients.slice(0,e))}</article>
    <article class="card tilt"><h3>&nbsp;</h3>${r(Mc.ingredients.slice(e))}</article>
    <article class="card tilt card--note"><h3>Choice of meat</h3><p>All In, Medium All In, Bibim-cha and the sandwiches come with your choice of meat: ${Hs.map(t=>t.name).join(", ")}.</p><p>Spicy Lime Shrimp +${Qn(1e4)} · Torched Baked Salmon +${Qn(3e4)}.</p></article>
  </div>`}const sE={salads:()=>`<div class="menu__grid">${ml.filter(r=>r.id!=="all-in").map(r=>bs(r,"salads")).join("")}</div>`,allin:iE,medium:()=>`<div class="menu__grid">${Em.map(r=>bs(r,"medium")).join("")}</div>`,juss:()=>`<div class="menu__grid">${Tm.map(r=>bs(r,"juss",{round:!1})).join("")}</div>`,snacks:()=>`<div class="menu__grid">${bm.map(r=>bs(r,"snacks")).join("")}</div>`,gifts:()=>`<div class="menu__grid menu__grid--wide">${wm.map(r=>bs(r,"gifts",{round:!1})).join("")}</div>`,extras:rE},aE={salads:ml,medium:Em,snacks:bm,juss:Tm,gifts:wm};function oE({onRender:r}){const e=De("#menuPanel"),t=n=>{e.innerHTML=sE[n]();const i=ri(".dish, .extras .card, .dcard, .allin__copy",e);et.fromTo(i,{y:40,opacity:0,rotateX:-8},{y:0,opacity:1,rotateX:0,duration:.7,stagger:.05,ease:"power3.out",clearProps:"transform"}),r==null||r(e)};De("#menuTabs").addEventListener("click",n=>{const i=n.target.closest(".tab");i&&(ri(".tab").forEach(s=>s.classList.toggle("is-active",s===i)),t(i.dataset.tab))}),e.addEventListener("click",n=>{const i=n.target.closest(".dish");if(!i)return;const s=aE[i.dataset.kind].find(a=>a.id===i.dataset.id);lE(s,i.dataset.kind)}),t("salads")}let ws=null;function lE(r,e){const t=De("#modal");De("#modalImg").src=`/images/${r.img}.webp`;const n=De("#modalWrap");r.wrap?(n.src=`/images/${r.wrap}.webp`,n.hidden=!1):n.hidden=!0,De("#modalTag").textContent=r.tag||(r.size?r.size+" size":e==="snacks"?"Snack":e==="juss"?"Juss":"Salad"),De("#modalTitle").textContent=r.name+(r.size?` (${r.size})`:""),De("#modalPrice").textContent=r.from||r.choice?`from ${_i(r.from||r.price)}`:_i(r.price),De("#modalDesc").textContent=(r.kcal?r.kcal.length>1?`Wrap ${r.kcal[0]} kcal · Bowl ${r.kcal[1]} kcal. `:`${r.kcal[0]} kcal. `:"")+r.desc,De("#modalContainHead").textContent=e==="juss"?"Made with":e==="gifts"?"How it works":"Contain",De("#modalContain").innerHTML=r.contain.map(i=>`<li>${i}</li>`).join("")+(r.bowlOnly?r.bowlOnly.map(i=>`<li class="alt">${i} (bowl only)</li>`).join(""):""),De("#modalChoice").innerHTML=r.choice?`<p><b>Choice of meat:</b> ${Hs.map(i=>i.name+(i.extra?` (+${Qn(i.extra)})`:"")).join(", ")}.<br><b>Choice of dressing:</b> ${qr.map(i=>i.name).join(", ")}.</p>`:"",De("#modalOrder").href=Ja(r.from?`Halo Circle Heart! Saya mau tanya ${r.name}.`:`Halo Circle Heart! Saya mau pesan ${r.name}${r.size?" ("+r.size+")":""}.`),ws=document.activeElement,t.classList.add("is-open"),t.setAttribute("aria-hidden","false"),document.dispatchEvent(new CustomEvent("modal:open")),et.fromTo("#modalImg",{rotate:-20,scale:.8},{rotate:0,scale:1,duration:.8,ease:"back.out(1.6)"}),et.fromTo("#modalContain li",{y:10,opacity:0},{y:0,opacity:1,duration:.4,stagger:.03,delay:.15}),De(".modal__close").focus()}function fd(){var e;const r=De("#modal");r.classList.remove("is-open"),r.setAttribute("aria-hidden","true"),document.dispatchEvent(new CustomEvent("modal:close")),(e=ws==null?void 0:ws.focus)==null||e.call(ws)}function cE(){ri("#modal [data-close]").forEach(r=>r.addEventListener("click",fd)),document.addEventListener("keydown",r=>{r.key==="Escape"&&fd()})}function uE({onHover:r}){const e=De("#dressingsTrack");e.innerHTML=qr.map(i=>`
    <article class="cup tilt" data-id="${i.id}">
      <img class="cup__img" src="/images/${i.img}.webp" alt="${i.name}" loading="lazy" />
      <h3>${i.name}</h3><p>${i.note}</p>
      <span class="cup__swatch" style="background:${i.color}"></span>
    </article>`).join("");let t=null;const n=i=>{const s=i.dataset.id;s!==t&&(t=s,r(qr.find(a=>a.id===s)))};e.addEventListener("pointerover",i=>{const s=i.target.closest(".cup");s&&n(s)}),e.addEventListener("click",i=>{const s=i.target.closest(".cup");s&&(t=null,n(s))})}function hE(r){const e={style:"bowl",meat:Hs[0],dressing:qr.find(i=>i.id==="caesar"),extras:new Set},t=Ls.price;De("#meatChips").innerHTML=Hs.map((i,s)=>`<button class="chip ${s===0?"is-active":""}" data-meat="${i.id}">${i.name}${i.extra?` <small>+${Qn(i.extra)}</small>`:""}</button>`).join(""),De("#dressingChips").innerHTML=qr.map(i=>`<button class="chip ${i.id===e.dressing.id?"is-active":""}" data-dressing="${i.id}"><span class="dot" style="background:${i.color}"></span>${i.name}${i.extra?` <small>+${Qn(i.extra)}</small>`:""}</button>`).join(""),De("#extraChips").innerHTML=yc.map(i=>`<button class="chip" data-extra="${i.id}">${i.name} <small>+${Qn(i.price)}</small></button>`).join("");const n=()=>{const i=[[`All In Salad (${e.style})`,_i(t)],[e.meat.name,e.meat.extra?"+"+Qn(e.meat.extra):"included"],[e.dressing.name,e.dressing.extra?"+"+Qn(e.dressing.extra):"included"]];let s=t+e.meat.extra+(e.dressing.extra||0);for(const c of e.extras){const u=yc.find(h=>h.id===c);i.push([u.name,"+"+Qn(u.price)]),s+=u.price}De("#sumLines").innerHTML=i.map(([c,u])=>`<li><span>${c}</span><span>${u}</span></li>`).join("");const a=De("#sumPrice"),o=parseInt(a.dataset.v||t,10);a.dataset.v=s,et.fromTo({v:o},{v:s},{duration:.6,ease:"power2.out",onUpdate(){a.textContent=_i(Math.round(this.targets()[0].v/1e3)*1e3)}}),et.fromTo(a,{scale:1.15},{scale:1,duration:.5,ease:"back.out(2)"}),De("#sumTitle").textContent=`All In Salad · ${e.style==="bowl"?"Bowl":"Wrap"}`;const l=[...e.extras].map(c=>yc.find(u=>u.id===c).name).join(", ");De("#sumOrder").href=Ja(`Halo Circle Heart! Saya mau pesan All In Salad (${e.style}) dengan ${e.meat.name}, dressing ${e.dressing.name}${l?", extra: "+l:""}.`)};return De("#styleChips").addEventListener("click",i=>{const s=i.target.closest(".chip");s&&(ri("#styleChips .chip").forEach(a=>a.classList.toggle("is-active",a===s)),e.style=s.dataset.style,r.setStyle(e.style),n())}),De("#meatChips").addEventListener("click",i=>{const s=i.target.closest(".chip");s&&(ri("#meatChips .chip").forEach(a=>a.classList.toggle("is-active",a===s)),e.meat=Hs.find(a=>a.id===s.dataset.meat),r.setMeat(e.meat),n())}),De("#dressingChips").addEventListener("click",i=>{const s=i.target.closest(".chip");s&&(ri("#dressingChips .chip").forEach(a=>a.classList.toggle("is-active",a===s)),e.dressing=qr.find(a=>a.id===s.dataset.dressing),r.setDressing(e.dressing),n())}),De("#extraChips").addEventListener("click",i=>{const s=i.target.closest(".chip");if(!s)return;const a=s.dataset.extra,o=!e.extras.has(a);s.classList.toggle("is-active",o),o?e.extras.add(a):e.extras.delete(a),r.toggleExtra(a,o),n()}),r.setMeat(e.meat),r.setDressing(e.dressing,{silent:!0}),n(),e}function fE(){const r=De("#cateringPlans"),e={meal:"both",juss:0},t=()=>{const i=ud[e.meal];r.innerHTML=i.plans.map(([s,a,o,l],c)=>{const u=e.juss?l[Math.min(e.juss,l.length)-1]:null;return`
      <article class="plan tilt ${c===1?"is-popular":""}">
        ${c===1?'<span class="ribbon">Popular</span>':""}
        <h3>${s}</h3><small>${a} · ${i.title}</small>
        <div class="price">${_i(u?u.price:o)}</div>
        ${u?`<span class="plan__juss">catering + ${u.juss} Juss</span>`:'<span class="plan__juss plan__juss--muted">catering only</span>'}
      </article>`}).join(""),et.fromTo(".plan",{rotateY:-40,opacity:0,y:20},{rotateY:0,opacity:1,y:0,duration:.7,stagger:.08,ease:"power3.out",clearProps:"transform"}),De('#jussToggle [data-juss="2"]').hidden=e.meal!=="both"},n=(i,s)=>{const a=De(i),o=De(".catering__thumb",a),l=c=>{o.style.width=c.offsetWidth+"px",o.style.transform=`translateX(${c.offsetLeft-6}px)`};a.addEventListener("click",c=>{var h;const u=c.target.closest("button");if(u){if(ri("button",a).forEach(f=>f.classList.toggle("is-active",f===u)),l(u),e[s]=s==="juss"?+u.dataset.juss:u.dataset.plan,s==="meal"&&e.juss===2&&e.meal!=="both"){e.juss=1;const f=De('#jussToggle [data-juss="1"]');ri("#jussToggle button").forEach(d=>d.classList.toggle("is-active",d===f)),(h=n.move)==null||h.call(n,f)}t()}}),requestAnimationFrame(()=>l(De("button.is-active",a))),window.addEventListener("resize",()=>l(De("button.is-active",a))),s==="juss"&&(n.move=l)};n("#cateringToggle","meal"),n("#jussToggle","juss"),t(),De("#cateringNotes").innerHTML=ud.notes.map(i=>`<li>${i}</li>`).join(""),De("#cateringOrder").href=Ja("Halo Circle Heart! Saya mau tanya paket catering.")}const dE='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#00B14F"/><path d="M8 7.4h4.7a2.9 2.9 0 0 1 0 5.8h-.6l2.6 3.4H12l-2.4-3.2V16.6H8V7.4zm1.6 1.5v2.8h3a1.4 1.4 0 0 0 0-2.8h-3z" fill="#fff"/></svg>',pE='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#EE2737"/><path d="M12 5.2a6.8 6.8 0 1 0 0 13.6 6.8 6.8 0 0 0 0-13.6zm0 3.1a3.7 3.7 0 1 1 0 7.4 3.7 3.7 0 0 1 0-7.4z" fill="#fff"/><circle cx="12" cy="12" r="1.6" fill="#fff"/></svg>',dd=(r,e="")=>`
  <a class="btn btn--grab ${e}" href="${r.grab}" target="_blank" rel="noopener">${dE} GrabFood</a>
  <a class="btn btn--gofood ${e}" href="${r.gofood}" target="_blank" rel="noopener">${pE} GoFood</a>`;function mE(){De("#locations").innerHTML=cd.map(t=>`
    <article class="loc tilt">
      <p class="eyebrow">Outlet</p>
      <h3>${t.name}</h3>
      <p>${t.address}</p>
      <div class="loc__actions">
        ${dd(t)}
        <a class="btn btn--ghost" href="${t.maps}" target="_blank" rel="noopener">Open in Maps</a>
      </div>
    </article>`).join("");const r=Ja("Halo Circle Heart! Saya mau pesan salad.");["#navOrder","#visitOrder"].forEach(t=>De(t).href=r),["#igLink","#visitIg"].forEach(t=>De(t).href=Sc.instagram),De("#visitTt").href=Sc.tiktok,ri("[data-social]").forEach(t=>t.href=Sc[t.dataset.social]);const e=De("#heroDelivery");e&&(e.innerHTML='<span class="hero__delivery-label">Delivery</span>'+cd.map(t=>`
    <div class="hero__delivery-outlet"><span>${t.name}</span>${dd(t,"btn--sm")}</div>`).join("")),De("#year").textContent=new Date().getFullYear()}function pd(r=document){window.matchMedia("(hover: hover)").matches&&ri(".tilt",r).forEach(e=>{e.dataset.tilt||(e.dataset.tilt="1",e.addEventListener("pointermove",t=>{const n=e.getBoundingClientRect(),i=(t.clientX-n.left)/n.width-.5,s=(t.clientY-n.top)/n.height-.5;et.to(e,{rotateY:i*10,rotateX:-s*10,transformPerspective:900,duration:.4,ease:"power2.out"})}),e.addEventListener("pointerleave",()=>et.to(e,{rotateY:0,rotateX:0,duration:.7,ease:"elastic.out(1,.6)"})))})}function _E(){const r=De("#cursor");if(!r||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;const e=De(".cursor__dot",r),t=De(".cursor__ring",r),n={x:innerWidth/2,y:innerHeight/2},i={...n};window.addEventListener("pointermove",s=>{n.x=s.clientX,n.y=s.clientY}),et.ticker.add(()=>{i.x+=(n.x-i.x)*.18,i.y+=(n.y-i.y)*.18,e.style.transform=`translate(${n.x}px, ${n.y}px) translate(-50%,-50%)`,t.style.transform=`translate(${i.x}px, ${i.y}px) translate(-50%,-50%)`}),document.addEventListener("pointerover",s=>{r.classList.toggle("is-hover",!!s.target.closest("a, button, .cup, .dish"))}),document.addEventListener("bowl:hover",s=>r.classList.toggle("is-hover",s.detail))}function gE(r){const e=["all-in","supreme","big-omega","sawadee","baby-o","crunchy"],t=De("#heroPicker");if(!t)return;t.innerHTML=e.map((s,a)=>{const o=ml.find(l=>l.id===s);return`<button class="pick ${a===0?"is-active":""}" data-bowl="${s}"><img src="/images/${o.img}.webp" alt="" />${o.name}<small>${o.choice?"from ":""}${Qn(o.price)}</small></button>`}).join("");const n=De("#heroDish"),i=s=>{const a=ml.find(o=>o.id===s);if(ri(".pick",t).forEach(o=>o.classList.toggle("is-active",o.dataset.bowl===s)),r.bowlKey!==s&&r.setBowl(s),n){et.fromTo(n,{y:8,opacity:.4},{y:0,opacity:1,duration:.5,ease:"power3.out"}),De(".hero__dish-name",n).textContent=a.name+(a.choice?" · choose your dressing":""),De(".hero__dish-price",n).textContent=(a.choice?"from ":"")+_i(a.price);const o=De(".hero__dish-order",n);a.choice?(o.textContent="Build yours →",o.href="#builder",o.removeAttribute("target")):(o.textContent="Order this →",o.href=Ja(`Halo Circle Heart! Saya mau pesan ${a.name}.`),o.setAttribute("target","_blank"))}};t.addEventListener("click",s=>{const a=s.target.closest(".pick");a&&i(a.dataset.bowl)}),document.addEventListener("bowl:change",s=>{var o;const a=s.detail;((o=De(".pick.is-active",t))==null?void 0:o.dataset.bowl)!==a&&i(a)}),i(e[0])}et.registerPlugin(ke);ke.config({ignoreMobileResize:!0});const yh=window.matchMedia("(hover: none), (pointer: coarse), (max-width: 1024px)").matches,Wn=(r,e=document)=>e.querySelector(r),Wi=(r,e=document)=>[...e.querySelectorAll(r)],vE=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Kr=new _g({lerp:.09,smoothWheel:!0});Kr.on("scroll",r=>{ke.update(),St==null||St.setScrollVelocity(r.velocity)});et.ticker.add(r=>Kr.raf(r*1e3));et.ticker.lagSmoothing(0);Kr.stop();let St=null;try{St=new Zy(Wn("#scene"),Wn("#labels")),window.__scene=St}catch(r){console.warn("WebGL unavailable",r),Wn("#scene").remove()}async function xE(){var n;const r=Wn(".loader__bar span"),e={v:0},t=et.to(e,{v:85,duration:1.6,ease:"power2.out",onUpdate:()=>r.style.width=e.v+"%"});await Promise.all([Qy(),(n=document.fonts)==null?void 0:n.ready,St==null?void 0:St.ready]),St==null||St.intro(),oE({onRender:i=>{pd(i),ke.refresh()}}),cE(),uE({onHover:i=>St==null?void 0:St.setDressing(i)}),St&&(hE(St),gE(St),St.setStage(Wn(".story__stage"))),fE(),mE(),pd(),_E(),RE(),ME(),EE(),TE(),wE(),CE(),PE(),ke.sort(),t.kill(),await new Promise(i=>et.to(e,{v:100,duration:.35,onUpdate:()=>r.style.width=e.v+"%",onComplete:i}))}function SE(){const r=Wn("#loader");r&&et.timeline({onComplete:()=>{r.remove(),Kr.start(),ke.refresh()}}).to(".loader__logo",{scale:1.15,opacity:0,duration:.5,ease:"power2.in"},0).to(".loader__bar, .loader__text",{opacity:0,duration:.3},0).to(r,{yPercent:-100,duration:.8,ease:"power4.inOut"},.2).add(yE,.5)}function ME(){const r=Wn("#nav"),e=Wn("#navLinks"),t=Wn("#burger");ke.create({start:80,onUpdate:n=>r.classList.toggle("is-scrolled",n.scroll()>80),onToggle:n=>r.classList.toggle("is-scrolled",n.isActive)}),t.addEventListener("click",()=>{const n=e.classList.toggle("is-open");t.classList.toggle("is-open",n),t.setAttribute("aria-expanded",n)}),Wi('a[href^="#"]').forEach(n=>n.addEventListener("click",i=>{const s=n.getAttribute("href");if(s.length<2)return;const a=Wn(s);a&&(i.preventDefault(),e.classList.remove("is-open"),t.classList.remove("is-open"),Kr.scrollTo(a,{offset:-60,duration:1.4,easing:o=>1-Math.pow(1-o,4)}))})),Wi(".section[id]").forEach(n=>ke.create({trigger:n,start:"top 50%",end:"bottom 50%",onToggle:i=>{i.isActive&&Wi(".nav__links a").forEach(s=>s.classList.toggle("is-active",s.getAttribute("href")==="#"+n.id))}})),document.addEventListener("modal:open",()=>Kr.stop()),document.addEventListener("modal:close",()=>Kr.start())}function yE(){et.timeline({defaults:{ease:"power4.out"}}).to(".hero__title .line > span",{y:0,duration:1.1,stagger:.12},0).to(".hero .reveal",{y:0,opacity:1,duration:.9,stagger:.1},.35).fromTo(".hero__hint",{opacity:0},{opacity:.8,duration:.6},1.4).fromTo(".scroll-cue",{opacity:0},{opacity:.6,duration:.6},1.5),Wi("[data-count]").forEach(e=>{const t=+e.dataset.count;et.fromTo(e,{innerText:0},{innerText:t,duration:1.6,delay:.6,snap:{innerText:1},ease:"power2.out"})}),Wi(".hero .reveal").forEach(e=>e.classList.remove("reveal"))}function EE(){yh||et.to(".hero__content",{y:-80,opacity:.3,ease:"none",scrollTrigger:{trigger:"#hero",start:"top top",end:"bottom top",scrub:!0}}),document.addEventListener("bowl:toss",()=>et.fromTo(".hero__hint",{scale:1},{scale:1.15,yoyo:!0,repeat:1,duration:.2}))}function TE(){const r=Wn("#marqueeTrack");r.innerHTML+=r.innerHTML+r.innerHTML;const e=r.scrollWidth/3,t=et.to(r,{x:-e,duration:22,ease:"none",repeat:-1});ke.create({onUpdate:n=>{t.timeScale(1+Math.min(Math.abs(n.getVelocity())/600,3))}}),et.ticker.add(()=>t.timeScale(et.utils.interpolate(t.timeScale(),1,.04)))}function bE(r){const e=t=>{[...t.childNodes].forEach(n=>{if(n.nodeType===3){const i=document.createDocumentFragment();n.textContent.split(/(\s+)/).forEach(s=>{if(!s)return;if(/^\s+$/.test(s)){i.appendChild(document.createTextNode(s));return}const a=document.createElement("span");a.className="w";const o=document.createElement("span");o.textContent=s,a.appendChild(o),i.appendChild(a)}),t.replaceChild(i,n)}else n.nodeType===1&&!n.classList.contains("w")&&e(n)})};return e(r),Wi(".w > span",r)}function wE(){Wi(".h2").forEach(r=>{const e=bE(r);et.fromTo(e,{yPercent:110,rotate:4},{yPercent:0,rotate:0,duration:.9,stagger:.05,ease:"power4.out",scrollTrigger:{trigger:r,start:"top 88%",once:!0}})}),ke.batch(".reveal",{start:yh?"top 94%":"top 88%",once:!0,onEnter:r=>et.to(r,{y:0,opacity:1,duration:.9,stagger:.09,ease:"power3.out",overwrite:!0})})}const AE={hero:"dark",dressings:"dark",builder:"dark",catering:"yellow"};let md=null;function _d(r){r!==md&&(md=r,document.documentElement.dataset.theme=r,et.to(".bg__dark",{opacity:r==="dark"?1:0,duration:.9,ease:"power2.inOut",overwrite:!0}),et.to(".bg__yellow",{opacity:r==="yellow"?1:0,duration:.9,ease:"power2.inOut",overwrite:!0}))}function CE(){const r=e=>{St==null||St.setPose(e),_d(AE[e]||"light"),e==="story"&&(St==null||St.setBowl("all-in"))};Wi("[data-pose]").forEach(e=>{ke.create({trigger:e,start:"top 60%",end:"bottom 60%",onEnter:()=>r(e.dataset.pose),onEnterBack:()=>r(e.dataset.pose)})}),ke.create({trigger:".footer",start:"top 80%",onEnter:()=>r("visit")}),_d("dark"),St&&(ke.create({trigger:"#story",start:"top 85%",end:"top 15%",scrub:!0,onUpdate:e=>St.setExplodeScroll(e.progress)}),ke.create({trigger:"#hero",start:"top top",end:"bottom 40%",scrub:!0,onUpdate:e=>St.setHeroScroll(e.progress,e.scroll())}))}function RE(){const r=Wn("#dressingsTrack");if(yh){Wn("#dressings").classList.add("dressings--swipe"),et.fromTo(".cup",{y:40,opacity:0},{y:0,opacity:1,duration:.7,stagger:.06,ease:"power3.out",scrollTrigger:{trigger:"#dressings",start:"top 75%",once:!0}});return}const e=()=>Math.max(0,r.scrollWidth-innerWidth+80);et.to(r,{x:()=>-e(),ease:"none",scrollTrigger:{trigger:"#dressings",start:"top top",end:()=>"+="+(e()+innerHeight*.4),pin:"#dressingsPin",scrub:1,invalidateOnRefresh:!0,anticipatePin:1}}),Wi(".cup").forEach((t,n)=>et.fromTo(t,{y:60,rotate:n%2?6:-6,opacity:0},{y:0,rotate:0,opacity:1,duration:.8,delay:n*.05,scrollTrigger:{trigger:"#dressings",start:"top 70%"}}))}function PE(){et.fromTo("#scooter",{x:0},{x:-170,ease:"power2.out",duration:1.4,scrollTrigger:{trigger:".notes",start:"top 75%"}}),et.to(".catering__deco--gym",{y:-60,rotate:4,ease:"none",scrollTrigger:{trigger:"#catering",start:"top bottom",end:"bottom top",scrub:!0}}),et.to(".catering__deco--eat",{y:-120,rotate:-4,ease:"none",scrollTrigger:{trigger:"#catering",start:"top bottom",end:"bottom top",scrub:!0}}),et.to(".family__img",{y:-20,ease:"none",scrollTrigger:{trigger:".family",start:"top bottom",end:"bottom top",scrub:!0}}),et.fromTo(".visit__cta img",{rotate:-15,scale:.7},{rotate:0,scale:1,duration:1,ease:"back.out(1.6)",scrollTrigger:{trigger:".visit__cta",start:"top 80%"}}),et.fromTo(".story__note img",{rotate:-20,y:20},{rotate:0,y:0,duration:1,ease:"elastic.out(1,.5)",scrollTrigger:{trigger:".story__note",start:"top 85%"}}),vE||et.to(".marquee",{rotate:-1.2,ease:"none"})}let gd=!1;const Fu=()=>{gd||(gd=!0,SE())};xE().then(Fu).catch(r=>{console.error("Boot failed",r),Fu()});setTimeout(Fu,8e3);

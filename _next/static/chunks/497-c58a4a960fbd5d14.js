"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[497],{16266:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(2265),r=n(17734),i=n(97119);let a=e=>{let{space:t,form:n,children:a}=e;if(null==a)return null;let l=a;return n&&(l=o.createElement(r.Ux,{override:!0,status:!0},l)),t&&(l=o.createElement(i.BR,null,l)),l}},57181:(e,t,n)=>{n.d(t,{W:()=>i,w:()=>r});var o=n(42434);function r(e){let{sizePopupArrow:t,borderRadiusXS:n,borderRadiusOuter:o}=e,r=t/2,i=1*o/Math.sqrt(2),a=r-o*(1-1/Math.sqrt(2)),l=r-1/Math.sqrt(2)*n,u=o*(Math.sqrt(2)-1)+1/Math.sqrt(2)*n,c=2*r-l,s=2*r-i,f=2*r-0,d=r*Math.sqrt(2)+o*(Math.sqrt(2)-2),h=o*(Math.sqrt(2)-1),p="polygon(".concat(h,"px 100%, 50% ").concat(h,"px, ").concat(2*r-h,"px 100%, ").concat(h,"px 100%)");return{arrowShadowWidth:d,arrowPath:"path('M ".concat(0," ").concat(r," A ").concat(o," ").concat(o," 0 0 0 ").concat(i," ").concat(a," L ").concat(l," ").concat(u," A ").concat(n," ").concat(n," 0 0 1 ").concat(c," ").concat(u," L ").concat(s," ").concat(a," A ").concat(o," ").concat(o," 0 0 0 ").concat(f," ").concat(r," Z')"),arrowPolygon:p}}let i=(e,t,n)=>{let{sizePopupArrow:r,arrowPolygon:i,arrowPath:a,arrowShadowWidth:l,borderRadiusXS:u,calc:c}=e;return{pointerEvents:"none",width:r,height:r,overflow:"hidden","&::before":{position:"absolute",bottom:0,insetInlineStart:0,width:r,height:c(r).div(2).equal(),background:t,clipPath:{_multi_value_:!0,value:[i,a]},content:'""'},"&::after":{content:'""',position:"absolute",width:l,height:l,bottom:0,insetInline:0,margin:"auto",borderRadius:{_skip_check_:!0,value:"0 0 ".concat((0,o.bf)(u)," 0")},transform:"translateY(50%) rotate(-135deg)",boxShadow:n,zIndex:0,background:"transparent"}}}},13269:(e,t,n)=>{n.d(t,{Z:()=>$});var o=n(42897),r=n(39428),i=n(135),a=n(2265),l=n(54887),u=n(80371);n(62738);var c=n(66554),s=a.createContext(null),f=n(57111),d=n(82419),h=[],p=n(12378),v=n(15323),m="rc-util-locker-".concat(Date.now()),g=0,y=function(e){return!1!==e&&((0,u.Z)()&&e?"string"==typeof e?document.querySelector(e):"function"==typeof e?e():e:null)},b=a.forwardRef(function(e,t){var n,o,i,b=e.open,w=e.autoLock,x=e.getContainer,Z=(e.debug,e.autoDestroy),E=void 0===Z||Z,k=e.children,C=a.useState(b),M=(0,r.Z)(C,2),P=M[0],R=M[1],S=P||b;a.useEffect(function(){(E||b)&&R(b)},[b,E]);var N=a.useState(function(){return y(x)}),L=(0,r.Z)(N,2),A=L[0],z=L[1];a.useEffect(function(){var e=y(x);z(null!=e?e:null)});var H=function(e,t){var n=a.useState(function(){return(0,u.Z)()?document.createElement("div"):null}),o=(0,r.Z)(n,1)[0],i=a.useRef(!1),l=a.useContext(s),c=a.useState(h),p=(0,r.Z)(c,2),v=p[0],m=p[1],g=l||(i.current?void 0:function(e){m(function(t){return[e].concat((0,f.Z)(t))})});function y(){o.parentElement||document.body.appendChild(o),i.current=!0}function b(){var e;null===(e=o.parentElement)||void 0===e||e.removeChild(o),i.current=!1}return(0,d.Z)(function(){return e?l?l(y):y():b(),b},[e]),(0,d.Z)(function(){v.length&&(v.forEach(function(e){return e()}),m(h))},[v]),[o,g]}(S&&!A,0),W=(0,r.Z)(H,2),D=W[0],Y=W[1],q=null!=A?A:D;n=!!(w&&b&&(0,u.Z)()&&(q===D||q===document.body)),o=a.useState(function(){return g+=1,"".concat(m,"_").concat(g)}),i=(0,r.Z)(o,1)[0],(0,d.Z)(function(){if(n){var e=(0,v.o)(document.body).width,t=document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth;(0,p.hq)("\nhtml body {\n  overflow-y: hidden;\n  ".concat(t?"width: calc(100% - ".concat(e,"px);"):"","\n}"),i)}else(0,p.jL)(i);return function(){(0,p.jL)(i)}},[n,i]);var I=null;k&&(0,c.Yr)(k)&&t&&(I=k.ref);var B=(0,c.x1)(I,t);if(!S||!(0,u.Z)()||void 0===A)return null;var T=!1===q,_=k;return t&&(_=a.cloneElement(k,{ref:B})),a.createElement(s.Provider,{value:Y},T?_:(0,l.createPortal)(_,q))}),w=n(56800),x=n.n(w),Z=n(13751),E=n(12369);function k(e){var t;return null==e||null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}function C(e){return k(e) instanceof ShadowRoot?k(e):null}var M=n(47109),P=n(90079),R=n(35045),S=n(22988),N=n(97852);function L(e){var t=e.prefixCls,n=e.align,o=e.arrow,r=e.arrowPos,i=o||{},l=i.className,u=i.content,c=r.x,s=r.y,f=a.useRef();if(!n||!n.points)return null;var d={position:"absolute"};if(!1!==n.autoArrow){var h=n.points[0],p=n.points[1],v=h[0],m=h[1],g=p[0],y=p[1];v!==g&&["t","b"].includes(v)?"t"===v?d.top=0:d.bottom=0:d.top=void 0===s?0:s,m!==y&&["l","r"].includes(m)?"l"===m?d.left=0:d.right=0:d.left=void 0===c?0:c}return a.createElement("div",{ref:f,className:x()("".concat(t,"-arrow"),l),style:d},u)}function A(e){var t=e.prefixCls,n=e.open,o=e.zIndex,r=e.mask,i=e.motion;return r?a.createElement(N.ZP,(0,S.Z)({},i,{motionAppear:!0,visible:n,removeOnLeave:!0}),function(e){var n=e.className;return a.createElement("div",{style:{zIndex:o},className:x()("".concat(t,"-mask"),n)})}):null}var z=a.memo(function(e){return e.children},function(e,t){return t.cache}),H=a.forwardRef(function(e,t){var n=e.popup,i=e.className,l=e.prefixCls,u=e.style,s=e.target,f=e.onVisibleChanged,h=e.open,p=e.keepDom,v=e.fresh,m=e.onClick,g=e.mask,y=e.arrow,b=e.arrowPos,w=e.align,E=e.motion,k=e.maskMotion,C=e.forceRender,M=e.getPopupContainer,P=e.autoDestroy,R=e.portal,H=e.zIndex,W=e.onMouseEnter,D=e.onMouseLeave,Y=e.onPointerEnter,q=e.ready,I=e.offsetX,B=e.offsetY,T=e.offsetR,_=e.offsetB,X=e.onAlign,j=e.onPrepare,V=e.stretch,O=e.targetWidth,F=e.targetHeight,J="function"==typeof n?n():n,Q=h||p,U=(null==M?void 0:M.length)>0,$=a.useState(!M||!U),G=(0,r.Z)($,2),K=G[0],ee=G[1];if((0,d.Z)(function(){!K&&U&&s&&ee(!0)},[K,U,s]),!K)return null;var et="auto",en={left:"-1000vw",top:"-1000vh",right:et,bottom:et};if(q||!h){var eo,er=w.points,ei=w.dynamicInset||(null===(eo=w._experimental)||void 0===eo?void 0:eo.dynamicInset),ea=ei&&"r"===er[0][1],el=ei&&"b"===er[0][0];ea?(en.right=T,en.left=et):(en.left=I,en.right=et),el?(en.bottom=_,en.top=et):(en.top=B,en.bottom=et)}var eu={};return V&&(V.includes("height")&&F?eu.height=F:V.includes("minHeight")&&F&&(eu.minHeight=F),V.includes("width")&&O?eu.width=O:V.includes("minWidth")&&O&&(eu.minWidth=O)),h||(eu.pointerEvents="none"),a.createElement(R,{open:C||Q,getContainer:M&&function(){return M(s)},autoDestroy:P},a.createElement(A,{prefixCls:l,open:h,zIndex:H,mask:g,motion:k}),a.createElement(Z.Z,{onResize:X,disabled:!h},function(e){return a.createElement(N.ZP,(0,S.Z)({motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,forceRender:C,leavedClassName:"".concat(l,"-hidden")},E,{onAppearPrepare:j,onEnterPrepare:j,visible:h,onVisibleChanged:function(e){var t;null==E||null===(t=E.onVisibleChanged)||void 0===t||t.call(E,e),f(e)}}),function(n,r){var s=n.className,f=n.style,d=x()(l,s,i);return a.createElement("div",{ref:(0,c.sQ)(e,t,r),className:d,style:(0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({"--arrow-x":"".concat(b.x||0,"px"),"--arrow-y":"".concat(b.y||0,"px")},en),eu),f),{},{boxSizing:"border-box",zIndex:H},u),onMouseEnter:W,onMouseLeave:D,onPointerEnter:Y,onClick:m},y&&a.createElement(L,{prefixCls:l,arrow:y,arrowPos:b,align:w}),a.createElement(z,{cache:!h&&!v},J))})}))}),W=a.forwardRef(function(e,t){var n=e.children,o=e.getTriggerDOMNode,r=(0,c.Yr)(n),i=a.useCallback(function(e){(0,c.mH)(t,o?o(e):e)},[o]),l=(0,c.x1)(i,n.ref);return r?a.cloneElement(n,{ref:l}):n}),D=a.createContext(null);function Y(e){return e?Array.isArray(e)?e:[e]:[]}var q=n(69194);function I(e,t,n,o){return t||(n?{motionName:"".concat(e,"-").concat(n)}:o?{motionName:o}:null)}function B(e){return e.ownerDocument.defaultView}function T(e){for(var t=[],n=null==e?void 0:e.parentElement,o=["hidden","scroll","clip","auto"];n;){var r=B(n).getComputedStyle(n);[r.overflowX,r.overflowY,r.overflow].some(function(e){return o.includes(e)})&&t.push(n),n=n.parentElement}return t}function _(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Number.isNaN(e)?t:e}function X(e){return _(parseFloat(e),0)}function j(e,t){var n=(0,o.Z)({},e);return(t||[]).forEach(function(e){if(!(e instanceof HTMLBodyElement||e instanceof HTMLHtmlElement)){var t=B(e).getComputedStyle(e),o=t.overflow,r=t.overflowClipMargin,i=t.borderTopWidth,a=t.borderBottomWidth,l=t.borderLeftWidth,u=t.borderRightWidth,c=e.getBoundingClientRect(),s=e.offsetHeight,f=e.clientHeight,d=e.offsetWidth,h=e.clientWidth,p=X(i),v=X(a),m=X(l),g=X(u),y=_(Math.round(c.width/d*1e3)/1e3),b=_(Math.round(c.height/s*1e3)/1e3),w=p*b,x=m*y,Z=0,E=0;if("clip"===o){var k=X(r);Z=k*y,E=k*b}var C=c.x+x-Z,M=c.y+w-E,P=C+c.width+2*Z-x-g*y-(d-h-m-g)*y,R=M+c.height+2*E-w-v*b-(s-f-p-v)*b;n.left=Math.max(n.left,C),n.top=Math.max(n.top,M),n.right=Math.min(n.right,P),n.bottom=Math.min(n.bottom,R)}}),n}function V(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n="".concat(t),o=n.match(/^(.*)\%$/);return o?e*(parseFloat(o[1])/100):parseFloat(n)}function O(e,t){var n=(0,r.Z)(t||[],2),o=n[0],i=n[1];return[V(e.width,o),V(e.height,i)]}function F(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return[e[0],e[1]]}function J(e,t){var n,o=t[0],r=t[1];return n="t"===o?e.y:"b"===o?e.y+e.height:e.y+e.height/2,{x:"l"===r?e.x:"r"===r?e.x+e.width:e.x+e.width/2,y:n}}function Q(e,t){var n={t:"b",b:"t",l:"r",r:"l"};return e.map(function(e,o){return o===t?n[e]||"c":e}).join("")}var U=["prefixCls","children","action","showAction","hideAction","popupVisible","defaultPopupVisible","onPopupVisibleChange","afterPopupVisibleChange","mouseEnterDelay","mouseLeaveDelay","focusDelay","blurDelay","mask","maskClosable","getPopupContainer","forceRender","autoDestroy","destroyPopupOnHide","popup","popupClassName","popupStyle","popupPlacement","builtinPlacements","popupAlign","zIndex","stretch","getPopupClassNameFromAlign","fresh","alignPoint","onPopupClick","onPopupAlign","arrow","popupMotion","maskMotion","popupTransitionName","popupAnimation","maskTransitionName","maskAnimation","className","getTriggerDOMNode"];let $=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b;return a.forwardRef(function(t,n){var l,u,c,s,h,p,v,m,g,y,b,w,k,S,N,L,A=t.prefixCls,z=void 0===A?"rc-trigger-popup":A,X=t.children,V=t.action,$=t.showAction,G=t.hideAction,K=t.popupVisible,ee=t.defaultPopupVisible,et=t.onPopupVisibleChange,en=t.afterPopupVisibleChange,eo=t.mouseEnterDelay,er=t.mouseLeaveDelay,ei=void 0===er?.1:er,ea=t.focusDelay,el=t.blurDelay,eu=t.mask,ec=t.maskClosable,es=t.getPopupContainer,ef=t.forceRender,ed=t.autoDestroy,eh=t.destroyPopupOnHide,ep=t.popup,ev=t.popupClassName,em=t.popupStyle,eg=t.popupPlacement,ey=t.builtinPlacements,eb=void 0===ey?{}:ey,ew=t.popupAlign,ex=t.zIndex,eZ=t.stretch,eE=t.getPopupClassNameFromAlign,ek=t.fresh,eC=t.alignPoint,eM=t.onPopupClick,eP=t.onPopupAlign,eR=t.arrow,eS=t.popupMotion,eN=t.maskMotion,eL=t.popupTransitionName,eA=t.popupAnimation,ez=t.maskTransitionName,eH=t.maskAnimation,eW=t.className,eD=t.getTriggerDOMNode,eY=(0,i.Z)(t,U),eq=a.useState(!1),eI=(0,r.Z)(eq,2),eB=eI[0],eT=eI[1];(0,d.Z)(function(){eT((0,R.Z)())},[]);var e_=a.useRef({}),eX=a.useContext(D),ej=a.useMemo(function(){return{registerSubPopup:function(e,t){e_.current[e]=t,null==eX||eX.registerSubPopup(e,t)}}},[eX]),eV=(0,P.Z)(),eO=a.useState(null),eF=(0,r.Z)(eO,2),eJ=eF[0],eQ=eF[1],eU=a.useRef(null),e$=(0,M.Z)(function(e){eU.current=e,(0,E.Sh)(e)&&eJ!==e&&eQ(e),null==eX||eX.registerSubPopup(eV,e)}),eG=a.useState(null),eK=(0,r.Z)(eG,2),e0=eK[0],e1=eK[1],e2=a.useRef(null),e5=(0,M.Z)(function(e){(0,E.Sh)(e)&&e0!==e&&(e1(e),e2.current=e)}),e3=a.Children.only(X),e7=(null==e3?void 0:e3.props)||{},e8={},e6=(0,M.Z)(function(e){var t,n;return(null==e0?void 0:e0.contains(e))||(null===(t=C(e0))||void 0===t?void 0:t.host)===e||e===e0||(null==eJ?void 0:eJ.contains(e))||(null===(n=C(eJ))||void 0===n?void 0:n.host)===e||e===eJ||Object.values(e_.current).some(function(t){return(null==t?void 0:t.contains(e))||e===t})}),e4=I(z,eS,eA,eL),e9=I(z,eN,eH,ez),te=a.useState(ee||!1),tt=(0,r.Z)(te,2),tn=tt[0],to=tt[1],tr=null!=K?K:tn,ti=(0,M.Z)(function(e){void 0===K&&to(e)});(0,d.Z)(function(){to(K||!1)},[K]);var ta=a.useRef(tr);ta.current=tr;var tl=a.useRef([]);tl.current=[];var tu=(0,M.Z)(function(e){var t;ti(e),(null!==(t=tl.current[tl.current.length-1])&&void 0!==t?t:tr)!==e&&(tl.current.push(e),null==et||et(e))}),tc=a.useRef(),ts=function(){clearTimeout(tc.current)},tf=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;ts(),0===t?tu(e):tc.current=setTimeout(function(){tu(e)},1e3*t)};a.useEffect(function(){return ts},[]);var td=a.useState(!1),th=(0,r.Z)(td,2),tp=th[0],tv=th[1];(0,d.Z)(function(e){(!e||tr)&&tv(!0)},[tr]);var tm=a.useState(null),tg=(0,r.Z)(tm,2),ty=tg[0],tb=tg[1],tw=a.useState(null),tx=(0,r.Z)(tw,2),tZ=tx[0],tE=tx[1],tk=function(e){tE([e.clientX,e.clientY])},tC=(l=eC&&null!==tZ?tZ:e0,u=a.useState({ready:!1,offsetX:0,offsetY:0,offsetR:0,offsetB:0,arrowX:0,arrowY:0,scaleX:1,scaleY:1,align:eb[eg]||{}}),s=(c=(0,r.Z)(u,2))[0],h=c[1],p=a.useRef(0),v=a.useMemo(function(){return eJ?T(eJ):[]},[eJ]),m=a.useRef({}),tr||(m.current={}),g=(0,M.Z)(function(){if(eJ&&l&&tr){var e=eJ.ownerDocument,t=B(eJ).getComputedStyle(eJ),n=t.width,i=t.height,a=t.position,u=eJ.style.left,c=eJ.style.top,s=eJ.style.right,f=eJ.style.bottom,d=eJ.style.overflow,p=(0,o.Z)((0,o.Z)({},eb[eg]),ew),g=e.createElement("div");if(null===(Z=eJ.parentElement)||void 0===Z||Z.appendChild(g),g.style.left="".concat(eJ.offsetLeft,"px"),g.style.top="".concat(eJ.offsetTop,"px"),g.style.position=a,g.style.height="".concat(eJ.offsetHeight,"px"),g.style.width="".concat(eJ.offsetWidth,"px"),eJ.style.left="0",eJ.style.top="0",eJ.style.right="auto",eJ.style.bottom="auto",eJ.style.overflow="hidden",Array.isArray(l))P={x:l[0],y:l[1],width:0,height:0};else{var y,b,w,x,Z,k,C,M,P,R,S,N=l.getBoundingClientRect();N.x=null!==(R=N.x)&&void 0!==R?R:N.left,N.y=null!==(S=N.y)&&void 0!==S?S:N.top,P={x:N.x,y:N.y,width:N.width,height:N.height}}var L=eJ.getBoundingClientRect();L.x=null!==(k=L.x)&&void 0!==k?k:L.left,L.y=null!==(C=L.y)&&void 0!==C?C:L.top;var A=e.documentElement,z=A.clientWidth,H=A.clientHeight,W=A.scrollWidth,D=A.scrollHeight,Y=A.scrollTop,I=A.scrollLeft,T=L.height,X=L.width,V=P.height,U=P.width,$=p.htmlRegion,G="visible",K="visibleFirst";"scroll"!==$&&$!==K&&($=G);var ee=$===K,et=j({left:-I,top:-Y,right:W-I,bottom:D-Y},v),en=j({left:0,top:0,right:z,bottom:H},v),eo=$===G?en:et,er=ee?en:eo;eJ.style.left="auto",eJ.style.top="auto",eJ.style.right="0",eJ.style.bottom="0";var ei=eJ.getBoundingClientRect();eJ.style.left=u,eJ.style.top=c,eJ.style.right=s,eJ.style.bottom=f,eJ.style.overflow=d,null===(M=eJ.parentElement)||void 0===M||M.removeChild(g);var ea=_(Math.round(X/parseFloat(n)*1e3)/1e3),el=_(Math.round(T/parseFloat(i)*1e3)/1e3);if(!(0===ea||0===el||(0,E.Sh)(l)&&!(0,q.Z)(l))){var eu=p.offset,ec=p.targetOffset,es=O(L,eu),ef=(0,r.Z)(es,2),ed=ef[0],eh=ef[1],ep=O(P,ec),ev=(0,r.Z)(ep,2),em=ev[0],ey=ev[1];P.x-=em,P.y-=ey;var ex=p.points||[],eZ=(0,r.Z)(ex,2),eE=eZ[0],ek=F(eZ[1]),eC=F(eE),eM=J(P,ek),eR=J(L,eC),eS=(0,o.Z)({},p),eN=eM.x-eR.x+ed,eL=eM.y-eR.y+eh,eA=ts(eN,eL),ez=ts(eN,eL,en),eH=J(P,["t","l"]),eW=J(L,["t","l"]),eD=J(P,["b","r"]),eY=J(L,["b","r"]),eq=p.overflow||{},eI=eq.adjustX,eB=eq.adjustY,eT=eq.shiftX,e_=eq.shiftY,eX=function(e){return"boolean"==typeof e?e:e>=0};tf();var ej=eX(eB),eV=eC[0]===ek[0];if(ej&&"t"===eC[0]&&(b>er.bottom||m.current.bt)){var eO=eL;eV?eO-=T-V:eO=eH.y-eY.y-eh;var eF=ts(eN,eO),eQ=ts(eN,eO,en);eF>eA||eF===eA&&(!ee||eQ>=ez)?(m.current.bt=!0,eL=eO,eh=-eh,eS.points=[Q(eC,0),Q(ek,0)]):m.current.bt=!1}if(ej&&"b"===eC[0]&&(y<er.top||m.current.tb)){var eU=eL;eV?eU+=T-V:eU=eD.y-eW.y-eh;var e$=ts(eN,eU),eG=ts(eN,eU,en);e$>eA||e$===eA&&(!ee||eG>=ez)?(m.current.tb=!0,eL=eU,eh=-eh,eS.points=[Q(eC,0),Q(ek,0)]):m.current.tb=!1}var eK=eX(eI),e0=eC[1]===ek[1];if(eK&&"l"===eC[1]&&(x>er.right||m.current.rl)){var e1=eN;e0?e1-=X-U:e1=eH.x-eY.x-ed;var e2=ts(e1,eL),e5=ts(e1,eL,en);e2>eA||e2===eA&&(!ee||e5>=ez)?(m.current.rl=!0,eN=e1,ed=-ed,eS.points=[Q(eC,1),Q(ek,1)]):m.current.rl=!1}if(eK&&"r"===eC[1]&&(w<er.left||m.current.lr)){var e3=eN;e0?e3+=X-U:e3=eD.x-eW.x-ed;var e7=ts(e3,eL),e8=ts(e3,eL,en);e7>eA||e7===eA&&(!ee||e8>=ez)?(m.current.lr=!0,eN=e3,ed=-ed,eS.points=[Q(eC,1),Q(ek,1)]):m.current.lr=!1}tf();var e6=!0===eT?0:eT;"number"==typeof e6&&(w<en.left&&(eN-=w-en.left-ed,P.x+U<en.left+e6&&(eN+=P.x-en.left+U-e6)),x>en.right&&(eN-=x-en.right-ed,P.x>en.right-e6&&(eN+=P.x-en.right+e6)));var e4=!0===e_?0:e_;"number"==typeof e4&&(y<en.top&&(eL-=y-en.top-eh,P.y+V<en.top+e4&&(eL+=P.y-en.top+V-e4)),b>en.bottom&&(eL-=b-en.bottom-eh,P.y>en.bottom-e4&&(eL+=P.y-en.bottom+e4)));var e9=L.x+eN,te=L.y+eL,tt=P.x,tn=P.y,to=Math.max(e9,tt),ti=Math.min(e9+X,tt+U),ta=Math.max(te,tn),tl=Math.min(te+T,tn+V);null==eP||eP(eJ,eS);var tu=ei.right-L.x-(eN+L.width),tc=ei.bottom-L.y-(eL+L.height);1===ea&&(eN=Math.round(eN),tu=Math.round(tu)),1===el&&(eL=Math.round(eL),tc=Math.round(tc)),h({ready:!0,offsetX:eN/ea,offsetY:eL/el,offsetR:tu/ea,offsetB:tc/el,arrowX:((to+ti)/2-e9)/ea,arrowY:((ta+tl)/2-te)/el,scaleX:ea,scaleY:el,align:eS})}function ts(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:eo,o=L.x+e,r=L.y+t,i=Math.max(o,n.left),a=Math.max(r,n.top);return Math.max(0,(Math.min(o+X,n.right)-i)*(Math.min(r+T,n.bottom)-a))}function tf(){b=(y=L.y+eL)+T,x=(w=L.x+eN)+X}}}),y=function(){h(function(e){return(0,o.Z)((0,o.Z)({},e),{},{ready:!1})})},(0,d.Z)(y,[eg]),(0,d.Z)(function(){tr||y()},[tr]),[s.ready,s.offsetX,s.offsetY,s.offsetR,s.offsetB,s.arrowX,s.arrowY,s.scaleX,s.scaleY,s.align,function(){p.current+=1;var e=p.current;Promise.resolve().then(function(){p.current===e&&g()})}]),tM=(0,r.Z)(tC,11),tP=tM[0],tR=tM[1],tS=tM[2],tN=tM[3],tL=tM[4],tA=tM[5],tz=tM[6],tH=tM[7],tW=tM[8],tD=tM[9],tY=tM[10],tq=(b=void 0===V?"hover":V,a.useMemo(function(){var e=Y(null!=$?$:b),t=Y(null!=G?G:b),n=new Set(e),o=new Set(t);return eB&&(n.has("hover")&&(n.delete("hover"),n.add("click")),o.has("hover")&&(o.delete("hover"),o.add("click"))),[n,o]},[eB,b,$,G])),tI=(0,r.Z)(tq,2),tB=tI[0],tT=tI[1],t_=tB.has("click"),tX=tT.has("click")||tT.has("contextMenu"),tj=(0,M.Z)(function(){tp||tY()});w=function(){ta.current&&eC&&tX&&tf(!1)},(0,d.Z)(function(){if(tr&&e0&&eJ){var e=T(e0),t=T(eJ),n=B(eJ),o=new Set([n].concat((0,f.Z)(e),(0,f.Z)(t)));function r(){tj(),w()}return o.forEach(function(e){e.addEventListener("scroll",r,{passive:!0})}),n.addEventListener("resize",r,{passive:!0}),tj(),function(){o.forEach(function(e){e.removeEventListener("scroll",r),n.removeEventListener("resize",r)})}}},[tr,e0,eJ]),(0,d.Z)(function(){tj()},[tZ,eg]),(0,d.Z)(function(){tr&&!(null!=eb&&eb[eg])&&tj()},[JSON.stringify(ew)]);var tV=a.useMemo(function(){var e=function(e,t,n,o){for(var r=n.points,i=Object.keys(e),a=0;a<i.length;a+=1){var l,u=i[a];if(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0;return n?e[0]===t[0]:e[0]===t[0]&&e[1]===t[1]}(null===(l=e[u])||void 0===l?void 0:l.points,r,o))return"".concat(t,"-placement-").concat(u)}return""}(eb,z,tD,eC);return x()(e,null==eE?void 0:eE(tD))},[tD,eE,eb,z,eC]);a.useImperativeHandle(n,function(){return{nativeElement:e2.current,popupElement:eU.current,forceAlign:tj}});var tO=a.useState(0),tF=(0,r.Z)(tO,2),tJ=tF[0],tQ=tF[1],tU=a.useState(0),t$=(0,r.Z)(tU,2),tG=t$[0],tK=t$[1],t0=function(){if(eZ&&e0){var e=e0.getBoundingClientRect();tQ(e.width),tK(e.height)}};function t1(e,t,n,o){e8[e]=function(r){var i;null==o||o(r),tf(t,n);for(var a=arguments.length,l=Array(a>1?a-1:0),u=1;u<a;u++)l[u-1]=arguments[u];null===(i=e7[e])||void 0===i||i.call.apply(i,[e7,r].concat(l))}}(0,d.Z)(function(){ty&&(tY(),ty(),tb(null))},[ty]),(t_||tX)&&(e8.onClick=function(e){var t;ta.current&&tX?tf(!1):!ta.current&&t_&&(tk(e),tf(!0));for(var n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];null===(t=e7.onClick)||void 0===t||t.call.apply(t,[e7,e].concat(o))}),k=void 0===ec||ec,(S=a.useRef(tr)).current=tr,a.useEffect(function(){if(tX&&eJ&&(!eu||k)){var e=function(e){var t;S.current&&!e6((null===(t=e.composedPath)||void 0===t||null===(t=t.call(e))||void 0===t?void 0:t[0])||e.target)&&tf(!1)},t=B(eJ);t.addEventListener("mousedown",e,!0),t.addEventListener("contextmenu",e,!0);var n=C(e0);return n&&(n.addEventListener("mousedown",e,!0),n.addEventListener("contextmenu",e,!0)),function(){t.removeEventListener("mousedown",e,!0),t.removeEventListener("contextmenu",e,!0),n&&(n.removeEventListener("mousedown",e,!0),n.removeEventListener("contextmenu",e,!0))}}},[tX,e0,eJ,eu,k]);var t2=tB.has("hover"),t5=tT.has("hover");t2&&(t1("onMouseEnter",!0,eo,function(e){tk(e)}),t1("onPointerEnter",!0,eo,function(e){tk(e)}),N=function(e){(tr||tp)&&null!=eJ&&eJ.contains(e.target)&&tf(!0,eo)},eC&&(e8.onMouseMove=function(e){var t;null===(t=e7.onMouseMove)||void 0===t||t.call(e7,e)})),t5&&(t1("onMouseLeave",!1,ei),t1("onPointerLeave",!1,ei),L=function(){tf(!1,ei)}),tB.has("focus")&&t1("onFocus",!0,ea),tT.has("focus")&&t1("onBlur",!1,el),tB.has("contextMenu")&&(e8.onContextMenu=function(e){var t;ta.current&&tT.has("contextMenu")?tf(!1):(tk(e),tf(!0)),e.preventDefault();for(var n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];null===(t=e7.onContextMenu)||void 0===t||t.call.apply(t,[e7,e].concat(o))}),eW&&(e8.className=x()(e7.className,eW));var t3=(0,o.Z)((0,o.Z)({},e7),e8),t7={};["onContextMenu","onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur"].forEach(function(e){eY[e]&&(t7[e]=function(){for(var t,n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];null===(t=t3[e])||void 0===t||t.call.apply(t,[t3].concat(o)),eY[e].apply(eY,o)})});var t8=a.cloneElement(e3,(0,o.Z)((0,o.Z)({},t3),t7)),t6=eR?(0,o.Z)({},!0!==eR?eR:{}):null;return a.createElement(a.Fragment,null,a.createElement(Z.Z,{disabled:!tr,ref:e5,onResize:function(){t0(),tj()}},a.createElement(W,{getTriggerDOMNode:eD},t8)),a.createElement(D.Provider,{value:ej},a.createElement(H,{portal:e,ref:e$,prefixCls:z,popup:ep,className:x()(ev,tV),style:em,target:e0,onMouseEnter:N,onMouseLeave:L,onPointerEnter:N,zIndex:ex,open:tr,keepDom:tp,fresh:ek,onClick:eM,mask:eu,motion:e4,maskMotion:e9,onVisibleChanged:function(e){tv(!1),tY(),null==en||en(e)},onPrepare:function(){return new Promise(function(e){t0(),tb(function(){return e})})},forceRender:ef,autoDestroy:ed||eh||!1,getPopupContainer:es,align:tD,arrow:t6,arrowPos:{x:tA,y:tz},ready:tP,offsetX:tR,offsetY:tS,offsetR:tN,offsetB:tL,onAlign:tj,stretch:eZ,targetWidth:tJ/tH,targetHeight:tG/tW})))})}(b)},13751:(e,t,n)=>{n.d(t,{Z:()=>x});var o=n(22988),r=n(2265),i=n(79542);n(62738);var a=n(42897),l=n(8620),u=n(12369),c=n(66554),s=r.createContext(null),f=n(60778),d=new Map,h=new f.Z(function(e){e.forEach(function(e){var t,n=e.target;null===(t=d.get(n))||void 0===t||t.forEach(function(e){return e(n)})})}),p=n(82546),v=n(84179),m=n(71227),g=n(16401),y=function(e){(0,m.Z)(n,e);var t=(0,g.Z)(n);function n(){return(0,p.Z)(this,n),t.apply(this,arguments)}return(0,v.Z)(n,[{key:"render",value:function(){return this.props.children}}]),n}(r.Component),b=r.forwardRef(function(e,t){var n=e.children,o=e.disabled,i=r.useRef(null),f=r.useRef(null),p=r.useContext(s),v="function"==typeof n,m=v?n(i):n,g=r.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),b=!v&&r.isValidElement(m)&&(0,c.Yr)(m),w=b?m.ref:null,x=(0,c.x1)(w,i),Z=function(){var e;return(0,u.ZP)(i.current)||(i.current&&"object"===(0,l.Z)(i.current)?(0,u.ZP)(null===(e=i.current)||void 0===e?void 0:e.nativeElement):null)||(0,u.ZP)(f.current)};r.useImperativeHandle(t,function(){return Z()});var E=r.useRef(e);E.current=e;var k=r.useCallback(function(e){var t=E.current,n=t.onResize,o=t.data,r=e.getBoundingClientRect(),i=r.width,l=r.height,u=e.offsetWidth,c=e.offsetHeight,s=Math.floor(i),f=Math.floor(l);if(g.current.width!==s||g.current.height!==f||g.current.offsetWidth!==u||g.current.offsetHeight!==c){var d={width:s,height:f,offsetWidth:u,offsetHeight:c};g.current=d;var h=u===Math.round(i)?i:u,v=c===Math.round(l)?l:c,m=(0,a.Z)((0,a.Z)({},d),{},{offsetWidth:h,offsetHeight:v});null==p||p(m,e,o),n&&Promise.resolve().then(function(){n(m,e)})}},[]);return r.useEffect(function(){var e=Z();return e&&!o&&(d.has(e)||(d.set(e,new Set),h.observe(e)),d.get(e).add(k)),function(){d.has(e)&&(d.get(e).delete(k),d.get(e).size||(h.unobserve(e),d.delete(e)))}},[i.current,o]),r.createElement(y,{ref:f},b?r.cloneElement(m,{ref:x}):m)}),w=r.forwardRef(function(e,t){var n=e.children;return("function"==typeof n?[n]:(0,i.Z)(n)).map(function(n,i){var a=(null==n?void 0:n.key)||"".concat("rc-observer-key","-").concat(i);return r.createElement(b,(0,o.Z)({},e,{key:a,ref:0===i?t:void 0}),n)})});w.Collection=function(e){var t=e.children,n=e.onBatchResize,o=r.useRef(0),i=r.useRef([]),a=r.useContext(s),l=r.useCallback(function(e,t,r){o.current+=1;var l=o.current;i.current.push({size:e,element:t,data:r}),Promise.resolve().then(function(){l===o.current&&(null==n||n(i.current),i.current=[])}),null==a||a(e,t,r)},[n,a]);return r.createElement(s.Provider,{value:l},t)};let x=w},15323:(e,t,n)=>{n.d(t,{o:()=>r});var o=n(12378);function r(e){return"undefined"!=typeof document&&e&&e instanceof Element?function(e){var t,n,r="rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)),i=document.createElement("div");i.id=r;var a=i.style;if(a.position="absolute",a.left="0",a.top="0",a.width="100px",a.height="100px",a.overflow="scroll",e){var l=getComputedStyle(e);a.scrollbarColor=l.scrollbarColor,a.scrollbarWidth=l.scrollbarWidth;var u=getComputedStyle(e,"::-webkit-scrollbar"),c=parseInt(u.width,10),s=parseInt(u.height,10);try{var f=c?"width: ".concat(u.width,";"):"",d=s?"height: ".concat(u.height,";"):"";(0,o.hq)("\n#".concat(r,"::-webkit-scrollbar {\n").concat(f,"\n").concat(d,"\n}"),r)}catch(e){console.error(e),t=c,n=s}}document.body.appendChild(i);var h=e&&t&&!isNaN(t)?t:i.offsetWidth-i.clientWidth,p=e&&n&&!isNaN(n)?n:i.offsetHeight-i.clientHeight;return document.body.removeChild(i),(0,o.jL)(r),{width:h,height:p}}(e):{width:0,height:0}}},90079:(e,t,n)=>{n.d(t,{Z:()=>c});var o,r=n(39428),i=n(42897),a=n(2265),l=0,u=(0,i.Z)({},o||(o=n.t(a,2))).useId;let c=u?function(e){var t=u();return e||t}:function(e){var t=a.useState("ssr-id"),n=(0,r.Z)(t,2),o=n[0],i=n[1];return(a.useEffect(function(){var e=l;l+=1,i("rc_unique_".concat(e))},[]),e)?e:o}},35045:(e,t,n)=>{n.d(t,{Z:()=>o});function o(){if("undefined"==typeof navigator||"undefined"==typeof window)return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(null==e?void 0:e.substr(0,4))}}}]);
"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[2239],{70172:(e,t,n)=>{n.d(t,{Z:()=>Z});var o=n(14050),r=n(33555),c=n(6137),l=n(83716),s=n(77361),i=n(56112),a=n(2155),d=n(46752),u=n(32340),m=n(6202),f=n(31212),p=n(59107),v=n(3657),g=n(35148);const h=(0,d.y)("Avatar");h.media=h("media"),h.icon=h("icon");const Z=(0,o.X$)((e=>{let{className:t,size:n="large",chat:Z,user:I,photo:C,userStatus:P,text:y,isSavedMessages:b,withVideo:E,noLoop:w,lastSyncTime:A,animationLevel:N,observeIntersection:T,onClick:B}=e;const{loadFullUser:k}=(0,r.Sv)(),S=(0,o.sO)(null),U=(0,o.sO)(0),R=(0,v.Op)(S,T),L=I&&(0,i.NB)(I),O=I&&(0,i.pK)(I.id),x=Z?.isForum;let F,q;const D=!s.as&&N===l.zy8&&R&&E&&I?.isPremium&&I?.hasVideoAvatar,V=I?.fullInfo?.profilePhoto,j=D&&V?.isVideo,H="jumbo"===n;b||L||(I?F=(0,i.RT)(I,H?"big":void 0):Z?F=(0,i.RT)(Z,H?"big":void 0):C&&(F=`photo${C.id}?size=m`),j&&(q=(0,i.RT)(I,void 0,"video")));const M=(0,m.Z)(F,!1,c.IU.BlobUrl,A),$=(0,m.Z)(q,!j,c.IU.BlobUrl,A),K=Boolean(M||$),_=Boolean(R&&$),{transitionClassNames:z}=(0,f.Z)(K,void 0,K,"slow"),J=(0,o.I4)((e=>{const t=e.currentTarget;$&&(U.current+=1,(U.current>=3||w)&&(t.style.display="none"))}),[w,$]),X=I?.id;(0,o.d4)((()=>{X&&D&&!V&&k({userId:X})}),[k,V,X,D]);const G=(0,p.Z)();let Y;const W=I?(0,i.Js)(I):Z?(0,i.U)(G,Z):y;if(b)Y=o.ZP.createElement("i",{className:(0,d.Z)(h.icon,"icon-avatar-saved-messages"),role:"img","aria-label":W});else if(L)Y=o.ZP.createElement("i",{className:(0,d.Z)(h.icon,"icon-avatar-deleted-account"),role:"img","aria-label":W});else if(O)Y=o.ZP.createElement("i",{className:(0,d.Z)(h.icon,"icon-reply-filled"),role:"img","aria-label":W});else if(K)Y=o.ZP.createElement(o.ZP.Fragment,null,o.ZP.createElement("img",{src:M,className:(0,d.Z)(h.media,"avatar-media",z,$&&"poster"),alt:W,decoding:"async"}),_&&o.ZP.createElement(g.Z,{canPlay:!0,src:$,className:(0,d.Z)(h.media,"avatar-media"),muted:!0,autoPlay:!0,disablePictureInPicture:!0,playsInline:!0,onEnded:J}));else if(I){const e=(0,i.Js)(I);Y=e?(0,a.Xv)(e,2):void 0}else if(Z){const e=(0,i.U)(G,Z);Y=e&&(0,a.Xv)(e,(0,i.YC)(Z.id)?2:1)}else y&&(Y=(0,a.Xv)(y,2));const Q=!b&&I&&P&&(0,i.kM)(I,P),ee=(0,d.Z)(`Avatar size-${n}`,t,`color-bg-${(0,i.Rs)(I||Z)}`,b&&"saved-messages",L&&"deleted-account",O&&"replies-bot-account",x&&"forum",Q&&"online",B&&"interactive",!b&&!M&&"no-photo"),te=Boolean(b||M),ne=(0,o.I4)((e=>{B&&B(e,te)}),[B,te]),oe=(I||Z)&&(I||Z).id;return o.ZP.createElement("div",{ref:S,className:ee,onClick:ne,"data-test-sender-id":l.Cgt?oe:void 0,"aria-label":"string"==typeof Y?W:void 0},"string"==typeof Y?(0,u.Z)(Y,["jumbo"===n?"hq_emoji":"emoji"]):Y)}))},22275:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(14050),r=n(33555),c=n(11192),l=n(56112),s=n(32340),i=n(59107),a=n(13103),d=n(231);const u=(0,o.X$)((0,r.c$)(((e,t)=>{let{userId:n}=t;const o=(0,c.jr)(e),r=n&&(0,c.dy)(e,n);return{chat:o,contactName:r?(0,l.Vl)(r):void 0}}))((e=>{let{isOpen:t,chat:n,userId:c,contactName:l,onClose:u}=e;const{deleteChatMember:m}=(0,r.Sv)(),f=(0,i.Z)(),p=(0,o.I4)((()=>{m({chatId:n.id,userId:c}),u()}),[n,m,u,c]);if(n&&c)return o.ZP.createElement(a.Z,{isOpen:t,onClose:u,onEnter:p,className:"delete",title:f("GroupRemoved.Remove")},o.ZP.createElement("p",null,(0,s.Z)(f("PeerInfo.Confirm.RemovePeer",l))),o.ZP.createElement(d.Z,{color:"danger",className:"confirm-dialog-button",isText:!0,onClick:p},f("lng_box_remove")),o.ZP.createElement(d.Z,{className:"confirm-dialog-button",isText:!0,onClick:u},f("Cancel")))})))},21273:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(91713),r=n(14050),c=n(69118),l=n(87675),s=n(77361),i=n(80036);const a=".ListItem",d=20,u=800,m=e=>{let{ref:t,className:n,items:m,itemSelector:f=a,preloadBackwards:p=d,sensitiveArea:v=u,withAbsolutePositioning:g,maxHeight:h,noScrollRestore:Z=!1,noScrollRestoreOnTop:I=!1,noFastList:C,cacheBuster:P,beforeChildren:y,children:b,onLoadMore:E,onScroll:w,onKeyDown:A,onDragOver:N,onDragLeave:T}=e,B=(0,r.sO)(null);t&&(B=t);const k=(0,r.sO)({}),[S,U]=(0,r.Ye)((()=>E?[(0,c.Ds)((function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];E({direction:o.Uq.Backwards,noScroll:e})}),1e3,!0,!1),(0,c.Ds)((()=>{E({direction:o.Uq.Forwards})}),1e3,!0,!1)]:[]),[E,m]);(0,r.d4)((()=>{if(!S)return;if(p>0&&(!m||m.length<p))return void S(!0);const{scrollHeight:e,clientHeight:t}=B.current;t&&e<=t&&S()}),[m,S,p]),(0,r.bt)((()=>{const e=B.current,t=k.current;let n;if(t.listItemElements=e.querySelectorAll(f),t.currentAnchor&&Array.from(t.listItemElements).includes(t.currentAnchor)){const{scrollTop:o}=e;n=o+(t.currentAnchor.getBoundingClientRect().top-t.currentAnchorTop)}else{const e=t.listItemElements[0];e&&(t.currentAnchor=e,t.currentAnchorTop=e.getBoundingClientRect().top)}g||Z||I&&0===e.scrollTop||((0,l.Z)(e,n),t.isScrollTopJustUpdated=!0)}),[m,f,Z,I,P,g]);const R=(0,r.I4)((e=>{if(U&&S){const{isScrollTopJustUpdated:e,currentAnchor:t,currentAnchorTop:n}=k.current,o=k.current.listItemElements;if(e)return void(k.current.isScrollTopJustUpdated=!1);const r=o.length,c=B.current,{scrollTop:l,scrollHeight:s,offsetHeight:i}=c,a=l<=(r?o[0].offsetTop:0)+v,d=(r?o[r-1].offsetTop+o[r-1].offsetHeight:s)-(l+i)<=v;let u=!1;if(a){const e=o[0];if(e){const o=e.getBoundingClientRect().top,r=t?.offsetParent&&t!==e?t.getBoundingClientRect().top:o;t&&void 0!==n&&r>n&&(k.current.currentAnchor=e,k.current.currentAnchorTop=o,u=!0,U())}}if(d){const e=o[r-1];if(e){const o=e.getBoundingClientRect().top,r=t?.offsetParent&&t!==e?t.getBoundingClientRect().top:o;t&&void 0!==n&&r<n&&(k.current.currentAnchor=e,k.current.currentAnchorTop=o,u=!0,S())}}if(!u)if(t?.offsetParent)k.current.currentAnchorTop=t.getBoundingClientRect().top;else{const e=o[0];e&&(k.current.currentAnchor=e,k.current.currentAnchorTop=e.getBoundingClientRect().top)}}w&&w(e)}),[S,U,w,v]);return r.ZP.createElement("div",{ref:B,className:n,onScroll:R,teactFastList:!C&&!g,onKeyDown:A,onDragOver:N,onDragLeave:T},y,g&&m?.length?r.ZP.createElement("div",{teactFastList:!C,style:(0,i.Z)("position: relative",s.wZ&&`height: ${h}px`)},b):b)}},13103:(e,t,n)=>{n.d(t,{Z:()=>p});var o=n(14050),r=n(517),c=n(46752),l=n(98069),s=n(18674),i=n(31212),a=n(274),d=n(59107),u=n(46590),m=n(231),f=n(62898);const p=e=>{let{dialogRef:t,title:n,className:p,isOpen:v,header:g,hasCloseButton:h,noBackdrop:Z,children:I,style:C,onClose:P,onCloseAnimationEnd:y,onEnter:b,shouldSkipHistoryAnimations:E}=e;const{shouldRender:w,transitionClassNames:A}=(0,i.Z)(v,y,E,void 0,E),N=(0,o.sO)(null);(0,o.d4)((()=>{if(v)return(0,l.l_)(),l.In}),[v]),(0,o.d4)((()=>v?(0,r.Z)({onEsc:P,onEnter:b}):void 0),[v,P,b]),(0,o.d4)((()=>v&&N.current?function(e){function t(t){if("Tab"!==t.key)return;t.preventDefault(),t.stopPropagation();const n=Array.from(e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));if(!n.length)return;const o=n.findIndex((e=>e.isSameNode(document.activeElement)));let r=0;o>=0&&(r=t.shiftKey?o>0?o-1:n.length-1:o<n.length-1?o+1:0),n[r].focus()}return document.addEventListener("keydown",t,!1),()=>{document.removeEventListener("keydown",t,!1)}}(N.current):void 0),[v]),(0,u.Z)({isActive:v,onBack:P}),(0,a.Z)((e=>{let[t]=e;return document.body.classList.toggle("has-open-dialog",Boolean(v)),(v||!v&&void 0!==t)&&(0,s.YW)(200),()=>{document.body.classList.remove("has-open-dialog")}}),[v]);const T=(0,d.Z)();if(!w)return;const B=(0,c.Z)("Modal",p,A,Z&&"transparent-backdrop");return o.ZP.createElement(f.Z,null,o.ZP.createElement("div",{ref:N,className:B,tabIndex:-1,role:"dialog"},o.ZP.createElement("div",{className:"modal-container"},o.ZP.createElement("div",{className:"modal-backdrop",onClick:P}),o.ZP.createElement("div",{className:"modal-dialog",ref:t},g||(n?o.ZP.createElement("div",{className:"modal-header"},h&&o.ZP.createElement(m.Z,{round:!0,color:"translucent",size:"smaller",ariaLabel:T("Close"),onClick:P},o.ZP.createElement("i",{className:"icon-close"})),o.ZP.createElement("div",{className:"modal-title"},n)):void 0),o.ZP.createElement("div",{className:"modal-content custom-scroll",style:C},I)))))}},42431:(e,t,n)=>{n.d(t,{$5:()=>s,Bj:()=>l,GU:()=>i,Ht:()=>a,fu:()=>u,mU:()=>d});var o=n(14342),r=n(56112),c=n(86087);function l(e,t){const n=(0,o.Z1)(e,t);if(n&&n.fullInfo&&n.fullInfo.groupCallId)return s(e,n.fullInfo.groupCallId)}function s(e,t){return e.groupCalls.byId[t]}function i(e,t,n){return s(e,t)?.participants[n]}function a(e){const t=d(e)?.chatId;if(!t)return!1;const n=(0,o.Z1)(e,t);return!!n&&((0,r.G9)(n)&&n.isCreator||Boolean(n.adminRights?.manageCall))}function d(e){const{groupCalls:{activeGroupCallId:t}}=e;if(t)return s(e,t)}function u(e){const{phoneCall:t,currentUserId:n}=e;if(!t||!t.participantId||!t.adminId)return;const o=t.adminId===n?t.participantId:t.adminId;return(0,c.dy)(e,o)}},9211:(e,t,n)=>{n.d(t,{M:()=>c,P:()=>l});var o=n(86087),r=n(83716);function c(e,t){var n;const{appConfig:c}=e;if(!c)return r.prK[t][0];const l=(0,o.wV)(e),{limits:s}=c,i=null!==(n=s[t][l?1:0])&&void 0!==n?n:r.prK[t][l?1:0];return"dialogFilters"===t?i+1:i}function l(e,t){const{appConfig:n}=e;if(!n)return r.prK[t][1];const{limits:o}=n;return o[t][1]}},27407:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(14050),r=n(91713),c=n(60782),l=n(65326),s=n(87204);function i(e,t,n,o){const{length:c}=e,l=o?e.indexOf(o):0,s=t===r.Uq.Forwards?l:l+1||c,i=Math.max(0,s-n),a=s+n-1,d=e.slice(Math.max(0,i),a+1);let u,m;switch(t){case r.Uq.Forwards:u=s>0,m=i>=0;break;case r.Uq.Backwards:u=s<c,m=a<=c-1}return{newViewportIds:d,areSomeLocal:u,areAllLocal:m}}const a=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:30;const d=(0,o.sO)(),u=(0,o.sO)((()=>{if(!t||d.current)return;const{newViewportIds:e}=i(t,r.Uq.Forwards,a,t[0]);return e})()),m=(0,l.Z)();n&&(d.current={});const f=(0,s.Z)(t),p=(0,s.Z)(n);if(!t||n||t===f&&n===p)t||(u.current=void 0);else{const{offsetId:e=t[0],direction:n=r.Uq.Forwards}=d.current||{},{newViewportIds:o}=i(t,n,a,e);u.current&&(0,c.et)(u.current,o)||(u.current=o)}const v=(0,o.I4)((n=>{let{direction:o,noScroll:l}=n;const s=u.current,f=s?o===r.Uq.Backwards?s[s.length-1]:s[0]:void 0;if(!t)return void(e&&e({offsetId:f}));l||(d.current={...d.current,direction:o,offsetId:f});const{newViewportIds:p,areSomeLocal:v,areAllLocal:g}=i(t,o,a,f);!v||s&&(0,c.et)(s,p)||(u.current=p,m()),!g&&e&&e({offsetId:f})}),[t,a,e,m]);return n?[t]:[u.current,v]}},62357:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(14050);const r=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const r=(0,o.sO)(e);(0,o.bt)((()=>{r.current=e}),[e]),(0,o.d4)((()=>{if(void 0===t)return;const e=setInterval((()=>r.current()),t);return n||r.current(),()=>clearInterval(e)}),[t,n])}},98069:(e,t,n)=>{n.d(t,{In:()=>c,l_:()=>r,wT:()=>l});let o=0;function r(){o+=1}function c(){o-=1}function l(){return o>0}},87675:(e,t,n)=>{n.d(t,{Z:()=>l,z:()=>c});var o=n(77361),r=n(82972);function c(e){e.style.display="none",(0,r.Z)(e),e.style.display=""}const l=(e,t)=>{o.cj&&(e.style.overflow="hidden"),void 0!==t&&(e.scrollTop=t),o.cj&&(e.style.overflow="")}}}]);
//# sourceMappingURL=2239.e073911a291bcabbc51b.js.map
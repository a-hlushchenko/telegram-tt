"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[3041],{51133:(e,t,a)=>{a.r(t),a.d(t,{AuthCode:()=>v,AuthPassword:()=>f,AuthRegister:()=>y});var n=a(14050),o=a(33555),r=a(77361),l=a(60782),s=a(32340),i=a(46590),c=a(59107),d=a(97687),u=a(34288),m=a(83716),h=a(13365),g=a(97799);const Z=r.wB?m.qpg:m.z7m,p=(0,n.X$)((e=>{let{code:t,codeLength:a,trackingDirection:o,isTracking:r,isBig:l}=e;const[s,i]=(0,n.eJ)(!1),c=165/a,d=(0,n.I4)((()=>i(!0)),[]);return n.ZP.createElement("div",{id:"monkey",className:l?"big":""},!s&&n.ZP.createElement("div",{className:"monkey-preview"}),n.ZP.createElement(g.Z,{size:l?m.K2q:Z,className:r?"hidden":void 0,tgsUrl:h.l.MonkeyIdle,play:!r,onLoad:d}),n.ZP.createElement(g.Z,{size:l?m.K2q:Z,className:r?"shown":"hidden",tgsUrl:h.l.MonkeyTracking,playSegment:r?function(){const e=t&&t.length>1||o<0?15+c*(t.length-1):0,n=t.length===a?180:15+c*t.length;return o<1?[n,e]:[e,n]}():void 0,speed:2,noLoop:!0}))})),v=(0,n.X$)((0,o.c$)((e=>(0,l.ei)(e,["authPhoneNumber","authIsCodeViaApp","authIsLoading","authError"])))((e=>{let{authPhoneNumber:t,authIsCodeViaApp:a,authIsLoading:l,authError:m}=e;const{setAuthCode:h,returnToAuthPhoneNumber:g,clearAuthError:Z}=(0,o.Sv)(),v=(0,c.Z)(),P=(0,n.sO)(null),[E,f]=(0,n.eJ)(""),[b,N]=(0,n.eJ)(!1),[y,w]=(0,n.eJ)(1);(0,n.d4)((()=>{r.$b||P.current.focus()}),[]),(0,i.Z)({isActive:!0,onBack:g});const C=(0,n.I4)((e=>{m&&Z();const{currentTarget:t}=e;t.value=t.value.replace(/[^\d]+/,"").substr(0,5),t.value!==E&&(f(t.value),b?t.value.length||N(!1):N(!0),E&&E.length>t.value.length?w(-1):w(1),5===t.value.length&&h({code:t.value}))}),[m,Z,E,b,h]);return n.ZP.createElement("div",{id:"auth-code-form",className:"custom-scroll"},n.ZP.createElement("div",{className:"auth-form"},n.ZP.createElement(p,{code:E,codeLength:5,isTracking:b,trackingDirection:y}),n.ZP.createElement("h1",null,t,n.ZP.createElement("div",{className:"auth-number-edit",onClick:g,role:"button",tabIndex:0,title:v("WrongNumber")},n.ZP.createElement("i",{className:"icon-edit"}))),n.ZP.createElement("p",{className:"note"},(0,s.Z)(v(a?"SentAppCode":"Login.JustSentSms"),["simple_markdown"])),n.ZP.createElement(d.Z,{ref:P,id:"sign-in-code",label:v("Code"),onInput:C,value:E,error:m&&v(m),autoComplete:"off",inputMode:"numeric"}),l&&n.ZP.createElement(u.Z,null)))})));var P=a(93490),E=a(99364);const f=(0,n.X$)((0,o.c$)((e=>(0,l.ei)(e,["authIsLoading","authError","authHint"])))((e=>{let{authIsLoading:t,authError:a,authHint:r}=e;const{setAuthPassword:l,clearAuthError:s}=(0,o.Sv)(),i=(0,c.Z)(),[d,u]=(0,n.eJ)(!1),m=(0,n.I4)((e=>{u(e)}),[]),h=(0,n.I4)((e=>{l({password:e})}),[l]);return n.ZP.createElement("div",{id:"auth-password-form",className:"custom-scroll"},n.ZP.createElement("div",{className:"auth-form"},n.ZP.createElement(P.Z,{isPasswordVisible:d}),n.ZP.createElement("h1",null,i("Login.Header.Password")),n.ZP.createElement("p",{className:"note"},i("Login.EnterPasswordDescription")),n.ZP.createElement(E.Z,{clearError:s,error:a&&i(a),hint:r,isLoading:t,isPasswordVisible:d,onChangePasswordVisibility:m,onSubmit:h})))})));var b=a(231),N=a(90710);const y=(0,n.X$)((0,o.c$)((e=>(0,l.ei)(e,["authIsLoading","authError"])))((e=>{let{authIsLoading:t,authError:a}=e;const{signUp:r,clearAuthError:l,uploadProfilePhoto:s}=(0,o.Sv)(),i=(0,c.Z)(),[u,m]=(0,n.eJ)(!1),[h,g]=(0,n.eJ)(),[Z,p]=(0,n.eJ)(""),[v,P]=(0,n.eJ)(""),E=(0,n.I4)((e=>{a&&l();const{target:t}=e;p(t.value),m(t.value.length>0)}),[a,l]),f=(0,n.I4)((e=>{const{target:t}=e;P(t.value)}),[]);return n.ZP.createElement("div",{id:"auth-registration-form",className:"custom-scroll"},n.ZP.createElement("div",{className:"auth-form"},n.ZP.createElement("form",{action:"",method:"post",onSubmit:function(e){e.preventDefault(),r({firstName:Z,lastName:v}),h&&s({file:h})}},n.ZP.createElement(N.Z,{onChange:g}),n.ZP.createElement("h2",null,i("YourName")),n.ZP.createElement("p",{className:"note"},i("Login.Register.Desc")),n.ZP.createElement(d.Z,{id:"registration-first-name",label:i("Login.Register.FirstName.Placeholder"),onChange:E,value:Z,error:a&&i(a),autoComplete:"given-name"}),n.ZP.createElement(d.Z,{id:"registration-last-name",label:i("Login.Register.LastName.Placeholder"),onChange:f,value:v,autoComplete:"family-name"}),u&&n.ZP.createElement(b.Z,{type:"submit",ripple:!0,isLoading:t},i("Next")))))})))},99364:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(14050),o=a(83716),r=a(77361),l=a(46752),s=a(3858),i=a(59107),c=a(28183),d=a(231);const u=r.wB?550:400,m=(0,n.X$)((e=>{let{isLoading:t=!1,isPasswordVisible:a,error:m,hint:h,placeholder:g="Password",submitLabel:Z="Next",description:p,shouldShowSubmit:v,shouldResetValue:P,shouldDisablePasswordManager:E=!1,noRipple:f=!1,clearError:b,onChangePasswordVisibility:N,onInputChange:y,onSubmit:w}=e;const C=(0,n.sO)(null),L=(0,i.Z)(),[k,I]=(0,n.eJ)(""),[A,S]=(0,n.eJ)(!1);return(0,n.d4)((()=>{P&&I("")}),[P]),(0,c.Z)((()=>{r.$b||C.current.focus()}),u),(0,n.d4)((()=>{m&&requestAnimationFrame((()=>{C.current.focus(),C.current.select()}))}),[m]),n.ZP.createElement("form",{action:"",onSubmit:w?function(e){e.preventDefault(),t||A&&w(k)}:s.Z,autoComplete:"off"},n.ZP.createElement("div",{className:(0,l.Z)("input-group password-input",k&&"touched",m&&"error"),dir:L.isRtl?"rtl":void 0},E&&n.ZP.createElement("input",{type:"password",id:"prevent_autofill",autoComplete:"off",className:"visually-hidden",tabIndex:-2}),n.ZP.createElement("input",{ref:C,className:"form-control",type:a?"text":"password",id:"sign-in-password",value:k||"",autoComplete:E?"one-time-code":"current-password",onChange:function(e){m&&b();const{target:t}=e;I(t.value),S(t.value.length>=o.loe),y&&y(t.value)},maxLength:256,dir:"auto"}),n.ZP.createElement("label",null,m||h||g),n.ZP.createElement("div",{className:"toggle-password",onClick:function(){N(!a)},role:"button",tabIndex:0,title:"Toggle password visibility"},n.ZP.createElement("i",{className:a?"icon-eye":"icon-eye-closed"}))),p&&n.ZP.createElement("p",{className:"description"},p),w&&(A||v)&&n.ZP.createElement(d.Z,{type:"submit",ripple:!f,isLoading:t,disabled:!A},Z))}))},93490:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(14050),o=a(83716),r=a(77361),l=a(13365),s=a(97799),i=a(28183),c=a(60706);const d=[0,50],u=[0,20],m=[20,0],h=r.wB?o.qpg:o.z7m,g=(0,n.X$)((e=>{let{isPasswordVisible:t,isBig:a}=e;const[r,g]=(0,c.Z)(!1),[Z,p]=(0,c.Z)(!1);(0,i.Z)(p,2e3);const v=(0,n.I4)(g,[g]);return n.ZP.createElement("div",{id:"monkey",className:a?"big":""},!r&&n.ZP.createElement("div",{className:"monkey-preview"}),n.ZP.createElement(s.Z,{size:a?o.K2q:h,className:Z?"hidden":"shown",tgsUrl:l.l.MonkeyClose,playSegment:d,noLoop:!0,onLoad:v}),n.ZP.createElement(s.Z,{size:a?o.K2q:h,className:Z?"shown":"hidden",tgsUrl:l.l.MonkeyPeek,playSegment:t?u:m,noLoop:!0}))}))},90710:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(14050),o=a(46752),r=a(83716),l=a(71394),s=a(59107),i=a(231),c=a(13103),d=a(34288);const u={type:"blob",quality:1,format:"jpeg",circle:!1,size:{width:1024,height:1024}};let m,h,g;const Z=(0,n.X$)((e=>{let{file:t,onChange:o,onClose:Z}=e;const[p,v]=(0,n.eJ)(!1);(0,n.d4)((()=>{t&&(p?async function(e){try{const t=document.getElementById("avatar-crop");if(!t)return;const{offsetWidth:a,offsetHeight:n}=t;g=new m(t,{enableZoom:!0,boundary:{width:a,height:n},viewport:{width:a-16,height:n-16,type:"circle"}});const o=await(0,l.YJ)(e);await g.bind({url:o})}catch(e){r.eMD&&console.error(e)}}(t):async function(){return h||(h=Promise.all([a.e(5099),a.e(3472)]).then(a.bind(a,23472)),m=(await h).default),h}().then((()=>v(!0))))}),[t,p]);const P=(0,s.Z)(),E=(0,n.I4)((async()=>{if(!g)return;const e=await g.result(u),t="string"==typeof e?e:(0,l.hl)(e,"avatar.jpg");o(t)}),[o]);return n.ZP.createElement(c.Z,{isOpen:Boolean(t),onClose:Z,title:"Drag to reposition",className:"CropModal",hasCloseButton:!0},p?n.ZP.createElement("div",{id:"avatar-crop"}):n.ZP.createElement(d.Z,null),n.ZP.createElement(i.Z,{className:"confirm-button",round:!0,color:"primary",onClick:E,ariaLabel:P("CropImage")},n.ZP.createElement("i",{className:"icon-check"})))})),p=(0,n.X$)((e=>{let{title:t="Change your profile picture",disabled:a,isForForum:r,currentAvatarBlobUrl:l,onChange:s}=e;const[i,c]=(0,n.eJ)(),[d,u]=(0,n.eJ)(l);(0,n.d4)((()=>{u(l)}),[l]);const m=(0,n.I4)((e=>{c(void 0),s(e),d&&d!==l&&URL.revokeObjectURL(d),u(URL.createObjectURL(e))}),[d,l,s]),h=(0,n.I4)((()=>{c(void 0)}),[]),g=(0,o.Z)(d&&"filled",a&&"disabled",r&&"rounded-square");return n.ZP.createElement("div",{className:"AvatarEditable"},n.ZP.createElement("label",{className:g,role:"button",tabIndex:0,title:t},n.ZP.createElement("input",{type:"file",onChange:function(e){const t=e.target;t&&t.files&&t.files[0]&&(c(t.files[0]),t.value="")},accept:"image/png, image/jpeg"}),n.ZP.createElement("i",{className:"icon-camera-add"}),d&&n.ZP.createElement("img",{src:d,alt:"Avatar"})),n.ZP.createElement(Z,{file:i,onClose:h,onChange:m}))}))},13103:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(14050),o=a(517),r=a(46752),l=a(98069),s=a(18674),i=a(31212),c=a(274),d=a(59107),u=a(46590),m=a(231),h=a(62898);const g=e=>{let{dialogRef:t,title:a,className:g,isOpen:Z,header:p,hasCloseButton:v,noBackdrop:P,children:E,style:f,onClose:b,onCloseAnimationEnd:N,onEnter:y,shouldSkipHistoryAnimations:w}=e;const{shouldRender:C,transitionClassNames:L}=(0,i.Z)(Z,N,w,void 0,w),k=(0,n.sO)(null);(0,n.d4)((()=>{if(Z)return(0,l.l_)(),l.In}),[Z]),(0,n.d4)((()=>Z?(0,o.Z)({onEsc:b,onEnter:y}):void 0),[Z,b,y]),(0,n.d4)((()=>Z&&k.current?function(e){function t(t){if("Tab"!==t.key)return;t.preventDefault(),t.stopPropagation();const a=Array.from(e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));if(!a.length)return;const n=a.findIndex((e=>e.isSameNode(document.activeElement)));let o=0;n>=0&&(o=t.shiftKey?n>0?n-1:a.length-1:n<a.length-1?n+1:0),a[o].focus()}return document.addEventListener("keydown",t,!1),()=>{document.removeEventListener("keydown",t,!1)}}(k.current):void 0),[Z]),(0,u.Z)({isActive:Z,onBack:b}),(0,c.Z)((e=>{let[t]=e;return document.body.classList.toggle("has-open-dialog",Boolean(Z)),(Z||!Z&&void 0!==t)&&(0,s.YW)(200),()=>{document.body.classList.remove("has-open-dialog")}}),[Z]);const I=(0,d.Z)();if(!C)return;const A=(0,r.Z)("Modal",g,L,P&&"transparent-backdrop");return n.ZP.createElement(h.Z,null,n.ZP.createElement("div",{ref:k,className:A,tabIndex:-1,role:"dialog"},n.ZP.createElement("div",{className:"modal-container"},n.ZP.createElement("div",{className:"modal-backdrop",onClick:b}),n.ZP.createElement("div",{className:"modal-dialog",ref:t},p||(a?n.ZP.createElement("div",{className:"modal-header"},v&&n.ZP.createElement(m.Z,{round:!0,color:"translucent",size:"smaller",ariaLabel:I("Close"),onClick:b},n.ZP.createElement("i",{className:"icon-close"})),n.ZP.createElement("div",{className:"modal-title"},a)):void 0),n.ZP.createElement("div",{className:"modal-content custom-scroll",style:f},E)))))}},28183:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(14050);const o=function(e,t){const a=(0,n.sO)(e);(0,n.bt)((()=>{a.current=e}),[e]),(0,n.d4)((()=>{if("number"!=typeof t)return;const e=setTimeout((()=>a.current()),t);return()=>clearTimeout(e)}),[t])}},98069:(e,t,a)=>{a.d(t,{In:()=>r,l_:()=>o,wT:()=>l});let n=0;function o(){n+=1}function r(){n-=1}function l(){return n>0}},3858:(e,t,a)=>{a.d(t,{Z:()=>n});const n=e=>{e.stopPropagation(),e.preventDefault()}}}]);
//# sourceMappingURL=3041.74b3865a024b21a7ee6d.js.map
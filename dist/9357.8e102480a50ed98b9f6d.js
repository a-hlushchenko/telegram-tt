"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[9357],{31481:(e,a,n)=>{n.d(a,{Oig:()=>t});const t=!1,s=("undefined"!=typeof window&&window.innerHeight,Math.round(450),new Set(["newMessage","newScheduledMessage","deleteMessages","deleteScheduledMessages","deleteHistory","updateThreadInfos"]),new Set(["image/png","image/jpeg","image/gif"])),o=new Set(["video/mp4","video/quicktime"]);new Set(["audio/mp3","audio/ogg","audio/wav","audio/mpeg","audio/flac","audio/aac","audio/m4a","audio/mp4","audio/x-m4a"]),new Set([...s,...o]),new Set(["t.me","web.t.me","a.t.me","k.t.me","z.t.me"]),new Set(["AU","BD","CA","CO","EG","HN","IE","IN","JO","MX","MY","NI","NZ","PH","PK","SA","SV","US"])},49357:(e,a,n)=>{n.d(a,{C:()=>c});var t=n(31481),s=n(37836);const o=new Map,r=function(){const e=new Set;function a(a){e.delete(a)}return{runCallbacks:function(){for(var a=arguments.length,n=new Array(a),t=0;t<a;t++)n[t]=arguments[t];e.forEach((e=>{e(...n)}))},addCallback:function(n){return e.add(n),()=>{a(n)}},removeCallback:a,hasCallbacks:function(){return Boolean(e.size)}}}();function c(e,a){let n=[],c=[];const i=(0,s.Fe)((()=>{const e={channel:a,payloads:n},t=c;n=[],c=[],t.length?postMessage(e,t):postMessage(e)}));function d(e,a){n.push(e),a&&c.push(...a),i()}!function(e){self.onerror=a=>{console.error(a),e({type:"unhandledError",error:{message:a.error.message||"Uncaught exception in worker"}})},self.addEventListener("unhandledrejection",(a=>{console.error(a),e({type:"unhandledError",error:{message:a.reason.message||"Uncaught rejection in worker"}})}))}(d),r.addCallback((n=>{n.data?.channel===a&&function(e,a,n,s){s||(s=e=>{n({type:"update",update:e})}),a.payloads.forEach((async a=>{switch(a.type){case"init":{const{args:n}=a;"function"==typeof e?await e("init",s,...n):await(e.init?.(s,...n));break}case"callMethod":{const{messageId:s,name:r,args:c,withCallback:i}=a;try{if("function"!=typeof e&&!e[r])return;if(s&&i){const e=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];const o=a[a.length-1];var r;n({type:"methodCallback",messageId:s,callbackArgs:a},(r=o)instanceof ArrayBuffer||r instanceof ImageBitmap?[o]:void 0)};o.set(s,e),c.push(e)}const a="function"==typeof e?await e(r,...c):await e[r](...c),{arrayBuffer:t}="object"==typeof a&&"arrayBuffer"in a&&a||{};s&&n({type:"methodResponse",messageId:s,response:a},t?[t]:void 0)}catch(e){t.Oig&&console.error(e),s&&n({type:"methodResponse",messageId:s,error:{message:e.message}})}s&&o.delete(s);break}case"cancelProgress":{const e=o.get(a.messageId);e&&(e.isCanceled=!0);break}}}))}(e,n.data,d)}))}onmessage=r.runCallbacks}}]);
//# sourceMappingURL=9357.8e102480a50ed98b9f6d.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],[function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(1);const r=(e,t,n={OK:"ok"})=>{const r=document.querySelectorAll("dialog"),i=r[r.length-1];r.forEach(e=>{e.setAttribute("class","sent-back")});const c=document.createElement("dialog");o.a.registerDialog(c),document.body.appendChild(c);const l=document.createElement("form");c.appendChild(l),l.setAttribute("method","dialog");const a=document.createElement("p");l.appendChild(a),a.setAttribute("class","title"),a.innerText=e;const s=document.createElement("button");s.innerText="cancel",s.setAttribute("value","cancel"),a.appendChild(s),t.forEach(e=>{const t=document.createElement("p");if("string"==typeof e){let n=document.createElement("label");t.appendChild(n),n.innerText=e}else e instanceof HTMLElement&&t.appendChild(e);l.appendChild(t)});const d=document.createElement("menu");l.appendChild(d);for(const e in n){const t=document.createElement("button");t.innerHTML=e,d.appendChild(t),t.setAttribute("value",n[e]),t.setAttribute("type","submit")}return new Promise(e=>{c.addEventListener("close",()=>{setTimeout(()=>c.remove(),500),i&&i.removeAttribute("class"),e(c.returnValue)}),setTimeout(()=>c.showModal(),100)})},i=e=>{var t=document.createElement("div");return t.innerHTML=e.trim(),t.firstChild};function c(e){e.popup=r,e.createElementFromHTML=i}},,function(e,t,n){"use strict";n.p},,function(e,t,n){"use strict";n.r(t),t.default=n.p+"0e3295e4662107e65d1f8f13f4ba967c.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"2bfa27340655858f8ebb60b791e8debb.svg"},,,function(e,t,n){"use strict";n.r(t);var o=n(0);n(3),n(2);Object(o.a)(window),window.onappinstalled=()=>location.href+="/index.html",console.log("test");(()=>{if("serviceWorker"in navigator){navigator.serviceWorker.register("./sw.js").then((function(){console.log("sucsessed")})).catch((function(e){console.log("error:",e)}));const e=document.createElement("button");e.innerText="install",document.body.appendChild(e),"onbeforeinstallprompt"in window?window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),e.addEventListener("click",()=>{t.prompt||popup("didn't you already install the App?",[]),t.prompt()})}):e.addEventListener("click",()=>{popup("Install",["You can install this App by adding into the home screen.",createElementFromHTML(`\n              <ol>\n              <li><div style='background-color: rgba(60, 138, 255, 0.911);\n              -webkit-mask: url(${n(4)}) no-repeat center;\n              mask: url(${n(4)}) no-repeat center;width: 28px;\n              height: 28px;'></div> press share button</li><li><div style='background-color: white;\n            -webkit-mask: url(${n(5)}) no-repeat center;\n            mask: url(${n(5)}) no-repeat center;width: 28px;\n            height: 28px;'></div> then press 'add to home' button</li></ol>\n        `)]).then(e=>console.log(e)).catch(e=>console.warn(e))})}})()}],[[8,0,1]]]);
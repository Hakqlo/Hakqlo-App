(window.webpackJsonp=window.webpackJsonp||[]).push([[3],[function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n(1);const o=(t,e,n={OK:"ok"})=>{const o=document.querySelectorAll("dialog"),r=o[o.length-1];o.forEach(t=>{t.setAttribute("class","sent-back")});const a=document.createElement("dialog");i.a.registerDialog(a),document.body.appendChild(a);const s=document.createElement("form");a.appendChild(s),s.setAttribute("method","dialog");const d=document.createElement("p");s.appendChild(d),d.setAttribute("class","title"),d.innerText=t;const l=document.createElement("button");l.innerText="cancel",l.setAttribute("value","cancel"),d.appendChild(l),e.forEach(t=>{const e=document.createElement("p");if("string"==typeof t){let n=document.createElement("label");e.appendChild(n),n.innerText=t}else t instanceof HTMLElement&&e.appendChild(t);s.appendChild(e)});const c=document.createElement("menu");s.appendChild(c);for(const t in n){const e=document.createElement("button");e.innerHTML=t,c.appendChild(e),e.setAttribute("value",n[t]),e.setAttribute("type","submit")}return new Promise(t=>{a.addEventListener("close",()=>{setTimeout(()=>a.remove(),500),r&&r.removeAttribute("class"),t(a.returnValue)}),setTimeout(()=>a.showModal(),100)})},r=t=>{var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild};function a(t){t.popup=o,t.createElementFromHTML=r}},,,function(t,e,n){"use strict";n.p},function(t,e,n){"use strict";n.r(e),e.default=n.p+"0e3295e4662107e65d1f8f13f4ba967c.svg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"2bfa27340655858f8ebb60b791e8debb.svg"},,,,,,function(t,e,n){"use strict";n.r(e);var i=n(0),o=n(2),r=n.n(o),a=n(8);n(3),n.p;Object(i.a)(window);const s=document.querySelector("canvas"),d=()=>{s.width=document.body.clientWidth,s.height=document.body.clientHeight};d(),window.addEventListener("resize",t=>{d(),u()});const l=s.getContext("2d");let c={vStart:0,vEnd:3*s.height},h=!1;const u=()=>{l.beginPath();const t=l.createLinearGradient(0,c.vStart,s.width,c.vEnd);t.addColorStop(0,"black"),t.addColorStop(1/3,"rgb(10, 15, 85)"),t.addColorStop(2/3,"rgb(18, 104, 218)"),t.addColorStop(1,"rgb(248, 102, 253)"),l.fillStyle=t,l.fillRect(0,0,s.width,s.height),l.closePath()},p=.08*Math.min(s.width,s.height);class m{constructor(){this.x=Math.random()*s.width,this.y=s.height+Math.random()*s.height,this.radius=Math.random()*p+1,this.color=`rgba(255, 255, 255, ${(1-this.radius/p)**2})`;const t=.3*this.radius;this.xVel=t*Math.random()*.5,this.yVel=t*Math.random()*.5+.5}draw(){this.x-=this.xVel,this.y-=this.yVel,this.x<=-this.radius&&(this.x=s.width+this.radius),this.y<=-this.radius&&(this.y=s.height+this.radius),l.fillStyle=this.color,l.beginPath(),l.arc(this.x,this.y,this.radius,0,2*Math.PI),l.fill(),l.filter="none",l.closePath()}}u();let b=[];const g=()=>{l.clearRect(0,0,s.width,s.height),u(),b.forEach(t=>t.draw()),requestAnimationFrame(g)};for(let t=0;t<30;t++)b.push(new m);window.onappinstalled=()=>location.href="./index.html";(()=>{if("serviceWorker"in navigator){r.a.register().then((function(){console.log("succeeded")})).catch((function(t){console.log("error:",t)}));const t=document.querySelector("#install_button");t.addEventListener("click",()=>{document.body.classList.add("install_pressed"),h||(h=!0,requestAnimationFrame(g),Object(a.a)({targets:c,duration:1500,vStart:[0,2*-s.height],vEnd:[3*s.height,s.height],easing:"easeInOutSine"}))}),"onbeforeinstallprompt"in window?window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),t.addEventListener("click",()=>{e.prompt||popup("didn't you already install the App?",[]),e.prompt().then(t=>console.log(t))})}):t.addEventListener("click",()=>{popup("Install",["You can install Hakqlo App by adding this website to your home screen.",createElementFromHTML(`\n              <ol>\n              <li><div style='background-color: rgba(60, 138, 255, 0.911);\n              -webkit-mask: url(${n(4).default}) no-repeat center;\n              mask: url(${n(4).default}) no-repeat center;width: 28px;\n              height: 28px;'></div> press share button</li><li><div style='background-color: white;\n            -webkit-mask: url(${n(5).default}) no-repeat center;\n            mask: url(${n(5).default}) no-repeat center;width: 28px;\n            height: 28px;'></div> then press 'add to home' button</li></ol>\n        `)]).catch(t=>console.warn(t))})}else console.log("service worker not supported on your browser")})()}],[[11,0,1]]]);
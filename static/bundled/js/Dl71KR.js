import{W as e,s as t,n,f as a,l as s,g as c,h as o,r as i,c as r,i as d}from"./main.js";const l=new e(!1);function m(e,t){return Math.floor(Math.random()*(t-e+1))+e}let p,u,g,h,v,E,y,f=-1,N=[],w=[],x=[],B=!1;function I(){d.get()||(d.set(!0),x[t.get().index].scrollIntoView({block:"center",behavior:"auto"}),E.to(u,{y:"100%",ease:y.easeInOut,duration:1}),E.to(g,{opacity:0,duration:1.2,delay:.4}),setTimeout((()=>{a.set(!0),d.set(!1)}),1600))}function L(){let e=[];const a=t.get().index,s=Math.min(a+1,t.get().length-1),c=Math.max(a-1,0);switch(n.get()){case"next":e=[s];break;case"prev":e=[c];break;case"none":e=[a,s,c]}i(e).forEach((e=>{const t=w[e];t.src!==t.dataset.src&&(t.src=t.dataset.src)}))}let T=[];function C(e){c(e),!d.get()&&B&&(d.set(!0),L(),E.to(g,{opacity:1,duration:1}),E.to(u,{y:0,ease:y.easeInOut,duration:1,delay:.4}),setTimeout((()=>{a.set(!1),d.set(!1)}),1400))}function b(e){(function(e){!function(e){const t=document.createElement("div");t.className="collection";for(const[n,a]of e.entries()){const e=0!==n?m(-25,25):0,s=0!==n?m(-30,30):0,c=document.createElement("img");c.dataset.src=a.loUrl,c.height=a.loImgH,c.width=a.loImgW,c.alt=a.alt,c.style.transform=`translate3d(${e}%, ${s-50}%, 0)`,t.append(c)}r.append(t)}(e);const t=document.getElementsByClassName("collection").item(0);l.addWatcher((e=>{e?t.classList.remove("hidden"):t.classList.add("hidden")})),T=Array.from(t.getElementsByTagName("img")),T.forEach(((e,t)=>{var n,a;t<5&&(e.src=e.dataset.src),e.addEventListener("click",(()=>{C(t)}),{passive:!0}),e.addEventListener("keydown",(()=>{C(t)}),{passive:!0}),n=e,a=(e,n)=>{e.every((e=>e.intersectionRatio<=0||(t+5<T.length&&(T[t+5].src=T[t+5].dataset.src),n.disconnect(),!1)))},new IntersectionObserver(((e,t)=>{a(e,t)})).observe(n)}))})(e),function(e){!function(e){const t=document.createElement("div");t.className="swiper-wrapper";const n=r.dataset.loading;for(const a of e){const e=document.createElement("div");e.className="swiper-slide";const s=document.createElement("div");s.className="loadingText",s.innerText=n;const c=document.createElement("img");c.dataset.src=a.hiUrl,c.height=a.hiImgH,c.width=a.hiImgW,c.alt=a.alt,c.classList.add("hide"),c.addEventListener("load",(()=>{c.classList.remove("hide"),s.classList.add("hide")}),{once:!0,passive:!0});const o=document.createElement("div");o.className="slideContainer",o.append(c),o.append(s),e.append(o),t.append(e)}const a=document.createElement("div");a.className="galleryInner",a.append(t);const s=document.createElement("div");s.insertAdjacentHTML("afterbegin",'<span class="num"></span><span class="num"></span><span class="num"></span><span class="num"></span>\n    <span>/</span>\n    <span class="num"></span><span class="num"></span><span class="num"></span><span class="num"></span>');const c=document.createElement("div"),o=document.getElementById("main")?.getAttribute("closeText");c.innerText=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}(o),c.addEventListener("click",(()=>{I()}),{passive:!0}),c.addEventListener("keydown",(()=>{I()}),{passive:!0});const i=document.createElement("div");i.className="nav",i.append(s,c);const d=document.createElement("div");d.className="gallery",d.append(a),d.append(i);const l=document.createElement("div");l.className="curtain",r.append(d,l)}(e),N=Array.from(document.getElementsByClassName("nav").item(0)?.getElementsByClassName("num")??[]),p=document.getElementsByClassName("galleryInner").item(0),u=document.getElementsByClassName("gallery").item(0),g=document.getElementsByClassName("curtain").item(0),w=Array.from(u.getElementsByTagName("img")),x=Array.from(document.getElementsByClassName("collection").item(0)?.getElementsByTagName("img")??[]),t.addWatcher((()=>{const e=t.get();var a;e.index!==f&&(-1===f?n.set("none"):e.index<f?n.set("prev"):n.set("next"),a=e.index,L(),h.slideTo(a,0),function(){const e=o(t.get().index+1),n=o(t.get().length);N.forEach(((t,a)=>{t.innerText=a<4?e[a]:n[a-4]}))}(),f=e.index)})),l.addWatcher((e=>{e&&a.set(!0)})),window.addEventListener("touchstart",(()=>{s().then((e=>{E=e[0],y=e[1]})).catch((e=>{console.log(e)})),async function(){return(await import("./f6JTi3.js")).Swiper}().then((e=>{v=e,h=new v(p,{spaceBetween:20}),h.on("slideChange",(({realIndex:e})=>{c(e)}))})).catch((e=>{console.log(e)})),B=!0}),{once:!0,passive:!0}),l.set(!0)}(e)}export{b as initMobile};
document.querySelector(".js-list");const i=document.querySelector(".js-btn");document.querySelector(".js-animeContainer");const a="https://api.jikan.moe/v4/anime?q=naruto";let n=[];function s(){fetch(a).then(e=>e.json()).then(e=>{n=e.results,console.log(e),o()})}function o(e){for(const t of n)t.innerHTML+=`<li> <h2 class=movies ${data.title}<h2> <img>${data.images}<img></li>`}s();function c(){const e=animes.data;e.innerHTML=`Title ${data.title}`}i.addEventListener("click",c);
//# sourceMappingURL=main.js.map

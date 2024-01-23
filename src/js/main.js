'use strict';

const list = document.querySelector ('.js-list');
const btnSearch = document.querySelector ('.js-btn');
const animeContainer= document.querySelector ('.js-animeContainer')



let animeList = [];
function getDataApi (url) {
    fetch(url)
    .then((response)=> response.json())
    .then ((data)=> {
        animeList = data.data;
        console.log (data);
        renderAnimes (animeList);
    });

}

function renderAnimes (arrayanimes) {
    for (const animes of animeList){
        animes.innerHTML +=  `<li> <h2 class=movies ${animes.title}<h2> <img>${animes.images.jpg.image_url}<img></li>`
    }
}



function handleClick () {
    const namesAnimes = list.value
    console.log(namesAnimes);
    const url = `https://api.ikan.moe/v4/anime?q=${namesAnime}`;
    getDataApi (url);

}

btnSearch.addEventListener ('click', handleClick);

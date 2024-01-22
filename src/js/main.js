'use strict';

const list = document.querySelector ('.js-list');
const btnSearch = document.querySelector ('.js-btn');
const animeContainer= document.querySelector ('.js-animeContainer')

const url = 'https://api.jikan.moe/v4/anime?q=naruto'

let animeList = [];
function getDataApi () {
    fetch(url)
    .then((response)=> response.json())
    .then ((data)=> {
        animeList = data.results;
        console.log (data);
        renderAnimes (animeList);
    });

}

function renderAnimes (arrayanimes) {
    for (const animes of animeList){
        animes.innerHTML +=  `<li> <h2 class=movies ${data.title}<h2> <img>${data.images}<img></li>`
    }
}

getDataApi ();

function handleClick () {
    const namesAnimes = animes.data
    namesAnimes.innerHTML = `Title ${data.title}`;

}

btnSearch.addEventListener ('click', handleClick);

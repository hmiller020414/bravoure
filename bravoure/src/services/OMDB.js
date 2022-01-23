const baseUrl = "http://www.omdbapi.com/";
const apiKey = 'ca954a9a';

const show = () => {
  const url = `${baseUrl}?t=Jane+the+Virgin&apikey=${apiKey}`;
  return fetch(url)
    .then( response => response.json() )
}

const season = (s) => {
  const url = `${baseUrl}?t=Jane+the+Virgin&Season=${s}&apikey=${apiKey}`;
  return fetch(url)
    .then( response => response.json() )
}

const episode = (s, ep) => {
  const url = `${baseUrl}?t=Jane+the+Virgin&Season=${s}&Episode=${ep}&apikey=${apiKey}`;
  return fetch(url)
    .then( response => response.json() )
}

const OMDB = {
    show,
    season,
    episode
}

export default OMDB

// Need to fetch the entire show to get plot and images (?t=Jane+the+Virgin&apikey=ca954a9a)
//     From this I will need:
//         Title, Plot, Poster
// Need to fetch single season to get list of episodes (?t=Jane+the+Virgin&Season=3&apikey=ca954a9a)
//      From this I will need:
//          Episodes, Title, Poster, imdbRating, Released, Episode, Plot
// Need to fetch each individual episode to get plot details and image (?t=Jane+the+Virgin&Season=3&Episode=1&apikey=ca954a9a)
//     From this I will need:
//         Title, Poster, imdbRating, Released, Episode, Plot
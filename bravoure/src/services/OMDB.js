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
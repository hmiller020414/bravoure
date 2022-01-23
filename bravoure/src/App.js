import './App.css';
import { useEffect, useState } from 'react'
import OMDB from './services/OMDB';
import SeasonOverview from './components/season/SeasonOverview/SeasonOverview';
import EpisodeOverview from './components/episode/EpisodeOverview/EpisodeOverview';

const App = () => {

  useEffect( async () => {
    const results = await OMDB.episode(3, 3)
    console.log(results)
  }, []);

  return (
    <div className="App">
      <SeasonOverview />
      <EpisodeOverview />
    </div>
  );
}

export default App;

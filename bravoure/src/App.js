import './App.css';
import { useEffect, useState } from 'react'
import OMDB from './services/OMDB';
import SeasonOverview from './components/season/SeasonOverview/SeasonOverview';
import EpisodeOverview from './components/episode/EpisodeOverview/EpisodeOverview';

const App = () => {

  const [show, setShow] = useState()
  const [season, setSeason] = useState()

  useEffect( async () => {
    const results = await OMDB.show()
    setShow(results)
  }, []);

  useEffect( async () => {
    const results = await OMDB.season(4)
    setSeason(results)
  }, [])

  return (
    <div className="App">
      <SeasonOverview show={show} season={season} />
      <EpisodeOverview />
    </div>
  );
}

export default App;

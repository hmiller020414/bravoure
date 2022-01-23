import './App.css';
import { useEffect, useState } from 'react'
import OMDB from './services/OMDB';
import SeasonOverview from './components/season/SeasonOverview/SeasonOverview';
import EpisodeOverview from './components/episode/EpisodeOverview/EpisodeOverview';

const App = () => {

  const [show, setShow] = useState()

  useEffect( async () => {
    const results = await OMDB.show()
    setShow(results)
  }, []);

  return (
    <div className="App">
      <SeasonOverview show={show} />
      <EpisodeOverview />
    </div>
  );
}

export default App;

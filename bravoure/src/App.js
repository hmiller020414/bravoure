import './App.scss';
import { useEffect, useState } from 'react'
import OMDB from './services/OMDB';
import SeasonOverview from './components/season/SeasonOverview/SeasonOverview';
import EpisodeOverview from './components/episode/EpisodeOverview/EpisodeOverview';

const App = () => {

  const [show, setShow] = useState()
  const [season, setSeason] = useState()
  const [episode, setEpisode] = useState()

  useEffect( async () => {
    const results = await OMDB.show()
    setShow(results)
  }, []);

  useEffect( async () => {
    const results = await OMDB.season(3)
    setSeason(results)
  }, [])

  useEffect( async () => {
    const results = await OMDB.episode(3, 1)
    setEpisode(results)
  }, [])

  const onEpisodeChange = (newEpisode) => {
    setEpisode(newEpisode)
  }

  return (
    <div className="App">
      <SeasonOverview show={show} season={season} onEpisodeChange={onEpisodeChange} />
      <EpisodeOverview episode={episode} />
    </div>
  );
}

export default App;

import './App.css';
import { useEffect, useState } from 'react'
import OMDB from './services/OMDB';

const App = () => {

  useEffect( async () => {
    const results = await OMDB.episode(3, 3)
    console.log(results)
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

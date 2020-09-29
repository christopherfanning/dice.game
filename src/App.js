import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Player from './components/Player'
import Game from './components/Game'

function App() {
  return (
    <div className="App">
    <h1> Welcome to the Thunder Dome dice game</h1>
    <Player></Player>
    <Game></Game>
    <Player></Player>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

import Match from './components/Match';
import MatchList from './components/MatchList';
import Player from './components/Player';
import PlayerList from './components/PlayerList';

function App() {
  return (
    <div className="App">
      <Match></Match>
      <MatchList></MatchList>
      <Player></Player>
      <PlayerList></PlayerList>
    </div>
  );
}

export default App;

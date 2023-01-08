import logo from './logo.svg';
import './App.css';

import MatchList from './components/MatchList';
import PlayerList from './components/PlayerList';

function App() {
  return (
    <div className="App">
      <MatchList></MatchList>
      <PlayerList></PlayerList>
    </div>
  );
}

export default App;

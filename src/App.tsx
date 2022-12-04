import StartScreen from './components/start-screen/StartScreen';
import Game from './components/game/Game';
import EndScreen from './components/end-screen/EndScreen';
import { useState } from 'react';
function App() {
  const [gameProgress, setGameProgress] = useState<'start' | 'play' | 'finish'>('start');
  return (
    <div className="App">
      {gameProgress === 'start' && <StartScreen onClick={() => setGameProgress('play')} />}
      {gameProgress === 'play' && <Game handleGameOver={() => setGameProgress('finish')} />}
      {gameProgress === 'finish' && <EndScreen onClick={() => setGameProgress('start')} />}
    </div>
  );
}

export default App;

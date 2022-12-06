import { GameContextProvider } from './context/game-context';
import Game from './components/game/Game';
const App = () => (
    <GameContextProvider>
      <div className="game-wrap">
        <Game />
      </div>
    </GameContextProvider>
  );

export default App;

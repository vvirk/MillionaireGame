import { EnumGameProgress } from '../../common/types';
import { useContext } from 'react';
import { GameContext } from '../../context/game-context';
import MainScreen from '../main-screen/MainScreen';
import SecondaryScreen from '../secondary-screen/SecondaryScreen';
import InfoScreen from '../../common/components/info-screen/InfoScreen';

const Game = () => {
  const { gameProgress, handleChangeProgress, currentScore, resetScore } = useContext(GameContext);

  switch (gameProgress) {
    case EnumGameProgress.START:
      return <SecondaryScreen>
        <InfoScreen
          title="Who wants to be a millionaire?"
          btnDesc="Start"
          onClick={() => handleChangeProgress(EnumGameProgress.PLAY)}
        />
      </SecondaryScreen>
    case EnumGameProgress.PLAY:
      return <MainScreen />
    case EnumGameProgress.FINISH:
      return <SecondaryScreen>
        <InfoScreen
          desc="Total score:"
          title={`$${currentScore} earned`}
          btnDesc="Try again"
          isWhiteBg
          onClick={() => {
            resetScore();
            handleChangeProgress(EnumGameProgress.START)}
        }
        />
      </SecondaryScreen>
  }
}

export default Game;

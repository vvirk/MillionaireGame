import styles from './GameProgress.module.scss';
import Step from '../../../common/components/step/Step';
import { useContext } from 'react';
import { GameContext } from '../../../context/game-context';

type Props = {
  isMob?: boolean;
};

const GameProgress = ({ isMob }: Props) => {
  const { steps, currentQuestion: { award } } = useContext(GameContext);

  return (
    <div className={`${styles['game-progress']} ${isMob ? styles['game-progress-mob'] : ''}`}>
      {steps.map(step => <Step key={step} isMob currentAward={award} step={step} />)}
    </div>
  )
}

export default GameProgress;

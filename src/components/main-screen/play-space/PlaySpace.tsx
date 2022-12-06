import { useContext } from 'react';
import styles from './PlaySpace.module.scss';
import Question from '../question/Question';
import Answers from '../answers/Answers';
import { GameContext } from '../../../context/game-context';

const PlaySpace = () => {
  const { currentQuestion: { description, answers, right } } = useContext(GameContext);

  return(
    <div className={styles['play-space']}>
      <Question question={description} />
      <Answers answers={answers} right={right} />
    </div>)
}

export default PlaySpace;

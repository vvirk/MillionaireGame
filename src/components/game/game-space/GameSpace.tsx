import styles from './GameSpace.module.scss';
import Question from '../question/Question';
import Answers from '../answers/Answers';

const GameSpace = () => {
  return(
    <div className={styles['game-space']}>
      <Question />
      <Answers />
    </div>
  )
}

export default GameSpace;

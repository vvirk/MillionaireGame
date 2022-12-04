import styles from './GameProgress.module.scss';
import Step from '../../../common/components/step/Step';
const GameProgress = () => {
  return (
    <div className={styles['game-progress']}>
      <Step text="$1,000,000" />
    </div>
  )
}

export default GameProgress;

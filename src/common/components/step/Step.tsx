import styles from './Step.module.scss';
import StepSvg from './step-svg/StepSvg';

type Props = {
  step: string;
  currentAward: string;
  isMob?: boolean;
};

const Step = ({ step, currentAward, isMob }: Props) => {
  const prepareStepState = (step: number, currentAward: number) => {

    if (step > currentAward) {
      return 'next'
    }

    if (step < currentAward) {
      return 'prev'
    }

    return ''
  };

  const preparedStep = `$${step}`;

  return(
    <div className={`${styles.step} ${styles[prepareStepState(+step, +currentAward)]} ${isMob ? styles['step-mob'] : ''}`}>
      <StepSvg />
      <div className={styles.content}>
        <span title={preparedStep} className={styles['step-text']}>{preparedStep}</span>
      </div>
    </div>
  )
}

export default Step;

import styles from './Step.module.scss';
import StepSvg from './step-svg/StepSvg';

type Props = {
  text: string;
};

const Step = ({ text }: Props) => {
  return(
    <div className={`${styles.step}`}>
      <StepSvg />
      <div className={styles.content}>
        <span title={text} className={styles['step-text']}>{text}</span>
      </div>
    </div>
  )
}

export default Step;

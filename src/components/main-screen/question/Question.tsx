import styles from './Question.module.scss';
import H2 from '../../../common/components/h2/H2';

type Props = {
  question: string;
};

const Question = ({ question }: Props) => {
  return(
    <div className={styles.question}>
      <H2>{question}</H2>
    </div>
  )
}

export default Question;

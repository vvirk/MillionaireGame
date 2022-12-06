import styles from './Answers.module.scss';
import Variant from '../../../common/components/variant/Variant';
import { TAnswers } from '../../../common/types';

type Props = {
  answers: TAnswers;
  right: string;
};
const Answers = ({ answers, right }: Props) => (
  <div className={styles.answers}>
    {answers.map(answer => <Variant
      key={answer.letter}
      answer={answer}
      right={right}
    />)}
  </div>
);


export default Answers;

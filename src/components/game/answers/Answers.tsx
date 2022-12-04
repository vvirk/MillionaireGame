import styles from './Answers.module.scss';
import Variant from '../../../common/components/variant/Variant';
const Answers = () => {
  return(
    <div className={styles.answers}>
      <Variant text='answer 1' letter='a'/>
      <Variant text='answer 2' letter='b' />
      <Variant text='answer 3' letter='c' />
      <Variant text='answer 4' letter='d' />
    </div>
  )
}

export default Answers;

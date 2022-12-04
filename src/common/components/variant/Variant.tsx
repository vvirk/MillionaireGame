import styles from './Variant.module.scss';
import VariantSvg from './variant-svg/VariantSvg';

type Props = {
  text: string;
  letter: string;
};

const Variant = ({ text, letter }: Props) => {
  return(
    <div className={`${styles.variant}`}>
      <VariantSvg />
      <div className={styles.content}>
        <span className={styles['variant-letter']}>
          {letter}
        </span>
        <span title={text} className={styles['variant-text']}>{text}</span>
      </div>
    </div>
  )
}

export default Variant;

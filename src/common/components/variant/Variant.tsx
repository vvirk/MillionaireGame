import styles from './Variant.module.scss';
import VariantSvg from './variant-svg/VariantSvg';
import { useContext, useEffect, useState } from 'react';
import { EnumGameProgress, TAnswer } from '../../types';
import { GameContext } from '../../../context/game-context';

type Props = {
  answer: TAnswer;
  right: string;
};

enum EnumState {
  RIGHT = 'right',
  WRONG = 'wrong',
  EMPTY = ''
}

const Variant = ({ answer: { letter, description }, right }: Props) => {
  const [state, setState] = useState(EnumState.EMPTY);
  const { nextStep, handleChangeProgress, resetStep } = useContext(GameContext);
  const handleClick = () => setState(letter === right ? EnumState.RIGHT : EnumState.WRONG);

  useEffect(() => {
    if (state === EnumState.RIGHT) {
      setTimeout(() => {
        nextStep();
        setState(EnumState.EMPTY);
      }, 350);
    }

    if (state === EnumState.WRONG) {
      setTimeout(() => {
        resetStep();
        handleChangeProgress(EnumGameProgress.FINISH);
      }, 350);
    }
  }, [state]);

  return(
    <div className={`${styles.variant} ${styles[state]}`} onClick={handleClick}>
      <VariantSvg />
      <div className={styles.content}>
        <span className={styles['variant-letter']}>
          {letter}
        </span>
        <span title={description} className={styles['variant-text']}>{description}</span>
      </div>
    </div>
  )
}

export default Variant;

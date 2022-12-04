import styles from './InfoScreen.module.scss';
import H1 from '../h1/H1';
import Button from '../button/Button';
import hand from '../../../assets/hand.png'

type Props = {
  title: string;
  desc?: string;
  btnDesc: string;
  isWhiteBg?: boolean;
  onClick: () => void;
};

const InfoScreen = ({ title, desc, btnDesc, isWhiteBg, onClick }: Props) => {
  return(
    <div className={`${styles['info-screen']} ${isWhiteBg ? styles.whiteBg : ''}`}>
      <div className={styles['info-screen-content']}>
        <img className={styles['info-screen-img']} src={hand} alt="hand like" />
        <div className={styles['info-screen-action-wrap']}>
          <div className={styles['info-screen-title-wrap']}>
            {desc && <p className={styles['info-screen-desc']}>{desc}</p>}
            <H1>{title}</H1>
          </div>
          <Button text={btnDesc} onClick={onClick} />
        </div>
      </div>
    </div>
  )
}

export default InfoScreen;

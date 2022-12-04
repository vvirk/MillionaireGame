import { useState } from 'react';
import styles from './MobileMenu.module.scss';
import close from '../../../assets/close.png';
import burger from '../../../assets/burger.png';

const MobileMenu = () => {
  const [isMenuOpen, setOpenMenu] = useState(false);
  return(
    <div className={styles.menu}>
      <img
        className={styles.icon}
        onClick={() => setOpenMenu(true)}
        src={burger}
        alt="open button"
      />
      {isMenuOpen && <div className={styles['menu-container']}>
        <div className={styles['menu-content']}>
          <img
            className={styles.icon}
            onClick={() => setOpenMenu(false)}
            src={close}
            alt="close button"
          />
          ...
        </div>
      </div>}
    </div>
  )
}

export default MobileMenu;

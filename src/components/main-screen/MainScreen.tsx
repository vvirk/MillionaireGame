import styles from './MainScreen.module.scss';
import PlaySpace from './play-space/PlaySpace';
import GameProgress from './game-progress/GameProgress';
import MobileMenu from '../../common/components/mobile-menu/MobileMenu';

const MainScreen = () => {
  return (
    <div className={styles['main-screen']}>
      <PlaySpace />
      <div className={styles.progress}>
        <GameProgress />
      </div>
      <MobileMenu>
        <GameProgress isMob />
      </MobileMenu>
    </div>
  )
}

export default MainScreen;

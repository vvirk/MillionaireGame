import styles from './Game.module.scss';
import GameSpace from './game-space/GameSpace';
import GameProgress from './game-progress/GameProgress';
import MobileMenu from '../../common/components/mobile-menu/MobileMenu';

type Props = {
  handleGameOver: () => void;
};

const Game = ({ handleGameOver }: Props) => {
  return (
    <div className={styles.game}>
      <GameSpace />
      <GameProgress />
      <MobileMenu />
    </div>
  )
}

export default Game;

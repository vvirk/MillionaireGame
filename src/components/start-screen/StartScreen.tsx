import InfoScreen from '../../common/components/info-screen/InfoScreen';

type Props = {
  onClick: () => void;
};

const StartScreen = ({ onClick }: Props) =>
  <InfoScreen
    title="Who wants to be a millionaire?"
    btnDesc="Start"
    onClick={onClick}
  />
export default StartScreen;

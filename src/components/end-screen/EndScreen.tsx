import InfoScreen from '../../common/components/info-screen/InfoScreen';

type Props = {
  onClick: () => void;
};

const EndScreen = ({ onClick }: Props) =>
  <InfoScreen
    desc="Total score:"
    title="$8,000 earned"
    btnDesc="Try again"
    onClick={onClick}
    isWhiteBg
  />
export default EndScreen;

import styles from './Button.module.scss';

type Props = {
    text: string;
    onClick: () => void;
};

const Button = ({ text, onClick }: Props) =>
  <button onClick={onClick} className={styles.button}>{text}</button>;

export default Button;

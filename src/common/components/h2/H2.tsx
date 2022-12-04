import styles from './H2.module.scss';

type Props = {
  children: string;
};

const H2 = ({ children }: Props) => <h2 className={styles.header}>{children}</h2>;

export default H2;

import styles from './H1.module.scss';

type Props = {
  children: string;
};

const H1 = ({ children }: Props) => <h1 className={styles.header}>{children}</h1>;

  export default H1;

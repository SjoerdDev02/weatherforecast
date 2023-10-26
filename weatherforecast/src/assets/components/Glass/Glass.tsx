import styles from './Glass.module.css';

const Glass = ({ children }) => {
  return (
    <div className={styles.glass}>{children}</div>
  );
}

export default Glass;
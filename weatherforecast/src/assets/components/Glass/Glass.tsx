import styles from './Glass.module.css';

const Glass = ({ children, customStyles }: { children: React.ReactNode, customStyles?: React.CSSProperties }) => {


  return (
    <div className={styles.glass} style={{ ...customStyles }}>{children}</div>
  );
}

export default Glass;
import styles from './SubmitButton.module.css';

const Button = ({ children, disabled }: { children: React.ReactNode, disabled: boolean }) => {
  return (
    <button disabled={disabled} type="submit" className={styles.btn}>{children}</button>
  );
}

export default Button;
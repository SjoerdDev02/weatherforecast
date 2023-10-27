import { NavLink } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({ children, page }: { children: React.ReactNode, page: string }) => {
  return (
    <NavLink to={page} className={styles.btn}>{children}</NavLink>
  );
}

export default Button;
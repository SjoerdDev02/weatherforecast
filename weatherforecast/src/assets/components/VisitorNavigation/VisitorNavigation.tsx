import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styles from './VisitorNavigation.module.css';

const VisitorNavigation = () => {
    const location = useLocation();

    return (
        <nav role="navigation" className={styles.nav}>
            <div>
                <NavLink aria-label="Home" className={styles.navLogo} to='/'><h3>WeatherForecast</h3></NavLink>
            </div>
            <div>
                <NavLink className={`${styles.navItem} ${location.pathname === '/login' && styles.active}`} to='/login'>Login</NavLink>
                <NavLink className={`${styles.navItem} ${location.pathname === '/register' && styles.active}`} to='/register'>Register</NavLink>
            </div>
            <div className={styles.divider}></div>
        </nav>
    );
}

export default VisitorNavigation;
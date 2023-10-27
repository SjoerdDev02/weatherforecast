import styles from './UserNavigation.module.css';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const UserNavigation = () => {
    const location = useLocation();

    const forecastIcon = '/icons/navigation/forecast.svg';
    const settingsIcon = '/icons/navigation/settings.svg';
    const logoutIcon = '/icons/navigation/logout.svg';

    return (
        <nav className={styles.nav}>
            <NavLink to='/forecast'><img className={`${styles.navItem} ${location.pathname === '/forecast' && styles.active}`} src={forecastIcon} alt='Forecast navigation button' /></NavLink>
            <NavLink to='/settings'><img className={`${styles.navItem} ${location.pathname === '/settings' && styles.active}`} src={settingsIcon} alt='Settings navigation button' /></NavLink>
            <NavLink to='/'><img className={`${styles.navItem} ${location.pathname === '/' && styles.active}`} src={logoutIcon} alt='Logout navigation button' /></NavLink>
        </nav>
    );
}

export default UserNavigation;
import styles from './UserNavigation.module.css';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const UserNavigation = () => {
    const location = useLocation();

    const forecastIcon = '/icons/navigation/forecast.svg';
    const settingsIcon = '/icons/navigation/settings.svg';
    const logoutIcon = '/icons/navigation/logout.svg';
    const forecastActiveIcon = '/icons/navigation/forecastActive.svg';
    const settingsActiveIcon = '/icons/navigation/settingsActive.svg';
    const logoutActiveIcon = '/icons/navigation/logoutActive.svg';

    return (
        <nav className={styles.nav}>
            <NavLink to='/forecast' className={`${location.pathname === '/forecast' && styles.active}`}><img className={styles.navItem} src={`${location.pathname === '/forecast' ? forecastActiveIcon : forecastIcon}`} alt='Forecast navigation button' /></NavLink>
            <NavLink to='/settings' className={`${location.pathname === '/settings' && styles.active}`}><img className={styles.navItem} src={`${location.pathname === '/settings' ? settingsActiveIcon : settingsIcon}`} alt='Settings navigation button' /></NavLink>
            <NavLink to='/' className={`${location.pathname === '/' && styles.active}`}><img className={styles.navItem} src={`${location.pathname === '/' ? logoutActiveIcon : logoutIcon}`} alt='Logout navigation button' /></NavLink>
        </nav>
    );
}

export default UserNavigation;
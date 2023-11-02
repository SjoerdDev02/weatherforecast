import styles from './UserNavigation.module.css';
import { useLocation } from 'react-router-dom';
import ForecastItem from './ForecastItem';
import SettingsItem from './SettingsItem';
import LogoutItem from './LogoutItem';

const UserNavigation = () => {
    const location = useLocation();

    return (
        <nav role="navigation" className={styles.nav}>
            <ForecastItem location={location} />
            <SettingsItem location={location} />
            <LogoutItem />
        </nav>
    );
}

export default UserNavigation;
import styles from './UserLayout.module.css';
import UserNavigation from '../../components/UserNavigation/UserNavigation';

type BackgroundProps = {
  phone: string,
  desktop: string,
}

const UserLayout = ({ children, background }: { children: React.ReactNode, background: BackgroundProps }) => {
  const root = document.documentElement;

  root.style.setProperty('--backgroundImg-phone', `url(${background.phone})`);
  root.style.setProperty('--backgroundImg-desktop', `url(${background.desktop})`);

  return (
    <div className={styles.background}>
        <UserNavigation />
        <main>{children}</main>
    </div>
  );
}

export default UserLayout;
import styles from './UserLayout.module.css';
import UserNavigation from '../../components/UserNavigation/UserNavigation';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../types/RootStateType';

type BackgroundProps = {
  phone: string,
  desktop: string,
}

const UserLayout = ({ children, background }: { children: React.ReactNode, background: BackgroundProps }) => {
  const { mode } = useSelector((state: RootStateType) => state.user);
  const root = document.documentElement;

  root.style.setProperty('--backgroundImg-phone', `url(${background.phone})`);
  root.style.setProperty('--backgroundImg-desktop', `url(${background.desktop})`);

  if (mode === 'Lightmode') {
    root.style.setProperty('--white', '#000000');
    root.style.setProperty('--dark-white', '#1A1A1A');
    root.style.setProperty('--dark-blue', '#E5E5FF');
    root.style.setProperty('--dark-blue-glass', 'rgba(150, 150, 255, 0.2)');
    root.style.setProperty('--purple', '#A6A6D9');
    root.style.setProperty('--light-purple', '#C2C2FF');
  } else {
    root.style.setProperty('--white', '#FFFFFF');
    root.style.setProperty('--dark-white', '#C8C8C8');
    root.style.setProperty('--dark-blue', '#000032');
    root.style.setProperty('--dark-blue-glass', 'rgba(0, 0, 50, 0.2)');
    root.style.setProperty('--purple', '#1919C8');
    root.style.setProperty('--light-purple', '#3333FF');
  }

  return (
    <div className={styles.background}>
        <UserNavigation />
        <main>{children}</main>
    </div>
  );
}

export default UserLayout;
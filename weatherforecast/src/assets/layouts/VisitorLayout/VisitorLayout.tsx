import styles from './VisitorLayout.module.css';

type BackgroundProps = {
  phone: string,
  desktop: string,
}

const VisitorLayout = ({ children, background }: { children: React.ReactNode, background: BackgroundProps }) => {
  const root = document.documentElement;

  root.style.setProperty('--backgroundImg-phone', `url(${background.phone})`);
  root.style.setProperty('--backgroundImg-desktop', `url(${background.desktop})`);

  return (
    <div className={styles.background}>
        <main role="main">{children}</main>
    </div>
  );
}

export default VisitorLayout;
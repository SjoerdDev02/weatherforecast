import { CSSProperties } from 'react';
import Glass from '../../components/Glass/Glass';
import UserLayout from '../../layouts/UserLayout/UserLayout';
import styles from './Settings.module.css';
import ProfileHeader from './ProfileHeader';
import SwitchSetting from './SwitchSetting';
import SwitchCity from './SwitchCity';
import NameMailForm from './NameMailForm';
import Button from '../../components/Button/Button';
import PasswordForm from './PasswordForm';

const Settings = () => {
    const backgroundImg = {
      phone: '/backgrounds/settings/phone-settings-bg.jpg',
      desktop: '/backgrounds/settings/desktop-settings-bg.jpg',
    };

    const glassStyles: CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem',
      margin: '2rem',
      width: '80vw',
    }

    return (
      <UserLayout background={backgroundImg}>
          <Glass customStyles={glassStyles}>
              <div className={styles.settingsContainer}>
                  <ProfileHeader />
                  <NameMailForm />
                  <div className={styles.switchContainer}>
                    <SwitchSetting defaultIcon={'/icons/settings/temperature.svg'} defaultSettingText={'°C - Celcius'} switchIcon={'/icons/settings/temperature.svg'} switchSettingText={'°F - Fahrenheit'} />
                    <SwitchSetting defaultIcon={'/icons/settings/night.svg'} defaultSettingText={'Darkmode'} switchIcon={'/icons/settings/day.svg'} switchSettingText={'Lightmode'} />
                  </div>
                  <PasswordForm />
                  <div className={styles.citiesContainer}>
                      <SwitchCity />
                      <SwitchCity />
                      <SwitchCity />
                  </div>
                  <div className={styles.submitBtn}><Button page='/forecast'>Save Settings</Button></div>
              </div>
          </Glass>
      </UserLayout>
    );
}

export default Settings;
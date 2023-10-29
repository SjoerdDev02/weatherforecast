import { useState } from 'react';
import styles from './Settings.module.css';

const SwitchSetting = ({defaultIcon, defaultSettingText, switchIcon, switchSettingText}: {defaultIcon: string, defaultSettingText: string, switchIcon: string, switchSettingText: string}) => {
    const [settingState, setSettingState] = useState({icon: defaultIcon, settings: defaultSettingText});

    const switchSettings = () => {
        if (settingState.settings === defaultSettingText) {
            setSettingState({icon: switchIcon, settings: switchSettingText});
        } else {
            setSettingState({icon: defaultIcon, settings: defaultSettingText});
        }
    }

    return (
        <article className={styles.switchSettingContainer} onClick={switchSettings}>
            <img src={settingState.icon} alt='Dynamically added icon' />
            <h3>{settingState.settings}</h3>
        </article>
    );
}

export default SwitchSetting;
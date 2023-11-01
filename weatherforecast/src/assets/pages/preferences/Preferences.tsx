import { useSelector } from "react-redux";
import { useEffect, CSSProperties } from "react";
import Glass from "../../components/Glass/Glass";
import UserLayout from "../../layouts/UserLayout/UserLayout";
import styles from "./Preferences.module.css";
import PreferencesHeader from "./Header/PreferencesHeader";
import SwitchSetting from "./SwitchComp/SwitchPreference";
import SwitchCity from "./SwitchComp/SwitchCity";
import NameMailForm from "./Forms/NameMailForm";
import PasswordForm from "./Forms/PasswordForm";
import { RootStateType } from "../../types/RootStateType";
import changePreferences from "./changePreferences";

const Settings = () => {
  const backgroundImg = {
    phone: "/backgrounds/settings/phone-settings-bg.jpg",
    desktop: "/backgrounds/settings/desktop-settings-bg.jpg",
  };

  const glassStyles: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    margin: "2rem",
    width: "80vw",
  };

  const user = useSelector((state: RootStateType) => state.user);
  const { cityOne, cityTwo, cityThree } = user;

  useEffect(() => {
    changePreferences(user);
  }, [user]);

  return (
    <UserLayout background={backgroundImg}>
      <Glass customStyles={glassStyles}>
        <section className={styles.settingsContainer}>
          <PreferencesHeader user={user} />
          <NameMailForm user={user} />
          <div className={styles.switchContainer}>
            <SwitchSetting user={user} identifier="Temperature" />
            <SwitchSetting user={user} identifier="Mode" />
          </div>
          <PasswordForm user={user} />
          <div className={styles.citiesContainer}>
            <SwitchCity user={user} identifier="CityOne" city={cityOne} />
            <SwitchCity user={user} identifier="CityTwo" city={cityTwo} />
            <SwitchCity user={user} identifier="CityThree" city={cityThree} />
          </div>
        </section>
      </Glass>
    </UserLayout>
  );
};

export default Settings;

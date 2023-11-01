import { useState } from "react";
import styles from "../Preferences.module.css";
import { UserType } from "../../../types/UserType";
import { useDispatch } from "react-redux";
import { setUser } from "../../../stores/user";

const getDefaultSettings = (identifier: string, user: UserType) => {
  const iconsText =
    identifier === "Temperature"
      ? {
          iconOne: "/icons/settings/temperature.svg",
          settingTextOne: "°C - Celcius",
          iconTwo: "/icons/settings/temperature.svg",
          settingTextTwo: "°F - Fahrenheit",
        }
      : {
          iconOne: "/icons/settings/night.svg",
          settingTextOne: "Darkmode",
          iconTwo: "/icons/settings/day.svg",
          settingTextTwo: "Lightmode",
        };

  const preferenceIcon =
    user.temperature === "°C - Celcius" || user.mode === "Darkmode"
      ? iconsText.iconOne
      : iconsText.iconTwo;
  const preferenceText =
    user.temperature === "°C - Celcius" || user.mode === "Darkmode"
      ? iconsText.settingTextOne
      : iconsText.settingTextTwo;

  return { iconsText, preferenceIcon, preferenceText };
};

const SwitchSetting = ({
  user,
  identifier,
}: {
  user: UserType;
  identifier: string;
}) => {
  const dispatch = useDispatch();

  const { iconsText, preferenceIcon, preferenceText } = getDefaultSettings(
    identifier,
    user
  );

  const [settingState, setSettingState] = useState({
    icon: preferenceIcon,
    settings: preferenceText,
  });

  const switchSettings = () => {
    const newSettings =
      settingState.settings === iconsText.settingTextOne
        ? iconsText.settingTextTwo
        : iconsText.settingTextOne;
    setSettingState((prevState) => ({
      icon:
        prevState.settings === iconsText.settingTextOne
          ? iconsText.iconTwo
          : iconsText.iconOne,
      settings: newSettings,
    }));

    const changedUser: UserType = {
      id: user.id,
      picture: user.picture,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
      temperature:
        identifier === "Temperature" ? newSettings : user.temperature,
      mode: identifier === "Mode" ? newSettings : user.mode,
      cityOne: user.cityOne,
      cityTwo: user.cityTwo,
      cityThree: user.cityThree,
    };
    dispatch(setUser(changedUser));
  };

  return (
    <article className={styles.switchSettingContainer} onClick={switchSettings}>
      <img src={settingState.icon} alt="Dynamically added icon" />
      <h3>{settingState.settings}</h3>
    </article>
  );
};

export default SwitchSetting;

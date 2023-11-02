import { useState } from "react";
import styles from "../Preferences.module.css";
import { useDispatch } from "react-redux";
import { setUser } from "../../../stores/user";
import { UserType } from "../../../types/UserType";

const CITIES_LIST = [
  "Maastricht",
  "'s-Hertogenbosch",
  "Middelburg",
  "Den Haag",
  "Haarlem",
  "Utrecht",
  "Arnhem",
  "Lelystad",
  "Zwolle",
  "Assen",
  "Leewarden",
  "Groningen",
];

const SwitchCity = ({
  user,
  identifier,
  city,
}: {
  user: UserType;
  identifier: string;
  city: string;
}) => {
  const dispatch = useDispatch();
  const [cityState, setCityState] = useState(city);

  const switchCity = () => {
    let cityIndex =
      CITIES_LIST.findIndex((cityName) => cityName === cityState) + 1;
    cityIndex = cityIndex < 12 ? cityIndex : 0;
    setCityState(CITIES_LIST[cityIndex]);

    const changedUser: UserType = {
      memberId: user.memberId,
      picture: user.picture,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
      temperature: user.temperature,
      mode: user.mode,
      cityOne: identifier === "CityOne" ? CITIES_LIST[cityIndex] : user.cityOne,
      cityTwo: identifier === "CityTwo" ? CITIES_LIST[cityIndex] : user.cityTwo,
      cityThree:
        identifier === "CityThree" ? CITIES_LIST[cityIndex] : user.cityThree,
    };
    dispatch(setUser(changedUser));
  };

  return (
    <button className={styles.switchCityContainer} onClick={switchCity}>
      <h3>{cityState}</h3>
      <img src={"/icons/settings/city.svg"} alt="Icon of a city" />
    </button>
  );
};

export default SwitchCity;

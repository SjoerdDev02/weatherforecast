import { CSSProperties } from "react";
import UserLayout from "../../layouts/UserLayout/UserLayout";
import Glass from "../../components/Glass/Glass";
import { useSelector } from "react-redux";
import { useState } from "react";
import styles from "./Forecast.module.css";
import ForecastHeader from "./Header/ForecastHeader";
import TodayWeather from "./Today/TodayWeather";
import NextDays from "./NextDays/NextDays";
import DetailNumbers from "./Details/DetailNumbers";
import ForecastMap from "./Map/ForecastMap";
import useFetchWeatherData from "../../hooks/useFetchWeatherData";
import { RootStateType } from "../../types/RootStateType";

const Forecast = () => {
  const backgroundImg = {
    phone: "/backgrounds/forecast/phone-forecast-bg.jpg",
    desktop: "/backgrounds/forecast/desktop-forecast-bg.jpg",
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


  const [showMap, setShowMap] = useState(false);
  const user = useSelector((state: RootStateType) => state.user);
  const { picture, firstName, temperature, cityOne, cityTwo, cityThree } = user;

  const [location, setLocation] = useState(cityOne);

  const weatherData = useFetchWeatherData(location, temperature);
  const handleLocationChange = (location: string) => {
    setLocation(location);
  };

  {setTimeout(() => {
    Object.keys(user).length > 0 && setShowMap(true);
  }, 3000)}
  
  return (
    <UserLayout background={backgroundImg}>
      <Glass customStyles={glassStyles}>
      {weatherData === "Loading" && <h1 style={{ color: 'var(--white)' }}>Dashboard Loading...</h1>}
        {weatherData !== "Loading" && (
          <div className={styles.forecastContainer}>
            <ForecastHeader
              picture={picture}
              firstName={firstName}
              time={weatherData.current.time}
              location={location}
              locations={[cityOne, cityTwo, cityThree]}
              onChange={handleLocationChange}
            />
            <TodayWeather
              time={weatherData.current.time}
              weather={weatherData.current.weathercode}
              location={location}
              temperature={weatherData.current.temperature_2m}
              humidity={weatherData.current.relativehumidity_2m}
              rainProb={weatherData.daily.precipitation_probability_max[0]}
              appTemp={weatherData.current.apparent_temperature}
              visibility={weatherData.hourly.visibility}
              hourWeather={weatherData.hourly.weathercode}
              hourTemperature={weatherData.hourly.temperature_2m}
            />
            <NextDays
              time={weatherData.current.time}
              dayWeather={weatherData.daily.weathercode}
              dayMinTemp={weatherData.daily.temperature_2m_min}
              dayMaxTemp={weatherData.daily.temperature_2m_max}
            />
            <DetailNumbers
              uvIndex={weatherData.daily.uv_index_max[0]}
              sunrise={weatherData.daily.sunrise[0]}
              sunset={weatherData.daily.sunset[0]}
              windSpeed={weatherData.current.windspeed_10m}
              windDirection={weatherData.current.winddirection_10m}
              pressure={weatherData.current.surface_pressure}
            />
            {showMap && (
                <ForecastMap
                    location={location}
                    longitude={weatherData.longitude}
                    latitude={weatherData.latitude}
                />
            )}
          </div>
        )}
      </Glass>
    </UserLayout>
  );
};

export default Forecast;
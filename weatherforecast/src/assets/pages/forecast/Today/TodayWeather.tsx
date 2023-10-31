import React from "react";
import styles from "../Forecast.module.css";
import { weatherCodes } from "../../../database/weatherCodes";
import useSelectWeatherIcon from "../../../hooks/useSelectWeatherIcon";

type TodayWeatherProps = {
  time: string;
  weather: number;
  location: string;
  temperature: number;
  humidity: number;
  rainProb: number[];
  appTemp: number;
  visibility: number[];
  hourWeather: number[];
  hourTemperature: number[];
};

const TodayHeader = ({
  weather,
  location,
  temperature,
  humidity,
}: {
  weather: number;
  location: string;
  temperature: number;
  humidity: number;
}) => {
  const weatherTodayIcon = useSelectWeatherIcon(weather, false);

  return (
    <article className={styles.todayHeader}>
      <img
        src={weatherTodayIcon}
        alt="Dynamically loaded icon that shows the weather of today"
      />
      <div>
        <h4>{location}</h4>
        <h6>Netherlands</h6>
      </div>
      <div>
        <h4>{Math.round(temperature)}°</h4>
        <h6>Temperature</h6>
      </div>
      <div>
        <h4>{humidity}%</h4>
        <h6>Humidity</h6>
      </div>
    </article>
  );
};

const TodayNumbers = ({
  weather,
  rainProb,
  appTemp,
  visibility,
}: {
  weather: number;
  rainProb: number;
  appTemp: number;
  visibility: number;
}) => {
  const weatherDescription = weatherCodes.find((weatherCode) =>
    weatherCode.code.includes(weather)
  )!.description;

  return (
    <article className={styles.todayNumbers}>
      <p>
        {weatherDescription.charAt(0).toUpperCase() +
          weatherDescription.slice(1)}
      </p>
      <p>Rain - {rainProb}%</p>
      <p>Feels Like - {Math.round(appTemp)}°</p>
      <p>Visibility - {Math.round(visibility / 1000)}km</p>
    </article>
  );
};

const HourNumbers = ({
  hour,
  weather,
  temperature,
}: {
  hour: string;
  weather: number;
  temperature: number;
}) => {
  const weatherIcon = useSelectWeatherIcon(weather, true);

  return (
    <div>
      <h6>{hour}</h6>
      <img
        src={weatherIcon}
        alt="Dynamically loaded icon that shows the weather of this hour"
      />
      <h5>{Math.round(temperature)}°</h5>
    </div>
  );
};

const HoursContainer = ({
  hour,
  hourWeather,
  hourTemperature,
}: {
  hour: number;
  hourWeather: number[];
  hourTemperature: number[];
}) => {
  const hoursElements: React.JSX.Element[] = [];

  const createHoursElements = () => {
    for (let i = 0; i < 8; i++) {
      const currentHour =
        hour + i < 12 ? `${hour + i} AM` : `${hour + i - 12} PM`;
      hoursElements.push(
        <HourNumbers
          key={hour + i}
          hour={currentHour}
          weather={hourWeather[i]}
          temperature={hourTemperature[i]}
        />
      );
    }
  };

  createHoursElements();

  return (
    <article className={styles.todayHourContainer}>
      {hoursElements.map((hourElement) => {
        return hourElement;
      })}
    </article>
  );
};

const TodayWeather: React.FC<TodayWeatherProps> = ({
  time,
  weather,
  location,
  temperature,
  humidity,
  rainProb,
  appTemp,
  visibility,
  hourWeather,
  hourTemperature,
}) => {
  const currentTime = new Date(time);
  const hour = currentTime.getHours();

  const selectedHoursWeather = [];
  const selectedHoursTemperature = [];
  for (let i = 0; i < 8; i++) {
    selectedHoursWeather.push(hourWeather[hour + 1 + i]);
    selectedHoursTemperature.push(hourTemperature[hour + 1 + i]);
  }

  return (
    <section className={styles.todayContainer}>
      <TodayHeader
        weather={weather}
        location={location}
        temperature={temperature}
        humidity={humidity}
      />
      <TodayNumbers
        weather={weather}
        rainProb={rainProb[hour + 1]}
        appTemp={appTemp}
        visibility={visibility[hour + 1]}
      />
      <HoursContainer
        hour={hour}
        hourWeather={selectedHoursWeather}
        hourTemperature={selectedHoursTemperature}
      />
    </section>
  );
};

export default TodayWeather;

import styles from "../Forecast.module.css";
import useSelectWeatherIcon from "../../../hooks/useSelectWeatherIcon";

type NextDaysProps = {
  time: string;
  dayWeather: number[],
  dayMinTemp: number[],
  dayMaxTemp: number[],
};

const NextDay = ({
  day,
  weather,
  minTemp,
  maxTemp,
}: {
  day: number,
  weather: number,
  minTemp: number,
  maxTemp: number,
}) => {
  const weatherIcon = useSelectWeatherIcon(weather, false);

  const daysArr = [
    "Mon",
    "Tue",
    "Wen",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
    "Mon",
    "Tue",
    "Wen",
    "Thu",
  ];
  const currentDay = daysArr[day];

  return (
    <article className={styles.nextDay}>
        <h3>{currentDay}</h3>
        <div className={styles.divider}></div>
        <img
          src={weatherIcon}
          alt="Dynamically loaded icon that shows the weather of the day"
        />
        <div className={styles.thermometer}>
            <div></div>
            <div>
                <p>{Math.round(minTemp)}°</p>
                <p>{Math.round(maxTemp)}°</p>
            </div>
        </div>
    </article>
  );
};

const NextDays: React.FC<NextDaysProps> = ({
  time,
  dayWeather,
  dayMinTemp,
  dayMaxTemp,
}) => {
  const currentDayIndex = new Date(time).getDay();
  const nextDaysElements: React.JSX.Element[] = [];

  const createNextDaysElements = () => {
    for (let i = 0; i < 4; i++) {
      nextDaysElements.push(
          <NextDay
              key={i}
              day={currentDayIndex + i}
              weather={dayWeather[i]}
              minTemp={dayMinTemp[i]}
              maxTemp={dayMaxTemp[i]}
          />
      );
    }
  };

  createNextDaysElements();

  return (
    <section className={styles.nextDaysContainer}>
        {nextDaysElements.map((nextDayElement) => {
          return nextDayElement;
        })}
    </section>
  );
};

export default NextDays;
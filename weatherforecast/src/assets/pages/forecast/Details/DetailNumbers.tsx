import React from "react";
import styles from "../Forecast.module.css";
import useGetWindDirection from "../../../hooks/useGetWindDirection";
import WindIndication from "./WindIndication";
import UVIndexIndication from "./UVIndexIndication";
import SunriseSunsetIndication from "./SunsetSunriseIndication";
import PressureIndication from "./PressureIndication";

type DetailNumbersProps = {
  uvIndex: number,
  sunrise: string,
  sunset: string,
  windSpeed: number,
  windDirection: number,
  pressure: number,
};

const DetailComponentOne = ({
  icon,
  title,
  uvIndex,
  sunset,
  sunrise,
}: {
  icon: string,
  title: string,
  uvIndex?: number,
  sunset?: string,
  sunrise?: string,
}) => {
  let sunriseTime = "";
  let sunsetTime = "";

  sunrise && (
      sunriseTime = new Date(sunrise).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }));
  sunset && (
      sunsetTime = new Date(sunset).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }));

  return (
    <article className={styles.detailComponentOne}>
        <header>
            <div>
                <img src={icon} alt="Dynamically loaded image" />
                <h3>{title}</h3>
            </div>
            <div></div>
        </header>
      {uvIndex && <UVIndexIndication uvIndex={uvIndex} />}
      {sunrise && sunset && (
          <SunriseSunsetIndication sunrise={sunriseTime} sunset={sunsetTime} />
      )}
      {uvIndex && <p>The UV Index of today is {uvIndex}.</p>}
      {sunset && sunrise && (
          <p>Sunrise at {sunriseTime}, sunset at {sunsetTime} PM.</p>
      )}
    </article>
  );
};

const DetailComponentTwo = ({
  icon,
  title,
  windSpeed,
  windDirection,
  pressure,
}: {
  icon: string,
  title: string,
  windSpeed?: number,
  windDirection?: number,
  pressure?: number,
}) => {
  const direction = useGetWindDirection(windDirection) || "";

  return (
    <article className={styles.detailComponentTwo}>
        <div className={styles.detailContent}>
            <div>
                <img src={icon} alt="Dynamically loaded image" />
                <h3>{title}</h3>
            </div>
            {windSpeed && windDirection && (
                <p>{`Wind is currently ${windSpeed} km/h from the ${direction}.`}</p>
            )}
            {pressure && <p>{`Pressure is currently ${pressure} hPa.`}</p>}
        </div>
        {windDirection && <WindIndication rotationValue={windDirection} />}
        {pressure && <PressureIndication pressure={pressure} />}
    </article>
  );
};

const DetailNumbers: React.FC<DetailNumbersProps> = ({
  uvIndex,
  sunrise,
  sunset,
  windSpeed,
  windDirection,
  pressure,
}) => {
  return (
    <section className={styles.detailNumbersContainer}>
        <DetailComponentOne
            icon={"/icons/weather/uv-index.svg"}
            title={"UV Index"}
            uvIndex={uvIndex}
        />
        <DetailComponentOne
            icon={"/icons/weather/sunset.svg"}
            title={"Sunset"}
            sunset={sunset}
            sunrise={sunrise}
        />
        <DetailComponentTwo
            icon={"/icons/weather/wind.svg"}
            title={"Wind"}
            windSpeed={windSpeed}
            windDirection={windDirection}
        />
        <DetailComponentTwo
            icon={"/icons/weather/pressure.svg"}
            title={"Pressure"}
            pressure={pressure}
        />
    </section>
  );
};

export default DetailNumbers;

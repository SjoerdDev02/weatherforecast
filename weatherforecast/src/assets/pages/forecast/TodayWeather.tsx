import styles from './Forecast.module.css';

const TodayHeader = () => {
    const weatherTodayIcon = '/icons/weather/sun-cloud-rain.svg';

    return (
        <article className={styles.todayHeader}>
            <img src={weatherTodayIcon} alt='Dynamically loaded icon that shows the weather of today' />
            <div>
                <h4>Maastricht</h4>
                <h6>Netherlands</h6>
            </div>
            <div>
                <h4>19°</h4>
                <h6>Temperature</h6>
            </div>
            <div>
                <h4>40%</h4>
                <h6>Humidity</h6>
            </div>
        </article>
    );
}

const TodayNumbers = () => {
    return (
        <article className={styles.todayNumbers}>
            <p>Partly clouded</p>
            <p>Rain - 50%</p>
            <p>Feels Like - 18°</p>
            <p>Visibility - 15km</p>
        </article>
    );
}

const HourNumbers = () => {
    const weatherIcon = '/icons/weather/sun-cloud.svg';

    return (
        <div>
            <h6>10 AM</h6>
            <img src={weatherIcon} alt='Dynamically loaded icon that shows the weather of this hour' />
            <h5>19°</h5>
        </div>
    )
}

const HoursContainer = () => {
    return (
        <article className={styles.todayHourContainer}>
            <HourNumbers />
            <HourNumbers />
            <HourNumbers />
            <HourNumbers />
            <HourNumbers />
            <HourNumbers />
            <HourNumbers />
            <HourNumbers />
        </article>
    )
}

const TodayWeather = () => {
  return (
    <section className={styles.todayContainer}>
        <TodayHeader />
        <TodayNumbers />
        <HoursContainer />
    </section>
  );
}

export default TodayWeather;
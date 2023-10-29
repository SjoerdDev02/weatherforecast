import styles from './Forecast.module.css';

const NextDay = () => {
    const weatherIcon = '/icons/weather/thunder.svg';

    return (
        <article className={styles.nextDay}>
            <h3>Thu</h3>
            <div className={styles.divider}></div>
            <img src={weatherIcon} alt='Dynamically loaded icon that shows the weather of the day' />
            <div className={styles.thermometer}>
                <div></div>
                <div>
                    <p>15°</p>
                    <p>23°</p>
                </div>
            </div>
        </article>
    );
}

const NextDays = () => {
    return (
        <section className={styles.nextDaysContainer}>
            <NextDay />
            <NextDay />
            <NextDay />
            <NextDay />
        </section>
    );
}

export default NextDays;
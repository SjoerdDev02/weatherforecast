import styles from './Forecast.module.css';

const ForecastMap = () => {
    const forecastIcon = '/icons/weather/location.svg';
    const forecastMapImage = '/images/forecast-map.jpg';

    return (
        <section className={styles.forecastMapContainer}>
            <header>
                <img src={forecastIcon} alt='Icon of a placeholder' />
                <h3>Maastricht</h3>
            </header>
            <img src={forecastMapImage} alt='Dynamically loaded map' />
            <p>40.7128° N, 74.0060° W</p>
        </section>
    )
}

export default ForecastMap;
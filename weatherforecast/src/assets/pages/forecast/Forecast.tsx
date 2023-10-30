import { CSSProperties } from 'react';
import UserLayout from '../../layouts/UserLayout/UserLayout';
import Glass from '../../components/Glass/Glass';
import styles from './Forecast.module.css';
import ForecastHeader from './ForecastHeader';
import TodayWeather from './TodayWeather';
import NextDays from './NextDays';
import DetailNumbers from './DetailNumbers';
import ForecastMap from './ForecastMap';
import useFetchWeatherData from '../../hooks/useFetchWeatherData';

const Forecast = () => {
    const weatherData = useFetchWeatherData('Maastricht');
    console.log(weatherData);

    const backgroundImg = {
      phone: '/backgrounds/forecast/phone-forecast-bg.jpg',
      desktop: '/backgrounds/forecast/desktop-forecast-bg.jpg',
    };

    const glassStyles: CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem',
      margin: '2rem',
      width: '80vw',
    }

    return (
        <UserLayout background={backgroundImg}>
            <Glass customStyles={glassStyles}>
                {weatherData === 'Loading' && <h1>Data Loading...</h1>}
                {weatherData !== 'Loading' && <div className={styles.forecastContainer}>
                    <ForecastHeader time={weatherData.current.time} location='Maastricht' />
                    <TodayWeather time={weatherData.current.time} weather={weatherData.current.weathercode} location={'Maastricht'} temperature={weatherData.current.temperature_2m} humidity={weatherData.current.relativehumidity_2m} rainProb={weatherData.hourly.precipitation_probability} appTemp={weatherData.current.apparent_temperature} visibility={weatherData.hourly.visibility} hourWeather={weatherData.hourly.weathercode} hourTemperature={weatherData.hourly.temperature_2m} />
                    <NextDays time={weatherData.current.time} dayWeather={weatherData.daily.weathercode} dayMinTemp={weatherData.daily.temperature_2m_min} dayMaxTemp={weatherData.daily.temperature_2m_max} />
                    <DetailNumbers />
                    <ForecastMap />
                </div>}
            </Glass>
        </UserLayout>    
    );
}

export default Forecast;
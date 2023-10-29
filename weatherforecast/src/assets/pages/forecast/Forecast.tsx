import { CSSProperties } from 'react';
import UserLayout from '../../layouts/UserLayout/UserLayout';
import Glass from '../../components/Glass/Glass';
import styles from './Forecast.module.css';
import ForecastHeader from './ForecastHeader';
import TodayWeather from './TodayWeather';
import NextDays from './NextDays';
import DetailNumbers from './DetailNumbers';
import ForecastMap from './ForecastMap';

const Forecast = () => {
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
                <div className={styles.forecastContainer}>
                    <ForecastHeader />
                    <TodayWeather />
                    <NextDays />
                    <DetailNumbers />
                    <ForecastMap />
                </div>
            </Glass>
        </UserLayout>    
    );
}

export default Forecast;
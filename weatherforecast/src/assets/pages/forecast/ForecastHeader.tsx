import styles from './Forecast.module.css';

const ForecastHeader = ({time, location}: {time: string, location: string}) => {
    const previousBtn = '/icons/overig/previous.svg';
    const nextBtn = '/icons/overig/next.svg';

    const currentTime = new Date(time);
    const month = currentTime.toLocaleString('en-US', { month: 'long' });
    const day = currentTime.toLocaleString('en-US', { weekday: 'long' });    
    const dayInfo = `${day}, ${currentTime.getDate()} ${month}, ${currentTime.getFullYear()}`;

  return (
    <header className={styles.forecastHeader}>
        <div className={styles.forecastProfileContainer}>
            <img src='/icons/overig/profile-john.png' alt='profile picture' />
            <div className={styles.headerNameDate}>
                <p>Hi John</p>
                <h2>{dayInfo}</h2>
            </div>
        </div>
        <div className={styles.locationSwitchContainer}>
            <button><img src={previousBtn} alt='Previous button icon' /></button>
            <h3>{location}</h3>
            <button><img src={nextBtn} alt='Next button icon' /></button>
        </div>
    </header>
  );
}

export default ForecastHeader;
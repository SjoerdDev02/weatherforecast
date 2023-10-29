import styles from './Forecast.module.css';

const ForecastHeader = () => {
    const previousBtn = '/icons/overig/previous.svg';
    const nextBtn = '/icons/overig/next.svg';

  return (
    <header className={styles.forecastHeader}>
        <div className={styles.forecastProfileContainer}>
            <img src='/icons/overig/profile-john.png' alt='profile picture' />
            <div className={styles.headerNameDate}>
                <p>Hi John</p>
                <h2>Wednesday, 25 October, 2023</h2>
            </div>
        </div>
        <div className={styles.locationSwitchContainer}>
            <button><img src={previousBtn} alt='Previous button icon' /></button>
            <h3>Maastricht</h3>
            <button><img src={nextBtn} alt='Next button icon' /></button>
        </div>
    </header>
  );
}

export default ForecastHeader;
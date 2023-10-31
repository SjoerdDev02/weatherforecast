import styles from '../Forecast.module.css';

const previousLocation = (locations: string[], activeLocation: string, onChange: (location: string) => void) => {
    const activeLocationIndex = locations.indexOf(activeLocation);
    const newActiveLocation = locations[(activeLocationIndex - 1 + locations.length) % locations.length];
    onChange(newActiveLocation);
};

const nextLocation = (locations: string[], activeLocation: string, onChange: (location: string) => void) => {
    const activeLocationIndex = locations.indexOf(activeLocation);
    const newActiveLocation = locations[(activeLocationIndex + 1) % locations.length];
    onChange(newActiveLocation);
};

const ForecastHeader = ({ picture, firstName, time, location, locations, onChange }: { picture: string, firstName: string, time: string, location: string, locations: string[], onChange: (location: string) => void }) => {
    const previousBtn = '/icons/overig/previous.svg';
    const nextBtn = '/icons/overig/next.svg';

    const currentTime = new Date(time);
    const month = currentTime.toLocaleString('en-US', { month: 'long' });
    const day = currentTime.toLocaleString('en-US', { weekday: 'long' });    
    const dayInfo = `${day}, ${currentTime.getDate()} ${month}, ${currentTime.getFullYear()}`;

  return (
    <header className={styles.forecastHeader}>
        <div className={styles.forecastProfileContainer}>
            <img src={picture} alt='profile picture' />
            <div className={styles.headerNameDate}>
                <p>Hi {firstName}</p>
                <h2>{dayInfo}</h2>
            </div>
        </div>
        <div className={styles.locationSwitchContainer}>
            <button onClick={() => previousLocation(locations, location, onChange)}><img src={previousBtn} alt='Previous button icon' /></button>
            <h3>{location}</h3>
            <button onClick={() => nextLocation(locations, location, onChange)}><img src={nextBtn} alt='Next button icon' /></button>
        </div>
    </header>
  );
}

export default ForecastHeader;
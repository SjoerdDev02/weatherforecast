import styles from '../Forecast.module.css';
import NextBtn from './NextBtn';
import PreviousBtn from './PreviousBtn';

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
            <PreviousBtn onClick={() => previousLocation(locations, location, onChange)} />
            <h3>{location}</h3>
            <NextBtn onClick={() => nextLocation(locations, location, onChange)} />
        </div>
    </header>
  );
}

export default ForecastHeader;
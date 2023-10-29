import { useState } from 'react';
import styles from './Settings.module.css';

const CITIES_LIST = [
    'Maastricht',
    '\'s-Hertogenbosch',
    'Middelburg',
    'Den Haag',
    'Haarlem',
    'Utrecht',
    'Arnhem',
    'Lelystad',
    'Zwolle',
    'Assen',
    'Leewarden',
    'Groningen',
];

const SwitchCity = () => {
    const [cityState, setCityState] = useState(CITIES_LIST[0]);

    const switchCity = () => {
        let cityIndex = CITIES_LIST.findIndex(city => city === cityState) + 1;
        cityIndex = cityIndex <= 11 ? cityIndex : 0;
        setCityState(CITIES_LIST[cityIndex]);
    }

    return (
        <article className={styles.switchCityContainer} onClick={switchCity}>
            <h3>{cityState}</h3>
            <img src={'/icons/settings/city.svg'} alt='Icon of a city' />
        </article>
    );
}

export default SwitchCity;
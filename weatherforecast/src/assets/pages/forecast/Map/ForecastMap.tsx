import styles from '../Forecast.module.css';
// import { useEffect } from 'react';
// import tt from "@tomtom-international/web-sdk-maps";

const ForecastMap = ({ location, longitude, latitude }: { location: string, longitude: number, latitude: number }) => {
    const forecastIcon = '/icons/weather/location.svg';

    /* useEffect(() => {
        if (longitude && latitude) {
            const map = tt.map({
                key: "PROsVLZUYBXQKDBRG3ZFppoBodahuUGw",
                container: "map",
                center: [longitude, latitude],
                zoom: 8,
            });
        
            new tt.Marker().setLngLat([longitude, latitude]).addTo(map);
        }
    }, [longitude, latitude]); */

    return (
        <section className={styles.forecastMapContainer}>
            <header>
                <img src={forecastIcon} alt='Icon of a placeholder' />
                <h3>{location}</h3>
            </header>
            {/* <div id="map" style={{ width: '100%', height: '100%' }}></div> */}
        </section>
    )
}

export default ForecastMap;
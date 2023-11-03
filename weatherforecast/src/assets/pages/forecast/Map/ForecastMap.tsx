import { useEffect } from 'react';
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import * as tt from "@tomtom-international/web-sdk-maps";
import styles from '../Forecast.module.css';

const ForecastMap = ({ location, longitude, latitude }: { location: string, longitude: number | null, latitude: number | null }) => {
    const forecastIcon = '/icons/weather/location.svg';

    useEffect(() => {
        let map: tt.Map;
        const timeout = setTimeout(() => {
            map = tt.map({
                key: "PROsVLZUYBXQKDBRG3ZFppoBodahuUGw",
                container: "map",
                center: [longitude || 5, latitude || 51],
                zoom: 8,
            });
        
            new tt.Marker().setLngLat([longitude || 5, latitude || 51]).addTo(map);
        }, 2000);

        return () => {
            clearTimeout(timeout);
            if (map) {
                map.remove();
            }
        };
    }, [longitude, latitude]);

    return (
        <section className={styles.forecastMapContainer}>
            <header>
                <img src={forecastIcon} alt='Icon of a placeholder' />
                <h3>{location}</h3>
            </header>
            <div id="map" style={{ width: '100%', height: '100%' }}></div>
        </section>
    );
}

export default ForecastMap;
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { coordinates } from '../database/coordinates';

const fetchData = async (location: string) => {
    const currentCoordinates = coordinates.find((coordinate) => coordinate.name === location)!;

    const baseUrl = 'https://api.open-meteo.com/v1/forecast?';
    const coordinatesUrl = `latitude=${currentCoordinates.latitude}&longitude=${currentCoordinates.longitude}&`;
    const dataUrlOne = 'current=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,weathercode,';
    const dataUrlTwo = 'surface_pressure,windspeed_10m,winddirection_10m&hourly=temperature_2m,precipitation_probability,';
    const dataUrlThree = 'weathercode,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,'
    const dataUrlFour = 'uv_index_max&timezone=Europe%2FBerlin&forecast_days=5';

    const weatherUrl = `${baseUrl}${coordinatesUrl}${dataUrlOne}${dataUrlTwo}${dataUrlThree}${dataUrlFour}`;

    try {
        const response = await axios.get(weatherUrl);

        if (response.status !== 200) {
            throw new Error('Fetching weatherdata failed. Try again');
        }

        const data = response.data;
        return data;
    } catch (error) {
        console.error(error);
    }
}

const useFetchWeatherData = (location: string) => {
    const weatherQuery = useQuery({
        queryKey: [`weatherData${location}`],
        queryFn: () =>
            fetchData(location),
    });

    if (weatherQuery.status === "pending") {
        return "Loading";
    } 
    
    if (weatherQuery.status === "error") {
        return JSON.stringify(weatherQuery.error);
    }

    return weatherQuery.data;
}

export default useFetchWeatherData;
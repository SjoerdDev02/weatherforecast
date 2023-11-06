import { weatherCodes } from "../database/weatherCodes"

const useSelectWeatherIcon = (weather: number, dark: boolean) => {
    const weatherName = weatherCodes.find((weatherCode) => weatherCode.code.includes(weather))!.description;

    if (dark) {
        return `/icons/weather/forecast/${weatherName}-dark.svg`;
    } else {
        return `/icons/weather/forecast/${weatherName}.svg`;
    }
}

export default useSelectWeatherIcon;
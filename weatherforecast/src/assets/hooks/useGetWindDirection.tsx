const useGetWindDirection = (degrees: number | undefined) => {
    if (degrees === undefined) {
        return;
    } else if (degrees > 338 || degrees < 22) {
        return 'north';
    } else if (degrees >= 22 && degrees <= 68) {
        return 'north east';
    } else if (degrees > 68 && degrees < 112) {
        return 'east';
    } else if (degrees >= 112 && degrees <= 158) {
        return 'south east';
    } else if (degrees > 158 && degrees < 202) {
        return 'south';
    } else if (degrees >= 202 && degrees <= 248) {
        return 'south west';
    } else if (degrees > 248 && degrees < 292) {
        return 'west';
    } else {
        return 'north west';
    }
}

export default useGetWindDirection;
export function convertKelvinToCelsius(tempInKelvin: number): number {
    const tempInCelsius = tempInKelvin - 237.15;
    return Math.floor(tempInCelsius);
}
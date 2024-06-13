/** @format */

export function convertWindSpeed(speedINMetersPerSecond: number) : string {
    const speedInKilometersPerHour = speedINMetersPerSecond * 3.6;
    return `${speedInKilometersPerHour.toFixed(0)}km/h`
}
import { IWeatherForecast } from "./WeatherForecast";

export interface IWeather {
  timestamp?: string;
  weatherStation?: string;
  forecasts?: Array<IWeatherForecast>;
}

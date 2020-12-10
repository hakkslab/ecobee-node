export enum WeatherSymbol {
  NoSymbol = -2,
  Sunny = 0,
  FewClouds = 1,
  PartlyCloudy = 2,
  MostlyCloudy = 3,
  Overcast = 4,
  Drizzle = 5,
  Rain = 6,
  FreezingRain = 7,
  Showers = 8,
  Hail = 9,
  Snow = 10,
  Flurries = 11,
  FreezingSnow = 12,
  Blizzard = 13,
  Pellets = 14,
  Thunderstorm = 15,
  Windy = 16,
  Tornado = 17,
  Fog = 18,
  Haze = 19,
  Smoke = 20,
  Dust = 21,
}

export enum Sky {
  Sunny = 1,
  Clear = 2,
  MostlySunny = 3,
  MostlyClear = 4,
  HazySunshine = 5,
  Haze = 6,
  PassingClouds = 7,
  MoreSunThanClouds = 8,
  ScatteredClouds = 9,
  PartlyCloudy = 10,
  AMixtureOfSunAndClouds = 11,
  HighLevelClouds = 12,
  MoreCloudsThanSun = 13,
  PartlySunny = 14,
  BrokenClouds = 15,
  MostlyCloudy = 16,
  Cloudy = 17,
  Overcast = 18,
  LowClouds = 19,
  LightFog = 20,
  Fog = 21,
  DenseFog = 22,
  IceFog = 23,
  Sandstorm = 24, // do do do do do
  Duststorm = 25,
  IncreasingCloudiness = 26,
  DecreasingCloudiness = 27,
  ClearingSkies = 28,
  BreaksOfSunLate = 29,
  EarlyFogFollowedBySunnySkies = 30,
  AfternoonClouds = 31,
  MorningClouds = 32,
  Smoke = 33,
  LowLevelHaze = 34,
}

export interface IWeatherForecast {
  weatherSymbol?: WeatherSymbol;
  dateTime?: string;
  condition?: string;
  temperature?: number;
  pressure?: number;
  relativeHumidity?: number;
  dewpoint?: number;
  visibility?: number;
  windSpeed?: number;
  windGust?: number;
  windDirection?: string;
  windBearing?: number;
  pop?: number;
  tempHigh?: number;
  tempLow?: number;
  sky?: Sky;
}

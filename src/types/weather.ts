export interface Weather {
  main: {
    feels_like: number;
    humidity: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: Array<{
    icon: string;
    main: string;
  }>;
  wind: {
    speed: number;
    deg: number;
  };
  visibility: number;
  rain?: Record<string, number>;
}

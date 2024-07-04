import { useQuery } from "@tanstack/react-query";

import { GetWeatherData } from "../GetWeatherData";

export function WeatherApi(city: string) {
  return useQuery({ queryKey: ["weather"], queryFn: GetWeatherData(city) });
}

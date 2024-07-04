import { useQuery } from "@tanstack/react-query";

import { GetWeatherData } from "../GetWeatherData";
import { type WeatherData } from "../../types/DataTypes";

export function WeatherApi({ city }: { city: string }) {
  return useQuery<WeatherData>({
    queryKey: [`weather-${city}`],
    queryFn: GetWeatherData({ city }),
  });
}

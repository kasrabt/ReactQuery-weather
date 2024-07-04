import { type WeatherData } from "../types/DataTypes";
import { AxiosStaticLink } from "./StaticLink";

export const GetWeatherData =
  ({ city }: { city: string }) =>
  async () => {
    const response = await AxiosStaticLink.get(
      `?q=${city}&units=imperial&appid=5a8215f577076017ce8c00cf0fa1d07a`,
    );
    const data: WeatherData = (await response.data) as WeatherData;

    return data;
  };

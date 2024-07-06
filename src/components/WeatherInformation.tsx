"use client";
import React from "react";
import { WeatherApi } from "~/services/hooks/WeatherApi";
import { useStore } from "~/store/Index";

export default function WeatherInformation() {
  const { city } = useStore();
  const { data, isLoading , isError } = WeatherApi({ city: city });
 console.log(!data)
  return (
    <div className=" flex flex-col items-center justify-center gap-3 ">
      {isLoading ? (
        <h3 className=" rounded-lg bg-black/15 px-4 py-2"> Loading ... </h3>
      )  : isError ? <h3 className=" rounded-lg bg-black/15 px-4 py-2 mb-5"> THIS PLACE DOES NOT EXIST ! </h3>  : !data  ? <h3 className=" rounded-lg bg-black/15 px-4 py-2 mb-5"> THIS PLACE DOES NOT EXIST !! </h3> :   (
        <>
          <h1 className=" text-2xl  font-bold ">{city.toUpperCase()}</h1>
          <ul className=" flex flex-col items-center gap-4 mb-5">
            <li className=" flex items-center justify-center gap-2">
              {" "}
              <span className=" text-2xl font-bold ">Temp : </span>{" "}
              {data?.main.temp}{" "}
            </li>
            <li className=" flex items-center justify-center gap-2">
              {" "}
              <span className=" text-2xl font-bold ">humidity : </span>{" "}
              {data?.main.humidity}{" "}
            </li>
            <li className=" flex items-center justify-center gap-2">
              {" "}
              <span className=" text-2xl font-bold ">Feels Like :</span>{" "}
              {data?.main.feels_like}{" "}
            </li>
          </ul>
        </>
      )}
    </div>
  );
}

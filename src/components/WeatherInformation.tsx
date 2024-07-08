"use client";
import { useTranslations } from "next-intl";
import React from "react";
import { WeatherApi } from "~/services/hooks/WeatherApi";
import { useStore } from "~/store/Index";

export default function WeatherInformation() {
  const { city } = useStore();
  const t = useTranslations("Index");
  const { data, isLoading, isError } = WeatherApi({ city: city });

  return (
    <div className=" flex flex-col items-center justify-center gap-3 ">
      {isLoading ? (
        <h3 className=" rounded-lg bg-black/15 px-4 py-2"> {t("loading")} </h3>
      ) : isError ? (
        <h3 className=" mb-5 rounded-lg bg-black/15 px-4 py-2">
          {" "}
          {t("error")}{" "}
        </h3>
      ) : !data ? (
        <h3 className=" mb-5 rounded-lg bg-black/15 px-4 py-2">
          {" "}
          {t("error")}{" "}
        </h3>
      ) : (
        <>
          <h1 className=" text-2xl  font-bold ">{city.toUpperCase()}</h1>
          <ul className=" mb-5 flex flex-col items-center gap-4">
            <li className=" flex items-center justify-center gap-2">
              {" "}
              <span className=" text-2xl font-bold ">{t("temp")} : </span>{" "}
              {data?.main.temp}{" "}
            </li>
            <li className=" flex items-center justify-center gap-2">
              {" "}
              <span className=" text-2xl font-bold ">
                {t("humidity")} :{" "}
              </span>{" "}
              {data?.main.humidity}{" "}
            </li>
            <li className=" flex items-center justify-center gap-2">
              {" "}
              <span className=" text-2xl font-bold ">
                {t("Feels Like")} :
              </span>{" "}
              {data?.main.feels_like}{" "}
            </li>
          </ul>
        </>
      )}
    </div>
  );
}

import React from "react";
import dynamic from "next/dynamic";
const LottieAnimation = dynamic(() => import('../components/LottieAnimation'), { ssr: false });
import WeatherInformation from "./WeatherInformation";


export default function Cart() {
  return (
    <section className=" my-auto w-fit rounded-lg bg-black/5  bg-opacity-65 px-7 py-2 shadow-sm  ">
     <LottieAnimation />
      <WeatherInformation />
    </section>
  );
}

import React from "react";

const Weather = (props) => {
  const { name, main, weather, feels, humidity, speed } = props;
  return (
    <div>
      <div className=" text-white fixed left-20 top-52">
        <div>
          <p className=" text-3xl font-bold">{name}</p>
        </div>
        <div>
          <h1 className=" text-8xl font-bold">{main}°F</h1>
        </div>
        <div>
          <p className=" text-3xl font-bold">{weather}</p>
        </div>
      </div>

      <div className="sm:left-32 p-3 sm:gap-10 md:gap-20  bg-white/30 flex-row flex fixed bottom-28 md:left-[23%] lg:left-[32%] text-white rounded-2xl">
        <div>
          <p className=" text-3xl font-bold">{feels}°F</p>
          <p className=" text-2xl font-bold" >Feels Like</p>
        </div>
        <div>
          <p className=" text-3xl font-bold">{humidity}%</p>
          <p className=" text-2xl font-bold">Humidity</p>
        </div>
        <div>
          <p className=" text-3xl font-bold">{speed} MPH</p>
          <p className=" text-2xl font-bold">Wind Speed</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;

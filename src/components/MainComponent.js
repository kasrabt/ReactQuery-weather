import { Fragment, useState } from "react";
import { useCryptoQuery } from "./hooks/myHooks";
import { useRef } from "react";
import Weather from "./Weather/weather";
const MainC = () => {
  const [city, setCity] = useState("tehran");
  const cityVal = useRef();
  const changeHandler = (e) => {
    e.preventDefault();
    const mycity = cityVal.current.value;
    setCity(mycity);
  };
  const { data, isLoading, isError } = useCryptoQuery(city);
  const myData = Array(data);
 
  return (
    <Fragment>
      <div>
        <form onSubmit={changeHandler}>
          <input
            type="text"
            placeholder="search"
            className=" rounded-xl placeholder:text-white text-white w-50 h-10 mt-5 p-2 focus:outline-none  border-none bg-white/20"
            ref={cityVal}
          />
          <button className=" text-white  ml-10">click</button>
        </form>
        {isLoading && (
          <p className="text-white font-bold mt-10 mr-10">loading ....</p>
        )}
        {isError && (
          <h1 className="font-bold text-white mt-10">
            please enter correct value
          </h1>
        )}
        {!isLoading &&
          !isError &&
          myData.map((c) => {
            return (
              <Weather
                key={c.id}
                name={c.name}
                main={c.main.temp.toFixed()}
                weather={c.weather[0].main}
                feels={c.main.feels_like.toFixed()}
                humidity={c.main.humidity}
                speed={c.wind.speed.toFixed()}
              />
            );
          })}{" "}
      </div>
    </Fragment>
  );
};
export default MainC;

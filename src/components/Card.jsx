import { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

/* eslint-disable react/prop-types */
const Card = ({ data }) => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (JSON.stringify(data) !== "{}") {
    return (
      <div className=" d-flex flex-column align-items-center gap-2 mt-3">
        <p className="text-success fw-bold fs-5">Your Current Time:</p>
        <Clock value={value} />
        <h2>
          {data.name},{data.sys.country}
        </h2>
        <h1>
          <img
            src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
            alt=""
          />
          {data.main.temp}°C
        </h1>
        <h4>{data.weather[0].main}</h4>
        <p>Humidity: {data.main.humidity}%</p>
        <p>Visibility : {data.visibility / 1000}km</p>
      </div>
    );
  }
};

export default Card;

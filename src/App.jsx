import { useCallback, useEffect, useState } from "react";
import { api, api_key } from "./api/api";
import Card from "./components/Card";
import Form from "./components/Form";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [country, setCountry] = useState("yangon");

  const fetchWeatherData = useCallback(
    async (country_data) => {
      if (country_data !== undefined) {
        setCountry(country_data);
      }
      try {
        const res = await api.get(`/weather?q=${country}&appid=${api_key}`);
        setWeatherData(res.data);
      } catch (err) {
        console.log(err.message);
      }
    },
    [country]
  );

  useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData]);

  return (
    <div className="min-vh-100 d-flex justify-content-center  align-items-center  p-2">
      <div className="shadow-lg bg-light">
        <h3 className="text-center mt-2 text-success fw-bold">
          Mini Weather App
        </h3>
        <Form fetchWeatherData={fetchWeatherData} />
        <Card data={weatherData} />
      </div>
    </div>
  );
}

export default App;

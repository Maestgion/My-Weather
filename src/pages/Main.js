import React, { useState } from "react";
import { weather_api_key, weather_api_url } from "../Api/api";
import CurrentWeather from "../components/currentWeather/CurrentWeather";
import Forecast from "../components/forecast/Forecast";
import Search from "../components/search/Search";
import bg from "../Assets/Icons/bg.jpg"

const Main = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [weatherForecast, setWeatherForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    // console.log(searchData);

    // splitting the value (key) and storing in the two vars

    const [lat, lon] = searchData.value.split(" ");
    // console.log(lat, lon);

    // fetching current weather and forecast

    const currentWeatherFetch = fetch(
      `${weather_api_url}/weather?lat=${lat}&lon=${lon}&appid=${weather_api_key}&units=metric`
    );

    const weatherForecastFetch = fetch(
      `${weather_api_url}/forecast?lat=${lat}&lon=${lon}&appid=${weather_api_key}&units=metric`
    );

    // fetching both using Promise.all
    Promise.all([currentWeatherFetch, weatherForecastFetch])
      .then(async (res) => {
        const waeatherRes = await res[0].json();
        const forecastRes = await res[1].json();

        setCurrentWeather({ city: searchData.label, ...waeatherRes });
        setWeatherForecast({ city: searchData.label, ...forecastRes });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // console.log(currentWeather);
  // console.log(weatherForecast);

  return (
    <>
      <div className="h-[100vh] flex flex-col items-center py-10 font-Roboto  gap-10  overflow-y-scroll bg-no-repeat object-contain" style={{ 
      backgroundImage: `url(${bg})`,
      // backgroundSize: 'cover',
      backgroundSize: "100% 100%"
        
    }}>
        {/* search widget */}

        <div className="w-8/12">
          <Search onSearchChange={handleOnSearchChange} />
        </div>

        {/* current weather widget */}

        <div>{currentWeather && <CurrentWeather data={currentWeather} />}</div>


        {/* forecast wideget */}

        <div>
          
          {weatherForecast && <Forecast data={weatherForecast} />}
        </div>
      </div>
    </>
  );
};

export default Main;

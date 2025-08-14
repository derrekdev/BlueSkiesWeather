import { format } from "date-fns";
import { useRef } from "react";
import { useWeatherData } from "../../../store/storeWeatherData";
import "../../../styles/features/subWeather.scss";
import type { WeatherApiResponseType } from "../../../types/weather";
import Button from "../../ui/button";
import Card from "../../ui/card";
import ArrowLeft from "../../ui/icons/ArrowLeft";
import ArrowRight from "../../ui/icons/ArrowRight";

export default function SubWeather() {
  const weatherData: WeatherApiResponseType = useWeatherData(
    (state) => state.weatherData
  );
  const forecastWeather = weatherData.forecast.forecastday;
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const SCROLL_VALUE = 500;

  console.log("forecastWeather length", forecastWeather);
  console.log("forecastWeather", forecastWeather);

  const handleScroll = (direction: "left" | "right" = "left") => {
    if (scrollContainerRef.current) {
      if (direction === "left") {
        // scrollContainerRef.current.style.scrollBehavior = "smooth";
        scrollContainerRef.current.scrollLeft -= SCROLL_VALUE;

        // scrollContainerRef.current.scrollTo({
        //   left: scrollContainerRef.current.clientWidth,
        //   behavior: "smooth",
        // });
      } else if (direction === "right") {
        // scrollContainerRef.current.style.scrollBehavior = "smooth";
        scrollContainerRef.current.scrollLeft += SCROLL_VALUE;
      }
    }
  };

  return (
    <>
      <div className="sub-container" ref={scrollContainerRef}>
        <div className="sub-weather-container" id="subWeatherContainer">
          {forecastWeather &&
            forecastWeather.map((weatherData) => {
              console.log("data", weatherData);

              return weatherData.hour.map((hourlyData, i) => (
                <Card key={i} className="min-card">
                  <span>{format(new Date(hourlyData.time), "hh:mm a")}</span>
                  <img
                    src={hourlyData.condition.icon}
                    className="sub-weather-image"
                  />
                  <span>{hourlyData.heatindex_c}</span>
                </Card>
              ));
            })}
        </div>
      </div>
      <div className="sub-weather-button-container">
        <div className="sub-weather-button-block">
          <Button
            onClick={() => {
              handleScroll("left");
            }}
          >
            <ArrowLeft strokeWidth={2} width={35} height={35} />
          </Button>
          <Button
            onClick={() => {
              handleScroll("right");
            }}
          >
            <ArrowRight strokeWidth={2} width={35} height={35} />
          </Button>
        </div>
      </div>
    </>
  );
}

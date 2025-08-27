import { addSeconds, format, isWithinInterval } from "date-fns";
import { useRef } from "react";
import { useLoading } from "../../../store/storeLoading";
import { useWeatherData } from "../../../store/storeWeatherData";
import "../../../styles/features/subWeather.scss";
import type { WeatherApiResponseType } from "../../../types/weather";
import Button from "../../ui/button";
import Card from "../../ui/card";
import ArrowLeft from "../../ui/icons/ArrowLeft";
import ArrowRight from "../../ui/icons/ArrowRight";
import LoadingCard from "../../ui/loadingCard";

export default function SubWeather() {
  const weatherData: WeatherApiResponseType = useWeatherData(
    (state) => state.weatherData
  );
  const isLoading = useLoading((state) => state.isLoading);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const forecastWeather = weatherData.forecast.forecastday;
  const currentWeather = weatherData.current;
  const currentDateTime = currentWeather.last_updated;
  const SCROLL_VALUE = 500;

  // console.log("forecast Weather", forecastWeather);
  // console.log("current Weather", currentWeather);

  // console.log("current date time", currentDateTime);

  const getTime = new Date(currentDateTime);

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

  console.log("isLoading sub weather", isLoading);

  return (
    <>
      <div className="sub-container" ref={scrollContainerRef}>
        <div className="sub-weather-container" id="subWeatherContainer">
          {isLoading ? (
            <div className="sub-weather-loading-container">
              {[...Array(10)].map((_, i) => (
                <LoadingCard key={i} type="sub" />
              ))}
            </div>
          ) : (
            forecastWeather &&
            forecastWeather.map((weatherData) => {
              // console.log("data", weatherData);

              return weatherData.hour.map((hourlyData, i) => {
                const isWithinRange = isWithinInterval(getTime, {
                  start: new Date(hourlyData.time),
                  end: addSeconds(new Date(hourlyData.time), 3599),
                });
                // console.log(
                //   "time diffrence = ",
                //   isWithinRange,
                //   " == current === ",
                //   getTime,
                //   " == start === ",
                //   new Date(hourlyData.time),
                //   " == end === ",
                //   addSeconds(new Date(hourlyData.time), 3599)
                // );
                return (
                  <Card
                    key={i}
                    className={`min-card ${isWithinRange ? "highlight" : ""}`}
                  >
                    <span>{format(new Date(hourlyData.time), "hh:mm a")}</span>
                    <img
                      src={hourlyData.condition.icon}
                      className="sub-weather-image"
                    />
                    <span>
                      {hourlyData.heatindex_c}
                      &deg;C
                    </span>
                  </Card>
                );
              });
            })
          )}
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

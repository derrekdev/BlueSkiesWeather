import { useCallback } from "react";
import "../../../styles/mainComponent.scss";
import Card from "../../ui/card";

export default function MainComponent() {
  const fetchWeatherData = useCallback(() => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=32a55bd6f3a34377bb074242250808&q=Dumaguete&days=1&aqi=no&alerts=no`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  fetchWeatherData();

  // useEffect(() => {
  //   fetch(
  //     `http://api.weatherapi.com/v1/forecast.json?key=32a55bd6f3a34377bb074242250808&q=Dumaguete&days=1&aqi=no&alerts=no`
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);
  return (
    <main>
      <div className="current-container">
        <Card />
      </div>
    </main>
  );
}

"use server";

export async function getWeather() {
  try {
    const response = await fetch(
      // `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=Dumaguete&days=1&aqi=no&alerts=no`
      `http://api.weatherapi.com/v1/forecast.json?key=32a55bd6f3a34377bb074242250808&q=Dumaguete&days=1&aqi=no&alerts=no`
    );

    return await response.json();
  } catch (err) {
    console.log((err as Error).message);
    return JSON.stringify({
      message: (err as Error).message,
    });
  }
}

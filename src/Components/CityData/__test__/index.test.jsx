/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import CityData from "..";

test("CityData Comp should render properly", () => {
  const locationData = {
    country: "Sri Lanka",
    lat: 6.93,
    localtime: "2024-01-27 18:45",
    localtime_epoch: 1706361303,
    lon: 79.85,
    name: "Colombo",
    region: "Western",
    tz_id: "Asia/Colombo",
  };

  const todayForecastData = {
    astro: {
      is_moon_up: 1,
      is_sun_up: 0,
      moon_illumination: 95,
      moon_phase: "Waning Gibbous",
      moonrise: "08:26 PM",
      moonset: "08:17 AM",
      sunrise: "06:29 AM",
      sunset: "06:18 PM",
    },
    day: {
      avghumidity: 77,
      avgtemp_c: 27,
      avgtemp_f: 80.6,
      avgvis_km: 10,
      avgvis_miles: 6,
      condition: {
        code: 1063,
        icon: "//cdn.weatherapi.com/weather/64x64/day/176.png",
        text: "Patchy rain nearby",
      },
      daily_chance_of_rain: 88,
      daily_chance_of_snow: 0,
      daily_will_it_rain: 1,
      daily_will_it_snow: 0,
      maxtemp_c: 30.4,
      maxtemp_f: 86.8,
      maxwind_kph: 26.6,
      maxwind_mph: 16.6,
      mintemp_c: 24.3,
      mintemp_f: 75.8,
      totalprecip_in: 0.01,
      totalprecip_mm: 0.38,
      totalsnow_cm: 0,
      uv: 11,
    },
  };

  const currentWeatherData = {
    condition: {
      text: "Partly cloudy",
      icon: "http://cdn.weatherapi.com/weather/64x64/night/116.png",
      code: 1003,
    },
    feelslike_c: 31.7,
    feelslike_f: 89.1,
    gust_kph: 40.1,
    gust_mph: 24.9,
    humidity: 79,
    is_day: 0,
    last_updated: "2024-01-27 19:30",
    last_updated_epoch: 1706364000,
    precip_in: 0,
    precip_mm: 0.04,
    pressure_in: 29.88,
    pressure_mb: 1012,
    temp_c: 28,
    temp_f: 82.4,
    uv: 1,
    vis_km: 9,
    vis_miles: 5,
    wind_degree: 350,
    wind_dir: "N",
    wind_kph: 11.2,
    wind_mph: 6.9,
  };

  const { getByLabelText } = render(
    <CityData
      locationData={locationData}
      todayForecastData={todayForecastData}
      currentWeatherData={currentWeatherData}
    />,
  );

  const cityLocationNDateTimeBoxComp = getByLabelText(
    "city location N data time",
  );
  expect(cityLocationNDateTimeBoxComp).toBeInTheDocument();

  const cityMainStatBoxComp = getByLabelText("city main stats");
  expect(cityMainStatBoxComp).toBeInTheDocument();

  const cityMiniStatBoxComp = getByLabelText("city mini stats");
  expect(cityMiniStatBoxComp).toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";
import { CityLocationNDateTimeBox, CityMainStatBox } from "../UtilComponents";
import { getCityDateNTime } from "../UtilFns";

test("CityLocationNDateTimeBox should render properly", () => {
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

  render(<CityLocationNDateTimeBox locationData={locationData} />);

  const dateNTimeTextEl = screen.getByText(
    getCityDateNTime(locationData.localtime),
  );
  expect(dateNTimeTextEl).toBeInTheDocument();

  const cityNCountryNameTextEl = screen.getByText(
    `${locationData.name} ${locationData.country}`,
  );
  expect(cityNCountryNameTextEl).toBeInTheDocument();
});

test("CityMainStatBox should render properly", () => {
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

  render(<CityMainStatBox currentWeatherData={currentWeatherData} />);

  const conditionImageEl = screen.getByAltText("conditionImage");
  expect(conditionImageEl.src).toBe(currentWeatherData.condition.icon);

  const temperatureTextEl = screen.getByText(
    `${currentWeatherData.temp_c} &#8451;`,
  );
  expect(temperatureTextEl).toBeInTheDocument();

  const conditionTextEl = screen.getByText(currentWeatherData.condition.text);
  expect(conditionTextEl).toBeInTheDocument();
});

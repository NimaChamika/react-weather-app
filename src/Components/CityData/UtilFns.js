const getCityDateNTime = (value) => {
  const dateData = new Date(value)
    .toLocaleString("default", {
      year: "numeric",
      month: "short",
      day: "2-digit",

      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h12",
    })
    .split(" ");

  return `${dateData[1]} ${dateData[0]} at ${dateData[2]} ${dateData[3]} ${dateData[4]}`;
};

const getCityStatDataArr = (todayForecastData, currentWeatherData) => {
  const statsDataArr = {
    sunRiseData: {
      imgSrc: "/images/sunrise.png",
      altText: "sunRiseImage",
      title: "SunRise",
      value: todayForecastData.astro.sunrise,
    },
    sunSetData: {
      imgSrc: "/images/sunset.png",
      altText: "sunSetImage",
      title: "SunSet",
      value: todayForecastData.astro.sunset,
    },
    minTempData: {
      imgSrc: "/images/minTemp.png",
      altText: "minTempImage",
      title: "Min Temp",
      value: `${todayForecastData.day.mintemp_c} \u2103`,
    },
    maxTempData: {
      imgSrc: "/images/maxTemp.png",
      altText: "maxTempImage",
      title: "Max Temp",
      value: `${todayForecastData.day.maxtemp_c} \u2103`,
    },
    humidityData: {
      imgSrc: "/images/humidity.png",
      altText: "humidityImage",
      title: "Humidity",
      value: currentWeatherData.humidity,
    },
    windData: {
      imgSrc: "/images/wind.png",
      altText: "windImage",
      title: "Wind",
      value: `${currentWeatherData.wind_kph} km/h`,
    },
    realFeelData: {
      imgSrc: "/images/realFeel.png",
      altText: "realFeelImage",
      title: "Real Feel",
      value: `${currentWeatherData.feelslike_c} \u2103`,
    },
    chanceOfRainData: {
      imgSrc: "/images/chanceOfRain.png",
      altText: "chanceOfRainImage",
      title: "Chance Of Rain",
      value: `${todayForecastData.day.daily_chance_of_rain} %`,
    },
  };

  return statsDataArr;
};

export { getCityDateNTime, getCityStatDataArr };

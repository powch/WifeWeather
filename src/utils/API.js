export const getData = ({ zipCode, setWeatherData }) => {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${process.env.REACT_APP_WEATHER_ID}`
  )
    .then(res => res.json())
    .then(data =>
      setWeatherData({
        name: data.name,
        currentTemp: Math.floor(data.main.temp),
        dailyHigh: data.main.temp_max,
        dailyLow: data.main.temp_min,
        currentConditions: data.weather[0].main,
        conditionDescription: data.weather[0].description,
        currentWind: data.wind.speed,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        rainFall: data.rain['1h']
      })
    );
}
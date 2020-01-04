import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setWeatherData } from './actions';

import Weather from './pages/Weather';

const App = props => {
  console.log(props);
  const { zipCode, setWeatherData } = props;

  useEffect(() => {
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
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        })
      );
  });

  return <Weather {...props} />;
};

const mapStateToProps = state => {
  return {
    weather: state.weather,
    zipCode: state.zipCode
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setWeatherData: payload => dispatch(setWeatherData(payload))
  };
};

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;

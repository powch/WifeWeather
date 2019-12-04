import React, { Component } from 'react';
import InfoCluster from './components/InfoCluster';

class App extends Component {
  state = {
    name: null,
    currentTemp: null,
    dailyHigh: null,
    dailyLow: null,
    currentConditions: null,
    conditionDescription: null,
    currentWind: null,
    icon: null
  };

  componentDidMount() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?zip=29492,us&units=imperial&appid=29b1398b1d0f546acae0bb159935c1f4`
    )
      .then(res => res.json())
      .then(data =>
        this.setState({
          name: data.name,
          currentTemp: Math.floor(data.main.temp),
          dailyHigh: data.main.temp_max,
          dailyLow: data.main.temp_min,
          currentConditions: data.weather[0].main,
          conditionDescription: data.weather[0].description,
          currentWind: data.wind.speed,
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <InfoCluster
        icon={this.state.icon}
        currentTemp={this.state.currentTemp}
        description={this.state.conditionDescription}
      />
    );
  }
}

export default App;

import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getData } from './utils/API';
import { setWeatherData } from './actions';
import Weather from './pages/Weather';

const App = props => {
  useEffect(() => {
    // getData(props);
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

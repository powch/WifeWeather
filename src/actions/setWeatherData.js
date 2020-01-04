import { SET_WEATHER_DATA } from '../constants/action-types';

const setWeatherData = payload => {
  return { type: SET_WEATHER_DATA, payload };
};

export default setWeatherData;

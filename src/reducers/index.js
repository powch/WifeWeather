import { SET_WEATHER_DATA } from '../constants/action-types';

const testData = {
  weather: {
    name: 'Charleston',
    currentTemp: 61,
    dailyHigh: 63,
    dailyLow: 60,
    currentConditions: 'Drizzle',
    conditionDescription: 'light intensity drizzle',
    currentWind: 10,
    icon: `https://openweathermap.org/img/wn/09d@2x.png`,
    rainFall: 0.25
  },
  zipCode: '29492'
};

// const initialState = {
//   weather: {
//     name: null,
//     currentTemp: null,
//     dailyHigh: null,
//     dailyLow: null,
//     currentConditions: null,
//     conditionDescription: null,
//     currentWind: null,
//     icon: null,
//     rainFall: null
//   },
//   zipCode: '29492'
// };

function rootReducer(state = testData, action) {
  const { weather } = state;
  switch (action.type) {
    // Set weather data after API call
    case SET_WEATHER_DATA:
      return {
        ...weather,
        weather: action.payload
      };

    // Return previous state if no cases match
    default:
      return state;
  }
}
export default rootReducer;

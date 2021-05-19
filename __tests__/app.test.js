import { formatLocation, formatWeather } from '../lib/munge-utils.js';
import LocationData from '../data/location-data.js';
import WeatherData from '../data/weather-data.js';

describe('API Data Munging', () => {

  const expectedLocation =

  {
    'formatted_query': 'Avenida Calle 30, Barranquillita, Barranquilla, Atlántico, Caribe, 080004, Colombia',
    'latitude': '10.9777174',
    'longitude': '-74.7765211'
  }
    ;



  it('munges location data', async () => {
    // arrange
    // expected is in variable above
    // movieData is imported from file

    // act 
    const output = formatLocation(LocationData);

    // assert
    expect(output).toEqual(expectedLocation);
  });

  const expectedWeather =
  {
    'forecast': 353.972,
    'time': '2021-05-18'
  };



  it('munges weather data', async () => {
    // arrange
    // expected is in variable above
    // movieData is imported from file

    // act 
    const output = formatWeather(WeatherData);

    // assert
    expect(output[0]).toEqual(expectedWeather);
  });



});
import { formatLocation, formatWeather, formatYelp } from '../lib/munge-utils.js';
import LocationData from '../data/location-data.js';
import WeatherData from '../data/weather-data.js';
import YelpData from '../data/yelp-data.js';

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

    // act 
    const output = formatWeather(WeatherData);

    // assert
    expect(output[0]).toEqual(expectedWeather);
  });



});

const expectedYelp =

{
  'img_url': undefined,
  'name': 'Screen Door - Eastside',
  'price': '$$',
  'rating': 4.5,
  'url': 'https://www.yelp.com/biz/screen-door-eastside-portland?adjust_creative=F0oDWU4p051XqPkRppRgBQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=F0oDWU4p051XqPkRppRgBQ'
};


it('munges Yelp data', async () => {

  // act 
  const output = formatYelp(YelpData);

  // assert
  expect(output[0]).toEqual(expectedYelp);
});




import { formatLocation } from '../lib/munge-utils.js';
import LocationData from '../data/location-data.js';

describe('API Data Munging', () => {

  const expectedLocation =

  {
    'formatted_query': 'Avenida Calle 30, Barranquillita, Barranquilla, Atlántico, Caribe, 080004, Colombia',
    'latitude': '10.9777174',
    'longitude': '-74.7765211'
  }
    ;



  it('munges movie data', async () => {
    // arrange
    // expected is in variable above
    // movieData is imported from file

    // act 
    const output = formatLocation(LocationData);

    // assert
    expect(output).toEqual(expectedLocation);
  });



});
import formatLocation from '../lib/munge-utils';
import LocationData from '../data/location-data';

describe('API Data Munging', () => {

  const expectedLocation =

  {
    'formatted_query': 'Avenida Calle 30, Barranquillita, Barranquilla, Atlántico',
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
    expect(output[0]).toEqual(expectedLocation);
  });



});
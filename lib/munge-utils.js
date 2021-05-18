export function formatLocation(data) {

  return data.map(booger => {
    return {
      formatted_query: booger.display_name,
      latitude: booger.lat,
      longitude: booger.lon
    };
  });



}

/*

export function formatWeather(data) {
  data;


  return {

  };

}

export function formatYelp(data) {

  const transformYelp = data.businesses.map(business => {
    return {
      name: business.name,
      img_url: business.img_url,
      price: business.price,
      rating: business.rating,
      url: business.url
    };


  });
  //depends what you get,

  return transformYelp;


}

*/

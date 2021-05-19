export function formatLocation(data) {

  return {
    formatted_query: data[0].display_name,
    latitude: data[0].lat,
    longitude: data[0].lon
  };
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

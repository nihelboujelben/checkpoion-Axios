const axios = require('axios')

const requestOne = axios.get(
    'http://api.openweathermap.org/data/2.5/weather?q=Tunis&appid=5a3a27bfa345c37a542a4e10771e0bb3');
    const requestTwo = axios.get(
        'http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=5a3a27bfa345c37a542a4e10771e0bb3');
        const requestThree = axios.get(
            'http://api.openweathermap.org/data/2.5/weather?q=London&appid=5a3a27bfa345c37a542a4e10771e0bb3');


axios
  .all([
    requestOne, 
      requestTwo,
       requestThree])
  .then(
      axios.spread((
          firstRequest, 
          secondRequest, 
          thirdRequest) => {
      console.log(firstRequest.data,secondRequest.data, thirdRequest.data);
    })
  )
   .catch(errors => {
    console.error(errors);
   });
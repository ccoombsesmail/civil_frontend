var axios = require("axios");

var options = {
  method: 'GET',
  url: 'https://google-news.p.rapidapi.com/v1/topic_headlines',
  params: {lang: 'en', country: 'US', topic: 'technology'},
  headers: {
    'x-rapidapi-host': 'google-news.p.rapidapi.com',
    'x-rapidapi-key': '4aa94b2d94msh0e93bec3cb8641dp163fa8jsn2a3ba20d6a9c'
  }
};

export default () => axios.request(options).then(function (response) {
}).catch(function (error) {
	console.error(error);
});
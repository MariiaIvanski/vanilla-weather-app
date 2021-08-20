function displayTemperature(response) {
  console.log(response.data);
}

const apiKey = "a2d283df905dedf8786b96ad24673f92";
let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
axios.get(weatherUrl).then(displayTemperature);

const url = "https://api.openweathermap.org/data/2.5/";
const key = "80517a89bd3c713f8173b2bf43a2a77b";

const setQuery = (e) => {
  if (e.keyCode == "13") getResault(searchBar.value);
};

const getResault = (cityName) => {
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=en`;
  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResault);
};

const displayResault = (result) => {
  console.log(result);

  let city = document.querySelector(".city");
  city.innerText = `${result.name}, ${result.sys.country}`;

  let temp = document.querySelector(".temp");
  temp.innerHTML = `${Math.round(result.main.temp)}&deg;C`; // Math.round() method returns the value of a number rounded to the nearest integer.

  let desc = document.querySelector(".desc");
  desc.innerText = result.weather[0].description;

  let minmax = document.querySelector(".minmax");
  minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(
    result.main.temp_max
  )}°C`;
};

const searchBar = document.querySelector("#searchBar");
searchBar.addEventListener("keydown", setQuery);

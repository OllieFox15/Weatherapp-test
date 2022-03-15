
function search(event) {
  event.preventDefault();
  //let city = document.querySelector("#city");
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}

let now = new Date();
let hours = now.getHours();
if (hours <= 9) {
  hours = `0${hours}`;
}

let minutes = now.getMinutes();
if (minutes <= 9) {
  minutes = `0${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let date = days[now.getDay()];

let ul = document.querySelector("li");
ul.innerHTML = `${date} ${hours}:${minutes}`;

//let temperatureC = document.querySelector("temperature")

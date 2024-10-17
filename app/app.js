let now = new Date();
let currentDay = document.querySelector("#current-day");
let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let weekDayNow = weekDays[now.getDay()];
currentDay.innerHTML = weekDayNow;

let currentHour = document.querySelector("#current-hour");
let hour = now.getHours();
let minutes = now.getMinutes();

if (minutes < 10) {
  minutes = `0${minutes}`;
}

if (hour < 10) {
  hour = `0${hour}`;
}

currentHour.innerHTML = `${hour}:${minutes}`;

function enterCity(event) {
  event.preventDefault();
  let h1 = document.querySelector("h1");
  let cityInput = document.querySelector("#city-input");
  h1.innerHTML = cityInput.value;
}
let searchBar = document.querySelector("form");
searchBar.addEventListener("submit", enterCity);

//do not shere api key to anyone
const API_KEY = `d22d3edc85e17bfaa43d258845e3fa62`;
const loadTempareture = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemparature(data));
};

const setElementById = (field, set) => {
  const city = document.getElementById(field);
  city.innerText = set;
};

const displayTemparature = (data) => {
  //   const temp = document.getElementById("temp");
  //   temp.innerText = data.main.temp;
  setElementById("temp", data.main.temp);
  setElementById(
    "clouds",
    data.weather[0] ? data.weather[0].main : data.weather[1].main
  );

  //   cityArrow("city", data.name);

  //   const city = document.getElementById("city");
  //   city.innerText = data.name;
  console.log(data);
};

const commonCityCall = () => {
  const cityField = document.getElementById("city-field");
  const city = cityField.value;
  loadTempareture(city);
  setElementById("city", city);
};

/* document
  .getElementById("city-field")
  .addEventListener("keyup", function (event) {
    // const cityField = document.getElementById("city-field");
    // const city = cityField.value;
    if (event.key === "Enter") {
      //   loadTempareture(city);
      //   setElementById("city", city);
      commonCityCall();
    }
    // console.log(city);
    // console.log(event.key);
  }); */

document.getElementById("search-btn").addEventListener("click", function () {
  commonCityCall();
});
loadTempareture("dhaka");

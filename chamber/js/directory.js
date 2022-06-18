const URL = "https://diegoferesin.github.io/wdd230/chamber/json/data.json";

fetch(URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
})
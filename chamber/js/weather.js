const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-sun');
const windSpeed = document.querySelector('#wind-speed');
const windChild = document.querySelector('#wind-child');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-34.599998&lon=-58.450001&units=metric&appid=1af0a868a3015b9525694dd97ced9a53&';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const windSpeedData = weatherData.wind.speed;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = desc;
    windSpeed.innerHTML = windSpeedData;

    let temperature = weatherData.main.temp;
    if (temperature <= 10 && windSpeedData > 4.83) {
        const windchill =
            13.12 +
            0.6215 * temperature -
            11.37 * Math.pow(windSpeedData, 0.16) +
            0.3965 * temperature * Math.pow(windSpeedData, 0.16);
        windChild.innerHTML = `${Math.round(
            windchill
        )}°C`;
    } else {
        windChild.innerHTML = "N/A";
    }
}
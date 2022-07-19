function toggleMenu() {
  document.getElementById("hamburger-nav").classList.toggle("open");
  document.getElementById("hamburger-button").classList.toggle("open");
}

const hamburgerBtn = document.getElementById("hamburger-button");
hamburgerBtn.onclick = toggleMenu;

const urlTemples =
  "https://diegoferesin.github.io/wdd230/temple-inn-suites/data/temples.json";

let temples = getTemplesData();

async function getTemplesData() {
  let templesData = [];
  try {
    const response = await fetch(urlTemples);
    if (response.ok) {
      const temples = await response.json();
      temples["temples"].forEach((e) => {
        templesData.push(e);
      });
      // console.log(getRandomTempleInfo(templesData));
      buildSlider(templesData);
      templesData = getRandomTempleInfo(templesData);
      return buildTempleImages(templesData);
      // return getRandomTempleInfo(templesData);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function getRandomTempleInfo(templesData) {
  templesData = templesData.filter((temple) => {
    if (temple.hasOwnProperty("src") && temple.hasOwnProperty("srcset")) {
      if (temple.src.length > 0) {
        return true;
      }
    }
  });

  let firstTempleIndex = getRandomIndex(templesData);
  let secondTempleIndex = getRandomIndex(templesData);
  if (firstTempleIndex != secondTempleIndex) {
    firstTempleData = templesData[firstTempleIndex];
    secondTempleData = templesData[secondTempleIndex];
    return [firstTempleData, secondTempleData];
  } else {
    let firstTempleIndex = getRandomIndex(templesData);
    let secondTempleIndex = getRandomIndex(templesData);
    firstTempleData = templesData[firstTempleIndex];
    secondTempleData = templesData[secondTempleIndex];
    return [firstTempleData, secondTempleData];
  }
}

function getRandomIndex(templesArray) {
  let min = 0;
  let max = templesArray.length;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let templesElem = document.querySelector("#temples");
function buildTempleImages(temples) {
  const firstTemple = temples[0];
  let wrapper = document.createElement("div");
  let detailsElem = document.createElement("a");
  detailsElem.setAttribute("target", "_blank");
  detailsElem.setAttribute("href", firstTemple.details);
  detailsElem.innerHTML = "MORE INFO";
  let nameElem = document.createElement("h3");
  nameElem.innerHTML = firstTemple.name;
  let locationElem = document.createElement("p");
  locationElem.innerHTML = "Location: " + firstTemple.location;
  let dedicatedElem = document.createElement("p");
  dedicatedElem.innerHTML = "Dedicated: " + firstTemple.dedicated;
  let imgElem = document.createElement("img");
  imgElem.setAttribute("alt", firstTemple.alt);
  imgElem.setAttribute("src", firstTemple.src[0]);
  imgElem.setAttribute("srcset", firstTemple.srcset[0]);
  imgElem.setAttribute("title", firstTemple.title);

  wrapper.appendChild(imgElem);
  wrapper.appendChild(nameElem);
  wrapper.appendChild(locationElem);
  wrapper.appendChild(dedicatedElem);
  wrapper.appendChild(detailsElem);

  templesElem.appendChild(wrapper);
}

function buildSlider(dataTemples) {
  dataTemples = dataTemples.filter((temple) => {
    if (temple.hasOwnProperty("src") && temple.hasOwnProperty("srcset")) {
      if (temple.src.length > 0) {
        return true;
      }
    }
  });
  
  let sliderDivElem = document.querySelector("#slider");
  let figureElem = document.createElement("figure");
  dataTemples.forEach((temple) => {
    let imgElem = document.createElement("img");
    imgElem.setAttribute("alt", temple.alt);
    imgElem.setAttribute("src", temple.src[0]);
    imgElem.setAttribute("srcset", temple.srcset[0]);
    imgElem.setAttribute("title", temple.title);
    figureElem.appendChild(imgElem);
  });
  sliderDivElem.appendChild(figureElem);
}

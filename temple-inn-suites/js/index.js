function toggleMenu() {
    document.getElementById("hamburger-nav").classList.toggle("open");
    document.getElementById("hamburger-button").classList.toggle("open");
}
const hamburgerBtn = document.getElementById("hamburger-button");
hamburgerBtn.onclick = toggleMenu;



let temples = document.querySelector('#temples');
const urlTemples = "https://diegoferesin.github.io/wdd230/temple-inn-suites/data/temples.json";
const file = "./data/temples.json"

async function getTemplesData() {
    let templesData = [];
    try {
        const response = await fetch(file);
        if (response.ok) {
            const temples = await response.json();
            temples["temples"].forEach(e => {
                templesData.push(e);
            });
            console.log(getRandomTempleInfo(templesData));
            return getRandomTempleInfo(templesData);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function getRandomTempleInfo(templesData) {
    templesData = templesData.filter(temple => {
        if (temple.hasOwnProperty("src") && temple.hasOwnProperty("srcset")) {
            if (temple.src.length > 0) {
                return true
            }
        }
    });

    let firstTempleIndex = getRandomIndex(templesData);
    let secondTempleIndex = getRandomIndex(templesData);
    if (firstTempleIndex != secondTempleIndex) {
        firstTempleData = templesData[firstTempleIndex]
        secondTempleData = templesData[secondTempleIndex]
        return [firstTempleData, secondTempleData]
    } else {
        let firstTempleIndex = getRandomIndex(templesData);
        let secondTempleIndex = getRandomIndex(templesData);
        firstTempleData = templesData[firstTempleIndex]
        secondTempleData = templesData[secondTempleIndex]
        return [firstTempleData, secondTempleData]
    }
}

function getRandomIndex(templesArray) {
    let min = 0
    let max = templesArray.length
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

getTemplesData();

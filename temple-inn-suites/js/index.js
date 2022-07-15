let temples = document.querySelector('#temples');
const urlTempleImages = "https://diegoferesin.github.io/wdd230/temple-inn-suites/data/temples-images.json";
const urlTemples = "https://diegoferesin.github.io/wdd230/temple-inn-suites/data/temples.json";

async function getTempleImages() {
    try {
        const response = await fetch(urlTempleImages);
        if (response.ok) {
            const images = await response.json();
            console.log("Temples Images");
            // images["images"].forEach(e => {
            //     console.log(e);
            // });
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function getTemples() {
    try {
        const response = await fetch(urlTemples);
        if (response.ok) {
            const temples = await response.json();
            console.log("Temples Name");
            // temples["temples"].forEach(e => {
            //     console.log(e);
            // });
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

getTempleImages();
getTemples();


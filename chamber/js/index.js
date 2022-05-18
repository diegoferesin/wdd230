const now = new Date();
const fullDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full"
}).format(now);
const year = now.getFullYear();

document.querySelector(".current-date").innerHTML = fullDate;

document.querySelector("#small-copyright-year").innerHTML = year;

document.getElementById("small-last-updated").innerHTML = document.lastModified;

document.querySelector("#medium-copyright-year").innerHTML = year;

document.getElementById("medium-last-updated").innerHTML = document.lastModified;

function toggleMenu() {
    document.getElementById("hamburger-nav").classList.toggle("open");
    document.getElementById("hamburger-button").classList.toggle("open");
}

const hamburgerBtn = document.getElementById("hamburger-button");

hamburgerBtn.onclick = toggleMenu;

// const today = Date.now()
// document.getElementById("today").textContent = today;
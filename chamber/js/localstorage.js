const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("visits-ls"));
let numMills = Number(window.localStorage.getItem("mills-ls"));

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

numVisits++;
localStorage.setItem("visits-ls", numVisits);

if (numMills !== 0) {  
    numDays = Math.round((Date.now() - numMills) / 86400000); 
	todayDisplay.textContent = numDays;
} else {
	todayDisplay.textContent = `This is your first visit!`;
}

numMills = Date.now();
localStorage.setItem("mills-ls", numMills);
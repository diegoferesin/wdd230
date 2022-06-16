const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";
const cards = document.querySelector(".cards");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject["prophets"];
    prophets.forEach(displayProphets);
  });

function displayProphets(prophet) {
  // Create elements to add to the document
  let card = document.createElement("section");
  let h2 = document.createElement("h2");  
  let pBirthdate = document.createElement("p");
  let pBirthplace = document.createElement("p");
  let pDeathDate = document.createElement("p");
  let portrait = document.createElement("img");
  let order = document.createElement("small");

  let ordinalOrder;
  if (prophet.order == 1) {
    ordinalOrder = "st";
  } else if (prophet.order == 2) {
    ordinalOrder = "nd";
  } else if (prophet.order == 3) {
    ordinalOrder = "rd";
  } else {
    ordinalOrder = "th";
  }

  order.innerHTML = ordinalOrder;

  let prophetFullName = prophet.name + " " + prophet.lastname;
  let prophetFullNameTitle = `${prophet.name} ${prophet.lastname} <br> ${prophet.order}<sup class="order">${ordinalOrder}</sup> Latter-day President`;
  h2.innerHTML = prophetFullNameTitle;

  pBirthdate.innerHTML = `Birth Date: ${prophet.birthdate}`
  pBirthplace.innerHTML = `Birth Place: ${prophet.birthplace}`
  pDeathDate.innerHTML = `Death Date: ${prophet.death}`
  // Build the image attributes by using the setAttribute method for the src, alt, and
  // loading attribute values. (Fill in the blank with the appropriate variable).
  portrait.setAttribute("src", prophet.imageurl);
  portrait.setAttribute("alt", "Portait of " + prophetFullName);
  portrait.setAttribute("loading", "lazy");

  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(pBirthdate);
  card.appendChild(pBirthplace);
  if (prophet.death != null) {
    card.appendChild(pDeathDate);  
  }
  card.appendChild(portrait);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector("div.cards").appendChild(card);
}

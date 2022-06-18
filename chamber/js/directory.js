const requestURL =
  "https://diegoferesin.github.io/wdd230/chamber/json/data.json";

const main = document.querySelector('.directoryContainer');
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const companies = jsonObject["companies"];
    companies.forEach(displayCompanies);
  });

function displayCompanies(company) {
  let section = document.createElement('section');
  let image = document.createElement("img");
  let nameTitle = document.createElement("h2");
  let pAddress = document.createElement("p");
  let pPhone = document.createElement("p");
  let pageButton = document.createElement("a");
  let divAddress = document.createElement('div');
  let h3Address = document.createElement('h3');
  let h3PhoneNumber = document.createElement('h3');
  let divPhone = document.createElement('div');
  pageButton.setAttribute('href', company.website);
  pageButton.setAttribute('target', '_blank');
  pageButton.setAttribute('class', 'visitPage');
  pageButton.innerHTML = 'Visit Site';

  image.setAttribute("src", company.image + '.webp');
  image.setAttribute("alt", company.name);
  image.setAttribute("class", "imgDirectory");
  image.setAttribute("loading", "lazy");
  nameTitle.setAttribute('class', 'h2Directory');
  nameTitle.innerHTML = company.name;
  h3Address.innerHTML = 'Address';
  pAddress.innerHTML = company.address;
  divAddress.setAttribute('class', 'divAddress');
  divAddress.appendChild(h3Address);
  divAddress.appendChild(pAddress);
  h3PhoneNumber.innerHTML = 'Phone Number';
  pPhone.innerHTML = company.phone_number;
  divPhone.appendChild(h3PhoneNumber);
  divPhone.appendChild(pPhone);
  divPhone.setAttribute('class', "divPhone");
  h3Address.setAttribute('class', 'h3Directory');
  h3PhoneNumber.setAttribute('class', 'h3Directory');

  section.setAttribute('class', 'flexContainerCardCompany');
  section.appendChild(image);
  section.appendChild(nameTitle);
  section.appendChild(divAddress);
  section.appendChild(divPhone);
  section.appendChild(pageButton);
  main.append(section);
}

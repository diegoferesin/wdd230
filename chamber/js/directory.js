const requestURL =
  "https://diegoferesin.github.io/wdd230/chamber/json/data.json";

const main = document.querySelector(".directoryContainer");
const mainList = document.querySelector(".directoryContainerList");
let cardViewButton = document.getElementById("card-button");
let listViewButton = document.getElementById("list-button");
let customList = document.getElementById('list');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const companies = jsonObject["companies"];
    companies.forEach(displayCompaniesCards);
    companies.forEach(displayCompaniesList);
  });

function displayCompaniesCards(company) {
  let section = document.createElement("section");
  let image = document.createElement("img");
  let nameTitle = document.createElement("h2");
  let pAddress = document.createElement("p");
  let pPhone = document.createElement("p");
  let pageButton = document.createElement("a");
  let divAddress = document.createElement("div");
  let h3Address = document.createElement("h3");
  let h3PhoneNumber = document.createElement("h3");
  let divPhone = document.createElement("div");
  let divMembership = document.createElement("div");
  let h3Membership = document.createElement("h3");
  let pMembership = document.createElement("p");
  pageButton.setAttribute("href", company.website);
  pageButton.setAttribute("target", "_blank");
  pageButton.setAttribute("class", "visitPage custom-a");
  pageButton.innerHTML = "Visit Site";

  image.setAttribute("src", company.image + ".webp");
  image.setAttribute("alt", company.name);
  image.setAttribute("class", "imgDirectory");
  image.setAttribute("loading", "lazy");
  nameTitle.setAttribute("class", "h2Directory");
  nameTitle.innerHTML = company.name;
  h3Address.innerHTML = "Address";
  pAddress.innerHTML = company.address;
  divAddress.setAttribute("class", "divAddress");
  divAddress.appendChild(h3Address);
  divAddress.appendChild(pAddress);
  h3PhoneNumber.innerHTML = "Phone Number";
  pPhone.innerHTML = company.phone_number;
  divPhone.appendChild(h3PhoneNumber);
  divPhone.appendChild(pPhone);
  divPhone.setAttribute("class", "divPhone");
  h3Address.setAttribute("class", "h3Directory");
  h3PhoneNumber.setAttribute("class", "h3Directory");
  pMembership.innerHTML = company.membership_level;
  h3Membership.innerHTML = "Membership";
  h3Membership.setAttribute("class", "h3Directory");
  divMembership.appendChild(h3Membership);
  divMembership.appendChild(pMembership);
  divMembership.setAttribute("class", "divPhone");

  section.setAttribute("class", "flexContainerCardCompany");
  section.appendChild(image);
  section.appendChild(nameTitle);
  section.appendChild(divAddress);
  section.appendChild(divPhone);
  section.appendChild(divMembership)
  section.appendChild(pageButton);
  main.append(section);
}

function displayCompaniesList(company) {
  let list = document.createElement("ul");
  list.setAttribute('id', 'customList');
  list.setAttribute("class", "customList");
  let imageLi = document.createElement("li");
  let image = document.createElement("img");
  let nameTitle = document.createElement("li");
  let pAddress = document.createElement("li");
  let pPhone = document.createElement("li");
  let pMembership = document.createElement("li");
  
  let buttonLi = document.createElement("li");
  let pageButton = document.createElement("a");
  pageButton.setAttribute("href", company.website);
  pageButton.setAttribute("target", "_blank");
  pageButton.setAttribute("class", "visitPageList custom-a");
  pageButton.innerHTML = "Visit Site";

  image.setAttribute("src", company.image + ".webp");
  image.setAttribute("alt", company.name);
  image.setAttribute("class", "imgDirectoryList");
  image.setAttribute("loading", "lazy");
  imageLi.appendChild(image);
  nameTitle.setAttribute("class", "h2DirectoryList");
  nameTitle.innerHTML = company.name;
  pAddress.innerHTML = company.address;
  pPhone.innerHTML = company.phone_number;
  pMembership.innerHTML = company.membership_level;

  buttonLi.appendChild(pageButton);
  list.appendChild(imageLi);
  list.appendChild(nameTitle);
  list.appendChild(pAddress);
  list.appendChild(pPhone);
  list.appendChild(pMembership);
  list.appendChild(buttonLi);
  mainList.appendChild(list);
}

cardViewButton.addEventListener("click", () => {
  customList.classList.add("hidden");
  main.classList.remove("hidden");
});

listViewButton.addEventListener("click", () => {
  customList.classList.remove("hidden");
  main.classList.add("hidden");
});

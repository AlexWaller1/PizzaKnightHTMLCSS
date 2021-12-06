// JavaScript for Pizza Knights Pizza Shops Page
console.log("Hello Oa");

let pizzaPlaces = [];

const shopNameInput = document.getElementById("shop-name");

const shopAddressInput = document.getElementById("shop-address");

const shopImageInput = document.getElementById("shop-image");

const shopsList = document.getElementById("shops-list");

const submitShopButton = document.getElementById("shops-button");

const msg1 = document.getElementById("msg-1-shops");

console.log("--------------------------------------------------");
console.log("------------------------------------------------");

function displayShops() {
  for (let i = 0; i < pizzaPlaces.length; i++) {
    const nameLi = document.createElement("h2");
    nameLi.id = "shop-name-header";
    nameLi.appendChild(
      document.createTextNode(`
    ${pizzaPlaces[i]}`)
    );
    shopsList.appendChild(nameLi);
  }
}

submitShopButton.addEventListener("click", onSubmit);

function onSubmit(e) {
  if (shopNameInput.value.trim() == "") {
    msg1.innerHTML = "Please Enter All Fields";
  } else {
    e.preventDefault();
    msg1.innerHTML = "Thanks For The Recommendation!";
    shopsList.innerHTML = "";
    let newElement = `${shopNameInput.value}`;
    pizzaPlaces.push(newElement);
    displayShops();
    console.log(pizzaPlaces);
    shopNameInput.value = "";
  }
}

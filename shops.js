// JavaScript for Pizza Knights Pizza Shops Page
console.log("Hello Oa");

let data1 = localStorage.getItem("shops-list");
let data2 = JSON.parse(data1);

let pizzaPlaces = "";

if (data2 == null) {
  pizzaPlaces = [];
} else {
  pizzaPlaces = data2;
}

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
    nameLi.className = "shop-name-header";
    nameLi.appendChild(
      document.createTextNode(`
    ${pizzaPlaces[i].name}`)
    );
    shopsList.appendChild(nameLi);
    const addressLi = document.createElement("h3");
    addressLi.className = "shop-address-header";
    addressLi.appendChild(
      document.createTextNode(`
    ${pizzaPlaces[i].address}`)
    );
    shopsList.append(addressLi);
    //.....................................................
    const imageLi = document.createElement("img");
    imageLi.className = "shop-image";
    imageLi.src = `${pizzaPlaces[i].image}`;
    imageLi.height = 500;
    imageLi.width = 650;
    shopsList.appendChild(imageLi);
    //......................................................
    const shopBreak = document.createElement("br");
    shopsList.appendChild(shopBreak);
    const shopBreak2 = document.createElement("br");
    shopsList.appendChild(shopBreak2);

    let deleteShopButton = document.createElement("button");
    deleteShopButton.innerHTML = "Delete Shop";
    deleteShopButton.className = "delete-shop-button";
    shopsList.appendChild(deleteShopButton);

    //...........................................................
    deleteShopButton.addEventListener("click", function () {
      shopsList.removeChild(nameLi);
      shopsList.removeChild(addressLi);
      shopsList.removeChild(imageLi);
      shopsList.removeChild(deleteShopButton);
      pizzaPlaces.splice(i, 1);
      localStorage.clear();
      let JSON1 = JSON.stringify(pizzaPlaces);
      localStorage.setItem("shops-list", JSON1);
    });
  }
}

displayShops();

submitShopButton.addEventListener("click", onSubmit);

function onSubmit(e) {
  if (
    shopNameInput.value.trim() == "" ||
    shopAddressInput.value.trim() == "" ||
    shopImageInput.value.trim() == ""
  ) {
    msg1.innerHTML = "Please Enter All Fields";
  } else {
    e.preventDefault();
    msg1.innerHTML = "Thanks For The Recommendation!";
    shopsList.innerHTML = "";
    let newElement = {
      name: `${shopNameInput.value}`,
      address: `${shopAddressInput.value}`,
      image: `${shopImageInput.value}`
    };
    pizzaPlaces.push(newElement);

    displayShops();
    console.log(pizzaPlaces);
    shopNameInput.value = "";
    shopAddressInput.value = "";
    shopImageInput.value = "";
    let parseShops = JSON.stringify(pizzaPlaces);
    localStorage.setItem("shops-list", parseShops);
  }
}

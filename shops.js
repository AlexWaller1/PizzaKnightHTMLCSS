// JavaScript for Pizza Knights Pizza Shops Page
console.log("Hello Oa");

let pizzaPlaces = [];
let count = 0;

let data1 = localStorage.getItem("shops-list");
let data2 = JSON.parse(data1);
let data3 = localStorage.getItem("persist-count");
let data4 = JSON.parse(data3);

if (data2 == null) {
  pizzaPlaces = [];
  count = 0;
} else {
  pizzaPlaces = data2;
  count = data4;
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
  pizzaPlaces.forEach(function (pizza1) {
    const nameLi = document.createElement("h2");
    nameLi.className = "shop-name-header";
    nameLi.appendChild(
      document.createTextNode(`
          ${pizza1.name}`)
    );
    shopsList.appendChild(nameLi);
    const addressLi = document.createElement("h3");
    addressLi.className = "shop-address-header";
    addressLi.appendChild(
      document.createTextNode(`
          ${pizza1.address}`)
    );
    shopsList.append(addressLi);
    //.....................................................
    const imageLi = document.createElement("img");
    imageLi.className = "shop-image";
    imageLi.src = `${pizza1.image}`;
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
    deleteShopButton.addEventListener("click", function (e) {
      e.preventDefault();
      shopsList.removeChild(nameLi);
      shopsList.removeChild(addressLi);
      shopsList.removeChild(imageLi);
      shopsList.removeChild(deleteShopButton);
      // lets say we are deleting the 3rd item in a 5 element array
      // so we're deleting pizzaPlaces[2]
      // the id of pizzaPlaces[2] is 2
      let pizzaNum = pizza1.id - 1;
      // since index 2 is being deleted, pizzaNum will equal 1

      pizzaPlaces.splice(pizza1.id, 1);
      // we delete at index 2

      for (let i = 0; i < pizzaPlaces.length; i++) {
        if (pizzaPlaces[i].id > pizzaNum) {
          // if the id of the current element is greater than 1
          pizzaPlaces[i].id = pizzaPlaces[i].id - 1;
          // subtract the id by 1
          // so id 3 will now be id 2
          // id 4 will now be id 4
        }
      }

      localStorage.removeItem("shops-list");
      localStorage.removeItem("persist-count");
      count = pizzaPlaces.length;
      let JSON1 = JSON.stringify(pizzaPlaces);
      localStorage.setItem("shops-list", JSON1);
      let JSON2 = JSON.stringify(count);
      localStorage.setItem("persist-count", JSON2);
    });
  });
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
      image: `${shopImageInput.value}`,
      id: count
    };
    pizzaPlaces.push(newElement);
    count++;
    console.log(pizzaPlaces);
    shopNameInput.value = "";
    shopAddressInput.value = "";
    shopImageInput.value = "";
    let parseShops = JSON.stringify(pizzaPlaces);
    localStorage.setItem("shops-list", parseShops);
    let parseCount = JSON.stringify(count);
    console.log(parseCount);
    localStorage.setItem("persist-count", parseCount);
    console.log(localStorage);
    displayShops();
  }
}

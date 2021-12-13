// JavaScript for Pizza Knights Homemade Page
console.log("Hello Oa");

const homeMadeName = document.getElementById("recipe-name");

const homeMadeDetails = document.getElementById("details");

const homeMadeImage = document.getElementById("pizza-image");

const homeMadeButton = document.getElementById("homemade-button");

const homeMadeList = document.getElementById("homemade-list");

const msg1 = document.getElementById("msg-1-homemade");

let homePizzas = [];
let count = 0;

let data1 = localStorage.getItem("pizza-list");
let data2 = JSON.parse(data1);
let data3 = localStorage.getItem("count-persist");
let data4 = JSON.parse(data3);

if (data2 == null) {
  homePizzas = [];
  count = 0;
} else {
  homePizzas = data2;
  count = data4;
}

function displayPizzas() {
  homePizzas.forEach(function (pizza1) {
    const nameLi = document.createElement("h2");
    nameLi.className = "homemade-name-header";
    nameLi.appendChild(
      document.createTextNode(`
        ${pizza1.recipe}`)
    );
    homeMadeList.appendChild(nameLi);
    //...........................................
    const detailsLi = document.createElement("h3");
    detailsLi.className = "homemade-details-header";
    detailsLi.appendChild(
      document.createTextNode(`
        ${pizza1.details}`)
    );
    homeMadeList.appendChild(detailsLi);
    //............................................
    const imageLi = document.createElement("img");
    imageLi.className = "homemade-image";
    imageLi.src = `${pizza1.image}`;
    imageLi.height = 500;
    imageLi.width = 650;
    homeMadeList.appendChild(imageLi);
    const recipeBreak = document.createElement("br");
    homeMadeList.appendChild(recipeBreak);
    const reciperBreak2 = document.createElement("br");
    homeMadeList.appendChild(reciperBreak2);
    //............................................
    let deleteButton = document.createElement("button");
    deleteButton.className = "homemade-delete-button";
    deleteButton.innerHTML = "delete recipe";
    homeMadeList.appendChild(deleteButton);
    //....................................................
    deleteButton.addEventListener("click", function () {
      homeMadeList.removeChild(nameLi);
      homeMadeList.removeChild(detailsLi);
      homeMadeList.removeChild(imageLi);
      homeMadeList.removeChild(deleteButton);
      let pizzaNum = pizza1.id - 1;
      console.log(homePizzas);
      homePizzas.splice(pizza1.id, 1);

      for (let i = 0; i < homePizzas.length; i++) {
        if (homePizzas[i].id > pizzaNum) {
          homePizzas[i].id = homePizzas[i].id - 1;
        }
      }

      count = homePizzas.length;
      localStorage.removeItem("pizza-list");
      localStorage.removeItem("count-persist");

      let parse1 = JSON.stringify(homePizzas);
      localStorage.setItem("pizza-list", parse1);
      let parse2 = JSON.stringify(count);
      localStorage.setItem("count-persist", parse2);
    });
  });
}

displayPizzas();

homeMadeButton.addEventListener("click", onSubmit);

function onSubmit(e) {
  if (homeMadeName.value.trim() == "") {
    msg1.innerHTML = "Please Fill Out All Fields";
  } else {
    e.preventDefault();
    msg1.innerHTML = "Can't Wait To Try The Recipe!";
    homeMadeList.innerHTML = "";
    let newPizza = {
      recipe: `${homeMadeName.value}`,
      details: `${homeMadeDetails.value}`,
      image: `${homeMadeImage.value}`,
      id: count
    };
    homePizzas.push(newPizza);
    console.log(homePizzas);
    displayPizzas();
    let parsePizzas = JSON.stringify(homePizzas);
    console.log(parsePizzas);
    localStorage.setItem("pizza-list", parsePizzas);
    count++;
    homeMadeName.value = "";
    homeMadeDetails.value = "";
    homeMadeImage.value = "";

    let parseCount = JSON.stringify(count);
    localStorage.setItem("count-persist", parseCount);
  }
}

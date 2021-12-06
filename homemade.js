// JavaScript for Pizza Knights Homemade Page
console.log("Hello Oa");

const homeMadeName = document.getElementById("recipe-name");

const homeMadeDetails = document.getElementById("details");

const homeMadeImage = document.getElementById("pizza-image");

const homeMadeButton = document.getElementById("homemade-button");

const homeMadeList = document.getElementById("homemade-list");

const msg1 = document.getElementById("msg-1-homemade");

let homePizzas = [];

function displayPizzas() {
  let i = 0;
  for (; i < homePizzas.length; i++) {
    const nameLi = document.createElement("h2");
    nameLi.appendChild(
      document.createTextNode(`
    ${homePizzas[i].name}`)
    );
    homeMadeList.appendChild(nameLi);
  }
}

displayPizzas();

homeMadeButton.addEventListener("click", onSubmit);

function onSubmit(e) {
  if (homeMadeName.ariaValueMax.trim() == "") {
    msg1.innerHTML = "Please Fill Out All Fields";
  } else {
    msg1.innerHTML = "Can't Wait To Try The Recipe!";
    let newPizza = {
      recipe: `${homeMadeName.value}`,
      details: `${homeMadeDetails.value}`,
      image: `${homeMadeImage.value}`
    };
    homePizzas.push(newPizza);
    console.log(homePizzas);

    homeMadeName.value = "";
    homeMadeDetails.value = "";
    homeMadeImage.value = "";
  }
}

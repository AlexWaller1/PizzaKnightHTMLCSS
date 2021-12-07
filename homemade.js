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
    nameLi.className = "homemade-name-header";
    nameLi.appendChild(
      document.createTextNode(`
    ${homePizzas[i].recipe}`)
    );
    homeMadeList.appendChild(nameLi);
    //...........................................
    const detailsLi = document.createElement("h3");
    detailsLi.className = "homemade-details-header";
    detailsLi.appendChild(
      document.createTextNode(`
    ${homePizzas[i].details}`)
    );
    homeMadeList.appendChild(detailsLi);
    //............................................
    const imageLi = document.createElement("img");
    imageLi.className = "homemade-image";
    imageLi.src = `${homePizzas[i].image}`;
    imageLi.height = 500;
    imageLi.width = 650;
    homeMadeList.appendChild(imageLi);
  }
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
      image: `${homeMadeImage.value}`
    };
    homePizzas.push(newPizza);
    console.log(homePizzas);
    displayPizzas();

    homeMadeName.value = "";
    homeMadeDetails.value = "";
    homeMadeImage.value = "";
  }
}

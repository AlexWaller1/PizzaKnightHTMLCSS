// JavaScript for Pizza Knights Pizza Art Page
console.log("Hello Oa");

const artName = document.getElementById("art-name");

const artImage = document.getElementById("art-image");

const artDescription = document.getElementById("art-description");

const artSubmitButton = document.getElementById("art-submit-btn");

const pizzaArtList = document.getElementById("pizza-art-list");
console.log(pizzaArtList);

const pizzaArtMsg = document.getElementById("msg-1-art");

let pizzaArt = [];

let count = 0;

console.log("-----------------------------------------");
console.log("--------------------------------------");

let data1 = localStorage.getItem("art-list");
let data2 = JSON.parse(data1);

if (data2 == null) {
  pizzaArt = [];
} else {
  pizzaArt = data2;
}

console.log("--------------------------------------------------");
console.log("------------------------------------------");

function pizzaArtGallery() {
  pizzaArt.forEach(function (pizza1) {
    const nameH2 = document.createElement("h2");
    nameH2.appendChild(document.createTextNode(`${pizza1.name}`));
    pizzaArtList.appendChild(nameH2);
  });
  console.log("hello");
}

pizzaArtGallery();

console.log("------------------------------------------------");
artSubmitButton.addEventListener("click", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  let newPizzaArt = {
    name: `${artName.value}`,
    image: `${artImage.value}`,
    description: `${artDescription.value}`,
    id: count
  };
  pizzaArt.push(newPizzaArt);
  count++;
  console.log(pizzaArt);
  artName.value = "";
  artImage.value = "";
  artDescription.value = "";
  let parseArt = JSON.stringify(pizzaArt);
  localStorage.setItem("art-list", parseArt);
  pizzaArtList.innerHTML = "";
  pizzaArtGallery();
}

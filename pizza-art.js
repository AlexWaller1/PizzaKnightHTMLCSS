// JavaScript for Pizza Knights Pizza Art Page
console.log("Hello Oa");

const artName = document.getElementById("art-name");

const artImage = document.getElementById("art-image");

const artDescription = document.getElementById("art-description");

const artSubmitButton = document.getElementById("art-submit-btn");

const pizzaArtList = document.getElementById("pizza-art-list");

const pizzaArtMsg = document.getElementById("msg-1-art");

let pizzaArt = [];

let count = 0;

console.log("-----------------------------------------");
console.log("--------------------------------------");

let data1 = localStorage.getItem("art-list");
let data2 = JSON.parse(data1);
let data3 = localStorage.getItem("persist-count");
let data4 = JSON.parse(data3);

if (data2 == null) {
  pizzaArt = [];
  count = 0;
} else {
  pizzaArt = data2;
  count = data4;
}

console.log("--------------------------------------------------");
console.log("------------------------------------------");

function pizzaArtGallery() {
  pizzaArt.forEach(function (pizza1) {
    // Create Header for Entry Name
    const nameH2 = document.createElement("h2");
    nameH2.className = "pizza-art-header";
    nameH2.appendChild(document.createTextNode(`${pizza1.name}`));
    pizzaArtList.appendChild(nameH2);
    // Create Image for Entry Image
    const newImage = document.createElement("img");
    newImage.src = `${pizza1.image}`;
    newImage.width = 650;
    newImage.height = 500;
    newImage.className = "pizza-art-gallery";
    pizzaArtList.append(newImage);
    // Create Header for Entry Description
    const newDescription = document.createElement("h4");
    newDescription.className = "pizza-art-description";
    newDescription.appendChild(
      document.createTextNode(`${pizza1.description}`)
    );
    pizzaArtList.append(newDescription);
    // delete button for each entry
    let deleteButton = document.createElement("button");
    deleteButton.className = "art-delete-btn";
    deleteButton.innerHTML = "Delete";
    pizzaArtList.append(deleteButton);

    deleteButton.addEventListener("click", function (e) {
      pizzaArtList.removeChild(nameH2);
      pizzaArtList.removeChild(newImage);
      pizzaArtList.removeChild(newDescription);
      pizzaArtList.removeChild(deleteButton);

      let pizzaNum = pizza1.id - 1;
      // variable to evaluate all array entries greater
      // than the index that is deleted
      pizzaArt.splice(pizza1.id, 1);

      for (let i = 0; i < pizzaArt.length; i++) {
        if (pizzaArt[i].id > pizzaNum) {
          pizzaArt[i].id = pizzaArt[i].id - 1;
        }
      }
      count = pizzaArt.length;
      localStorage.removeItem("art-list");

      localStorage.removeItem("persist-count");

      let JSON1 = JSON.stringify(pizzaArt);
      let JSON2 = JSON.stringify(count);
      localStorage.setItem("art-list", JSON1);
      localStorage.setItem("persist-count", JSON2);
    });
  });
}

pizzaArtGallery();

console.log("------------------------------------------------");
artSubmitButton.addEventListener("click", onSubmit);

function onSubmit(e) {
  if (artName.value.trim() == "") {
    pizzaArtMsg.innerHTML = "You At Least Have To Give Name!";
  } else {
    e.preventDefault();
    pizzaArtMsg.innerHTML = "Awesome! Thanks For The Entry";
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
    let parseCount = JSON.stringify(count);
    localStorage.setItem("persist-count", parseCount);
    pizzaArtList.innerHTML = "";
    pizzaArtGallery();
  }
}

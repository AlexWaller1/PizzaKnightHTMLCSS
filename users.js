// JavaScript for Pizza Knights Users Page
console.log("Hello Oa");

const userName = document.getElementById("user-name");

const userLocation = document.getElementById("user-location");

const userImage = document.getElementById("user-image");

const userSubmitBtn = document.getElementById("user-submit-btn");

const usersMsg = document.getElementById("mag-1-users");

const usersList = document.getElementById("users-list");

console.log("---------------------------------------------");

let pizzaUsers = [];

let count = 0;

let data1 = localStorage.getItem("users-db");
let data2 = JSON.parse(data1);
let data3 = localStorage.getItem("persist-count");
let data4 = JSON.parse(data3);

if (data2 == null) {
  pizzaUsers = [];
  count = 0;
} else {
  pizzaUsers = data2;
  count = data4;
}

console.log("-----------------------------------------------");

function displayUsers() {
  pizzaUsers.forEach(function (pizza1) {
    // header for each username
    const newName = document.createElement("h2");
    newName.className = "class-user-name";
    newName.appendChild(document.createTextNode(`${pizza1.name}`));
    usersList.append(newName);
    // header for each user location
    const newLocation = document.createElement("h4");
    newLocation.className = "class-user-location";
    newLocation.appendChild(document.createTextNode(`${pizza1.location}`));
    usersList.append(newLocation);
    // image for each user
    const newImage = document.createElement("img");
    newImage.className = "class-user-image";
    newImage.src = pizza1.image;
    newImage.width = 650;
    newImage.height = 500;
    usersList.append(newImage);
  });
}
displayUsers();

console.log("-------------------------------------------");

userSubmitBtn.addEventListener("click", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  let newUser = {
    name: `${userName.value}`,
    location: `${userLocation.value}`,
    image: `${userImage.value}`,
    id: count
  };
  pizzaUsers.push(newUser);
  count++;
  userName.value = "";
  userLocation.value = "";
  userImage.value = "";

  console.log(pizzaUsers);

  let parseCount = JSON.stringify(count);
  localStorage.setItem("persist-count", parseCount);
  let parseUsers = JSON.stringify(pizzaUsers);
  localStorage.setItem("users-db", parseUsers);
  usersList.innerHTML = "";
  displayUsers();
}

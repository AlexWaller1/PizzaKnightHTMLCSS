// JavaScript for Pizza Knights Users Page
console.log("Hello Oa");

const userName = document.getElementById("user-name");

const userLocation = document.getElementById("user-location");

const userImage = document.getElementById("user-image");

const userSubmitBtn = document.getElementById("user-submit-btn");

const usersMsg = document.getElementById("mag-1-users");

const usersList = document.getElementById("users-list");

const usersFormDiv = document.getElementById("users-form-div");

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
    newImage.width = 600;
    newImage.height = 600;
    usersList.appendChild(newImage);
    // break for good button placement
    const userBreak1 = document.createElement("br");
    usersList.appendChild(userBreak1);
    const userBreak2 = document.createElement("br");
    usersList.append(userBreak2);
    // delete button for each user
    const deleteButton = document.createElement("button");
    deleteButton.className = "class-user-delete-btn";
    deleteButton.innerHTML = "delete";
    usersList.append(deleteButton);
    // edit button for each user
    const editUserBtn = document.createElement("button");
    editUserBtn.innerHTML = "edit";
    editUserBtn.className = "user-edit-btn";
    usersList.append(editUserBtn);
    // eventListener for delete button
    deleteButton.addEventListener("click", function (e) {
      e.preventDefault();
      usersList.removeChild(newName);
      usersList.removeChild(newLocation);
      usersList.removeChild(newImage);
      usersList.removeChild(deleteButton);
      usersList.removeChild(editUserBtn);

      let pizzaNum = pizza1.id - 1;

      pizzaUsers.splice(pizza1.id, 1);

      for (let i = 0; i < pizzaUsers.length; i++) {
        if (pizzaUsers[i].id > pizzaNum) {
          pizzaUsers[i].id = pizzaUsers[i].id - 1;
        }
      }
      localStorage.removeItem("users-db");
      localStorage.removeItem("persist-count");
      count = pizzaUsers.length;
      let JSON1 = JSON.stringify(pizzaUsers);
      let JSON2 = JSON.stringify(count);
      localStorage.setItem("users-db", JSON1);
      localStorage.setItem("persist-count", JSON2);
    });
    // creating update button
    const userUpdateBtn = document.createElement("button");
    userUpdateBtn.innerHTML = "update user";
    userUpdateBtn.className = "user-update-btn";
    // adding functionality for edit button
    editUserBtn.addEventListener("click", function () {
      userName.value = pizza1.name;
      userLocation.value = pizza1.location;
      userImage.value = pizza1.image;
      usersFormDiv.removeChild(userSubmitBtn);
      usersFormDiv.append(userUpdateBtn);
    });
    // adding functionality to update button
    userUpdateBtn.addEventListener("click", function () {
      // have to use forEach object pizza1 and its properties to actually change
      // the array elements properties, if we just change innerHTML of HTML elements
      // nothing ever actually changes in our array and changes won't be persisted
      pizza1.name = userName.value;
      newName.innerHTML = pizza1.name;
      pizza1.location = userLocation.value;
      newLocation.innerHTML = pizza1.location;
      pizza1.image = userImage.value;
      newImage.src = pizza1.image;
      // sending modified array to localStorage
      localStorage.removeItem("users-db");
      let JSON5 = JSON.stringify(pizzaUsers);
      localStorage.setItem("users-db", JSON5);
      // resetting UI for user
      usersFormDiv.removeChild(userUpdateBtn);
      usersFormDiv.append(userSubmitBtn);
      userName.value = "";
      userLocation.value = "";
      userImage.value = "";
    });
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

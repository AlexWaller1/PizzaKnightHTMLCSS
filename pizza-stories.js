// JavaScript for Pizza Knights Pizza Stories Page
console.log("Hello Oa");

const storyTitle = document.getElementById("story-title");

const storyText = document.getElementById("story-text");

const storyImage = document.getElementById("story-image");

const storySubmitBtn = document.getElementById("story-submit-btn");

const storyMsg = document.getElementById("msg-1-story");

const storiesList = document.getElementById("stories-list");

console.log("---------------------------------------------------------");
console.log("------------------------------------------------------------");

let pizzaStories = [];

let count = 0;

let data1 = localStorage.getItem("story-list");
let data2 = JSON.parse(data1);
let data3 = localStorage.getItem("persist-count");
let data4 = JSON.parse(data3);

if (data2 == null) {
  pizzaStories = [];
  count = 0;
} else {
  pizzaStories = data2;
  count = data4;
}
console.log("-------------------------------------------------------");

function displayStories() {
  pizzaStories.forEach(function (pizza1) {
    // header for the story title
    const newTitle = document.createElement("h2");
    newTitle.className = "story-title";
    newTitle.appendChild(document.createTextNode(`${pizza1.title}`));
    storiesList.append(newTitle);
    // header for story text
    const newText = document.createElement("h3");
    newText.className = "story-text";
    newText.appendChild(document.createTextNode(`${pizza1.text}`));
    storiesList.append(newText);
    // image for story
    const newImage = document.createElement("img");
    newImage.className = "story-image";
    newImage.src = `${pizza1.image}`;
    newImage.width = 650;
    newImage.height = 500;
    storiesList.append(newImage);
    // HTML breaks for good spaceing for button
    const break1 = document.createElement("br");
    storiesList.append(break1);
    const break2 = document.createElement("br");
    storiesList.append(break2);
    // delete button for each entry
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "delete";
    deleteButton.className = "story-delete-button";
    storiesList.append(deleteButton);
  });
}

displayStories();

console.log("-----------------------------------------------------");

storySubmitBtn.addEventListener("click", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  let newStory = {
    title: `${storyTitle.value}`,
    text: `${storyText.value}`,
    image: `${storyImage.value}`,
    id: count
  };
  pizzaStories.push(newStory);
  console.log(pizzaStories);
  count++;

  let parseStory = JSON.stringify(pizzaStories);
  let parseCount = JSON.stringify(count);
  localStorage.setItem("story-list", parseStory);
  localStorage.setItem("persist-count", parseCount);

  storiesList.innerHTML = "";
  displayStories();

  storyTitle.value = "";
  storyText.value = "";
  storyImage.value = "";
}

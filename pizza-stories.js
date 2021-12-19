// JavaScript for Pizza Knights Pizza Stories Page
console.log("Hello Oa");

const storyTitle = document.getElementById("story-title");

const storyText = document.getElementById("story-text");

const storyImage = document.getElementById("story-image");

const storySubmitBtn = document.getElementById("story-submit-btn");

const storyMsg = document.getElementById("msg-1-story");

const storiesList = document.getElementById("stories-list");

const storiesFormDiv = document.getElementById("stories-form-div");

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
    newImage.src = pizza1.image;
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
    // edit button for each entry
    const editStoryBtn = document.createElement("button");
    editStoryBtn.className = "edit-story-btn";
    editStoryBtn.innerHTML = "edit";
    storiesList.append(editStoryBtn);
    // delete button functionality
    deleteButton.addEventListener("click", function (e) {
      e.preventDefault();
      storiesList.removeChild(newTitle);
      storiesList.removeChild(newText);
      storiesList.removeChild(newImage);
      storiesList.removeChild(deleteButton);

      let pizzaNum = pizza1.id - 1;

      pizzaStories.splice(pizza1.id, 1);

      for (let i = 0; i < pizzaStories.length; i++) {
        if (pizzaStories[i].id > pizzaNum) {
          pizzaStories[i].id = pizzaStories[i].id - 1;
        }
      }

      count = pizzaStories.length;

      localStorage.removeItem("story-list");
      localStorage.removeItem("persist-count");
      let JSON1 = JSON.stringify(pizzaStories);
      let JSON2 = JSON.stringify(count);
      localStorage.setItem("story-list", JSON1);
      localStorage.setItem("persist-count", JSON2);
    });
    // create update button
    const updateStoryBtn = document.createElement("button");
    updateStoryBtn.innerHTML = "Update Story";
    updateStoryBtn.className = "update-story-btn";
    // edit button functionality
    editStoryBtn.addEventListener("click", function () {
      storyTitle.value = pizza1.title;
      storyText.value = pizza1.text;
      storyImage.value = pizza1.image;
      storiesFormDiv.removeChild(storySubmitBtn);
      storiesFormDiv.append(updateStoryBtn);
    });
    // update button functionality
    updateStoryBtn.addEventListener("click", function () {
      pizza1.title = storyTitle.value;
      newTitle.innerHTML = pizza1.title;
      pizza1.text = storyText.value;
      newText.innerHTML = pizza1.text;
      pizza1.image = storyImage.value;
      newImage.src = pizza1.story;
      storiesFormDiv.removeChild(updateStoryBtn);
      storiesFormDiv.append(storySubmitBtn);
      localStorage.removeItem("story-list");
      let JSON5 = JSON.stringify(pizzaStories);
      localStorage.setItem("story-list", JSON5);
      storyTitle.value = "";
      storyText.value = "";
      storyImage.value = "";
    });
  });
}

displayStories();

console.log("-----------------------------------------------------");

storySubmitBtn.addEventListener("click", onSubmit);

function onSubmit(e) {
  if (storyTitle.value.trim() == "") {
    e.preventDefault();
    storyMsg.innerHTML = "We At Least Need A Title!";
  } else {
    e.preventDefault();
    storyMsg.innerHTML = "Thanks For The Story!";
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
}

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

  storyTitle.value = "";
  storyText.value = "";
  storyImage.value = "";
}

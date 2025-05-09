import Constants from "./contants.js";

const selectedTextIndex = sessionStorage.getItem(Constants.BUTTON_TEXT_INDEX_KEY);
const titleElement = document.getElementById("text-title");
const imgElement = document.getElementById("text-img");
const textElement = document.getElementById("text-content");

titleElement.innerText = Constants.TEXT_OBJECTS[selectedTextIndex].title;
imgElement.src = Constants.TEXT_OBJECTS[selectedTextIndex].img;
textElement.innerHTML = Constants.TEXT_OBJECTS[selectedTextIndex].text;


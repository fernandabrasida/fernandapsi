import Constants from "./contants.js";

const titleElements = document.querySelectorAll(".to-think-title");
const textElements = document.querySelectorAll(".to-think-text");
const imgElements = document.querySelectorAll(".to-think-grid-img");
const seeCompleteTextButtonElements = document.querySelectorAll(".to-think-btn");

function setTitleAndText() {
    titleElements.forEach((title, index) => {
        title.innerText = Constants.TEXT_OBJECTS[index].title;
        textElements[index].innerHTML = Constants.TEXT_OBJECTS[index].text;
        imgElements[index].src = Constants.TEXT_OBJECTS[index].img;
    });
}

function seeCompleteTextButtonClick() {
    seeCompleteTextButtonElements.forEach((button, index) => {
        button.addEventListener("click", () => {
                window.location.href = "text_page.html"
                sessionStorage.setItem(Constants.BUTTON_TEXT_INDEX_KEY, index);
        });
    });
}

setTitleAndText();
seeCompleteTextButtonClick();
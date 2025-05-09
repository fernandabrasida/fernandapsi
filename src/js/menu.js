const menuButton = document.getElementById("menu-button");
const sideMenu = document.getElementById("side-menu");
const closeButton = document.getElementById("close-button");
const sideMenuButtonList = document.querySelectorAll(".side-menu-button");

const openOrCloseSideMenu = () => {
    sideMenu.classList.toggle("opened");
    if (sideMenu.classList.contains("opened")) {
        document.addEventListener("click", handleOutsideClick);
    } else {
        document.removeEventListener("click", handleOutsideClick);
    }
};

const handleOutsideClick = (event) => {
    if(!sideMenu.contains(event.target) && event.target !== menuButton) {
        openOrCloseSideMenu();
    }
};

menuButton.addEventListener("click", openOrCloseSideMenu);
closeButton.addEventListener("click", openOrCloseSideMenu);
sideMenuButtonList.forEach(element => element.addEventListener("click", openOrCloseSideMenu));
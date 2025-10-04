export function menuLoad(){


    const content = document.querySelector("#content");

    content.innerHTML = "";

    const menuFragment = document.createDocumentFragment();

    const menuContent = menuFragment.appendChild(document.createElement("div"));
    menuContent.textContent = "this is the menu";

    content.appendChild(menuFragment);
    console.log("Menu Loaded.");

};
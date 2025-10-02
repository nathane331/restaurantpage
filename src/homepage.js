// homepage.js


export function homepageLoad(){
    const content = document.querySelector("#content");

    const homepageContent = content.appendChild(document.createElement("div"));
    homepageContent.classList.add("home-page-content");
    homepageContent.textContent = "This is the homepage.";

    console.log("Homepage Loaded.");
};
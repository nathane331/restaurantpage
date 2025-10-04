// homepage.js
import jawImage from "./images/rylan-krupp.jpg";
import orangeImage from "./images/drink-marta-dzedyshko.jpg";
import alcoholImage from "./images/thimo-van-leeuwen.jpg";
import wineImage from "./images/the-design-lady.jpg";

export function homepageLoad(){
    const content = document.querySelector("#content");

    content.innerHTML = "";
    
    const homepageFragment = document.createDocumentFragment();

    const homeTopContent = homepageFragment.appendChild(document.createElement("div"));
    homeTopContent.classList.add("home-top-content");
    
    const leftContent = homeTopContent.appendChild(document.createElement("div"));
    leftContent.classList.add("home-left-content");
    const rightContent = homeTopContent.appendChild(document.createElement("div"));
    rightContent.classList.add("home-right-content");


    const tagline = leftContent.appendChild(document.createElement("h2"));
    tagline.textContent = "Let your fangs out.";
    tagline.classList.add("tagline");

    const subTagline = leftContent.appendChild(document.createElement("h3"));
    subTagline.textContent = "Visit the First Kindred-Only Bar";
    subTagline.classList.add("sub-tagline");

    const text1 = leftContent.appendChild(document.createElement("p"));
    const text2 = leftContent.appendChild(document.createElement("p"));

    text1.textContent = "Situated at the heart of Santa Monica's nightlife scene, Bar Sanguine keeps the lights low and the blood flowing for any kindred who finds herself in need of a hot drink.";

    text2.textContent ="Ghouls are welcome on a case-by-case basis and will be individually evaluated upon entry. Kine are not welcome under any circumstances. Masquerade violations will be strictly enforced.";

    text1.classList.add("home-text");
    text2.classList.add("home-text");

    const reserveButton = leftContent.appendChild(document.createElement("button"));
    reserveButton.textContent = "RESERVE A BOOTH";
    reserveButton.classList.add("nav-btn");

    const rightImage = rightContent.appendChild(document.createElement("img"));
    rightImage.src = jawImage;
    rightImage.classList.add("jawline-img");
    rightImage.alt = "Image of male jawline with red lips.";

    //////////////////

    const homeBottomContent = homepageFragment.appendChild(document.createElement("div"));
    homeBottomContent.classList.add("home-bottom-content");
    const photoGrid = homeBottomContent.appendChild(document.createElement("div"));
    photoGrid.classList.add("photo-grid");

    const orangeImg = photoGrid.appendChild(document.createElement("img"));
    orangeImg.src = orangeImage;
    orangeImg.classList.add("grid-image");

    const gridText1 = photoGrid.appendChild(document.createElement("div"));
    gridText1.classList.add("grid-text");
    gridText1.textContent = "PREMIUM FLAVORS.";


    const alcoholImg = photoGrid.appendChild(document.createElement("img"));
    alcoholImg.src = alcoholImage;
    alcoholImg.classList.add("grid-image");

    const gridText2 = photoGrid.appendChild(document.createElement("div"));
    gridText2.classList.add("grid-text");
    gridText2.textContent = "EXCELLENT SERVICE.";

    const wineImg = photoGrid.appendChild(document.createElement("img"));
    wineImg.src = wineImage;
    wineImg.classList.add("grid-image");



    content.appendChild(homepageFragment);
    console.log("Homepage Loaded.");
};
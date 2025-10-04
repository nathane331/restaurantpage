// index.js
import "./styles.css";
import {homepageLoad} from "./homepage.js"
import { menuLoad } from "./menupage.js";


document.querySelector("#homeBtn").addEventListener('click', homepageLoad);

document.querySelector("#menuBtn").addEventListener('click', menuLoad);

homepageLoad();
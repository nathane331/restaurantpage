export function menuLoad(){


    const content = document.querySelector("#content");

    content.innerHTML = "";

    const menuFragment = document.createDocumentFragment();

    const menuContent = menuFragment.appendChild(document.createElement("div"));
    menuContent.classList.add("menu-content");
    const menuHeader = menuContent.appendChild(document.createElement("h2"));
    menuHeader.textContent = "WHAT'S ON TAP";
    menuHeader.classList.add("menu-header");
    

    content.appendChild(menuFragment);
    console.log("Menu Loaded.");

    const menuList = menuContent.appendChild(document.createElement("ul"));
    menuList.classList.add("menu-list");



    const bloods = ["TYPE 0 -", "TYPE 0 +", "TYPE A +","TYPE A -", "TYPE B +", "TYPE B -", "TYPE AB +", "TYPE AB -"];
    const prices = [12, 10, 10, 16, 18, 18, 22, 22];

    for (let i = 0; i < bloods.length; i++) {
        
        let listItem = menuList.appendChild(document.createElement("li"));
        listItem.classList.add("menu-item");

        let itemName = listItem.appendChild(document.createElement("span"));
        itemName.textContent = bloods[i];
        let itemPrice = listItem.appendChild(document.createElement("span"));
        itemPrice.textContent = prices[i];


        
    }
    
    


};
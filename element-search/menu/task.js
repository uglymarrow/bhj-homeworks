const menuItems = document.getElementsByClassName("menu__link");

Array.from(menuItems).forEach((menuItem) => {
    menuItem.onclick = () => {
        const openedMenuItems = Array.from(document.getElementsByClassName("menu menu_sub menu_active"));
        if (openedMenuItems.length) 
            openedMenuItems.forEach((element) => {
                element.className = "menu menu_sub";
            })
            
        const parentNode = menuItem.closest("li");
        parentNode.querySelector("ul").className = "menu menu_sub menu_active";
        return false;
    }
})

const menuLinks = Array.from(document.getElementsByClassName("menu__link"));

menuLinks.forEach((menuLink) => {
    menuLink.onclick = () => {
        const submenu = menuLink.parentNode.querySelector("ul");
        if (submenu.className == "menu menu_sub menu_active") {
            submenu.className = "menu menu_sub";
            return false;
        }

        const openedMenuItems = Array.from(document.getElementsByClassName("menu menu_sub menu_active"));
        if (openedMenuItems.length) 
            openedMenuItems.forEach((element) => {
                element.className = "menu menu_sub";
            })

        submenu.className = "menu menu_sub menu_active";
        return false;
    }
})

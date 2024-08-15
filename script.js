function Dropdown() {
    const openMenu = (menu, btnToRemove, btnToShow) => {
        menu.style.display = "grid";
        btnToRemove.style.display = "none";
        btnToShow.style.display = "block";
    }

    const closeMenu = (menu, btnToRemove, btnToShow) => {
        menu.style.display = "none";
        btnToRemove.style.display = "none";
        btnToShow.style.display = "block";
    }

    return {openMenu, closeMenu}
}
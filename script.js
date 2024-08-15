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

function ButtonEvents() {
    const dropBtn = Dropdown();

    const drop1 = () => {
        const drop = document.querySelector(".drop");
        const toggleOpen = document.querySelector(".toggleOpen");
        const toggleClose = document.querySelector(".toggleClose");

        drop.style.display = "none";
        toggleClose.style.display = "none";

        toggleOpen.addEventListener("click", () => {
            dropBtn.openMenu(drop, toggleOpen, toggleClose);
        });

        toggleClose.addEventListener("click", () => {
            dropBtn.closeMenu(drop, toggleClose, toggleOpen);
        });
    }

    const drop2 = () => {
        const secondDrop = document.querySelector(".drop2");
        const linksOpen = document.querySelector(".linksOpen");
        const linksClose = document.querySelector(".linksClose");

        secondDrop.style.display = "none";
        linksClose.style.display = "none";

        linksOpen.addEventListener("click", () => {
            dropBtn.openMenu(secondDrop, linksOpen, linksClose);
        });

        linksClose.addEventListener("click", () => {
            dropBtn.closeMenu(secondDrop, linksClose, linksOpen);
        });
    }

    return {drop1, drop2}
}

const btns = ButtonEvents();
btns.drop1();
btns.drop2();
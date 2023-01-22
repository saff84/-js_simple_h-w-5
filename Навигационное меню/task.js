const menuLink = document.querySelectorAll(".menu__link"),
    allMenuSub = document.querySelectorAll(".menu_sub");

menuLink.forEach((element) => {
    const menuItem = element.closest(".menu__item"),
        menuSub = menuItem.querySelector(".menu_sub");

    element.onclick = function () {
        // allMenuSub.forEach((el) => {
        //     el.classList.remove("menu_active")
        // });

        // if (element.closest(".menu_sub")) {
        //     return false
        // }

        if (menuSub) {
            if (menuSub.classList.contains("menu_active")) {
                menuSub.classList.remove("menu_active")
                return false
            } else {
                allMenuSub.forEach((el) => {
                    el.classList.remove("menu_active")
                });
                menuSub.classList.add("menu_active");
                return false
            }

        }
    }
});

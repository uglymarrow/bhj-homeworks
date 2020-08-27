const fontLogo = Array.from(document.querySelectorAll(".font-size"))
const book = document.querySelector(".book");

fontLogo.forEach((logo)=> {
    logo.addEventListener('click', (e) => {
        e.preventDefault();
        fontLogo.forEach((logo) => {logo.classList.remove("font-size_active")});
        logo.classList.add("font-size_active");

        book.className = "book";
        if (logo.dataset.size)
            book.classList.add(`book_fs-${logo.dataset.size}`);
    }, false);
});

const fontColorLogo = Array.from(document.querySelector(".book__control_color").querySelectorAll("a"));

fontColorLogo.forEach((logo)=> {
    logo.addEventListener('click', (e) => {
        e.preventDefault();
        fontColorLogo.forEach((logo) => {logo.classList.remove("color_active")});
        logo.classList.add("color_active");

         book.className = "book";
        book.style.color = logo.dataset.textColor;
    }, false);
});

const bgColorLogo = Array.from(document.querySelector(".book__control_background").querySelectorAll("a"));

bgColorLogo.forEach((logo)=> {
    logo.addEventListener('click', (e) => {
        e.preventDefault();
        bgColorLogo.forEach((logo) => {logo.classList.remove("color_active")});
        logo.classList.add("color_active");

        book.className = "book";
        book.style.backgroundColor = logo.dataset.bgColor;
    }, false);
});


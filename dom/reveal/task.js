const reveals = Array.from(document.getElementsByClassName("reveal"));

window.onscroll = () => {
    reveals.forEach((reveal) => {
        let top = reveal.getBoundingClientRect().top;
        let bottom = reveal.getBoundingClientRect().bottom;
        if ((top > 0 && top < window.innerHeight) || (top < 0 && bottom > 0))  
            reveal.classList.add("reveal_active");
        else 
            reveal.classList.remove("reveal_active");   
    });
}
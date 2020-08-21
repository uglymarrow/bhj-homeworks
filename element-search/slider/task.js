const sliderItems = Array.from(document.getElementsByClassName("slider__item"));
const sliderDots = Array.from(document.getElementsByClassName("slider__dot"));

let curNum = 0;
sliderItems[curNum].className = "slider__item slider__item_active";
sliderDots[curNum].className = "slider__dot slider__dot_active";

const sliderPrev = document.getElementsByClassName("slider__arrow_prev").item(0);
const sliderNext = document.getElementsByClassName("slider__arrow_next").item(0);

sliderPrev.onclick = () => {
    curNum = activateSlider(curNum, sliderItems.length, 'prev');
};

sliderNext.onclick = () => {
    curNum = activateSlider(curNum, sliderItems.length, 'next');
};

sliderDots.forEach((dot, dotIndex) => {
    dot.onclick = () => {
        curNum = activateSlider(dotIndex, sliderItems.length);
    }
});

function activateSlider(index, masLength, operator) {
    sliderItems[curNum].className = "slider__item";
    sliderDots[curNum].className = "slider__dot";

    if (operator) {
        index = (operator == "prev") ? (-- index) : (++ index);

        if (index < 0) 
            index += masLength;

        index = index % masLength;
    }
    
    sliderItems[index].className = "slider__item slider__item_active";
    sliderDots[index].className = "slider__dot slider__dot_active";

    return index;
};


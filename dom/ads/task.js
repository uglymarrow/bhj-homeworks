const rotator = document.querySelector(".rotator");
rotateAds(rotator);

function rotateAds(curRotator) {
    const rotatorCases = Array.from(curRotator.children);
    rotatorCases[0].style.color = rotatorCases[0].dataset.color;
    let timerId = setTimeout(rotateRecursively, rotatorCases[0].dataset.speed);

    function rotateRecursively() {
        rotatorCases.every((rotatorCase) => {
            if (rotatorCase.classList.contains("rotator__case_active")){
                rotatorCase.classList.toggle("rotator__case_active");

                let nextElement = (rotatorCase.nextElementSibling) ? rotatorCase.nextElementSibling : rotatorCases[0];
                nextElement.classList.add("rotator__case_active");
                nextElement.style.color = nextElement.dataset.color;
            
                timerId = setTimeout(rotateRecursively, nextElement.dataset.speed);
                
                return false;
            }
            return true;
        });
    }
}


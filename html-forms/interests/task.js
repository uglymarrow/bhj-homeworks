const interests = Array.from(document.querySelectorAll(".interest"));

interests.forEach(rootInterest => {
    rootInterest.querySelector("input").addEventListener('change', (event) => {
        focusSubinterests(rootInterest, event);
    })
})  

function focusSubinterests(rootInterest, event) {
    let subinterests = Array.from(rootInterest.children).filter(subinterest => {
        subinterest.classList.contains("interests")
    });

    if (! subinterests.length == 0) {
        subinterests.forEach(subinterest => focusSubinterests(subinterest, event));
    } else {
        let interests = Array.from(rootInterest.querySelectorAll("input"));
        interests.forEach(interest => interest.checked = event.currentTarget.checked);
    }
}

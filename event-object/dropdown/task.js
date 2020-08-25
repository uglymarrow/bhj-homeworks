
const dropdown = document.getElementsByClassName("dropdown").item(0);
dropdown.addEventListener('click', function() {dropList(event)});

const dropdownItems = Array.from(document.getElementsByClassName("dropdown__item"));
dropdownItems.forEach(item => item.addEventListener('click', function() {changeDropValue(event)}));

const dropdownLinks = Array.from(document.getElementsByClassName("dropdown__link"));
dropdownLinks.forEach(link => link.onclick = () => {return false});

function changeDropValue(event) {
    const dropdownValue = document.getElementsByClassName("dropdown__value").item(0);
    dropdownValue.textContent = event.currentTarget.textContent;
};

function dropList(event) {
    const dropdownList = event.currentTarget.querySelector("ul");
    dropdownList.className = (dropdownList.className == "dropdown__list" ) ?  "dropdown__list dropdown__list_active" : "dropdown__list";
};

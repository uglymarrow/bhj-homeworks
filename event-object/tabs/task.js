const tabs = Array.from(document.getElementsByClassName("tab"));
const tabsContent = Array.from(document.getElementsByClassName("tab__content"));
let curIndex = 0;

tabs.forEach((tab,index) => {
    tab.addEventListener('click', () => {
        tabs[curIndex].className = "tab";
        tabs[index].className = "tab tab_active";

        tabsContent[curIndex].className = "tab__content";
        tabsContent[index].className = "tab__content tab__content_active";

        curIndex = index;
    });
})
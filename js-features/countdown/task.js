const timer = document.getElementById('timer');
const unseenLink = document.getElementById('unseen');
let parsedTimer = timer.textContent.split(':');

let start = new Date();
start.setHours(parsedTimer[0]);
start.setMinutes(parsedTimer[1]);
start.setSeconds(parsedTimer[2]);

const intervalId = setInterval(() => {
    if (start.toLocaleTimeString("ru") != "00:00:00") {
        start.setSeconds(start.getSeconds() - 1);
        timer.textContent = start.toLocaleTimeString("ru");
    } else {
        window.alert("Вы победили в конкурсе!");
        clearInterval(intervalId);
        unseenLink.href = "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg";
        unseenLink.click();
    }
}, 1000);



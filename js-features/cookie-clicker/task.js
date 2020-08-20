const clickerCounter = document.getElementById("clicker__counter");
const cookieImg = document.getElementById("cookie");
const clickSpeed = document.getElementById("speed__counter");
let oldDate, now = new Date;
oldDate = Date.now();

cookieImg.onclick = () => {
    now = Date.now();
    clickSpeed.textContent = Math.ceil(1 / (now - oldDate) * 1000);
    oldDate = now;
    clickerCounter.textContent =  parseInt(clickerCounter.textContent) + 1;
    cookieImg.width = (parseInt(clickerCounter.textContent) % 2) ? cookieImg.width + 100 : cookieImg.width - 100;
};
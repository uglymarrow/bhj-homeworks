const chatWidget = document.querySelector(".chat-widget");
const sideWidget = document.querySelector(".chat-widget__side");
let userMsg = document.getElementById("chat-widget__input");
let chatMessages = document.getElementById("chat-widget__messages");
let timerId;

sideWidget.addEventListener('click', () => {
    chatWidget.classList.add("chat-widget_active");
    sendRoboMessage("Добрый день!");
    timerId = setTimeout(sendAwakeMsg, 30000);
});

document.addEventListener('keydown', event => {
    if ((event.key == 'Enter') && (chatWidget.classList.contains("chat-widget_active")) && (userMsg.checkValidity())) {
        sendClientMessage();     
        sendRoboMessage();
        document.querySelector(".chat-widget__messages-container").scrollBy(0, window.innerHeight);
    }
});

function sendRoboMessage(msg) {
    const randRoboMsgs = ["Ацтань!! >:[","Я с Вами не дружу", "Ухааадиии отсюда", "Меня нет"];

    let now = new Date;
    if (msg) {
        chatMessages.innerHTML += `
            <div class="message">
                <div class="message__time">
                    ${now.toLocaleTimeString().slice(0, 5)}   
                </div>
                <div class="message__text">${msg}</div>
            </div>
        `;
    } else {
        chatMessages.innerHTML += `
            <div class="message">
                <div class="message__time">
                    ${now.toLocaleTimeString().slice(0, 5)}   
                </div>
                <div class="message__text">${randRoboMsgs[now.getSeconds() % randRoboMsgs.length]}</div>
            </div>
        `;
    }
}

function sendClientMessage() {
    clearTimeout(timerId);
    let now = new Date;

    chatMessages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">
                ${now.getHours() + ":" + now.getMinutes()}
            </div>
            <div class="message__text">${userMsg.value}</div>
        </div>
    `;

    userMsg.value = '';
    timerId = setTimeout(sendAwakeMsg, 30000);
}

function sendAwakeMsg() {
    clearTimeout(timerId);
    sendRoboMessage("Спишь?");
    timerId = setTimeout(sendAwakeMsg, 30000);
}
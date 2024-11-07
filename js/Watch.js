const timeElement = document.getElementById('time');

setInterval(() => {
    timeElement.innerText = new Date().toLocaleTimeString();
}, 1000);

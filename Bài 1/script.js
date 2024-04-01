function updateClock() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById('gio').textContent = hours;
    document.getElementById('phut').textContent = minutes;
    document.getElementById('giay').textContent = seconds;
}


setInterval(updateClock, 1000);

updateClock();


// DOM references









// GREETING

const myDate = new Date();
const hrs = myDate.getHours();

let greeting;

if (hrs < 12)
  greeting = 'Good Morning ☀ ';
else if (hrs >= 12 && hrs <= 17)
  greeting = 'Good Afternoon! ';
else if (hrs >= 17 && hrs <= 24)
  greeting = 'Good Evening ☾ ';

document.getElementById('greeting').innerHTML ='<b>' + greeting + '</b>';


// CLOCK
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s ;
    setInterval(startTime, 1000);
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
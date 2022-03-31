
let i = 0;

function changeByHour() {
  const hour = document.getElementById("hour");
  const color = ["#96B3C2", "#57838D", "#B4C9C7", "#F3BFB3"];
  hour.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}

setInterval(changeByHour, 1000 * 60 * 60);


function changeByMinute() {
    const minute = document.getElementById("minute");
    const color = ["#445A67", "#57838D", "#B4C9C7", "#F3BFB3"];
    minute.style.backgroundColor = color[i];
    i = (i + 1) % color.length;
  }
  
setInterval(changeByMinute, 1000 * 60);

function changeBySecond() {
    const second = document.getElementById("second");
    const color = ["#96B3C2", "#57838D", "#B4C9C7", "#F3BFB3", "CCADB2"];
    second.style.backgroundColor = color[i];
    i = (i + 1) % color.length;
  }
  
setInterval(changeBySecond, 1000);

// adding month and year // 

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let name = month[d.getMonth()];
document.getElementById("month").innerHTML = name;

let year = d.getFullYear();
document.getElementById("year").innerHTML = year;

let date = d.getDate();
document.getElementById("date").innerHTML = date;
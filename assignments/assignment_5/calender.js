
let i = 0;

function changeByHour() {
  const hour = document.getElementById("hour");
  const color = ["black", "purple", "yellow", "blue"];
  hour.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}

setInterval(changeByHour, 1000 * 60 * 60);


function changeByMinute() {
    const minute = document.getElementById("minute");
    const color = ["black", "purple", "yellow", "blue"];
    minute.style.backgroundColor = color[i];
    i = (i + 1) % color.length;
  }
  
setInterval(changeByMinute, 1000 * 60);

function changeBySecond() {
    const second = document.getElementById("second");
    const color = ["black", "purple", "yellow", "blue"];
    second.style.backgroundColor = color[i];
    i = (i + 1) % color.length;
  }
  
setInterval(changeBySecond, 1000);

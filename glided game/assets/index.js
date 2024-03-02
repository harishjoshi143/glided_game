let time = document.querySelector(".time");
let mint = document.querySelector(".mint");
let hour = document.querySelector(".hour");
let day = document.querySelector(".days");

let sec = 60;
let mints = 59;
let hours = 24;
let days = 10;
setInterval(() => {
  if (days >= 0) {
    if (sec > 0) {
      sec--;
      if (sec == 0) {
        if (mints > 0) {
          mints--;
          if (mints == 0) {
            hours--;
          } else {
            if (hours <= 0) {
              hours = 24;
              days--;
            }
          }
        } else {
          mints = 59;
        }
      }
    } else {
      sec = 60;
    }
  }
  setInterval(() => {
    time.innerHTML = sec;
    mint.innerHTML = mints;
    hour.innerHTML = hours;
    day.innerHTML = days;
  }, 10);
}, 1000);


let nav = document.querySelector(".nav_links");
let menu = document.querySelector(".menu");

menu.addEventListener("click", function () {
  nav.classList.toggle("start-0");
  document.body.classList.toggle("overflow-hidden");
});

function hideNav() {
  nav.classList.remove("start-0");
  document.body.classList.toggle("overflow-hidden");
}


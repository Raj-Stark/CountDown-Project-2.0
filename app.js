const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2023, 10, 25, 2, 36, 00);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

const day = futureDate.getDate();

let month = futureDate.getMonth();
month = months[month];

const weekday = weekdays[futureDate.getDay()];

let seconds = futureDate.getSeconds();

if (seconds < 10) {
  seconds = `0${seconds}`;
}

giveaway.textContent = `Giveaway ends on  ${year} ${month} ${weekday} ${day} , ${hours}:${minutes}:${seconds} `;

// !  Real functionality Setup

const format = (item) => {
  if (item < 10) {
    return `0${item}`;
  } else {
    return item;
  }
};

const getRemainingTime = () => {
  const futureTime = futureDate.getTime();
  const today = new Date().getTime();

  const remainingTime = futureTime - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = remainingTime / oneDay;
  days = Math.floor(days);

  let hours = Math.floor((remainingTime % oneDay) / oneHour);
  let minutes = Math.floor((remainingTime % oneHour) / oneMinute);
  let seconds = Math.floor((remainingTime % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });

  if (remainingTime < 0) {
    clearInterval(interval);
    deadline.innerHTML = `<h4 class="expired"> Sorry ! This giveaway is expired </h4>`;
  }
};

const interval = setInterval(getRemainingTime, 1000);

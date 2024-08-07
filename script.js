$(document).ready(function () {
  const $hourEl = $(".hour");
  const $minuteEl = $(".minute");
  const $secondEl = $(".second");
  const $timeEl = $(".time");
  const $dateEl = $(".date");
  const $toggle = $(".toggle");

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  $toggle.on("click", function (e) {
    const $html = $("html");
    if ($html.hasClass("dark")) {
      $html.removeClass("dark");
      $(e.target).html("Dark mode");
    } else {
      $html.addClass("dark");
      $(e.target).html("Light mode");
    }
  });

  function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    $hourEl.css(
      "transform",
      `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
    );
    $minuteEl.css(
      "transform",
      `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
    );
    $secondEl.css(
      "transform",
      `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`
    );

    $timeEl.html(
      `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    );
    $dateEl.html(
      `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
    );
  }

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  setTime();
  setInterval(setTime, 1000);
});

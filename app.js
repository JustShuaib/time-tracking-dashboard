const headings = document.querySelectorAll("h2"),
  timeDuration = document.querySelectorAll(".time-duration"),
  currentTime = document.querySelectorAll(".current"),
  previousTime = document.querySelectorAll(".previous"),
  btns = document.getElementById("duration");

btns.addEventListener("click", toggleActiveDuration);

function toggleActiveDuration(e) {
  addActiveClass(e);
  displayTime(e);
}
function addActiveClass(e) {
  const allBtns = [...document.getElementById("duration").children];
  allBtns.forEach((btn) => {
    btn.firstChild.classList.remove("text-white");
  });
  e.target.classList.add("text-white");
}

function displayTime(e) {
  async function getDuration() {
    const data = await fetch("./data.json");
    const response = await data.json();
    for (let i = 0; i < response.length; i++) {
      const { daily, weekly, monthly } = response[i].timeframes;
      let selectedTime = e.target.textContent;
      if (selectedTime === "daily") {
        populateDOM("Day", daily, i);
      }
      if (selectedTime === "weekly") {
        populateDOM("Week", weekly, i);
      }
      if (selectedTime === "monthly") {
        populateDOM("Month", monthly, i);
      }
    }
  }
  getDuration();
}

function populateDOM(duration, durationType, curr) {
  timeDuration[curr].textContent = duration;
  currentTime[curr].textContent = durationType.current;
  previousTime[curr].textContent = durationType.previous;
}

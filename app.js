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
    try {
      const controller = new AbortController(),
        signal = controller.signal;
      const data = await fetch("./data.json", { signal }),
        response = await data.json();
      if (!data.ok) controller.abort();
      for (let i = 0; i < response.length; i++) {
        const { daily, weekly, monthly } = response[i].timeframes;
        let selectedTime = e.target.textContent;
        if (selectedTime === "daily") populateDOM("Yesterday", daily, i);
        if (selectedTime === "weekly") populateDOM("Last Week", weekly, i);
        if (selectedTime === "monthly") populateDOM("Last Month", monthly, i);
      }
    } catch (err) {
      console.error(`${err.name} : ${err.message}`);
    }
  }
  getDuration();
}

function populateDOM(duration, durationType, curr) {
  timeDuration[curr].textContent = duration;
  currentTime[curr].textContent = durationType.current;
  previousTime[curr].textContent = durationType.previous;
}

const listGroup = document.querySelectorAll("#duration li");
const headings = document.querySelectorAll("h2");
const buttons = document.getElementById("duration");
buttons.addEventListener("click", (e) => {
  const allBtns = [...document.getElementById("duration").children];
  allBtns.forEach((btn) => {
    btn.firstChild.classList.remove("text-white");
  });
  e.target.classList.add("text-white");
});

async function getDuration() {
  const data = await fetch("./data.json");
  const response = await data.json();
  return response;
}
getDuration().then((response) => {
  response.forEach((resObj) => {
    // console.log(resObj.title);
    // console.log(resObj.timeframes);
    // console.log(resObj);
  });
});
/* listGroup.forEach((btn) => {
  btn.addEventListener("click", displayDuration);
});
function displayDuration(e) {
  listGroup.forEach((list) => {
    list.classList.remove("text-white");
  });
  e.target.classList.add("text-white");
  console.log(`You clicked ${e.target.textContent}`);
}
 */

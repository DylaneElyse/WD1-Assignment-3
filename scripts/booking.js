/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on
// the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

let dailyRate = 35;
let dayCounter = 0;
let calcCost = document.getElementById("calculated-cost");
calcCost.innerHTML = 0;
let mon = document.getElementById("monday");
let tue = document.getElementById("tuesday");
let wed = document.getElementById("wednesday");
let thu = document.getElementById("thursday");
let fri = document.getElementById("friday");
let days = document.getElementById("day-selector");
let full = document.getElementById("full");
let half = document.getElementById("half");
let clearButton = document.getElementById("clear-button");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and
// update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once.
// hint: .classList.contains() might be helpful here!

mon.addEventListener("click", daySelection);
tue.addEventListener("click", daySelection);
wed.addEventListener("click", daySelection);
thu.addEventListener("click", daySelection);
fri.addEventListener("click", daySelection);

function daySelection() {
  if (this.classList.contains("clicked")) {
    console.log("already clicked");
  } else {
    this.classList.add("clicked");
    dayCounter += 1;
    console.log("add 1", dayCounter);
    recalculate(dayCounter, dailyRate);
  }
  return dayCounter;
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other
// relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener("click", clearDays);

function clearDays() {
  const dayName = [mon, tue, wed, thu, fri];
  for (let day of dayName) {
    day.classList.remove("clicked");
  }
  dayCounter = 0;
  calcCost.innerHTML = 0;
  return dayCounter;
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to
// the "half" element, remove it from the "full" element, and recalculate the total cost.

half.addEventListener("click", changeHalf);

function changeHalf() {
  dailyRate = 20;
  half.classList.add("clicked");
  full.classList.remove("clicked");
  recalculate(dayCounter, dailyRate);
  return dailyRate;
}
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is
// added to "full" and removed from "half", and the total cost is recalculated.

full.addEventListener("click", changeFull);

function changeFull() {
  dailyRate = 35;
  full.classList.add("clicked");
  half.classList.remove("clicked");
  recalculate(dayCounter, dailyRate);
  return dailyRate;
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the
// appropriate value

function recalculate(dayCounter, dailyRate) {
  let total = dayCounter * dailyRate;
  calcCost.innerHTML = total;
}

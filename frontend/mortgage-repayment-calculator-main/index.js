let inputs = document.querySelectorAll(".calculator input")
let amount = 0;
let term = 0;
let rate = 0;
let calculateBtn = document.querySelector(".row6 button");
let resultEmpty = document.querySelector(".result .empty");
let resultCompleted = document.querySelector(".result .completed");
let clearBtn = document.querySelector(".row1 button");
let eList = new Set();
resultCompleted.classList.add("hide");
inputs.forEach((el, k) => {
  el.addEventListener("input", (e) => {
    if (k < 3) {
      k == 0 ? amount = e.target.value : k == 1 ? term = e.target.value : rate = e.target.value;
    }
    else{
      console.log(el)
    }
    rate = rate / 12;
    let partN = Math.pow((1 + (rate / 100)), (term * 12));
    let monthly = amount * (rate / 100) * (partN / (partN - 1));
    let total = monthly * term * 12;
    console.log(monthly, total)
  })
})
clearBtn.addEventListener("click", (e) => {
  inputs.forEach((el) => {
    el.value = null;
  })
  resultEmpty.classList.remove("hide");
  resultCompleted.classList.add("hide");
})
//function toggleErrors(n) {
//}
//calculateBtn.addEventListener("click", (e) => {
//  for (inp of inputs) {
//    if (inp.value == "") {
//      eList.add(inp);
//      console.log(inp)
//      toggleErrors(inp);
//    }
//  }
//})

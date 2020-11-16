const counter = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
let counterValue = Number(counter.textContent);

const increment = function () {
  counterValue += 1;
  counter.textContent = counterValue;
};
const decrement = function () {
  counterValue -= 1;
  counter.textContent = counterValue;
};

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);

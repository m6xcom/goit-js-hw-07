const textSizecontroller = document.querySelector("#font-size-control");
const textToChangeSize = document.querySelector("#text");
const changeSize = function (event) {
  textToChangeSize.style.fontSize = `${event.target.value / 2}px`;
};
textSizecontroller.addEventListener("input", changeSize);

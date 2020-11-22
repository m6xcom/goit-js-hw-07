const buttonCreate = document.querySelector("[data-action='render']");
const buttonDelete = document.querySelector("[data-action='destroy']");
const input = document.querySelector("[max='100']");
const boxesPlace = document.querySelector("#boxes");

const createBoxes = function (amount) {
  amount = input.value;
  let boxesCollection = [];
  for (let i = 0; i < amount; i++) {
    let height = 30;
    let width = 30;
    const divBox = document.createElement("div");
    divBox.style.backgroundColor = `rgb(${Math.random() * 255},${
      Math.random() * 255
    },${Math.random() * 255})`;
    divBox.style.width = `${width + i * 10}px`;
    divBox.style.height = `${height + i * 10}px`;
    boxesCollection[i] = divBox;
  }
  boxesPlace.append(...boxesCollection);
};

const deleteBoxes = function () {
  while (boxesPlace.firstChild) {
    boxesPlace.removeChild(boxesPlace.firstChild);
  }
};

buttonCreate.addEventListener("click", createBoxes);
buttonDelete.addEventListener("click", deleteBoxes);

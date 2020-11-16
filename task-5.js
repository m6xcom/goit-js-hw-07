const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");
const defaultValue = outputText.textContent;
const changeOutput = function (event) {
  if (event.target.value.length > 0) {
    outputText.textContent = event.target.value;
  } else {
    outputText.textContent = defaultValue;
  }
};
inputText.addEventListener("input", changeOutput);

const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");
const defaultValue = outputText.textContent;
inputText.addEventListener("input", (event) => {
  if (event.target.value.length > 0) {
    outputText.textContent = event.target.value;
  } else outputText.textContent = defaultValue;
});

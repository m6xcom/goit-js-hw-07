const input = document.querySelector("#validation-input");
const validation = function (event) {
  if (event.target.value.length <= input.dataset.length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else input.classList.add("invalid");
};
input.addEventListener("blur", validation);

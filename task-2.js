const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingredientsList = document.querySelector("#ingredients");

const arrayOfIngredientsLi = ingredients.map((el) => {
  const createLi = document.createElement("li");
  const title = document.createElement("h2");
  title.textContent = el;
  createLi.append(title);
  return createLi;
});

ingredientsList.append(...arrayOfIngredientsLi);

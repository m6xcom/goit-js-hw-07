const categories = document.querySelector("#categories");
const categoriesList = [...categories.children];
console.log(`В списке ${categoriesList.length} категории.`);
categoriesList.forEach((el) => {
  console.log(`Категория: ${el.querySelector("h2").textContent}`);
  console.log(`Количество елементов: ${el.querySelectorAll("li").length}`);
});

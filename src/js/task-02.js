const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector(`#ingredients`);
ingredients.map(ingredient => {
  const ingredientEl = document.createElement(`li`);
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add(`item`);
  ingredientsList.append(ingredientEl);
  // console.log(ingredientEl);
});


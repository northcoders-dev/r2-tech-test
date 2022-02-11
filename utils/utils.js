exports.ingredientsStringCreator = (ingredients) => {
  let ingredientsArrayString = "ARRAY[";
  ingredients.forEach((ingredient) => {
    ingredientsArrayString += `['${ingredient.name}', '${ingredient.grams}'], `;
  });
  ingredientsArrayString = ingredientsArrayString.slice(0, -2);
  ingredientsArrayString += `]`;
  return ingredientsArrayString;
};

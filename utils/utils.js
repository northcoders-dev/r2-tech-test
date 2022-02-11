exports.ingredientsStringCreator = (ingredients) => {
  const ingredientsArrayString = "ARRAY[";
  ingredients.forEach((ingredient) => {
    ingredientsArrayString += `[${ingredient.name}, '${ingredient.grams}']`;
  });
  ingredientsArrayString += `]`;
  return ingredientsArrayString;
};

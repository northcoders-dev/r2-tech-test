const db = require("../index.js");

const seed = (data) => {
  return db
    .query(`DROP TABLE IF EXISTS recipes`)
    .then(() => {
      return db.query(
        `CREATE TABLE recipes (
            id VARCHAR(15) UNIQUE PRIMARY KEY NOT NULL
            imageUrl VARCHAR(255) NOT NULL,
            instructions VARCHAR(255) NOT NULL,
            ingredients VARCHAR(100)[][] NOT NULL
        );`
      );
    })
    .then(() => {
      return db.query(
        format(
          `INSERT INTO recipes(id, imageUrl, instructions, ingredients) VALUES %L RETURNING *;`
        ),
        data.map((recipe) => {
          const ingredientsArrayString = "ARRAY[";
          recipe.ingredients.forEach((ingredient) => {
            ingredientsArrayString += `[${ingredient.name}, '${ingredient.grams}']`;
          });
          ingredientsArrayString += `]`;

          return [
            recipe.id,
            recipe.imageUrl,
            recipe.instructions,
            ingredientsArrayString,
          ];
        })
      );
    });
};

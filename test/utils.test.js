const { ingredientsStringCreator } = require("../utils/utils.js");

describe("ingredientsStringCreator()", () => {
  const ingredients = [
    { name: "apple", grams: 100 },
    { name: "orange", grams: 200 },
    { name: "banana", grams: 300 },
  ];
  test("correctly forms a string to insert array into SQL", () => {
    expect(ingredientsStringCreator(ingredients)).toEqual(
      "ARRAY[['apple', '100'], ['orange', '200'], ['banana', '300']]"
    );
  });
});

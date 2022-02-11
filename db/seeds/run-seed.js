const data = require("../../data/data.json");
const seed = require("./seed.js");
const db = require("../index.js");

const runSeed = () => {
  return seed(data).then(() => db.end());
};

runSeed();

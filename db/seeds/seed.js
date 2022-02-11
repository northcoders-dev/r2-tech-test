const db = require("../index.js");

const seed = (data) => {
  return db.query(`DROP TABLE IF EXISTS recipes`);
};

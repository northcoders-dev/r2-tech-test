const db = require("../index.js");

const seed = (data) => {
  return db.query(`DROP TABLE IF EXISTS recipes`).then(() => {
    return db.query(
      `CREATE TABLE recipes (
            id VARCHAR(15) UNIQUE PRIMARY KEY NOT NULL
            imageUrl VARCHAR(255) NOT NULL,
            instructions VARCHAR(255) NOT NULL,
            ingredients VARCHAR(100)[] NOT NULL,CURRENT_TIMESTAMP
        );`
    );
  });
};

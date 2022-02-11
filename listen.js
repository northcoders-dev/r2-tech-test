const server = require("./server");

server.listen(9090, (err) => {
  if (err) throw err;
  console.log("server listening on 9090");
});

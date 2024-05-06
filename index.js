const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const a = 10;
  const b = 10;

  const c = a + b;

  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// import { engine } from "express-handlebars";

const express = require("express");
const morgan = require("morgan");
const path = require("path");
const handlebars = require("express-handlebars");
// handlebars là một obj
const app = express();
const port = 3000;

app.use(morgan("combined"));
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources/views"));
//path là util của js dùng để quản lý đường dẫn.
//__dirname đường dẫn đến thư mục chúng ta đang làm việc .

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

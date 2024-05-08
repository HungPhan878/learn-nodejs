// import { engine } from "express-handlebars";

const express = require("express");
const morgan = require("morgan");
const path = require("path");
const handlebars = require("express-handlebars");
// handlebars là một obj
const app = express();
const port = 3000;

// static file và file dùng để public cho mn xem
app.use(express.static(path.join(__dirname, "public")));

// http logger
app.use(morgan("combined"));

//template engines
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
//path là util của js dùng để quản lý đường dẫn.
//__dirname đường dẫn đến thư mục chúng ta đang làm việc .

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

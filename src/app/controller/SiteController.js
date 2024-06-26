const { mongoosesToObject } = require("../../utils/mongoose.js");
const Course = require("../models/Course");

class SiteControllers {
  // GET path:/
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("home", { courses: mongoosesToObject(courses) });
      })
      .catch(next);

    // res.render('home');
  }

  //GET path:/search
  search(req, res) {
    res.render("search");
  }
}
// function contructor nên từ đầu viết hoa nha.
module.exports = new SiteControllers();

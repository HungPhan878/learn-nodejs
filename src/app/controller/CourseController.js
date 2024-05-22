const { mongooseToObject } = require("../../utils/mongoose.js");
const Course = require("../models/Course.js");

class CourseControllers {
  //GET path:/show
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render("course/show", { course: mongooseToObject(course) })
      )
      .catch(next);
  }
}
//hồi có time thì tìm hiểu thêm và cập nhật kt mới về thư viện husky nha.
// function contructor nên từ đầu viết hoa nha.
module.exports = new CourseControllers();

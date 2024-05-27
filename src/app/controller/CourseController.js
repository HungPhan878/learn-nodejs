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

  //GET path:/create
  create(req, res, next) {
    res.render("course/create");
  }

  //POST path:/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.video}/sddefault.jpg`;

    const course = new Course(formData);

    course
      .save()
      .then(() => res.redirect("/"))
      .catch((err) => {});
  }
}
//hồi có time thì tìm hiểu thêm và cập nhật kt mới về thư viện husky nha.
// function contructor nên từ đầu viết hoa nha.
module.exports = new CourseControllers();

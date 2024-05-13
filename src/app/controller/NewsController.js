class NewsControllers {
  // GET path:/news
  index(req, res) {
    res.render("news");
  }

  //GET path: /news/:slug
  show(req, res) {
    res.send("Detail News");
  }
}
// function contructor nên từ đầu viết hoa nha.
module.exports = new NewsControllers();

class SiteControllers {
    // GET path:/
    index(req, res) {
        res.render('home');
    }

    //GET path:/search
    search(req, res) {
        res.render('search');
    }
}
// function contructor nên từ đầu viết hoa nha.
module.exports = new SiteControllers();

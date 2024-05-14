const newsRouter = require('./news.route');
const siteRouter = require('./site.route');

function route(app) {
    // Đây được gọi path cha bên trong còn nhiều path con nữa
    // ex: /news/details
         app.use('/news', newsRouter);

    // HOME, CONTRACT, SEARCH
    app.use('/', siteRouter);
}

module.exports = route;

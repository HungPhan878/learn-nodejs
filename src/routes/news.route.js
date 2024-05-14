const express = require('express');
const router = express.Router();
const newsController = require('../app/controller/NewsController');

// :id or :slug là đường dẫn con động /news/string bất kì vẫn có thể match
router.use('/:slug', newsController.show);
// Đây là đường dẫn chỉ mục khi vào /news sẽ ghép với / đầu tiên và thực thi handler function tương ứng
// vì / luôn match với đường dẫn path cha nên để phía dưới
    router.use('/', newsController.index);

module.exports = router;

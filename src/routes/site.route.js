const express = require("express");
const router = express.Router();
const siteController = require("../app/controller/SiteController");

// search là đường dẫn con động /news/string bất kì vẫn có thể match
router.use("/search", siteController.search);
// Đây là đường dẫn chỉ mục khi vào / sẽ ghép với / đầu tiên và thực thi handler function tương ứng
// vì / luôn match với đường dẫn path cha nên để phía dưới
router.use("/", siteController.index);

module.exports = router;

const express = require("express");
const router = express.Router();
const courseController = require("../app/controller/CourseController");

// search là đường dẫn con động /news/string bất kì vẫn có thể match
router.get("/:slug", courseController.show);
// Đây là đường dẫn chỉ mục khi vào / sẽ ghép với / đầu tiên và thực thi handler function tương ứng
// vì / luôn match với đường dẫn path cha nên để phía dưới

module.exports = router;

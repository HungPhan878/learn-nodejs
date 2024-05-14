// import { engine } from "express-handlebars";

const express = require('express');
const morgan = require('morgan');
const route = require('./routes');
const path = require('path');
const handlebars = require('express-handlebars');
// handlebars là một obj
const app = express();
const port = 3000;

// static file và file dùng để public cho mn xem
app.use(express.static(path.join(__dirname, 'public')));

// http logger
app.use(morgan('combined'));

//template engines
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
//path là util của js dùng để quản lý đường dẫn.
//__dirname đường dẫn đến thư mục chúng ta đang làm việc .
app.set('views', path.join(__dirname, 'resources/views'));
// để tạo ra obj body và lưu formdata gửi từ method post lên.
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// routes init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

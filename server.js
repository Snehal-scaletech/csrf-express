
const express = require('express');
const csrf = require('csurf');
const cookieParser = require('cookie-parser')
const app = express()
var indexRouter = require('./route/index');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(cookieParser('dfgdfgdfgdfgdfgdfgdtrete'));
app.use(csrf({ cookie: true }))


app.use('/', indexRouter);

app.listen(8000, () => {
  console.log(`Example app listening on port 8000`)
})

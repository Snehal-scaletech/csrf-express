var express = require('express');
var router = express.Router();
const path = require('path');

router.get('/', function(req, res, next) {
    // res.render(path.join(__dirname, '/views', 'form.html'),  { title: "CSRF Demo", csrfToken: req.csrfToken() });
    res.render(path.join(__dirname, '/views', 'ajaxform.html'),  { title: "CSRF Demo" });
});
router.post('/process', function (req, res) {
    console.log(req.body)
    res.json({data:'csrf is valid, data is being processed'})
})

router.get('/welcome', function(req, res, next) {
    res.render(path.join(__dirname, '/views', 'welcome.html'),  { title: "Welcome", csrfToken: req.csrfToken() });
});

module.exports = router;
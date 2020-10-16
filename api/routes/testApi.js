const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.send('欢迎访问express api');
});

module.exports = router;

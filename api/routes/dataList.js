/* eslint-disable no-plusplus */
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({
        data: [
            {
                id: 1,
                title: '湘潭夜跑',
                author: '张三',
                date: '2018年9月20日'
            },
            {
                id: 2,
                title: '爬岳麓山',
                author: '李四',
                date: '2018年9月30日'
            },
            {
                id: 3,
                title: '湘潭夜跑',
                author: '张三',
                date: '2018年9月20日'
            }
        ]
    });
});

module.exports = router;

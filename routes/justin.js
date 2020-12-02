const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
	res.sendFile(path.resolve('static/justin/Login.html'));
});

router.get('/', (req, res) => {
    res.sendFile(path.resolve('static/justin/RecrUIter-Home.html'));
});

router.get('/resetpwd', (req, res) => {
    res.sendFile(path.resolve('static/justin/resetpwd.html'));
});

router.get('/signup', (req, res) => {
    res.sendFile(path.resolve('static/justin/signup.html'));
});

router.get('/Question1', (req, res) => {
	res.sendFile(path.resolve('static/justin/Question1.html'));
});
router.get('/Question2', (req, res) => {
	res.sendFile(path.resolve('static/justin/Question2.html'));
})

router.get('/rahul-Question1', (req, res) => {
	res.sendFile(path.resolve('static/rahul/Question1.html'));
});

router.get('/rahul-Question2', (req, res) => {
	res.sendFile(path.resolve('static/rahul/Question2.html'));
})

module.exports = router;

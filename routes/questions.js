const express = require('express');
const router = express.Router();

router.get('/1', (req, res) => {
	res.sendFile(path.resolve('static/questions/1.html'))
});

router.get('/2', (req, res) => {
	res.sendFile(path.resolve('static/questions/2.html'))
});

router.get('/3', (req, res) => {
	res.sendFile(path.resolve('static/questions/3.html'))
});

router.get('/4', (req, res) => {
	res.sendFile(path.resolve('static/questions/4.html'))
});

router.get('/5', (req, res) => {
	res.sendFile(path.resolve('static/questions/5.html'))
});

router.get('/6', (req, res) => {
	res.sendFile(path.resolve('static/questions/6.html'))
});

router.get('/7', (req, res) => {
	res.sendFile(path.resolve('static/questions/7.html'))
});

router.get('/8', (req, res) => {
	res.sendFile(path.resolve('static/questions/8.html'))
});

router.get('/9', (req, res) => {
	res.render('questions/9', {});
});

router.get('/10', (req, res) => {
	res.render('questions/10', {});
});

module.exports = router;

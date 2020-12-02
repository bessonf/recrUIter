const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/1', (req, res) => {
	res.sendFile(path.resolve('static/frank/question1.html'));
});

router.get('/2', (req, res) => {
	res.sendFile(path.resolve('static/frank/question2.html'));
});

module.exports = router;

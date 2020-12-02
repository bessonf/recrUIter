const express = require('express');
const router = express.Router();
router.get('/risk_taker', (req, res) => {
	res.render('results/riskTaker', {});
});

router.get('/collaborator', (req, res) => {
	res.render('results/collaborator', {});
});

router.get('/decision_maker', (req, res) => {
	res.render('results/decisionMaker', {});
});

router.get('/individualist', (req, res) => {
	res.render('results/individualist', {});
});

router.get('/traveler', (req, res) => {
	res.render('results/traveler', {});
});




module.exports = router;

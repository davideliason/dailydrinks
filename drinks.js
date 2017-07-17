const express = require('express');
const router  = express.Router();

router.get('/',(req,res) => {
	res.send('lots of drinks');
});

router.get('/about', (req,res) => {
	res.send('about drinks');
});

module.exports = router;
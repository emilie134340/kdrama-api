const express = require('express');
const router = express.Router();

router.use('/kdramas', require('./kdramas'))

module.exports = router;
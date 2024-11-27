const express = require('express');
const router = express.Router();

const controller = require('../controller/storiesController');

router.post('/stories', controller.createNewstories);
router.get('/stories', controller.readAllstories);

module.exports = router;
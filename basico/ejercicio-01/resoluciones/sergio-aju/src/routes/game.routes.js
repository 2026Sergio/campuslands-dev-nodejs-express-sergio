const { Router } = require('express');
const gameController = require('../controllers/game.controller');

const router = Router();

router.get('/status', gameController.getStatus);

module.exports = router;
const router = require('express').Router();

const { homeController, aboutController, helpController, errorController } = require('../controllers/controllers');

router.get('/', errorController)
router.get('/home', homeController)
router.get('/about', aboutController)
router.get('/help', helpController)

module.exports = router;
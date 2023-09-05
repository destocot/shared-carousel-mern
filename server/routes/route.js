const { Router } = require('express');
const router = Router();

const { getImages, createImage } = require('../controllers/imageControllers.js');

router.get('/', getImages);
router.post('/', createImage);

module.exports = router;
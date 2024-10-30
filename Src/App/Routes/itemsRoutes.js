const express = require('express');
const itemController = require('../Controller/itemsController');
const uploadMiddleware = require('../../middleware/multer')

const router = express.Router();

router.post('/', uploadMiddleware, itemController.createItem);
router.get('/', itemController.getAllItems);


module.exports = router;

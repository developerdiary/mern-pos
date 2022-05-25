const express = require('express'); 
const { getItemController, addItemController } = require('../controllers/itemController');
const router = express.Router();

//Routes

router.get('/get-items', getItemController);

router.post('/add-item', addItemController);


module.exports = router;
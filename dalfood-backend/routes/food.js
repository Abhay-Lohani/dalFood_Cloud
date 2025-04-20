// const express = require('express');
// const router = express.Router();
// const orderController = require('../controllers/orderController'); // Import controller

// // Define routes
// router.get('/', orderController.getAllFoods);   // Get all food items
// router.post('/', orderController.addFood);      // Add a new food item

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const { getFoodItems, placeOrder } = require('../controllers/orderController');

// // GET food items
// router.get('/', getFoodItems);

// // POST an order
// router.post('/order', placeOrder);

// module.exports = router;


const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.get('/', orderController.getFood);
router.post('/', orderController.createFood);
router.put('/:id', orderController.updateFood);
router.delete('/:id', orderController.deleteFood);

module.exports = router;

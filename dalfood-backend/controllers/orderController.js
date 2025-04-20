// const Food = require('../models/Food'); // Import the Food model

// // Get all food items
// const getAllFoods = async (req, res) => {
//   try {
//     const foods = await Food.find();  // Fetch all foods from the database
//     res.status(200).json(foods);
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching foods', error: err });
//   }
// };

// // Add a new food item
// const addFood = async (req, res) => {
//   const { name, description, price } = req.body;
//   try {
//     const newFood = new Food({ name, description, price });
//     await newFood.save();  // Save the new food item to the database
//     res.status(201).json({ message: 'Food item added successfully', food: newFood });
//   } catch (err) {
//     res.status(500).json({ message: 'Error adding food', error: err });
//   }
// };

// module.exports = { getAllFoods, addFood };


// const foodItems = [
//     { id: 1, name: 'Burger', price: 6.99 },
//     { id: 2, name: 'Pizza', price: 9.99 },
//     { id: 3, name: 'Pasta', price: 7.49 },
//   ];
  
//   let orders = [];
  
//   const getFoodItems = (req, res) => {
//     res.json(foodItems);
//   };
  
//   const placeOrder = (req, res) => {
//     const { items, customerName } = req.body;
  
//     if (!items || !customerName) {
//       return res.status(400).json({ error: 'Missing required order details' });
//     }
  
//     const newOrder = {
//       id: orders.length + 1,
//       items,
//       customerName,
//       time: new Date().toISOString(),
//     };
  
//     orders.push(newOrder);
//     res.status(201).json({ message: 'Order placed successfully', order: newOrder });
//   };
  
//   module.exports = { getFoodItems, placeOrder };
  



// In-memory array to simulate a database
let foodItems = [];

exports.getFood = (req, res) => {
  res.json(foodItems);
};

exports.createFood = (req, res) => {
  const food = req.body;
  food.id = Date.now().toString(); // simple unique ID
  foodItems.push(food);
  res.status(201).json(food);
};

exports.updateFood = (req, res) => {
  const { id } = req.params;
  const updatedFood = req.body;
  foodItems = foodItems.map(item => item.id === id ? { ...item, ...updatedFood } : item);
  res.json({ message: 'Food item updated' });
};

exports.deleteFood = (req, res) => {
  const { id } = req.params;
  foodItems = foodItems.filter(item => item.id !== id);
  res.json({ message: 'Food item deleted' });
};

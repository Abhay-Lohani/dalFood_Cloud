// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const foodRoutes = require('./routes/food'); // Import food routes
// const connectDB = require('./db/config'); // MongoDB connection setup

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json()); // For parsing JSON bodies

// // Connect to MongoDB
// connectDB();

// // Use the food routes
// app.use('/api/food', foodRoutes);

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



// const express = require('express');
// const cors = require('cors');
// const foodRoutes = require('./routes/food');

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(express.json());

// app.use('/api/food', foodRoutes);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


const express = require('express');
const app = express();
const foodRoutes = require('./routes/food');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/api/food', foodRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

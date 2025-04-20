// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     await mongoose.connect('YOUR_MONGODB_CONNECTION_STRING', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected');
//   } catch (err) {
//     console.error('MongoDB connection failed', err);
//     process.exit(1);  // Exit the process if connection fails
//   }
// };

// module.exports = connectDB;


// db/config.js
const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('✅ Connected to AWS RDS MySQL');
});

module.exports = db;

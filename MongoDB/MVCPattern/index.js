const express = require('express');
const connectDB = require('./config/db');
const app = express();
const port = 3000;
const productRoutes = require('./routes/productRoutes');

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

app.get('/', (req, res) => {
  console.log('I am inside home page route');
  res.send('Hello World! Welcome to the home page.');
});

app.use('/api', productRoutes);

app.listen(port, () => {
  console.log(`Product app listening at http://localhost:${port}`);
});
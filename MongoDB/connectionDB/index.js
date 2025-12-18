const express = require('express');
const app = express();
const port = 3000;
const connectDB = require('./db');
const userRoutes = require('./routes/users');


// body parser middleware
app.use(express.json());


// Connect to MongoDB
connectDB();


// use user routes
app.use('/api', userRoutes);

app.get('/', (req, res) => {
  console.log('I am inside home page route');
  res.send('Hello World! Welcome to the home page.');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
const express = require('express')
const app = express()
const port = 3000

app.use(express.json()); // to use middleware(inbuilt) for parsing application/json


// Middleware function to log request details
const loggingMiddleware = (req, res, next) => {
  console.log("Logging user data...");
  next(); // Call next() to pass control to the next middleware or route handler
}

// app.use(loggingMiddleware); // Apply the logging middleware to all routes

const authenticateMiddleware = (req, res, next) => {
    console.log('Authenticating user...');  
    next(); // User is authenticated, proceed to the next middleware or route handler
}

// app.use(authenticateMiddleware);

const validateMiddleware = (req, res, next) => {
    console.log('Validating request data...');  
    res.send("Lets go home!"); // Stop further processing and send response | used middleware to end the request-response cycle
    
    // Data is valid, proceed to the next middleware or route handler
    //next();
}

// app.use(validateMiddleware);

// Route speific middleware usage
const route = require('./routes/route');

// Mount the route-specific middleware at the '/route' path
app.use('/route', route);


app.get('/', (req, res) => {
  console.log("I am route handler");
  console.log(req.body);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


/*
Route specific middleware

*/
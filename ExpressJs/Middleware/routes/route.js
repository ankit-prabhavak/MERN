const express = require('express');
const router = express.Router();

// Route specific middleware function
const authorizeMiddleware = (req, res, next) => {
    console.log('Authorizing user for this route...');

    req.user = { id: 1, name: 'John Doe', role: 'admin' }; // Example user data added to req object

    if(req.user) {
        next(); // User is authorized, proceed to the next middleware or route handler
    } else {
        res.status(403).send('Forbidden: You are not authorized to access this resource.');
    }
}

const isAdminMiddleware = (req, res, next) => {
    console.log('Checking if user is admin...');
    if(req.user && req.user.role === 'admin') {
        next(); // User is admin, proceed to the next middleware or route handler
    } else {
        res.status(403).send('Forbidden: Admins only.');
    }
}

const isGuestMiddleware = (req, res, next) => {
    console.log('Checking if user is guest...');
    if(req.user && req.user.role === 'guest') {
        next(); // User is guest, proceed to the next middleware or route handler
    } else {
        res.status(403).send('Forbidden: Guests only.');
    }
}



// Routes
router.get('/admin', authorizeMiddleware, isAdminMiddleware, (req, res) => {
    res.send('Welcome Admin!');
});

router.get('/guest', authorizeMiddleware, isGuestMiddleware, (req, res) => {
    res.send('Welcome Guest!');
});


module.exports = router;
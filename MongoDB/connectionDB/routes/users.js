const express = require('express');
const router = express.Router();

const User = require('../models/userModel');


// route to get all users
router.get('/users', async (req, res) => {
  try { 
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// route to create a new user
router.post('/users/create', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ success: true, message: 'User created successfully', user: newUser });
  }
    catch (error) {
    res.status(500).json({ success: false, message: error.message });
    }
});

// route to update a user by id
router.put('/users/update/:id', async (req, res) => {
  const {id} = req.params;
  const {name, email, password} = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, {name, email, password}, {new: true});
    if (!updatedUser) {
      return res.status(404).json({success: false, message: 'User not found'});
    }
    res.status(200).json({success: true, message: 'User updated successfully', user: updatedUser});
  } catch (error) {
    res.status(500).json({success: false, message: error.message});
  } 
});

// route to delete a user by id
router.delete('/users/delete/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({success: false, message: 'User not found'});
    }
    
    res.status(200).json({success: true, message: 'User deleted successfully'});
  } catch (error) {
    res.status(500).json({success: false, message: error.message});
  }
});

module.exports = router;
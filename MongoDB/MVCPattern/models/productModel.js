const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 100,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: true,
    maxlength: 50,
  },    
  description: {
    type: String,
    maxlength: 500,
    },
  createdAt: {
    type: Date,
    default: Date.now,
    },
});

const ProductModel = model('Product', productSchema);

module.exports = ProductModel;
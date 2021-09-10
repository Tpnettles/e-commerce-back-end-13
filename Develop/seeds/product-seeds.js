const { Product } = require('../models');

const productData = [
  {
    product_name: 'nike beanie',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'nike vaporMax',
    price: 90.0,
    stock: 25,
    category_id: 2,
  },
  {
    product_name: 'nike jogging suit',
    price: 22.99,
    stock: 12,
    category_id: 3,
  },
  {
    product_name: 'nike socks',
    price: 12.99,
    stock: 50,
    category_id: 4,
  },
  {
    product_name: 'nike graphic t-shirt',
    price: 29.99,
    stock: 22,
    category_id: 5,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;

const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Hat',

  },
  {
    category_name: 'Shoes',
  },
  {
    category_name: 'Outfit',
  },
  {
    category_name: 'Underwear',
  },
  {
    category_name: 'T-shirt',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;

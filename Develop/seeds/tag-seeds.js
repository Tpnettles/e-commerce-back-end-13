const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'beanie',
  },
  {
    tag_name: 'fall_appearal',
  },
  {
    tag_name: 'just do it',
  },
  {
    tag_name: 'grey',
  },
  {
    tag_name: 'black',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'vapor',
  },
  {
    tag_name: 'fresh',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;

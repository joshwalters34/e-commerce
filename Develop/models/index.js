// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',

});

Category.hasMany(Product, {
  foreignKey: 'product_id',
});

Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'products',
  foreignKey: "product_id",
});
// Products belongToMany Tags (through ProductTag)

Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'tags',
  foreignKey: 'tag_id',
});
// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

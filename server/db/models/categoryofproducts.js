'use strict';
module.exports = (sequelize, DataTypes) => {
  const categoryOfProducts = sequelize.define('categoryOfProducts', {
    categoryName: DataTypes.STRING
  });
  
  categoryOfProducts.associate = function(models) {
  };
  return categoryOfProducts;
};
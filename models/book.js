'use strict';
module.exports = (sequelize, DataTypes) => {
  var Book = sequelize.define('Book', {
    id: {type: DataTypes.INTEGER,
    primaryKey: true},
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    genre: DataTypes.STRING,
    first_published: DataTypes.INTEGER
  }, {
    classMethods: {
        associate: function(models) {
            Book.hasMany(models.Loan, {foreignKey: 'book_id'});
        }
    },
    timestamps: false
  });
};

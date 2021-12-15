"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      posts.belongsTo(models.users, {
        foreignKey: {
          name: "iduser",
        },
      });

      posts.hasMany(models.likes, {
        foreignKey: {
          name: "idpost",
        },
      });
      posts.hasMany(models.commentar, {
        as: "commentars",
        foreignKey: {
          name: "idpost",
        },
      });
    }
  }
  posts.init(
    {
      iduser: DataTypes.INTEGER,
      imagepost: DataTypes.STRING,
      caption: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "posts",
    }
  );
  return posts;
};

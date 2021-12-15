"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      likes.belongsTo(models.posts, {
        foreignKey: {
          name: "idpost",
        },
      });
      likes.belongsTo(models.users, {
        foreignKey: {
          name: "iduser",
        },
      });
    }
  }
  likes.init(
    {
      idpost: DataTypes.INTEGER,
      iduser: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "likes",
    }
  );
  return likes;
};

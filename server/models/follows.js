"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class follows extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      follows.belongsTo(models.users, {
        as: "userid",
        foreignKey: {
          name: "iduser",
        },
      });
      follows.belongsTo(models.users, {
        as: "folowing",
        foreignKey: {
          name: "following",
        },
      });
    }
  }
  follows.init(
    {
      iduser: DataTypes.INTEGER,
      following: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "follows",
    }
  );
  return follows;
};

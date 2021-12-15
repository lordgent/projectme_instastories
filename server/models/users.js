"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users.hasMany(models.posts, {
        foreignKey: {
          name: "iduser",
        },
      });

      users.hasMany(models.chat, {
        as: "sender",
        foreignKey: {
          name: "idsender",
        },
      });
      users.hasMany(models.chat, {
        as: "recipient",
        foreignKey: {
          name: "idrecipient",
        },
      });
    }
  }
  users.init(
    {
      fullname: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      imgprofile: DataTypes.STRING,
      gender: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};

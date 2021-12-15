"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class chat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      chat.belongsTo(models.users, {
        as: "sender",
        foreignKey: {
          name: "idsender",
        },
      });

      chat.belongsTo(models.users, {
        as: "recipient",
        foreignKey: {
          name: "idrecipient",
        },
      });
    }
  }
  chat.init(
    {
      idsender: DataTypes.INTEGER,
      idrecipient: DataTypes.INTEGER,
      message: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "chat",
    }
  );
  return chat;
};

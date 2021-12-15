"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class commentar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      commentar.belongsTo(models.posts, {
        foreignKey: {
          name: "idpost",
        },
      });
      commentar.belongsTo(models.users, {
        foreignKey: {
          name: "iduser",
        },
      });
    }
  }
  commentar.init(
    {
      idposts: DataTypes.INTEGER,
      iduser: DataTypes.INTEGER,
      comment: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "commentar",
    }
  );
  return commentar;
};

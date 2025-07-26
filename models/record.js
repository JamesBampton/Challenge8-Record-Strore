const { Model, DataTypes, Sequelize } = require("sequelize");

const sequelize = require("../config/connection");

class Record extends Model {}

Record.init(
  {
    album: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    artist: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    cond: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    genre: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
     year: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "record",
  }
);

// Export Post model
module.exports = Record;
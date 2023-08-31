const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
// const Schema = dbConnect.connectMysql.Schema;

const sequelizeInstance = dbConnect.Sequelize;

class Folder extends Model {}

Folder.init(
// const newFolder = new Schema(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      required: true,
   
    },

    plantIds: {
      type: DataTypes.JSON,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "folder",
    timestamps: true,
  }
);

module.exports = Folder;

const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
// const Schema = dbConnect.connectMysql.Schema;

const sequelizeInstance = dbConnect.Sequelize;

class Folders extends Model {}

Folders.init(
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
      required: [true, "Please add a Folder Title"],
      maxlength: [10, "Title can not be more than 25 characters"],
      minlength: [3, "Title must have atleast three character"],
    },
    folderId: {
      type: DataTypes.JSON,
    },

    plantIds: {
      type: DataTypes.JSON,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "folders",
    timestamps: true,
  }
);

module.exports = Folders;

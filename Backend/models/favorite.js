const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
// const Schema = dbConnect.connectMysql.Schema;

const sequelizeInstance = dbConnect.Sequelize;

class Favorite extends Model {}

Favorite.init(

  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    plantIds: {
      type: DataTypes.JSON,
    },
    
  },
  {
    sequelize: sequelizeInstance,
    modelName: "favorites",
    timestamps: true,
  }
);

module.exports = Favorite;

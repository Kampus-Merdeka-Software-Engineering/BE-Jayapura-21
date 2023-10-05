'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InputData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  InputData.init({
    No_Id: DataTypes.STRING,
    Nama_Pengirim: DataTypes.STRING,
    Email_Pengirim: DataTypes.STRING,
    Alamat_Pengirim: DataTypes.STRING,
    Nama_Penerima: DataTypes.STRING,
    Email_Penerima: DataTypes.STRING,
    Alamat_Penerima: DataTypes.STRING,
    Your_Message: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'InputData',
  });
  return InputData;
};
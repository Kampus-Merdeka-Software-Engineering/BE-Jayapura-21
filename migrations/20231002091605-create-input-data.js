'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('InputData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      No_Id: {
        type: Sequelize.STRING
      },
      Nama_Pengirim: {
        type: Sequelize.STRING
      },
      Email_Pengirim: {
        type: Sequelize.STRING
      },
      Alamat_Pengirim: {
        type: Sequelize.STRING
      },
      Nama_Penerima: {
        type: Sequelize.STRING
      },
      Email_Penerima: {
        type: Sequelize.STRING
      },
      Alamat_Penerima: {
        type: Sequelize.STRING
      },
      Your_Message: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('InputData');
  }
};
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
      username: "Jonathan",
      email: "jonathan@gmail.com",
      password: "password",
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        username: "Ali",
        email: "ali@gmail.com",
        password: "password",
        createdAt: new Date(),
        updatedAt: new Date(),
        }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

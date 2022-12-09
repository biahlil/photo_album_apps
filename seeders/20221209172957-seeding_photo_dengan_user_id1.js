'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Photos', [
    {
    title: "Foto1 Punya User1",
    caption: "Foto ini punya User1",
    image_url: "https://photouser1.com",
    UserId : 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    },
    {
      title: "Foto2 Punya User1",
      caption: "Foto ini punya User1",
      image_url: "https://photouser1.com",
      UserId : 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      },
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

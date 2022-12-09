'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Photos', [
    {
    title: "Foto1 Punya User2",
    caption: "Foto ini punya User2",
    image_url: "https://photouser2.com",
    UserId : 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    },
    {
      title: "Foto2 Punya User2",
      caption: "Foto ini punya User2",
      image_url: "https://photouser2.com",
      UserId : 2,
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

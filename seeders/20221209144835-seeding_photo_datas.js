'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('Photos', [
      {
      title: "Foto Jadul",
      caption: "Waktu foto ini diambil di rumah lama bersama keluarga besar",
      image_url: "https://photojadul.com",
      // userid
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        title: "Foto Lama",
        caption: "Gatau Foto ini diambil dimana",
        image_url: "https://photojadul.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Foto Kenangan",
        caption: "Waktu foto ini diambil sahabat saat masih kuliah",
        image_url: "https://photokenangan.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
      title: "Foto Liburan",
      caption: "Woooooo........................",
      image_url: "https://photoliburan.com",
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        title: "Foto Malming",
        caption: "Jalan kemana nih?",
        image_url: "https://photomalming.com",
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
     await queryInterface.bulkDelete('Photos', null, {});
  }
};

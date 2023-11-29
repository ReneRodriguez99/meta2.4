'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Donadores', [
    {
      PersonaId: 1,
      ProyectoId: 1,
      cantidadDonada: 70,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  
  
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Donadores', null, {});
  }
};

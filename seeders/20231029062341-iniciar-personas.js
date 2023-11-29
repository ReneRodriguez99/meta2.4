'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Personas', [
        {
        rfc: 'AFDN360203JU1',
        nombre: 'Juan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rfc: 'XULT350511WD8',
        nombre: 'Pedro',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
 
    await queryInterface.bulkDelete('Personas', null, {});
     
  }
};
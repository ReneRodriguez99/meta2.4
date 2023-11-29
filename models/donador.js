'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Donadores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Donadores.init({
    
   
    PersonaId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProyectoId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cantidadDonada: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'Donadores',
  });
  return Donadores;
};
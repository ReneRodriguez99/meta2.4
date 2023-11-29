'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      Persona.belongsToMany(models.Proyecto, {
        through: 'Donadores',
        as: 'donadores',
        foreignKey: 'PersonaId',
        otherKey: 'ProyectoId'
        
      });

      Persona.hasMany(models.Proyecto,{
        foreignKey: 'DonatarioId',
        as: 'Proyecto'
      });


    }
  }
  Persona.init({
    
    rfc: {
      type : DataTypes.STRING,
      allowNull: false,
      unique: true

    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }

  
  }, {
    sequelize,
    modelName: 'Persona',
  });



  return Persona;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Proyecto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Proyecto.belongsToMany(models.Persona, {
        through: 'Donadores',
        as: 'donadores',
        foreignKey: 'ProyectoId',
        otherKey: 'PersonaId'
      });
      Proyecto.belongsTo(models.Persona, {
        foreignKey: 'DonatarioId',
        as: 'Donatario'
      });
    }
  }
  Proyecto.init({
    
    idProyecto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true

    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    DonatarioId: {
      type: DataTypes.INTEGER,
      allowNull: false

    }
   
  }, {
    sequelize,
    modelName: 'Proyecto',
  });
  

  return Proyecto;
  
};
let {Model,DataTypes, Deferrable} =require('sequelize');
const sequelize = require('../db/connection');
const { budgetModel } = require('./budget.model');

class resourcesModel extends Model{};

resourcesModel.init( {

    id_presupuesto: {
        type: DataTypes.STRING,
        allowNull: false
    },

    concepto: {

        type: DataTypes.STRING,
        allowNull: false
    },

    mes: {
        type: DataTypes.STRING,
        allowNull:false
    },

    porcentaje: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    costo: {
        type: DataTypes.FLOAT,
        allowNull:false
    }
},
{
    sequelize,
    modelName: 'Rersources',
    tableName: 'RECURSOS',
    timestamps: false,
    createdAt: false,
    updatedAt: false
})

module.exports = resourcesModel;
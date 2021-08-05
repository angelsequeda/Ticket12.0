let {Model,DataTypes} =require('sequelize');
const sequelize = require('../db/connection');
const { budgetModel } = require('./budget.model');

class resourcesModel extends Model{};

resourcesModel.init( {

    id_presupuesto: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: budgetModel,
            key: 'ID_PRESUPUESTO',
            deferrable: Deferrable.INITIALLY_IMMEDIATE  
        }
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
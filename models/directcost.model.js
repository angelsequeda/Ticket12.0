let {Model,DataTypes, Deferrable} =require('sequelize');
const sequelize = require('../db/connection');
const { budgetModel } = require('./budget.model');

class directCostmodel extends Model {};

directCostmodel.init( {

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

    total: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
},
{
    sequelize,
    modelName: 'Directcost',
    tableName: 'COSTOSDIRECTOS',
    timestamps: false,
    createdAt: false,
    updatedAt: false
})

module.exports = directCostmodel;
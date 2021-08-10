let {Model,DataTypes,Deferrable} =require('sequelize');
const sequelize = require('../db/connection');
const { budgetModel } = require('./budget.model');

class admCostmodel extends Model{};

admCostmodel.init( {

    id_presupuesto: {
        type: DataTypes.STRING,
        allowNull: false,

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
    modelName: 'admCost',
    tableName: 'GASTOSADMINISTRATIVOS',
    timestamps: false,
    createdAt: false,
    updatedAt: false
});

admCostmodel.sync();

module.exports = admCostmodel;
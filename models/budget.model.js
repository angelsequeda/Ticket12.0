let {Model,DataTypes} =require('sequelize');
const sequelize = require('../db/connection');

class budgetModel extends Model {};

budgetModel.init( {

    id_presupuesto: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },

    creado_en : {
        type: DataTypes.DATE,
        allowNull: false
    },

    proyecto: {
        type: DataTypes.STRING,
        allowNull: false
    },

    version: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    activo: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {
    sequelize,
    modelName: 'Budget',
    tableName: 'INDEXPRESUPUESTOS',
    timestamps: false,
    createdAt: false,
    updatedAt: false
})

budgetModel.sync();

module.exports = {budgetModel}
const {DataTypes,Model} = require('sequelize');
class userModel extends Model{} ;
const sequelize = require('../db/connection')

userModel.init({

    nombre1: {
        type: DataTypes.STRING,
        allowNull:false
    },

    nombre2: {
        type: DataTypes.STRING,
        allowNull:true
    },

    apellido1: {
        type: DataTypes.STRING,
        allowNull:false
    },

    apellido2: {
        type: DataTypes.STRING,
        allowNull:false
    },

    mail: {
        type: DataTypes.STRING,
        allowNull: false
    },

    username: {
        type: DataTypes.STRING,
        allowNull:false,
        primaryKey: true
    },

    pass_word: {
        type: DataTypes.STRING,
        allowNull:false
    },

    activo : {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'User',
    tableName: 'USUARIOS',
    timestamps: false,
    createdAt: false,
    updatedAt: false
})

userModel.sync();
module.exports = userModel;
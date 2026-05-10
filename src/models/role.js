const { DataTypes } = require('sequelize')


module.exports = (sequelize)=>{
    const Role = sequelize.define('Role',{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },
    {
        tableName : 'roles'
    })
    return Role
}
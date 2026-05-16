const { DataTypes } = require('sequelize')

module.exports = (sequelize)=>{
    const Part = sequelize.define('Part',{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        chapterId:{
            type: DataTypes.INTEGER,
        },
        content:{
            type: DataTypes.STRING,
        }
    },
    {
        tableName : 'part'
    })
    return Part
}
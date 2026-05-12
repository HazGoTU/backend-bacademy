const { DataTypes } = require('sequelize')

module.exports = (sequelize)=>{
    const Part = sequelize.define('Part',{
        id:{
            type: DataTypes.UUID,
            defualtValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        chapterId:{
            type: DataTypes.INTEGER,
            allowNull: false,
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
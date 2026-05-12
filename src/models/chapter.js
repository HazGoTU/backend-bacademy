const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    const Chapter = sequelize.define('Chapter',{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        courseId:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }

    },
    {
        tableName : 'chapter'
    })
    return Chapter  
}
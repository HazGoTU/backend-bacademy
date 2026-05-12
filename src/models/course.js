const { DataTypes } = require('sequelize')

module.exports = (sequelize)=>{
    const Course = sequelize.define('Course',{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title:{
            type: DataTypes.STRING,
            allowNull : false,           
        },
        description:{
            type: DataTypes.STRING,
            allowNull : false
        },
        price:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        image_url:{
            type: DataTypes.STRING
        },
        image_public_id:{
            type: DataTypes.STRING
        },
        categoryId:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: 'courses'
    })

    return Course
}
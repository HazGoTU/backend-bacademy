const {DataTypes} = require('sequelize')
const { sequelize } = require('.')
const payment = require('./payment')

module.exports = (sequelize)=>{
    const Enroll = sequelize.define('Enroll',{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        userId:{
            type: DataTypes.UUID,
            allowNull: false
        },
        courseId:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        paymentId:{
            type: DataTypes.UUID,
            allowNull: true
        },
        status:{
            type: DataTypes.STRING,
        }
    },
    {
        tableName: 'enroll'
    })
    return Enroll
}


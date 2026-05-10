const { DataTypes } = require('sequelize')

module.exports = (sequelize)=>{
    const Payment = sequelize.define('Payment',{
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
        amount:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status:{
            type: DataTypes.STRING,
            allowNull: false
        },
        p_method:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'payments'
    })
    return Payment
}
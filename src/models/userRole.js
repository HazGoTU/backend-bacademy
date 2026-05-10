const { DataTypes } = require('sequelize')


module.exports = (sequelize)=>{
    const UserRole = sequelize.define('UserRole',{
        userId:{
            type: DataTypes.UUID,
            allowNull : false
        },
        roleId:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: 'user_roles'
    })
    return UserRole
}
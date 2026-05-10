const {DataTypes} = require('sequelize')
const bcrypt = require('bcrypt')

module.exports=(sequelize)=>{
    const User = sequelize.define('User',{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        email:{
            type: DataTypes.STRING,
            unique:true,
            allowNull: false
        },
        username:{
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        isVerified:{
            type: DataTypes.BOOLEAN,
            defaultValue:false
        }
    },
    {
        tableName : 'users',
        hooks : {
            beforeCreate: async (user)=>{
                user.password = await bcrypt.hash(user.password,10)
            }
        }
    })
    User.prototype.comparePassword = function (passsword){
        return bcrypt.compare(password,this.password)
    }
    return User
}
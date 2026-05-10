const { Sequelize   } = require('sequelize')
const config = require('../config/config')
const sequelize = new Sequelize(config.database,config.username,config.password,config)

const User = require('./user')(sequelize)
const Role = require('./role')(sequelize)
const Course = require('./course')(sequelize)
const Enroll = require('./enrollment')(sequelize)
const Category = require('./category')(sequelize)
const Payment = require('./payment')(sequelize)
const UserRole = require('./userRole')(sequelize)


//For Table Relation
User.belongsToMany(Role,{
    through: UserRole, foreignKey: 'userId'
})
Role.belongsToMany(User,{
    through: UserRole, foreignKey: 'roleId'
})
//
User.belongsToMany(Course,{
    through: Enroll, foreignKey: 'userId'
})
Course.belongsToMany(User,{
    through : Enroll,foreignKey: 'courseId'
})
//
Payment.hasOne(Enroll,{foreignKey: 'paymentId'})
Enroll.belongsTo(Payment,{foreignKey: 'paymentId'})
// 
Category.hasMany(Course,{foreignKey: 'categoryId'})
Course.belongsTo(Category,{foreignKey: 'categoryId'})



module.exports={
    sequelize,
    User,
    Role,
    Course,
    Enroll,
    Category,
    Payment
}
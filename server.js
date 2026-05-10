const app = require('./src/app')
const {sequelize} = require('./src/models')

const PORT = 3000;

(async()=>{
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log(`database syncronized`)
        app.listen(PORT, ()=>console.log(`server running on port ${PORT}`))
    } catch (error) {
        console.error(`DB connection error`,error)
    }
})();
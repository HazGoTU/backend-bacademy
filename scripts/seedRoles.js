const {sequelize, Role} = require('../src/models');

(    async ()=>{
        await sequelize.sync();
        const roles = ['admin','user','super_admin']
        for (const name of roles){
            await Role.findOrCreate({
                where: {name}
            })
        }
        console.log('Role added')
        process.exit(0)
    }
)();

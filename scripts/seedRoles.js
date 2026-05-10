const {sequelize, Role} = require('../src/models');

(    async ()=>{
        await sequelize.sync();
        const roles = ['admin','user','staff']
        for (const name of roles){
            await Role.findOrCreate({
                where: {name}
            })
        }
        console.log('Role added')
        process.exit(0)
    }
)();


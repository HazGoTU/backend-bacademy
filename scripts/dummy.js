const { where } = require('sequelize');
const {sequelize,Course,Chapter,Part,Category} = require('../src/models')
const fs = require('fs');
(   async () =>{
        await sequelize.sync()
        const data = await JSON.parse(fs.readFileSync('./scripts/dummy.json','utf8'))
        console.log(data[0].course1.chapter.part)
        const categoryId = await Category.findOne({
                where : {id : 1}
            })
        try {
            
        //     const dataCourse = await Course.create({
        //     title : data[0].course1.title,
        //     description : data[0].course1.description,
        //     price : 100,
        //     categoryId : 1
        // })
            // const dataChapter = await Chapter.create({
            //     title : data[0].course1.chapter.title,
            //     courseId : 3
            // }) 
                const dataPart = await Part.create({
                    title : data[0].course1.chapter.part.title,
                    content : data[0].course1.chapter.part.content,
                    chapterId : 1
                })
                console.log("data added")
        process.exit(0)
        } catch (error) {
            console.error(error)
        }
        
}
)();
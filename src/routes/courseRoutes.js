const router = require('express').Router()
const validateBody = require('../middlewares/validateBody')
const courseController = require('../controllers/courseController')
const { route } = require('./authRoutes')

router.post('/settCourse',courseController.createCourse)
router.post('/settChapter/:id',courseController.createChapter)
router.post('/:id/addPart/',courseController.createPart)

//
router.get('/getCourse/:id',courseController.getCourses)
router.get('/getCourses',courseController.getCourses)
router.get('/getChapters',courseController.getChapters)

//
router.put('/:id',courseController.updateCourse)
router.put('/chapter/:id',courseController.updateChapter)
router.put('/chapter/part/:id',courseController.updatePart)

//
router.delete('/:id',courseController.deleteCourse)
// router.delete()
// router.delete()


module.exports = router
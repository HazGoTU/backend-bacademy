const router = require('express').Router();
const authControl = require('../controllers/authControl')
const validateBody = require('../middlewares/validateBody')


router.post('/register',validateBody(['email','username','password']),authControl.register)
router.get('/verify-email', authControl.verifyEmail)
router.post('')
module.exports = router
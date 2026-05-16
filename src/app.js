const express = require('express')
const authRoutes = require('./routes/authRoutes')
const cors = require('cors')
const app = express()
const courseRoutes = require('./routes/courseRoutes')
app.use(cors())
app.use(express.json())


app.use('/api/auth',authRoutes)
app.use('/api/course',courseRoutes)
module.exports = app
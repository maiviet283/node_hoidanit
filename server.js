require('dotenv').config()
const express = require('express')
const app = express()
const configViewEngine = require('./src/config/viewEngine')

const homeRoutes = require('./src/routes/home')
const productRoutes = require('./src/routes/product')
const userRoutes = require('./src/routes/user')

// config req.body
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// port and host name : server web
const port = process.env.PORT
const host_name = process.env.HOST_NAME

// config template engine and static files
configViewEngine(app)

// routes
app.use('/', homeRoutes)
app.use('/products', productRoutes)
app.use('/users', userRoutes)

app.listen(port,host_name, () => {
    console.log(`Example app listening on http://${host_name}:${port}`)
})
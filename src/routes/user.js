const express = require('express')
const router = express.Router()
const {getRegisterUser, getHomePageUsers, 
    getLoginUser, postCreateUser,getUpdateUser,
    postUpdateUser, postDeleteUser
} = require('../controllers/userController')

router.get('/', getHomePageUsers)

router.get('/register', getRegisterUser)
router.post('/register', postCreateUser)

router.get('/login', getLoginUser)

router.get('/update/:id', getUpdateUser)
router.post('/update/:id', postUpdateUser)

router.post('/delete/:id', postDeleteUser)

module.exports = router
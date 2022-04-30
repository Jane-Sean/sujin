const express = require('express')
const router=express.Router()

const user_hander =require('../router_hander/user')

router.post('/register',user_hander.register)

router.post('/login',user_hander.login)

module.exports = router
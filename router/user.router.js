const express = require('express')
const router = express.Router()
const auth = require('../controller/auth')

const controller = require('../controller/user.controller')

router.post('/createUser',controller.createUser)

router.get('/getAllUsers',auth,controller.getAllUsers)

router.get('/getUserById/:id',controller.getUserById)

router.put('/updateUser/:id',controller.updateUser)

router.put('/:Id/borrow/:bookId',controller.borrow)

router.put('/:id/return/:bookId',controller.returnBook)

router.get('/:id/borrowedBooks',controller.borrowedBooks)

router.get('/login',controller.login)

router.delete('/deleteUser',controller.deleteUser)



module.exports = router
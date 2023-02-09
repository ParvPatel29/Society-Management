const {
    createUser,
    createPayment,
    createCar,
    getAll,
    getOne,
    getAllByFlat,
    getAllByCarName,
    getAllByCarNo,
    updateUser,
    deleteFlat,
}=require('./society.controller')
const {verifyToken} = require('../../jwt')
const express = require('express')
const router=express.Router()

router.post('/createUser',verifyToken,createUser)
router.post('/createCar',verifyToken,createCar)
router.post('/createPayment',verifyToken,createPayment)
router.get('/getAll',verifyToken,getAll)
router.get('/getAllByFlat/:id',verifyToken,getAllByFlat)
router.get('/getAllByCarName/:id',verifyToken,getAllByCarName)
router.get('/getAllByCarNo/:id',verifyToken,getAllByCarNo)
router.get('/getOne/:id',verifyToken,getOne)
router.put('/update',verifyToken,updateUser)
router.delete('/delete/:id',verifyToken,deleteFlat)

module.exports=router
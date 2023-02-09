const {
    createUser,
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
router.get('/getAll',verifyToken,getAll)
router.get('/getAllByFlat',verifyToken,getAllByFlat)
router.get('/getAllByCarName',verifyToken,getAllByCarName)
router.get('/getAllByCarNo',verifyToken,getAllByCarNo)
router.get('/getOne/:id',verifyToken,getOne)
router.put('/update',verifyToken,updateUser)
router.delete('/delete/:id',verifyToken,deleteFlat)

module.exports=router
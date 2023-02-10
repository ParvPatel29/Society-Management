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
    deleteFlat,}=require('./society.service')

module.exports={
    createUser:(req,res)=>{
        console.log(req.body)
        const body = req.body
        createUser(body,(error,results)=>{
            if(error){
              return res.json({
                error:error,
                data:"database connection error"
              })
            }
            return res.status(200).json({
                data:results
            })
        })
    },
     createCar:(req,res)=>{
        console.log(req.body)
        const body = req.body
        createCar(body,(error,results)=>{
            if(error){
              return res.json({
                error:error,
                data:"database connection error"
              })
            }
            return res.status(200).json({
                data:results
            })
        })
    },
    createPayment:(req,res)=>{
        console.log(req.body)
        const body = req.body
        createPayment(body,(error,results)=>{
            if(error){
              return res.json({
                error:error,
                data:"database connection error"
              })
            }
            return res.status(200).json({
                data:results
            })
        })
    },
    getAll:(req,res)=>{
      const body = req.body
      getAll(body,(error,results)=>{
         if(error){
              return res.json({
                error:error,
                data:"database connection error"
              })
            }
            return res.status(200).json({
                data:results
            })
      })
    },
    getAllByFlat:(req,res)=>{
      const body = req.params.id
      getAllByFlat(body,(error,results)=>{
         if(error){
              return res.json({
                error:error,
                data:"database connection error"
              })
            }
            return res.status(200).json({
                data:results
            })
      })
    },
    getAllByCarName:(req,res)=>{
      const body = req.params.id
      getAllByCarName(body,(error,results)=>{
         if(error){
              return res.json({
                error:error,
                data:"database connection error"
              })
            }
            return res.status(200).json({
                data:results
            })
      })
    },
    getAllByCarNo:(req,res)=>{
      const body = req.params.id
      getAllByCarNo(body,(error,results)=>{
         if(error){
              return res.json({
                error:error,
                data:"database connection error"
              })
            }
            return res.status(200).json({
                data:results
            })       
      })
    },
    getOne:(req,res)=>{
      const body = req.params.id
      getOne(body,(error,results)=>{
         if(error){
              return res.json({
                error:error,
                data:"database connection error"
              })
            }
            return res.status(200).json({
                data:results
            })
      })
    },
    updateUser:(req,res)=>{
       const body = req.body
       updateUser(body,(error,results)=>{
         if(error){
              return res.json({
                error:error,
                data:"database connection error"
              })
            }
            return res.status(200).json({
                data:results
            })
       })
    },
    deleteFlat:(req,res)=>{
       const body = req.params.id
       deleteFlat(body,(error,results)=>{
         if(error){
              return res.json({
                error:error,
                data:"database connection error"
              })
            }
            return res.status(200).json({
                data:results
            })
       })
    }
}
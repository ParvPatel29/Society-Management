
const {
   User,
   Car,
   Maintenance} = require('../../db_connect')


module.exports={
    createUser: (data,callback)=>{
        User.update({
            UserName : data.username,
            LastName : data.lastname,
            MobileNo:data.mobileno,
            FlatNo:data.flatno
        },
        {
            where:{Email:data.email}
        })
        .then(ans=>{
           callback(null,ans)
        })
        .catch(err=>{
            callback(err)
        })
    },
    createPayment: (data,callback)=>{
        Maintenance.create({
            Email : data.email,
            Month:data.month,
            Amount:data.amount,
            FlatNo:data.flatno
        })
        .then(ans=>{
           callback(null,ans)
        })
        .catch(err=>{
            callback(err)
        })
    },
     createCar: (data,callback)=>{
        Car.create({
            CarName : data.carname,
            CarNo : data.carno,
            FlatNo:data.flatno
        })
        .then(ans=>{
           callback(null,ans)
        })
        .catch(err=>{
            callback(err)
        })
    },
    getAll:(data,callback)=>{
       User.findAll({
        })
        .then(ans=>{
            callback(null,ans)
        })
        .catch(err=>{
            callback(err)
        })
    },
    getAllByFlat:(data,callback)=>{
       User.findAll({
            where:data.flatno
        })
        .then(ans=>{
            callback(null,ans)
        })
        .catch(err=>{
            callback(err)
        })
    },
    getOne:(data,callback)=>{
       User.findAll({
            where:data.email
        })
        .then(ans=>{
            callback(null,ans)
        })
        .catch(err=>{
            callback(err)
        })
    },
    getAllByCarName:(data,callback)=>{
       Car.findAll({
            where:data.carname
        })
        .then(ans=>{
            callback(null,ans)
        })
        .catch(err=>{
            callback(err)
        })
    },
    getAllByCarNo:(data,callback)=>{
       Car.findAll({
            where:data.carno
        })
        .then(ans=>{
            callback(null,ans)
        })
        .catch(err=>{
            callback(err)
        })
    },
    updateUser:(data,callback)=>{
        updates={}
        if(data.username)updates.UserName=data.fname
        if(data.lastname)updates.LastName=data.lname
        if(data.mobileno)updates.MobileNo=data.mobileno
        console.log(updates)

        User.update(updates
        ,{where:{email:data.email}})
        .then(ans=>{
            callback(null,ans)
        })
        .catch(err=>{
            callback(err)
        })
    },
    deleteFlat:(data,callback)=>{
       User.destroy({where:{id:data}})
        .then(ans=>{
            callback(null,ans)
        })
        .catch(err=>{
            callback(err)
        })
    }
} 
const  Sequelize  = require('sequelize');
const sequelize = new Sequelize('Society','root','',{
    host:'localhost',
    dialect:'mysql'
})

const User = sequelize.define('User', {
  Email: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  UserName: {
    type: Sequelize.STRING,
  },
  FlatNo: {
    type: Sequelize.INTEGER,
  },
  MobileNo: {
    type: Sequelize.STRING
  },
  LastName: {
    type: Sequelize.STRING
  },
  Password: {
    type: Sequelize.STRING
  }
});

const Car = sequelize.define('Car', {
  CarName: {
    type: Sequelize.STRING,
  },
  CarNo:{
    type: Sequelize.STRING,
    primaryKey: true
  },
  FlatNo: {
    type: Sequelize.INTEGER,
  }
});

const Maintenance = sequelize.define('Maintenance', {
  Month: {
    type: Sequelize.STRING,
  },
  Email:{
   type: Sequelize.STRING,
  },
  Amount: {
    type: Sequelize.INTEGER
  },
  stripeid:{
    type: Sequelize.STRING
  },
  FlatNo: {
    type: Sequelize.INTEGER,
  }
});

sequelize.sync().then(()=>{
  console.log("Tables created in database successfully")
}).catch(err=>{
    console.log(err)
})
module.exports={
  sequelize,
   User,
   Car,
   Maintenance
}

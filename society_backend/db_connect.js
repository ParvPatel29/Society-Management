const  Sequelize  = require('sequelize');
const sequelize = new Sequelize('Society','root','',{
    host:'localhost',
    dialect:'mysql'
})
 const Flat = sequelize.define('Flat', {
  FlatNo: {
    type: Sequelize.INTEGER,
    primaryKey: true
  }
});

const User = sequelize.define('User', {
  UserName: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  Email: {
    type: Sequelize.STRING
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
    primaryKey: true
  },
  CarNo:{
    type: Sequelize.STRING
  }
});

const Maintenance = sequelize.define('Maintenance', {
  Month: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  Amount: {
    type: Sequelize.INTEGER
  },
  stripeid:{
    type: Sequelize.STRING
  }
});

Flat.hasMany(User, { foreignKey: 'FlatNo', as: 'Residents' });
Flat.hasMany(Car, { foreignKey: 'FlatNo', as: 'Cars' });
Maintenance.belongsTo(Flat, { foreignKey: 'FlatNo' });
Maintenance.belongsTo(User, { foreignKey: 'DueBy' });
User.hasMany(Maintenance, { foreignKey: 'DueBy', as: 'Maintenances' });


sequelize.sync().then(()=>{
  console.log("Tables created in database successfully")
}).catch(err=>{
    console.log(err)
})
module.exports={
   Flat,
   User,
   Car,
   Maintenance
}

//module.exports=User
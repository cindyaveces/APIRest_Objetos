
const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  dialectOptions:{
     ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,

   
  }
});

const db = {};

db.Sequelize = Sequelize;

db.sequelize = sequelize;

const Cliente =require("./cliente.models.js")(sequelize,Sequelize);
const Vehiculo=require("./vehiculo.models.js")(sequelize,Sequelize); ;
const Alquiler= require("./alquileres.models.js")(sequelize,Sequelize);


db.clientes = Cliente;
db.vehiculos =Vehiculo;
db.alquileres = Alquiler;

Cliente.hasMany(Alquiler,{foreignKey:"id_cliente"});
Alquiler.belongsTo(Cliente,{foreignKey:"id_cliente"});

Vehiculo.hasMany(Alquiler,{foreignKey:"id_vehiculo"});
Alquiler.belongsTo(Vehiculo,{foreignKey:"id_vehiculo"});
module.exports = db;
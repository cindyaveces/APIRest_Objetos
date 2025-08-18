
module.exports = (sequelize, Sequelize) => {


    const Vehiculo = sequelize.define("vehiculos", {
        id_vehiculo: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        marca: {
            type: Sequelize.STRING
        },
        modelo: {
            type: Sequelize.STRING,
            unique: true
        },
        anio: {
            type: Sequelize.INTEGER
        },
        tipo: {
            type: Sequelize.STRING
        },
        matricula: {
            type: Sequelize.STRING,
            unique: true 
        },
        disponible: {
            type: Sequelize.BOOLEAN,
            DefaultValue: true 
        },
      
    });
    return Vehiculo;
};
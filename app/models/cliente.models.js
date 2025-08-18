
module.exports = (sequelize, Sequelize) => {


    const Cliente = sequelize.define("clientes", {
        id_cliente: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            unique: true
        },
        telefono: {
            type: Sequelize.STRING
        },
        direccion: {
            type: Sequelize.STRING
        },
        fecha_registro: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW 
        },
      
    });
    return Cliente;
};
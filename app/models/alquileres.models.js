
module.exports = (sequelize, Sequelize) => {


    const Alquiler = sequelize.define("alquileres", {
        id_alquiler: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        id_cliente: {
            type: Sequelize.INTEGER,
            allowNull: false,
             references: {
            model: 'clientes', 
             key: 'id_cliente'
        },     
        },

        id_vehiculo: {
            type: Sequelize.INTEGER,
            allowNull: false,
             references: {
            model: 'vehiculos', 
             key: 'id_vehiculo'
        },     
        },

        fecha_inicio: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW 
        },
        fecha_fin: {
            type: Sequelize.DATE,
        },
        precio_diario: {
            type: Sequelize.DECIMAL(10,2)
        },
        total: {
            type: Sequelize.DECIMAL(10,2),
            allowNull: true
        },
        devuelto: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
      
    });
    return Alquiler;
};
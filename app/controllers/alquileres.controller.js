const db = require("../models");
const Alquileres = db.alquileres;  
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    if (!req.body.id_cliente||!req.body.id_vehiculo||!req.body.precio_diario) {
        res.status(400).send({
            message: "Content can not be empty: idCLiente, idVehiculo, precio!"
        });
        return;
    }

const hoy = new Date();
hoy.setHours(0,0,0,0);
const fechaFin = new Date(req.body.fecha_fin);
fechaFin.setHours(0,0,0,0);
const diferencia = Math.ceil((fechaFin-hoy)/(1000*60*60*24)); 


const total = diferencia*req.body.precio_diario;
    const alquiler = {
    id_cliente: req.body.id_cliente,  
    id_vehiculo: req.body.id_vehiculo,
    fecha_fin: req.body.fecha_fin,
    precio_diario: req.body.precio_diario,
    total : total,
    devuelto: req.body.devuelto,  
    };

    Alquileres.create(alquiler)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Vehiculo."
            });
        });
};


exports.findAll = (req, res) => {
    const FechaFin = req.query.fecha_fin;
    var condition = FechaFin ? { fecha_fin: { [Op.eq]: FechaFin } } : null;

    Alquileres.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Alquileres."
            });
        });
};


exports.findOne = (req, res) => {
    const id = req.params.id;

    Alquileres.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Alquileres with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Alquileres.update(req.body, {
        where: { id_alquiler: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Alquileres was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Alquileres with id=${id}. Maybe Vehiculo was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Vehiculo with id=" + id
            });
        });
};


exports.delete = (req, res) => {
    const id = req.params.id;
    
    Alquileres.destroy({
        where: { id_alquiler: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Alquileres was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Alquileres with id=${id}. El cliente no fue encontado!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tutorial with id=" + id
            });
        });
};


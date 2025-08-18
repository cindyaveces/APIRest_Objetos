const db = require("../models");
const Vehiculo = db.vehiculos;  
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    if (!req.body.marca||!req.body.modelo||!req.body.matricula) {
        res.status(400).send({
            message: "Content can not be empty: marca, modelo, matricula!"
        });
        return;
    }

    const vehiculo = {
        marca: req.body.marca,
        modelo: req.body.modelo,
        anio: req.body.anio,
        tipo: req.body.tipo,
        matricula: req.body.matricula,
        disponible: req.body.disponible,
    };

    Vehiculo.create(vehiculo)
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
    const matricula = req.query.matricula;
    var condition = matricula ? { matricula: { [Op.iLike]: `%${matricula}%` } } : null;

    Vehiculo.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving clients."
            });
        });
};


exports.findOne = (req, res) => {
    const id = req.params.id;

    Vehiculo.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Vehiculo with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Vehiculo.update(req.body, {
        where: { id_vehiculo: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Vehiculo was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Vehiculo with id=${id}. Maybe Vehiculo was not found or req.body is empty!`
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
    
    Vehiculo.destroy({
        where: { id_vehiculo: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Vehiculo was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Vehiculo with id=${id}. El cliente no fue encontado!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tutorial with id=" + id
            });
        });
};


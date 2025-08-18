module.exports = app => {
    const vehiculos = require("../controllers/vehiculo.controller.js");
    var router = require("express").Router();

    router.post("/create/", vehiculos.create);

    router.get("/", vehiculos.findAll);
    
    router.get("/:id", vehiculos.findOne);

    router.put("/update/:id", vehiculos.update);

    router.delete("/delete/:id", vehiculos.delete);

    app.use("/api/vehiculos", router);
};
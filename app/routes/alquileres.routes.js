module.exports = app => {
    const alquileres = require("../controllers/alquileres.controller.js");
    var router = require("express").Router();

    router.post("/create/", alquileres.create);

    router.get("/", alquileres.findAll);
    
    router.get("/:id", alquileres.findOne);

    router.put("/update/:id", alquileres.update);

    router.delete("/delete/:id", alquileres.delete);

    app.use("/api/alquileres", router);
};
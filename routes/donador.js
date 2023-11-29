const express = require('express');
const router = express.Router();
const donador = require("../controladores/donador");
router.get("/", donador.getAll);
router.get("/:id", donador.getById);
router.post("/", donador.add);
router.put("/:id", donador.update);
router.delete("/:id", donador.deleteElement);

module.exports = router;
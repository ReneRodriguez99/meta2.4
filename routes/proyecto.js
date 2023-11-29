const express = require('express');
const router = express.Router();
const proyecto = require("../controladores/proyecto");
router.get("/", proyecto.getAll);
router.get("/:id", proyecto.getById);
router.post("/", proyecto.add);
router.put("/:id", proyecto.update);
router.delete("/:id", proyecto.deleteElement);

module.exports = router;
const express = require('express');
const router = express.Router();
const persona = require("../controladores/persona");

router.get("/", persona.getAll);
router.get("/:id", persona.getById);
router.post("/", persona.add);
router.put("/:id", persona.update);
router.delete("/:id", persona.deleteElement);

module.exports = router;
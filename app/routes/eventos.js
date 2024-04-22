const express  = require("express");
const router = express.Router();
const { getEventos, getEvento, createEvento, updateEvento, deleteEvento } = require("../controllers/eventos");
const { checkOrigin } = require("../middleware/origin");

router.get("/", getEventos);

router.get("/:id", getEvento);

router.post("/", checkOrigin, createEvento);

router.put("/:id", checkOrigin, updateEvento);

router.delete("/:id", deleteEvento);

module.exports = router;
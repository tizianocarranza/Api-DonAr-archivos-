const express  = require("express");
const router = express.Router();
const { getFundaciones, getFundacion, createFundacion, updateFundacion, deleteFundacion } = require("../controllers/fundaciones");
const { checkOrigin } = require("../middleware/origin");

router.get("/", getFundaciones);

router.get("/:id", getFundacion);

router.post("/", checkOrigin, createFundacion);

router.put("/:id", updateFundacion);

router.delete("/:id", deleteFundacion);

module.exports = router;
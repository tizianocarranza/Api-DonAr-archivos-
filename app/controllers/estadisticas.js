const { httpError } = require("../helpers/handleErrors");
const estadisticasModel = require("../models/estadisticas");
const fundacionModel = require("../models/fundaciones");
const eventoModel = require("../models/eventos");

const getEstadisticas = async (req, res) => {
    try {
        const numeroDeFundacionesAsociadas = await fundacionModel.countDocuments();
        const cantidadDeEventosDifundidos = await eventoModel.countDocuments();
        
        const estadisticas = await estadisticasModel.findByIdAndUpdate("6616a3baf2f87c3cf10f7152", {
            numeroDeFundacionesAsociadas,
            cantidadDeEventosDifundidos
        }, { new: true });
        res.send({ estadisticas: estadisticas });

    } catch (error) {
        httpError(res, error);
    }
};

module.exports = { getEstadisticas };
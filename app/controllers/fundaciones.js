const { httpError } = require("../helpers/handleErrors");
const fundacionModel = require("../models/fundaciones");

const getFundaciones = async (req, res) => {
    try {
        const listAll = await fundacionModel.find({})
        res.send({ list: listAll });
    } catch (error) {
        httpError(res, error);
    }
}

const getFundacion = async (req, res) => {
    try {
        const id = req.params.id;
        console.log("Find by id: ", id);
        const findOne = await fundacionModel.findById(id);
        res.send({ document: findOne });
    } catch (error) {
        httpError(res, error);
    }    
}

const createFundacion = async (req, res) => {
    try {
        const 
        { 
            nombre, 
            descripcion, 
            direccion, 
            contacto, 
            logo, 
            necesidadesActuales,
            informacionPago,
            email
        } = req.body; 

        const createOne = await fundacionModel.create({ 
            nombre, 
            descripcion, 
            direccion, 
            contacto, 
            logo, 
            necesidadesActuales,
            informacionPago,
            email
        });

        res.send({ created: createOne });
        
    } catch (error) {
        httpError(res, error);
    }
}


const updateFundacion = async (req, res) => {
    try {
        const id = req.params.id;
        console.log("Update by id: ", id);
        const 
        { 
            nombre, 
            descripcion, 
            direccion, 
            contacto, 
            logo, 
            necesidadesActuales,
            informacionPago,
            email
        } = req.body; 

        const updateOne = await fundacionModel.findByIdAndUpdate(id, { 
            nombre, 
            descripcion, 
            direccion, 
            contacto, 
            logo, 
            necesidadesActuales,
            informacionPago,
            email
        }, { new: true });

        res.send({ updated: updateOne });

    } catch (error) {
        httpError(res, error);
    }
}


const deleteFundacion = async (req, res) => {
    try {
        const id = req.params.id;
        console.log("Delete by id: ", id);
        const deleteOne = await fundacionModel.findByIdAndDelete(id);
        res.send({ deleted: deleteOne });
        
    } catch (error) {
        httpError(res, error);
    }
    
}

module.exports = { getFundaciones, getFundacion, createFundacion, updateFundacion, deleteFundacion }


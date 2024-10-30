const supplierUseCase = require('../Usecases/supplierUsecases');

const createSupplier = async (req, res, next) => {
    try {
        const supplier = await supplierUseCase.createSupplier(req.body);
        res.status(201).json({ success: true, supplier });
    } catch (error) {
        next(error);
    }
};

const getAllSuppliers = async (req, res, next) => {
    try {
        const suppliers = await supplierUseCase.getAllSuppliers();
        res.status(200).json({ success: true, suppliers });
    } catch (error) {
        next(error);
    }
};

const getActiveSuppliers = async (req, res, next) => {
    try {
        const suppliers = await supplierUseCase.getActiveSuppliers();
        res.status(200).json({ success: true, suppliers });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createSupplier,
    getAllSuppliers,
    getActiveSuppliers
}

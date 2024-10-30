const supplierRepository = require('../Repository/supplierRepository');
const generateUniqueNumber = require('./../../Service/GenerateUniqueNumber')
const Supplier = require('../../Models/Suppliers')

const createSupplier = async (data) => {
    try {
        const uniqueSupplierNo = await generateUniqueNumber(Supplier, 'supplierNo');
        const supplierData = {
            ...data, 
            supplierNo: uniqueSupplierNo 
        };
        return await supplierRepository.createSupplier(supplierData);
    } catch (error) {
        console.log( 'Failed to create supplier in use case');
        throw new Error(error.message || 'Failed to create supplier in use case');
    }
};

const getAllSuppliers = async () => {
    try {
        return await supplierRepository.getAllSuppliers();
    } catch (error) {
        console.log( 'Failed to fetch supplier in use case');
        throw new Error(error.message || 'Failed to fetch suppliers in use case');
    }
};

const getActiveSuppliers = async () => {
    try {
        return await supplierRepository.getActiveSuppliers();
    } catch (error) {
        console.log( 'Failed to fetch active supplier in use case');
        throw new Error(error.message || 'Failed to fetch active suppliers in use case');
    }
};

module.exports ={
    createSupplier,
    getAllSuppliers,
    getActiveSuppliers
}

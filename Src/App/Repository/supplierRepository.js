const Supplier = require('./../../Models/Suppliers')

const createSupplier = async (data) => {
    try {
        const supplier = new Supplier(data);
        console.log(data);
        return await supplier.save();
    } catch (error) {
        console.log('Failed to create supplier in repository',error);
        throw new Error(error.message || 'Failed to create supplier in repository');
    }
};

const getAllSuppliers = async () => {
    try {
        return await Supplier.find({});
    } catch (error) {
        console.log('Failed to fetch suppliers from repository',error);
        throw new Error(error.message || 'Failed to fetch suppliers from repository');
    }
};

const getActiveSuppliers = async () => {
    try {
        return await Supplier.find({status:"Active"});
    } catch (error) {
        console.log('Failed to fetch active suppliers from repository',error);
        throw new Error(error.message || 'Failed to active fetch suppliers from repository');
    }
};

const findById = async (id) => {
    try{
        return await Supplier.findById(id);
    }catch (error) {
        console.log('Failed to fetch suppliers from repository using id',error);
        throw new Error(error.message || 'Failed to fetch suppliers from repository using id');
    }
}

module.exports ={
    createSupplier,
    getAllSuppliers,
    getActiveSuppliers,
    findById
}

const Item = require('./../../Models/Items')

const createItem = async (data) => {
    try {
        const item = new Item(data);
        return await item.save();
    } catch (error) {
        console.error("Failed to create item in repository")
        throw new Error(error.message || 'Failed to create item in repository');
    }
};

const getAllItems = async () => {
    try {
        return await Item.find({}).populate('supplier','supplierName');
    } catch (error) {
        console.error("Failed to fetch item in repository")
        throw new Error(error.message || 'Failed to fetch items from repository');
    }
};
const findById = async (id) => {
    try{
        return await Item.findById(id);
    }catch (error) {
        console.log('Failed to fetch item from repository using id',error);
        throw new Error(error.message || 'Failed to fetch item from repository using id');
    }
}


module.exports = {
    createItem,
    getAllItems,
    findById
};

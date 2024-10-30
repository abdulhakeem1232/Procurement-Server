const itemRepository = require('./../Repository/itemsRepository')
const generateUniqueNumber = require('./../../Service/GenerateUniqueNumber')
const Item = require('../../Models/Items')

const createItem = async (data) => {
    try {
        const uniqueItemNo = await generateUniqueNumber(Item, 'itemNo');
        const itemData = {
            ...data, 
            itemNo: uniqueItemNo 
        };
        return await itemRepository.createItem(itemData);
    } catch (error) {
        console.error('Failed to create item in use case');
        throw new Error(error.message || 'Failed to create item in use case');
    }
};

const getAllItems = async () => {
    try {
        return await itemRepository.getAllItems();
    } catch (error) {
        console.error('Failed to fetch item in use case');
        throw new Error(error.message || 'Failed to fetch items in use case');
    }
};

module.exports ={
    createItem,
    getAllItems
}

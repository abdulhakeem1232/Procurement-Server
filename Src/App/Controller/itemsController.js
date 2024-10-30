const itemUseCase = require('./../Usecases/itemUsecases')

const createItem = async (req, res, next) => {
    try {
        console.log('oo');
        
        const images = req.files.map(file => file.path); 
        const data = { ...req.body, itemImages: images };
        const item = await itemUseCase.createItem(data);
        res.status(201).json({ success: true, item });
    } catch (error) {
        console.error('Error in createItem controller:', error.message || error);
        next(error);
    }
};

const getAllItems = async (req, res, next) => {
    try {
        const items = await itemUseCase.getAllItems();
        res.status(200).json({ success: true, items });
    } catch (error) { 
        next(error);
    }
};


module.exports ={
    createItem,
    getAllItems
}

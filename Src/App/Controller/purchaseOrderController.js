const orderUseCase = require('../Usecases/purchaseOrderUsecases');

const createOrder = async (req, res) => {
    try {
        const { supplierId, items } = req.body;
        console.log(supplierId, items,'-cccc',req.body);
        const newOrder = await orderUseCase.createOrder(supplierId, items);
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllOrders = async (req, res) => {
    try {
        const orders = await orderUseCase.getAllOrders();
        res.status(200).json({ success: true, orders });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createOrder,
    getAllOrders
};

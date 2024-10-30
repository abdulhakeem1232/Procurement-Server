const Order = require('../../Models/Purchase');

const create = async (orderData) => {
    try {
        const order = new Order(orderData);
        return await order.save();
    } catch (error) {
        console.log('Failed to create purchase order  from repository',error);
        throw new Error(error.message || 'Failed to create purchase order  from repository');
    }
};

const getAllOrders = async (orderData) => {
    try {
        return await Order.find({});
    } catch (error) {
        console.log('Failed to fetch orders from repository',error);
        throw new Error(error.message || 'Failed to fetch orders from repository');
    }
};

module.exports = {
    create,
    getAllOrders
};

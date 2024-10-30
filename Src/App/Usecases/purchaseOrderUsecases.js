const orderRepository = require('../Repository/purchaseOrderRepository');
const supplierRepository = require('../Repository/supplierRepository');
const itemRepository = require('../Repository/itemsRepository');
const generateUniqueNumber = require('./../../Service/GenerateUniqueNumber')
const Order = require('../../Models/Purchase')


const createOrder = async (supplierId, items) => {
    const supplier = await supplierRepository.findById(supplierId);
    if (!supplier) throw new Error('Supplier not found');

    const orderItems = await Promise.all(items.map(async (item) => {
        const foundItem = await itemRepository.findById(item.itemNo);
        if (!foundItem) throw new Error(`Item not found: ${item.itemNo}`);

        return {
            itemNo: item.itemNo,
            itemName: foundItem.itemName,
            stockUnit: foundItem.stockUnit,
            unitPrice: foundItem.unitPrice,
            packingUnit: item.packingUnit,
            orderQty: item.orderQty,
            itemAmount: item.orderQty * foundItem.unitPrice,
            discount: item.discount || 0,
            netAmount: (item.orderQty * foundItem.unitPrice) - (item.discount || 0),
        };
    }));

    const itemTotal = orderItems.reduce((total, item) => total + item.itemAmount, 0);
    const discount = orderItems.reduce((total, item) => total + item.discount, 0);
    const netAmount = itemTotal - discount;
    const uniqueOrderNo = await generateUniqueNumber(Order, 'orderNo');
console.log(orderItems,'-----------');

    const newOrder = await orderRepository.create({
        supplier: supplierId,
        orderNo:uniqueOrderNo,
        items: orderItems,
        itemTotal,
        discount,
        netAmount,
    });

    return newOrder;
};

const getAllOrders = async () => {
    try {
        return await orderRepository.getAllOrders();
    } catch (error) {
        console.log( 'Failed to fetch oders in use case');
        throw new Error(error.message || 'Failed to fetch oders in use case');
    }
};

module.exports = {
    createOrder,
    getAllOrders
};

const express = require('express');
const supplierController = require('../Controller/supplierController');

const router = express.Router();

router.post('/', supplierController.createSupplier);
router.get('/', supplierController.getAllSuppliers);
router.get('/activeSupplier', supplierController.getActiveSuppliers);



module.exports = router;

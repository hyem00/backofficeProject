const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth-middleware.js');

const StoresController = require('../controllers/stores.controller');
const storesController = new StoresController();

router.get('/', storesController.getStore);
router.post('/', authMiddleware, storesController.createStore);
router.patch('/:storeId', authMiddleware, storesController.updateStore);
router.delete('/:storeId', authMiddleware, storesController.deleteStore);

module.exports = router;

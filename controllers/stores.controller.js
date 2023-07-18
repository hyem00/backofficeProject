const StoresService = require('../services/stores.service');

class StoresController {
  storesService = new StoresService();
  findStores = async (req, res, next) => {
    // 서비스 계층에 구현된 findAllPost 로직을 실행합니다.
    const { status, message, stores } = await this.storesService.findStores();
    res.status(status).json({ message, stores });
  };

  getStore = async (req, res, next) => {
    const { storeId } = req.params;
    const { status, message, stores } = await this.storesService.findStore(
      storeId
    );
    res.status(status).json({ message, stores });
  };

  createStore = async (req, res, next) => {
    const { storename } = req.body;
    const { userId } = res.locals;
    // 서비스 계층에 구현된 createPost 로직을 실행합니다.
    const { status, message } = await this.storesService.createStore(
      userId,
      storename
    );

    res.status(status).json({ message });
  };

  updateStore = async (req, res, next) => {
    const { storeId } = req.params;
    const { storename } = req.body;
    const { userId } = res.locals;
    const { status, message } = await this.storesService.updateStore(
      storeId,
      userId,
      storename
    );
    res.status(status).json({ message });
  };

  deleteStore = async (req, res, next) => {
    const { storeId } = req.params;
    const { userId } = res.locals;
    const { status, message } = await this.storesService.deleteStore(
      storeId,
      userId
    );
    res.status(status).json({ message });
  };
}

module.exports = StoresController;

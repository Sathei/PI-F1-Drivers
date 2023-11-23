const { Router } = require("express");

const { getAllDriversHandler } = require('../handlers/getDriversHandler');
const { getDriversIdHandler } = require("../handlers/getDriversIdHandler");
const { getDriversByNameHandler } = require("../handlers/getDriversByNameHandler");

const router = Router();

router.get('/drivers' , getAllDriversHandler);

router.get('/drivers/name' , getDriversByNameHandler);

router.get('/drivers/:idDriver', getDriversIdHandler);

module.exports = router;

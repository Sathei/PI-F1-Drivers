const { Router } = require("express");

const { getAllDriversHandler } = require('../handlers/getDriversHandler');
const { getDriversIdHandler } = require("../handlers/getDriversIdHandler");
const { getDriversByNameHandler } = require("../handlers/getDriversByNameHandler");
const { getTeamsHandler } = require('../handlers/getTeamsHandler');
const { createDriverHandler } = require("../handlers/createDriverHandler");

const router = Router();

router.get('/drivers' , getAllDriversHandler);

router.get('/drivers/name' , getDriversByNameHandler);

router.get('/drivers/:idDriver', getDriversIdHandler);

router.get('/teams' , getTeamsHandler);

router.post('/drivers' , createDriverHandler);

module.exports = router;

const { getAllDrivers } = require('../controllers/getDriversController');

const getAllDriversHandler = async(req, res) => {
    try {
        const drivers = await getAllDrivers();
        res.status(200).json(drivers);
    } catch (error) {
        console.error(error);
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    getAllDriversHandler
}
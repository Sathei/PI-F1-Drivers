const { getDriversId } = require('../controllers/getDriversIdController');

const getDriversIdHandler = async (req, res) => {
    const { idDriver } = req.params;
    if (!idDriver) {
        return res.status(400).json({ error: "Id is required" });
    }

    try {
        const driver = await getDriversId(idDriver);
        res.status(200).json(driver);
    } catch (error) {
        console.error(error);
        res.status(400).json("There's no driver with that ID");
    }
}

module.exports = {
    getDriversIdHandler
}
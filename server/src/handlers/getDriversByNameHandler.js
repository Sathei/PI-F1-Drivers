const { getDriversByName } = require('../controllers/getDriversByNameController');

const getDriversByNameHandler = async (req,res) => {
    const { name } = req.query;

    if(!name){
        return res.status(400).json({error: "Name is required"});
    }

    try {
        const driverFound = await getDriversByName(name);
        return res.status(200).json(driverFound);
    } catch (error) {
        return res.status(400).json("There's no driver with that name")
    }
}

module.exports = {
    getDriversByNameHandler
}
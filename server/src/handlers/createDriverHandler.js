const { createDriver } = require('../controllers/createDriver');
const { Team } = require('../db');

const createDriverHandler = async (req, res) => {
    try {
        const { name, surname , description , image , nationality , dob, teams} = req.body;

        const newDriver = await createDriver({ name, surname , description , image , nationality , dob, teams});

        if(teams && teams.length > 0) {
            
            const teamsDb = await Team.findAll({
                where: {
                    name: teams
                }
            });
            await newDriver.addTeams(teamsDb);
        }

        return res.status(201).json(newDriver);
        
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}

module.exports = {
    createDriverHandler
}
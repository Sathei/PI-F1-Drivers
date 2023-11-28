const { getTeams } = require('../controllers/getTeams');

const getTeamsHandler = async (req,res) => {
    try {
        const teams = await getTeams();
        
        return res.status(200).json(teams);
    } catch (error) {
        return res.status(400).json({error: error.message});
    }

}

module.exports = {
    getTeamsHandler
}
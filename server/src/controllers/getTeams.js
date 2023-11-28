const axios = require("axios");
const { Team } = require("../db");

const getTeams = async () => {
    try {
        const uniqueTeams = new Set();
        let response = await axios.get("http://localhost:5000/drivers");
        let results = response.data;

        const allTeamsString = results.map((teams) => teams.teams);

        for (const teams of allTeamsString) {
            if (teams) {
                const teamArray = teams.split(",").map((team) => team.trim());

                
                await Promise.all(teamArray.map(async (team) => {
                    uniqueTeams.add(team);

                    await Team.findOrCreate({
                        where: {
                            name: team
                        }
                    });
                }));
            }
        }

        return [...uniqueTeams];
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getTeams
};
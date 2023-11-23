const axios = require('axios');
const { Driver, Team } = require('../db');
const { Sequelize } = require('sequelize');
const URL = 'http://localhost:5000/drivers'

const getDriversId = async (id) => {
    try {
        if(Sequelize.Validator.isUUID(id, '4')){
            const dbDriver = await Driver.findOne({where: {id: id}})
            if(dbDriver) return dbDriver.toJSON();
        }


        const { data } = await axios(`${URL}/${id}`);
        let driverFound = null;

        const driver = {
            id,
            name: data.name.forename,
            surname: data.name.surname,
            nationality: data.nationality,
            image: data.image.url,
            description: data.description,
            dob: data.dob,
            teams: data.teams
        }
        return driver;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getDriversId
}
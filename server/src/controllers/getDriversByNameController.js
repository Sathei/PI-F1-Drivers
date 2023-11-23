const axios = require('axios');
const { Driver, Team } = require('../db');
const { Op } = require('sequelize');
const URL = 'http://localhost:5000/drivers';

const getDriversByName = async (name) => {
    
    const apiResponse = await axios.get(`${URL}`);

    const apiDrivers = apiResponse.data.filter((driver) => 
    driver.name.forename.toLowerCase().includes(name.toLowerCase()) ||
    driver.name.surname.toLowerCase().includes(name.toLowerCase())
    );

    const apiDriversData = apiDrivers.map((driver) => ({
        id: driver.id,
        name: driver.name.forename + ' ' + driver.name.surname,
        nationality: driver.nationality,
    }))


    const dbDrivers = await Driver.findAll({
        where:{
            [Op.or]: [
                { name: { [Op.iLike]: `%${name}%`}},
                { surname: { [Op.iLike]: `%${name}`}},
                { nationality: { [Op.iLike]: `%${name}`}}
            ]

        },
        include: [{model: Team}]
    });

    const allDrivers = [...dbDrivers, ...apiDriversData];
    if(!allDrivers.length) throw Error;


    return allDrivers.slice(0,15);
}


module.exports = {
    getDriversByName
}
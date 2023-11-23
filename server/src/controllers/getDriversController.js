const axios = require('axios');
const { Driver, Team } = require('../db');
const url = 'http://localhost:5000/drivers'

const getDriversApi = async () => {

    const { data }= await axios('http://localhost:5000/drivers');
    const drivers = data.map((driver) => ({
        id: driver.id,
        name: driver.name.forename,
        surname: driver.name.surname,
        description: driver.description,
        image: driver.image.url,
        nationality: driver.nationality,
        dob: driver.dob
    }))
    return drivers;
}



const getAllDrivers = async () => {
    const apiDrivers = await getDriversApi();


    const allDrivers = [...apiDrivers]

    return allDrivers;
}


module.exports = {
    getAllDrivers
}
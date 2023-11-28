const axios = require('axios');
const { Driver, Team } = require('../db');
const url = 'http://localhost:5000/drivers'
const imageDefault = "https://cdn-8.motorsport.com/images/amp/68eyZ1B0/s1000/f1-f1-logo-2017-f1-logo-6693340.webp"

const getDriversApi = async () => {

    const { data }= await axios('http://localhost:5000/drivers');
    
    const drivers = data.map((driver) => ({
        id: driver.id,
        name: driver.name.forename,
        surname: driver.name.surname,
        description: driver.description,
        image: driver.image.url || imageDefault,
        nationality: driver.nationality,
        dob: driver.dob
    }))
    return drivers;
}

const getDriversDb = async () => {
    const dbDrivers = await Driver.findAll({
        include: [Team]
    });

    return dbDrivers.map((driver) => ({
        id: driver.id,
        name: driver.name + ' ' + driver.forename,
        nationality: driver.nationality,
        image: driver.image,
        description: driver.description,
        dob: driver.dob
    }))
}



const getAllDrivers = async () => {
    const apiDrivers = await getDriversApi();
    const dbDrivers = await getDriversDb();

    const allDrivers = [...dbDrivers ,...apiDrivers]

    return allDrivers;
}


module.exports = {
    getAllDrivers
}
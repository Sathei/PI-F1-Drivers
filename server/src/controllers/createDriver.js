const { Driver, Team } = require('../db');

const createDriver = async ({ name, surname , description , image , nationality , dob, teams}) => {
    try {
        if(!image) {
            image = "https://media.formula1.com/image/upload/v1699215893/trackside-images/2023/F1_Grand_Prix_of_Brazil/1776826508.jpg.transform/3col/image.jpg";
        }
        const newDriver = await Driver.create({ name, surname , description , image , nationality , dob, teams});


        return newDriver;
    } catch (error) {
        throw new Error('No se pudo crear el piloto');
    }
}

module.exports = {
    createDriver
}
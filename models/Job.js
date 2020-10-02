const Sequelize = require('sequelize'); /* Nessa situação o sequelize transforma o codigo em js para uma abstração para o banco de dados*/
const db = require('../db/connection');

/* Definição dos campnos contido no banco de dados*/
const Job = db.define('job', {
    title: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    salary: {
        type: Sequelize.STRING,
    },
    company: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    new_job:{
        type: Sequelize.INTEGER,
    }
});

module.exports = Job //Para poder utiliza-lo em outro arquivo é necessário exportar
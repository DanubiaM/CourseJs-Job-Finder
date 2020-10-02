/* O sequelize foi baixado no inicio do projeto. É uma aplicação para utilizar banco relacionais(estilo tabelas do excel) com node */
const Sequelize  =  require('sequelize');


const sequelize = new Sequelize({
    dialect: 'sqlite', //Qual banco ira usar
    storage: './db/app.db' // local onde esta o banco
});

/* Para usar algo que esta fora no app.js faça...*/
module.exports = sequelize;

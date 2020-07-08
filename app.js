const express = require('express');
const app = express();
const PORT  = 3000;
const db = require('./db/connection');

app.listen(PORT, function(){
    console.log(`O Express esta rodando na porta ${PORT}`);
});

//db connection
db.
    authenticate()
    .then(()=>{
        console.log("Conectou ao banco de dados");
    })
    .catch(err =>{
        console.log("Ocorreu um erro ao conectar ao banco", err);
    })
//routes
app.get('/', (req,res) =>{
    res.send('Esta funcionando 3');
});
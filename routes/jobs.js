const express = require('express'); //O express será responsavel pelas rotas
const router = express.Router();
const Job = require('../models/Job');

router.get('/test', (req,res) =>{
    res.send('Esta funcionando');
});

router.get('/add', (req,res)=>{
    res.render('add')
})
//Detalhes da vaga
router.get('/view/:id', (req,res)=> Job.findOne({
     where: {id: req.params.id}
    }).then(job =>{
        res.render('view',{
            job
        });
    }).catch(err => console.log(err))
);
//form da rota de envio

// Para adicionar um job, usa-se add (devido ser uma aplicação RESTFul)
router.post('/add', (req,res) =>{       /* req = requisição, res = resposta*/

let {title, company, salary, description, email, new_job} = req.body;

//inserção
Job.create({      //create: metodo do sequelize para inserção de dados no banco
    title,
    description,
    salary,
    email,
    company,
    new_job


})  
    .then(() => res.redirect('/')) //Então, após a inserção bem sucedida, ele redireciona para a home
    .catch(err => console.log(err));

});

module.exports = router
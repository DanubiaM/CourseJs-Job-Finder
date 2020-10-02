const express           = require('express');
const exphbs            =require('express-handlebars');
const app               = express();
const path              =require('path')
const db                = require('./db/connection'); // realizado a 'conexão' com o banco de dados
const bodyParser        = require('body-parser');
const Job               = require('./models/Job');
const Sequelize         = require('sequelize');
const Op                = Sequelize.Op;
const PORT = 3000;

app.listen(PORT, function(){
    console.log(`O Express esta rodando na porta ${PORT}.`);
});
//body parser
app.use(bodyParser.urlencoded({extended: false})); //Estou dizendo que irei utiliza-lo

//handle bars
app.set('views', path.join(__dirname, 'views')); // definido direto das views, onde fica as templades
app.engine('handlebars', exphbs({defaultLayout: 'main'})); //arquivo principal do layout principal
app.set('view engine', 'handlebars');

//static folder
app.use(express.static(path.join(__dirname, 'public')));
//db connection
db
    .authenticate()   // retorna uma promess 
    .then(() =>{     //logo se bem sucedido 
    console.log("Sucessful connection to db!");
    })
    .catch(err => {
        console.log("Connecion Error: ",err);
    });

//routes
app.get('/', (req,res) =>{
    let search = req.query.job;
    let query = '%'+search+'%'; //PH ->PHP, WORD -> WORDPRESS, PRESS->WORDPRESS
    
    if(!search){
        Job.findAll({order:[
            ['createdAt','DESC']
        ]})
        .then(jobs =>{
            res.render('index',{
                jobs
            });
        })
        .catch(err => console.log(err));
        
    }else{
        Job.findAll({
            where:{title: {[Op.like]: query}},
            order:[
            ['createdAt','DESC']
        ]})
        .then(jobs =>{
            res.render('index',{
                jobs,search
            });

        })
        .catch(err => console.log(err));
    }
    
});

//routes job
app.use('/jobs', require('./routes/jobs'));
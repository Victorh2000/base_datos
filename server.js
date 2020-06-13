// importamos express sqlite3 body-parser sequelize method-override
// express.js es el framework para node.js
// sqlite3 es para el de base de datos en SQL
// sequielize es un ORM para node.js Object-Relational Mapping
// para conectar a diferentes base de datos mysql, sqlite, postgres, mssql
// methodOverride  es un modulo de nodejs para usar verbos como PUT or DELETE 
const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const methodOverride = require('method-override');
const session = require('express-session');


const app = express();

const tasksRoutes = require('./routes/tasks_routes');
const registrationRoutes = require('./routes/registrations_routes');
const sessionsRoutes = require('./routes/sessions_routes');
const findUserMiddleware = require('./middlewares/find_user');


app.use(bodyParser.urlencoded({extended: true}));

app.use(methodOverride('_method'));
app.set('view engine','pug');

app.use(session({
  secret :[';lkpqouerpoiqw;mzvn13785751034sdfhlesuqweryzf','mjggswhcvkhterwuxbncvcjhs647352874jdbvd'],
  saveUninitialized: false,
  resave: false
}));

app.use(findUserMiddleware);
app.use(tasksRoutes);
app.use(registrationRoutes);
app.use(sessionsRoutes);

app.get('/',function(req,res){
  //res.json(req.user)
  res.render('home',{usuario: req.user});
})





app.listen(3000);





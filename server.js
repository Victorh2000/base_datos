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

const app = express();

const tasksRoutes = require('./routes/tasks_routes');
const registrationRoutes = require('./routes/registrations_routes');


//const tasks = require('./controllers/tasks');


app.use(bodyParser.urlencoded({extended: true}));

app.use(methodOverride('_method'));
app.set('view engine','pug');

app.use(tasksRoutes);
app.use(registrationRoutes);





app.listen(3000);





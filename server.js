const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const methodOverride = require('method-override');

const app = express();

const tasksRoutes = require('./routes/tasks_routes');

//const tasks = require('./controllers/tasks');


app.use(bodyParser.urlencoded({extended: true}));

app.use(methodOverride('_method'));
app.set('view engine','pug');

app.use(tasksRoutes);




app.listen(3000);





//CONFIGARACION DE END POINT

require('dotenv').config();//Para leer archivo donetv

const express = require ('express');
const morgan = require ('morgan');

//initializations
const app = express();
require('./database')

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/tasks',require('./routes/tasks.routes'))

//settings
app.set('port', 3000);

//starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));

});
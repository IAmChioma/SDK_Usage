
require('dotenv').config();
const express = require('express');
const routes = require('./routes/movie.route')
const app = express();

const port = parseInt(process.env.PORT_NUMBER);
const error404 = parseInt(process.env.STATUS_NOT_FOUND);
const error404Message = process.env.STATUS_NOT_FOUND_MESSAGE;


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(function(req,res, next){
    console.log(req.method, req.url);
    next();
});



app.use('/movie',routes);

app.use('*',function(req,res){
    res.status(error404).send(error404Message)
});


app.listen(port, ()=>{
    console.log(process.env.START_DEBUG_MESSAGE)
});

module.exports = app


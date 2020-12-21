//엄격한 코드 검사
'use strict';
/************* include library **************/
var express = require('express');
var server  = express();
var path    = require('path');
var axios   = require('axios');
var cron    = require('node-cron');

/************* view engine setup **************/
server.set('views', path.join(__dirname, '/web'));
server.set('view engine', 'ejs');
server.engine('html', require('ejs').renderFile);

server.use(express.static(__dirname + '/node_modules/startbootstrap-sb-admin-2'))

/************* Routing **************/
cron.schedule('*/1 * * * *', ()=>{
    
    
    console.log('매 1, 2, 3, 4, 5분마다 실행');
        var sensorType = 'T';
        var sensorValue = 20;
        var userId = '20133744'

        axios.get('http://localhost:3000/api/insSensor?sensorType='+ sensorType +'&sensorValue='+sensorValue+'&userId='+userId).then((Response)=>{
        
        }).catch((Error)=>{
            console.log(Error);
        });
 });



/************* Routing **************/
//client Index
server.get('/list.ejs', (req, res, next) => {
/*
    axios.get('http://192.168.10.230:3000/api').then((Response)=>{

        var arrData = {
            "data" : Response.data
        }
        res.render("list.ejs", arrData);

    }).catch((Error)=>{
        console.log(Error);
    })
*/
});

module.exports = server;



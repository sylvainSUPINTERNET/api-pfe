'use strict';

/* server dependencies */
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

/* DB */
const mongoose = require('mongoose');


/* MODELS & CONTROLLERS */
const User = require('./models/User.model');
const Profile = require('./models/Profile.model')
const UserCtrl = require('./controllers/user/User.controller');



/* JWT */
const jwt = require('jsonwebtoken');
const sha256 = require('sha256');


// =======================
// configuration DB =========
// =======================
const config = require('./config/config');

/* server instanciate and config router */
const api = express();

api.use(cookieParser()); // cookie manager

//db connection
api.set('superSecret', config.secret); // secret variable  //variable environnement app.get('superSecret');
mongoose.connect(config.database,  { useMongoClient: true }); // connect to database

//get params / body on route /api/*
api.use(bodyParser.urlencoded({extended: false}));
api.use(bodyParser.json());

// DEBUG for console
api.use(morgan('dev'));




//routes API

//REGISTRATION
api.post('/api/user/register', function(req,res){
    UserCtrl.addUser(req,res);
});

api.get('/api/user/logout', function(req,res){
    UserCtrl.logoutUser(req,res);
});

api.post('/api/user/login', function(req,res){
    UserCtrl.loginUser(req,res);
});

/* ______________________________________________________ */

/* User */
api.post('/api/user/list', function(req,res){
    UserCtrl.listUser(req,res);
});
/* ______________________________________________________ */








//run
let port = process.env.PORT || 8080; // used to create, sign, and verify tokens
api.listen(port);
console.log('API run at http://localhost:' + port);
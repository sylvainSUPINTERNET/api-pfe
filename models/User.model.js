/**
 * Created by SYLVAIN on 03/11/2017.
 */
'use strict';


// get an instance of mongoose and mongoose.Schema
const mongoose = require('mongoose');

const ObjectId  = mongoose.Schema.Types.ObjectId; //permet de creer un champ qui sera un d'objectId de custommer par exemple


mongoose.Promise = global.Promise;


const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    salt: String,
    email: String,
    date_registration: Date,
    role: String, //ROLE_USER  /  ROLE_ADMIN / ROLE_SUPER_ADMIN
    profiles: [
        {
            type: ObjectId,
            ref: 'Profile'
        }
    ]
});

module.exports = mongoose.model('User', userSchema);




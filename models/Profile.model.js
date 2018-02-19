'use strict';

// get an instance of mongoose and mongoose.Schema
const mongoose = require('mongoose');

// set up a mongoose model and pass it using module.exports
mongoose.Promise = global.Promise;

const ObjectId  = mongoose.Schema.Types.ObjectId; //permet de creer un champ qui sera un d'objectId de custommer par exemple


const profileSchema = new mongoose.Schema({
    description: String,
    user: { // simple relation
        type: ObjectId,
        ref: 'User'
    },
    date_registration: Date
});

module.exports = mongoose.model('Profile', profileSchema);



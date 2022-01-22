//1-require mongoose to create the schema
const mongoose = require('mongoose')

const Schema = mongoose.Schema
const Contact = new Schema({
    entreprise: {
        type: String,
    },
    secteur: {
        type: String,
    },
    tel: {
        type: Number,
        required: true,
    },
    gouvernorat: {
        type: String,
        
    },
    mail: {
        type: String,
       
    },
    fax: {
        type: Number
       
    },
    adresse: {
        type: String,
       
    }
})

module.exports = mongoose.model('Contact', Contact)
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const playerschema = new Schema({
    name: {
        type: String
    },
    position: {
        type: String
    },
    team: {
        type: String
    },
    age: {
        type: Number
    },
    phone: {
        type: String
    }
})
const Player = mongoose.model('player', playerschema)
module.exports = Player
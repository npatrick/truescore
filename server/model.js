var mongoose = require('mongoose');

var trueScoreSchema = mongoose.Schema({
    fbId: String,
    token: String,
    name: String,
    minifbPhoto: String,
    bigfbPhoto: String,
    email: String,
    promptHistory: [{ prompt: String, wins: Number, losses: Number}]
});

module.exports = mongoose.model('ItemOfJudgement', trueScoreSchema);

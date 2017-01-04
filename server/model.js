var mongoose = require('mongoose');

// ============ db setup ==============//
var trueScoreSchema = mongoose.Schema({
    name: String,
    imageUrl: String,
    promptHistory: [
                    {
                      prompt: String,
                      wins: Number,
                      losses: Number
                    }
                  ]
});

module.exports = mongoose.model('ItemOfJudgement', trueScoreSchema);

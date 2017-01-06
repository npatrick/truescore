var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// ============ db setup ==============//
var trueScoreSchema = mongoose.Schema({

    authentication: {
                      local            : {
                          email        : String,
                          password     : String,
                      },
                      facebook         : {
                          id           : String,
                          token        : String,
                          name         : String
                      },
                      instagram        : {
                          id           : String,
                          token        : String,
                          name         : String
                      }
                    },
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

// methods ======================
// generating a hash
trueScoreSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
trueScoreSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};


module.exports = mongoose.model('ItemOfJudgement', trueScoreSchema);

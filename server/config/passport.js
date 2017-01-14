// Copyright <2017> <Michael Thelen, Bartek Rigngwelski, Niel Romana, Nikshala Velayutham>

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



var FacebookStrategy = require('passport-facebook').Strategy;
var db = require ('../sql/db/db_index.js');

// load auth variablers for facebook
var configAuth = require ('./keys');

module.exports = function (passport){

 //serialize User
  passport.serializeUser(function(user, done){
    done(null, user.id);
  });

//deserialize User
  passport.deserializeUser(function(id, done) {
    db.User.find({
      where: {
        id: id
      }
    }).then(function(user) {
      if (!user) return done(new Error('Invalid user'));
      return done(null, user);
    });
  });

  passport.use(new FacebookStrategy({
    clientID: configAuth.facebookAuth.clientID,
    clientSecret: configAuth.facebookAuth.clientSecret,
    callbackURL: configAuth.facebookAuth.callbackURL,
    profileFields: ['id', 'displayName', 'photos', 'email']
  },
  function(token, tokenSecret, profile, done) {
      db.User.findOrCreate({
        where: {
          fbId: profile.id // sets user facebook id
          // token: token, // save token that facebooks sends us
          // name: profile.displayName, // name of user set to facbook name
          // minifbPhoto: profile.photos[0].value,// sets user facebook id
          // bigfbPhoto: `http://graph.facebook.com/${profile.id}/picture?type:large`,
          // email: profile.emails[0].value// sets user facebook id
        }
      }).spread(function(user) {
        return done(null, user);
      });
    }));

};

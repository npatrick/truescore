
var FacebookStrategy = require('passport-facebook').Strategy;
var db = require ('../sql/db/db_index.js');


// load auth variablers for facebook
var configAuth = require ('./keys');

module.exports = function (passport){

  console.log("heyyyyyyyy");

 //serialize User
  passport.serializeUser(function(user, done){
    done(null, user.id);
  });

//deserialize User
  passport.deserializeUser(function(id, done){
    Model.findById(id, function(err, user){
      done(err, user);
    });
  });



  passport.use(new FacebookStrategy({

    clientID: configAuth.facebookAuth.clientID,
    clientSecret: configAuth.facebookAuth.clientSecret,
    callbackURL: configAuth.facebookAuth.callbackURL,
    profileFields: ['id', 'displayName', 'photos', 'email']
  },

  function(token, refreshToken, profile, done){
    // console.log("token", token);
    // console.log("refreshToken", refreshToken);
    // console.log("profile", profile);

    process.nextTick(function(){






      db.User.create({
        userId: userid,
        promptId: promptid,
        winnerId: winner,
        loserId: loser
      })


      Model.findOne({'user_id' : profile.id}, function (err, user){
        if (err){
          return done(err);
        }

        if (user){
          return done(null, user); // returns that user if foune
        } else {
          var newUser = new Model();

          //add attributes to model

          newUser.fbId = profile.id; // sets user facebook id
          newUser.token = token; // save token that facebooks sends us
          newUser.name = profile.displayName; // name of user set to facbook name
          newUser.minifbPhoto = profile.photos[0].value;// sets user facebook id
          newUser.bigfbPhoto = `http://graph.facebook.com/${profile.id}/picture?type=large`;
          newUser.email = profile.emails[0].value;// sets user facebook id

          console.log("new user", newUser);

          newUser.save (function(err){
            if(err){
              throw err;
            }
            return done (null, newUser);
            });
          }
        });
      });
    }
  ));
};

// <!-- configuring the strategies for passport -->

// local strategy
var LocalStrategy = require('passport-local').Strategy;

//facebook Strategy
var FacebookStrategy = require('passport-facebook').Strategy;


//instagram Strategy
var InstagramStrategy = require('passport-instagram').Strategy;



var Model = require ('../model.js');


// load auth variablers for facebook
var configAuth = require ('./auth');


module.exports = function (passport){

 //serialize User
  passport.serializeUser(function(user, done){
    done(null, user.id);
  });


  //deserialize User

  passport.deserializeUser(function(id,done){
    Model.findById(id, function(err, user){
      done(err, user);
    });
  });

// CODE FOR LOCAL LOGIN =====================================

  // local signup
    passport.use('local-signup', new LocalStrategy ({
      //uses username and password by default

      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },

    function(req, email, password, done){

      process.nextTick(function(){
        Model.findOne({'local.email' : email}, function(err, user){
          if (err) return done(err);


          if (user){
            return done(null, false, req.flash('signupMessage', "that email already exists bro"));
          } else {
            var newUser = new Model();

            newUser.authentication.local.email = email;
            newUser.authentication.local.password = newUser.generateHash(password);
            newUser.save(function (err){
              if (err){
                throw err;
              }
                return done(null, newUser);
            });

          }
        });


      });
    }
  ));


  //local login

  passport.use('local-login', new LocalStrategy ({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },

  function(req, email, password, done){

    Model.findOne({'authentication.local.email': email}, function(err, user){

      if (!user){
        return done (null, false, req.flash("loginMessage", "no user"));
      }

      if (!user.validPassword(password)){
        return done(null, false, req.flash('loginMessage', 'get ouf here russia'));
      }

      return done(null, user);

    });
  }
));


  // CODE FOR FB LOGIN =====================================

  passport.use(new FacebookStrategy({
    clientID: configAuth.facebookAuth.clientID,
    clientSecret: configAuth.facebookAuth.clientSecret,
    callbackURL: configAuth.facebookAuth.callbackURL
  },


  function(token, refreshToken, profile, done){
    process.nextTick(function(){
      Model.findOne({'authentication.facebook.id' : profile.id}, function (err, user){
        if (err){
          return done(err);
        }

        if (user){
          return done(null, user); // returns that user if foune
        } else {
          var newUser = new Model();
          console.log("new User", newUser);


          newUser.authentication.facebook.id = profile.id;

          // newUser.facebook.id = profile.id; // sets user facebook id
          // newUser.facebook.token = token; // save token that facebooks sends us
          // newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName; // name of user set to facbook name
          //newUser.facebook.email = profile.emails[0].value; // returns first email


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



// CODE FOR INSTAGRAM LOGIN =====================================

passport.use(new InstagramStrategy({
  clientID: configAuth.instagramAuth.clientID,
  clientSecret: configAuth.instagramAuth.clientSecret,
  callbackURL: configAuth.instagramAuth.callbackURL
},


function(token, refreshToken, profile, done){
  process.nextTick(function(){
    Model.findOne({'authentication.instagram.id' : profile.id}, function (err, user){
      if (err){
        return done(err);
      }

      if (user){
        return done(null, user); // returns that user if foune
      } else {
        var newUser = new Model();

        newUser.authentication.instagram.id = profile.id; // sets user facebook id
        newUser.authentication.instagram.token = token; // save token that facebooks sends us
        //newUser.instagram.name = profile.name.givenName + ' ' + profile.name.familyName; // name of user set to facbook name
        //newUser.facebook.email = profile.emails[0].value; // returns first email


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

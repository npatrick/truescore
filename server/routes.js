module.exports = function (app, passport){



//logout
  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/#');
  });

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/#game',
    failureRedirect: '/#login'
  }));

  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/#game',
    failureRedirect: '/#login',
    failureFlash : 'true'
  }));

// FB LOGIN ROUTES ====================================


app.get('/auth/facebook', passport.authenticate('facebook', {scope: 'email'}));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/#game',
    failureRedirect: '/#login'
  }));


  app.get('/logout', function (req, res){
    req.logout();
    res.redirect('/#');
  });


// Instaggram LOGIN ROUTES ====================================


app.get('/auth/instagram', passport.authenticate('instagram')); //look into this for instagram

app.get('/auth/instagram/callback',
  passport.authenticate('instagram', {
    successRedirect: '/#game',
    failureRedirect: '/#login'
  }));


  app.get('/logout', function (req, res){
    req.logout();
    res.redirect('/#');
  });


//UNIVERSAL

//check if logged in
  function isLoggedIn (req, res, next){

  // if user is authenticated, sounds good and move to next step
  if ( req.isAuthenticated() ) {
    return next();
  }

  // if not, then redirect to homepage

  res.redirect('/');
}

};

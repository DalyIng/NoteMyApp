const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        //EXISTS
        return done(null, existingUser);
      }
      //DOES NOT EXISTS
      const user = await new User({
        googleId: profile.id,
        givenName: profile.name.givenName,
        familyName: profile.name.familyName,
        mail: profile.emails[0].value,
        imageUrl: profile.photos[0].value
      }).save();
      done(null, user);
    }
  )
);

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Seller = require('../models/sellerModel');
const sellerModel = require('../models/sellerModel');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/seller/google/callback"
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      const existingSeller = await sellerModel.findOne({ email: profile.emails[0].value });

      if (existingSeller) {
        return done(null, existingSeller);
      }

      const newSeller = await sellerModel.create({
        email: profile.emails[0].value,
        name: profile.displayName,
        password: "google-oauth", // or leave null if using Google only
        method: 'google',
        status: 'active' 
      });

      done(null, newSeller);
    } catch (err) {
      done(err, null);
    }
  }
));

passport.serializeUser((seller, done) => {
  done(null, seller.id);
});

passport.deserializeUser(async (id, done) => {
  const seller = await sellerModel.findById(id);
  done(null, seller);
});

const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    console.log(jwt_payload);
    console.log(jwt_payload.nombre);
    if (jwt_payload.nombre == "Rene") {
        return done(null, jwt_payload.nombre);
    }
    else {
        return done(null, false);
    }
}));

module.exports = passport;
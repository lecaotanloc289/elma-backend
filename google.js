const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

passport.use(
    new GoogleStrategy(
        {
            clientID:
                '828618632738-v9slmd06oc8va0huhmu63oslc3ks7cnn.apps.googleusercontent.com',
            clientSecret: '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',
            callbackURL: '/google/callback',
            passReqToCallback: true,
        },
        (req, accessToken, refreshToken, profile, done) => {
            // hanle logic login
            console.log(req)
            console.log(accessToken)
            console.log(refreshToken)
            console.log(profile)
            done(null, profile)
        },
    ),
)

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})

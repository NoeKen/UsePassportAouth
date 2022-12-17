const express = require('express');
const router = express.Router();
router.get('/',(req, res, next)=>{
    res.status(200).json({request:'Success'})
})

// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['profile'] }));

// app.get('/auth/google/callback', 
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });
module.exports = router;
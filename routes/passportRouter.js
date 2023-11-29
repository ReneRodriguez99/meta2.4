const express = require('express');
const router = express.Router();
const miPassport = require('../passport.js')


router.get('/', miPassport.authenticate('jwt',{session: false}),(req,res) => {
  res.end("Hola Usuario Autenticado");
});

module.exports = router;
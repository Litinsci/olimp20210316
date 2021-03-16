var express = require('express');
const mysql = require("mysql");
const knex = require("../module/db");
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const mail = req.session.mail;
  let resulst = await knex.select("*").from('user').where('email',mail);
  res.render('index',{userInfo:resulst});
});

module.exports = router;

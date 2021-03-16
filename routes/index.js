var express = require('express');
const mysql = require("mysql");
const knex = require("../module/db");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/regis', async function(req, res, next) {
  const {mail,series,number,lastName,firstName,patronymic,password,telephone} = req.body;
  console.log(mail);
  // let result = await knex.select("*").from('user').where('email',mail);
  await knex("user").insert({
    surname: lastName,
    name:firstName,
    patronymic:patronymic,
    email:mail,
    password:password,
    telephone:telephone,
    series:series,
    number:number
});
  res.status(200).send();
});

router.post('/login', async function(req, res, next) {
  const {mail,password} = req.body;
  // console.log(mail);
  const [user] = await knex.select("*").from('user').where('email',mail);

  if (user && password == user.password) {
    req.session.nameUser = "user";
    req.session.mail = mail;
    res.status(200).end();
} else {
    res.status(400).end();
}
});

module.exports = router;

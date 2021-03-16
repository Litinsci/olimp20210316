var express = require('express');
const mysql = require("mysql");
const knex = require("../module/db");
var router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const mail = req.session.mail;
  let resulst = await knex.select("*").from('user').where('email', mail);
  res.render('index', {
    userInfo: resulst
  });
});

router.post('/calc', async function (req, res, next) {
  const {
    cred,
    sroc,
    aim,
    email,
    zp
  } = req.body;

  let rate = await knex("credit").where('name', aim).select("interest_rate");
  let plat = cred * (Number(rate[0].interest_rate) / 100 / 12 + (Number(rate[0].interest_rate) / 100 / 12 / ((1 + Number(rate[0].interest_rate) / 100 / 12) * sroc - 1)));
  let id = await knex("credit").where('name', aim).select("id");
  await knex("application").insert({
    id_user:email,
    sum:cred,
    deadline:sroc,
    profit:zp,
    aim:aim,
    id_credit: id[0].id
  })
  res.status(200).send({
    status: 200,
    plat: Math.ceil(plat)
  });
});

router.post('/user', async function (req, res, next) {
  // let email = req.params.email;
  const {
    cred,
    sroc,
    aim,
    email,
  } = req.body;
  console.log(email);
  const [app] = await knex.select("*").from('application').where('id_user', email);
  let rate = await knex("credit").where('name', aim).select("interest_rate");
  let plat = cred * (Number(rate[0].interest_rate) / 100 / 12 + (Number(rate[0].interest_rate) / 100 / 12 / ((1 + Number(rate[0].interest_rate) / 100 / 12) * sroc - 1)));
  console.log(app);
  if (app.profit >= (plat + 12130 * 1.5)) {
    await knex("application").update({
      status: 0
    }).where('id_credit', app.id);
   
  } else {
    await knex("application").update({
      status: 1
    }).where('id_credit', app.id);
    
  }
})
router.get('/user:email', async function (req, res, next) {
  let email = req.params.email;
  const [app] = await knex.select("*").from('application').where('id_user', email);
  let result = await knex("application").select("*").where('id', app.id);

res.render('application', {
  userInfo: result
});
})


module.exports = router;
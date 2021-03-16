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
    aim
  } = req.body;

  let rate = await knex("credit").where('name', aim).select("interest_rate");
  let plat = cred * (Number(rate[0].interest_rate) / 100 / 12 + (Number(rate[0].interest_rate) / 100 / 12 / ((1 + Number(rate[0].interest_rate) / 100 / 12) * sroc - 1)));
  res.status(200).send({
    status: 200,
    plat: Math.ceil(plat)
  });
});

router.get('/user', async function (req, res, next) {
  const [app] = await knex.select("*").from('application').where('id_user', id);
  if (app.profit <= (plat + 12130 * 1.5)) {
    await knex("application").update.where('id', app.id)({
      status: 0
    });
    
  } else {
    await knex("application").update.where('id', app.id)({
      status: 1
    })
  }
})

module.exports = router;
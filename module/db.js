const knex = require("knex")({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'rfrjqnjjxtymdf;ysgfhjkm',
      database : 'mydb',
      insecureAuth : true
    }
  });

module.exports = knex;

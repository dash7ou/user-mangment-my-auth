/* eslint-disable no-console */

// users-model.js - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.

module.exports = function(app) {
  const db = app.get("knexClient");
  const tableName = "users";

  db.schema.hasTable(tableName).then(exists => {
    //create users table if table is not there
    if (!exists) {
      // create schema when create users
      db.schema
        .createTable(tableName, table => {
          table.increments("id").primary();
          table.string("email").unique();
          table.string("password");
          table.string("age");
          table.string("address");
          table.string("userType");
          table.boolean("isAccept");
          table.boolean("block");
          table.timestamps(true, true);
        })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e));
    }
  });

  return db;
};

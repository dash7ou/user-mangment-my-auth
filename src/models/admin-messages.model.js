/* eslint-disable no-console */

// admin-messages-model.js - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function(app) {
  const db = app.get("knexClient");
  const tableName = "admin_messages";
  db.schema.hasTable(tableName).then(exists => {
    if (!exists) {
      db.schema
        .createTable(tableName, table => {
          table.increments("id").primary();
          table.string("text");
          table
            .integer("message_to_user_id")
            .unsigned()
            .references("id")
            .inTable("users")
            .index();
        })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e));
    }
  });

  return db;
};

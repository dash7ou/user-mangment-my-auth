exports.up = function(knex) {
  //create admin-messages table in database
  return knex.schema.createTable("admin_messages", table => {
    table.increments("id").primary();
    table.string("text").notNullable();
    table
      .integer("message_to_user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .index();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("admin_messages");
};

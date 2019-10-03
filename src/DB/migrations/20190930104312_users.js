exports.up = function(knex) {
  //create users table in data base
  return knex.schema.createTable("users", table => {
    table.increments("id").primary();
    table
      .string("email")
      .unique()
      .notNullable();
    table.string("password").notNullable();
    table.string("age").notNullable();
    table.string("address");
    table.string("userType").notNullable();
    table.boolean("isAccept").defaultTo(true);
    table.boolean("block").defaultTo(false);
    table.timestamps(true, true);
  });
};
exports.down = function(knex) {
  return knex.schema.dropTable("users");
};

// Update with your config settings.

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: "localhost",
      port: "3306",
      user: "root",
      password: "mohammed12345***",
      database: "first_project_unitone"
    },
    migrations: {
      directory: __dirname + "/src/DB/migrations"
    },
    seeds: {
      directory: __dirname + "/src/DB/seeds"
    }
  }
};

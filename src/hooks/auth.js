// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
const jwt = require("jsonwebtoken");
const knex = require("knex");

module.exports = (options = {}) => {
  return async context => {
    const { params, app } = context; //get params and app

    if (!context.arguments.length === 1) {
      //here i mean in update because only  get in update length of argument === 1 but update 3  and get and find 2
      return context;
    }

    const clint = app.get("mysql"); //use app to get information connect to database

    const db = knex(clint); //connect to database

    const authorization = params.headers.authorization; //get auth from header
    const { secret } = app.get("authentication");

    const { id } = jwt.verify(authorization, secret); //get user id

    // const user = await app.service("users").get(+id);
    const user = await db("users").where({ id: +id });

    context = {
      ...context,
      isAuthentication: true,
      params: {
        ...params,
        user: user[0]
      }
    };

    return context;
  };
};

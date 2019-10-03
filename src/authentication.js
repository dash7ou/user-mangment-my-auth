const hashPassword = require("bcryptjs");
const jwt = require("jsonwebtoken");

const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "localhost",
    port: "3306",
    user: "root",
    password: "mohammed12345***",
    database: "first_project_unitone"
  }
});

module.exports = app => {
  app.use("/login", async (req, res, next) => {
    const { email, password } = req.body; //get email and password login
    if (!email || !password) {
      //check email and password login
      res.status(400).send({
        Error: "there are require felid misssing"
      });
    }
    try {
      const user = await knex("users").where("email", email); //get user by his email
      const isOwner = await hashPassword.compare(password, user[0].password); //compare hashing password
      if (!isOwner) {
        //check is owner
        res.status(400).send({
          Error: "check email or password"
        });
      }
      const token = jwt.sign(
        //create the token to login
        {
          id: user[0].id.toString()
        },
        "mohammedmohammedscert"
      );

      delete user[0].password; //delete password from object to return it to user

      res.status(200).send({
        //return login to user
        token,
        user: user[0]
      });
    } catch (err) {
      res.send({
        err
      });
    }
  });
};

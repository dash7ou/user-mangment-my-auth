const hashPassword = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
      const userDB = await app.service("users").find({ query: { email } }); //get user by his email
      const user = userDB.data[0];
      const isOwner = await hashPassword.compare(password, user.password); //compare hashing password
      if (!isOwner) {
        //check is owner
        res.status(400).send({
          Error: "check email or password"
        });
      }
      const token = jwt.sign(
        //create the token to login
        {
          id: user.id.toString()
        },
        "mohammedmohammedscert"
      );

      delete user.password; //delete password from object to return it to user

      res.status(200).send({
        //return login to user
        token,
        user: user
      });
    } catch (err) {
      console.log(err);
      res.send({
        err
      });
    }
  });
};

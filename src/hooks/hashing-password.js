// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
const hashPassword = require("bcryptjs");
module.exports = (options = {}) => {
  return async context => {
    const { data, method } = context; //get method and data
    if (method === "create") {
      //check method
      const { password } = data; //get password from data
      const passwordHashed = await hashPassword.hash(password, 9); //hashing password
      context = {
        ...context,
        data: {
          ...data,
          password: passwordHashed //edit password to hashing password
        }
      };
      return context;
    } else if (method === "update") {
      // check
      if (!data.password) {
        //check if no password
        return context;
      }
      const { password } = data; //get password from data send
      const passwordHashed = await hashPassword.hash(password, 9); //hash
      context = {
        ...context,
        data: {
          ...data,
          password: passwordHashed //edit password
        }
      };
      return context;
    }
  };
};

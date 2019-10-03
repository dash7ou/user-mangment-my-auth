// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    //get data send from request
    const { data } = context;
    //get only data we need
    const { email, password, age } = data; //check data not undefined
    if (!email || !password || !age) {
      throw new Error("There are felid required missing");
    }

    //send data and add permissions to user to send to database
    const newContext = {
      ...context,
      data: {
        ...data,
        email,
        password,
        age,
        userType: "user",
        isAccept: false,
        block: false
      }
    };
    return newContext;
  };
};

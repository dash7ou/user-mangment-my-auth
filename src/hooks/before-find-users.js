// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    if (context.arguments.length === 1) {
      //here i mean in update because only  get in update length of argument === 1 but update 3  and get and find 2
      return context;
    }
    //get all data for user
    const userData = context.params.user;
    //get his userType
    const { userType } = userData;
    if (userType === "user") {
      throw new Error("you havent permision to access here"); //if he not admin throw error
    } else if (userType === "admin") {
      return context; // if he admin he can show all users
    }
  };
};

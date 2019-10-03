// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    // const userData = await context.params.user;
    const { params, app } = context;

    const userData = { ...params.user }; //get data user

    const { userType, isAccept, block } = userData; //get the al permissions for user to check it

    if (userType === "user") {
      if (!isAccept) {
        //check if admin accept him in our site
        throw new Error(
          "Wait when admin accept you to be able to user our service"
        );
      }
      if (block) {
        //check if user blocked by admin
        throw new Error("admin block you you can connect with him");
      }
      const { id } = { ...userData }; //get user id
      if (+context.id !== +id) {
        //check if id in url the same id in auth
        throw new Error("you are not the owner");
      }
      return context; // return the user
    } else if (userType === "admin") {
      return context; //admin can show any user with out any check
    }
  };
};

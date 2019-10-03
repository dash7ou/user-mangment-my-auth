// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const { id, params } = context; // params to get user data and id from url

    const userData = params.user; //get all data for this user

    const { userType, isAccept, block, id: userId } = userData; //get all permission for user to check it

    if (userType === "user") {
      if (+id !== +userId) {
        //get id from auth and compare it with user id we will delete it
        throw new Error("You are not owner");
      }
      if (!isAccept) {
        //check if admin accept him
        throw new Error(
          "Wait when admin accpet you to be able to user our service"
        );
      }
      if (block) {
        //check if user blocked by admin
        throw new Error("admin block you can connect with him");
      }
      return context; //delete user
    } else if (userType === "admin") {
      if (id == 1) {
        //cant delete the main admin
        throw new Error("you cant delete owner of server");
      }
      return context; //admin can delete any user without check
    }
  };
};

// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    // eslint-disable-next-line no-shadow-restricted-names
    const { params } = context;

    const { userType } = params.user;
    if (userType === "user") {
      throw new Error("you have not the permission to send messages");
    }
    const dataFromAdmin = { ...context.arguments[0] };
    if (!dataFromAdmin.text || !dataFromAdmin.message_to_user_id) {
      throw new Error("you have to Enter require feild");
    }
    return context;
  };
};

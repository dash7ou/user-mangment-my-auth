// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars

const Joi = require("@hapi/joi");

module.exports = (options = {}) => {
  return async context => {
    const dataFromAdmin = { ...context.arguments[0] };
    const schema = Joi.object({
      text: Joi.string()
        .required()
        .min(5)
        .max(200),
      message_to_user_id: Joi.number().required()
    });
    const { error } = schema.validate(dataFromAdmin);
    if (error) {
      throw new Error(error);
    }
    return context;
  };
};

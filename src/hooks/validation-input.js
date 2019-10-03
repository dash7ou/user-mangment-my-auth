// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
// eslint-disable-next-line no-unused-vars

const Joi = require("@hapi/joi");
module.exports = (options = {}) => {
  return async context => {
    const { data, method } = context;
    if (method === "create") {
      const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required(),
        age: Joi.string().required(),
        address: Joi.string()
          .min(5)
          .max(50),
        userType: Joi.string(),
        isAccept: Joi.boolean(),
        block: Joi.boolean()
      });
      const { error } = schema.validate(data);
      if (error) {
        throw new Error(error);
      }
      return context;
    }
    if (method === "update") {
      const schema = Joi.object({
        age: Joi.string(),
        address: Joi.string()
          .min(5)
          .max(50),
        userType: Joi.string(),
        isAccept: Joi.boolean(),
        block: Joi.boolean()
      });
      const { error } = schema.validate(data);
      if (error) {
        throw new Error(error);
      }
      return context;
    }
  };
};

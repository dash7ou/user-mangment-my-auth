const { Service } = require("feathers-knex");

exports.Users = class Users extends Service {
  create(data, params) {
    return super.create(data, params);
  }
  update(id, data, params) {
    return super.update(id, data, params);
  }
  delete(id, params) {
    return super.delete(id, params);
  }
  async find(params) {
    return super.find(params);
  }
  async get(params) {
    return super.get(params);
  }
};

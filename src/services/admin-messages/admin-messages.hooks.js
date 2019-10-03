const { authenticate } = require("@feathersjs/authentication").hooks;

const beforeCreateMessages = require("../../hooks/before-create-messages");

const checkValidationMessages = require("../../hooks/check-validation-messages");

const auth = require("../../hooks/auth");

module.exports = {
  before: {
    all: [auth()],
    find: [],
    get: [],
    create: [checkValidationMessages(), beforeCreateMessages()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};

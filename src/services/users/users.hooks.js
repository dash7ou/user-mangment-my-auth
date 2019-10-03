// const { authenticate } = require("@feathersjs/authentication").hooks;

const { protect } = require("@feathersjs/authentication-local").hooks;

const beforeCreateUser = require("../../hooks/before-create-user");

const beforeUpdateUsers = require("../../hooks/before-update-users");

const beforeDeleteUsers = require("../../hooks/before-delete-users");

const beforeFindUsers = require("../../hooks/before-find-users");

const validationInput = require("../../hooks/validation-input");

const beforeFindAnyUser = require("../../hooks/before-find-any-user");

const hashingPassword = require("../../hooks/hashing-password");

const auth = require("../../hooks/auth");

module.exports = {
  before: {
    all: [],
    find: [auth(), beforeFindUsers()],
    get: [auth(), beforeFindAnyUser()],
    create: [hashingPassword(), validationInput(), beforeCreateUser()],
    update: [hashingPassword(), validationInput(), auth(), beforeUpdateUsers()],
    patch: [hashingPassword(), auth()],
    remove: [auth(), beforeDeleteUsers()]
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect("password")
    ],
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

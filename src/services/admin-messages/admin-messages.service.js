// Initializes the `admin-messages` service on path `/admin-messages`
const { AdminMessages } = require("./admin-messages.class");
const createModel = require("../../models/admin-messages.model");
const hooks = require("./admin-messages.hooks");

module.exports = function(app) {
  const Model = createModel(app);
  const paginate = app.get("paginate");

  const options = {
    name: "admin_messages",
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use("/admin-messages", new AdminMessages(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("admin-messages");

  service.hooks(hooks);
};

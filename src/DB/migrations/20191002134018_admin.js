const hashPassword = require("bcryptjs");

//create admin to our server
exports.up = async function(knex) {
  const adminPassword = await hashPassword.hash("mohammed", 9);
  return knex("users").insert({
    id: 1,
    email: "mohammed@mohammed.com",
    password: adminPassword,
    age: "20",
    address: "gaza, zourob street",
    userType: "admin",
    isAccept: true,
    block: false
  });
};

exports.down = function(knex) {
  return;
};

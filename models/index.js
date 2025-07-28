// import all models
const Record = require("./record");
const User = require("./user");

User.hasMany(Record, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Record.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = {
  Record,
  User,
};

// import all models
const Record = require("./record");
const User = require("./user");

User.hasMany(Record, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Record.belongsTo(User, {
  foreignKey: "userId",
});

module.exports = {
  Record,
  User,
};

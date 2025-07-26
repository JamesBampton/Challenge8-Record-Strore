// Import required packages
const sequelize = require("../config/connection");

// import models
const { Record } = require("../models");

// add data and seeding for Category model

// import seed data
const postData = require("./records.json");

// Seed database
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Record.bulkCreate(postData);

  process.exit(0);
};

// Call seedDatabase function
seedDatabase();

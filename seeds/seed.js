// Import required packages
const sequelize = require("../config/connection");

// import models
const { Record } = require("../models");

// add data and seeding for Records and User model

// import seed data for records
const postData = require("./records.json");

// Seed database
const seedDatabase = async () => {
  await Record.sync({ force: true }); // changed sequelize to focus on the Rercod table to avid deleteing data from the user table
  // await sequelize.sync({ force: true });


  await Record.bulkCreate(postData);

  process.exit(0);
};

// Call seedDatabase function
seedDatabase();

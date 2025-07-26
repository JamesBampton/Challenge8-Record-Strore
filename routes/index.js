const router = require("express").Router();

const recordRoutes = require("./record");
const userRoutes = require("./user");

// create a default route for /api
router.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

router.use("/api/records", recordRoutes);
router.use("/api/users", userRoutes);

module.exports = router;

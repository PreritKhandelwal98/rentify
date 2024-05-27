const router = require("express").Router()
const Listing = require("../models/Listing")

router.get("/:userId/properties", async (req, res) => {
  try {
    const { userId } = req.params;
    const properties = await Listing.find({ creator: userId }).populate("creator");

    // Check if properties are found
    if (properties.length === 0) {
      return res.status(404).json({ message: "Properties not found for the specified user." });
    }

    res.status(200).json(properties);
  } catch (err) {
    console.error("Error fetching properties:", err);
    res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = router;

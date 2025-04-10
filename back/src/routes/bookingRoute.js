const express = require("express");
const router = express.Router();
const {
    registerForEvent,
    getUserRegistrations,
    unregisterFromEvent,
} = require("../controllers/bookingController");

router.post("/", registerForEvent);

router.get("/:userId", getUserRegistrations);

router.delete("/", unregisterFromEvent);

module.exports = router;
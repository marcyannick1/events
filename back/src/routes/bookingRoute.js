const express = require("express");
const router = express.Router();
const {
    registerForEvent,
    getUserRegistrations,
    unregisterFromEvent,
} = require("../controllers/bookingController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, registerForEvent);

router.get("/:userId", authMiddleware, getUserRegistrations);

router.delete("/", authMiddleware, unregisterFromEvent);

module.exports = router;
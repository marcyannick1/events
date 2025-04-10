const express = require("express");
const router = express.Router();
const {
    createEvent,
    getAllEvents,
    getEventById,
    updateEvent,
    deleteEvent,
} = require("../controllers/eventController");

// CREATE
router.post("/", createEvent);

// READ ALL
router.get("/", getAllEvents);

// READ ONE
router.get("/:id", getEventById);

// UPDATE
router.put("/:id", updateEvent);

// DELETE
router.delete("/:id", deleteEvent);

module.exports = router;
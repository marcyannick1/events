const express = require("express");
const router = express.Router();
const {
    createEvent,
    getAllEvents,
    getEventById,
    updateEvent,
    deleteEvent,
} = require("../controllers/eventController");
const authMiddleware = require("../middlewares/authMiddleware");

// CREATE
router.post("/", authMiddleware, createEvent);

// READ ALL
router.get("/", authMiddleware, getAllEvents);

// READ ONE
router.get("/:id", authMiddleware, getEventById);

// UPDATE
router.put("/:id", authMiddleware, updateEvent);

// DELETE
router.delete("/:id", authMiddleware, deleteEvent);

module.exports = router;
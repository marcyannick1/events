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
const isAdminMiddleware = require("../middlewares/isAdminMiddleware");

// CREATE
router.post("/", authMiddleware, isAdminMiddleware, createEvent);

// READ ALL
router.get("/", authMiddleware, getAllEvents);

// READ ONE
router.get("/:id", authMiddleware, getEventById);

// UPDATE
router.put("/:id", authMiddleware, isAdminMiddleware, updateEvent);

// DELETE
router.delete("/:id", authMiddleware, isAdminMiddleware, deleteEvent);

module.exports = router;
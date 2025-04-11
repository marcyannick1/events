const express = require('express');
const {createUser, updateUser, getUserById, deleteUser, getAllUsers} = require('../controllers/userController');
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post('/', createUser);
router.get('/:id', authMiddleware, getUserById);
router.put('/:id', authMiddleware, updateUser);
router.delete('/:id', authMiddleware, deleteUser);
router.get('/', authMiddleware, getAllUsers);

module.exports = router;
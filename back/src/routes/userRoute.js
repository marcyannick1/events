const express = require('express');
const {createUser, updateUser, getUserById, deleteUser, getAllUsers} = require('../controllers/userController');

const router = express.Router();

router.post('/', createUser);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/', getAllUsers);

module.exports = router;
const { Router } = require('express');
const router = Router();

const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/index.controller');

router.get('/course/list', getUsers);
router.get('/course/:id', getUserById);
router.post('/course/save', createUser);
router.put('/course/:id', updateUser)
router.delete('/course/:id', deleteUser);

module.exports = router;
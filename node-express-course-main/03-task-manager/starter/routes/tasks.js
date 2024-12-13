const express = require('express');
const router = express.Router();
const { asyncGetTask, asyncGetAllTasks, asyncCreateTask, asyncDeleteTask, asyncUpdateTask } = require('../controllers/tasks');

router.route('/').get(asyncGetAllTasks).post(asyncCreateTask);
router.route('/:id').get(asyncGetTask).patch(asyncUpdateTask).delete(asyncDeleteTask);

module.exports = router;
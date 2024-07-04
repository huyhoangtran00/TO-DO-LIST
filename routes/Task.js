const express = require('express')
const router = express.Router()

const {getAllTasks, createTask, deleteTask, updateTask} =  require('../controller/Tasks')


router.route('/').get(getAllTasks).post(createTask).post(deleteTask)
// router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)
// router.route('/del/:id').post(deleteTask)
router.route('/:id').delete(deleteTask).patch(updateTask)
module.exports = router
  
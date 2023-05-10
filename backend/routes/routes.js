import express from 'express'
const router = express.Router()
import { createTask, updateTask,  deleteTask, getTask  } from '../controllers/task.controller.js'

router.get('/', getTask)
router.post('/create', createTask)
router.put('/update/:id', updateTask)
router.delete('/delete/:id', deleteTask)

export default router
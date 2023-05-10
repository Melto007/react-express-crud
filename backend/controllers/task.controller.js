import taskModel from '../models/task.schema.js'
import CustomError from '../utils/CustomError.js'
import asyncHandler from '../services/asyncHandler.js'

/******************************************
* @createTask
* @method POST
* @route http://localhost:4000/create
* @description create task
* @parameters task
* @return success message
******************************************/
export const createTask = asyncHandler(async (req, res) => {
    const { task } = req.body

    if(!task) {
        throw new CustomError("Task field is required", 400)
    }

    const createTask = await taskModel.create({
        task
    })

    res.status(200).json({
        success: true,
        message: "create function",
        createTask
    })
})

/******************************************
* @updateTask
* @method POST
* @route http://localhost:4000/update
* @description update task
* @parameters task, taskId
* @return success message
******************************************/
export const updateTask = asyncHandler(async (req, res) => {
    const { task } =  req.body
    const { id } = req.params

    const taskExists = await taskModel.findById({ _id: id })

    if(taskExists) {
        const update = await taskModel.findByIdAndUpdate(
            id,
            {
                task: task
            },
            {
                new: true,
                runValidators: true
            }
        )

        res.status(200).json({
            success: true,
            message: 'Updated successfully',
            update
        })
    }    
})

/******************************************
* @deleteTask
* @method delete
* @route http://localhost:4000/delete
* @description delete task
* @parameters id
* @return success message
******************************************/
export const deleteTask = asyncHandler(async(req, res) => {
    const { id } = req.params

    const task = await taskModel.findById({ _id: id })
   
    if(task) {
        const deleteTask = await taskModel.findByIdAndDelete({ _id: id })

        res.status(200).json({
            success: true,
            message: "Deleted successfully",
            deleteTask
        })
    }
})

/******************************************
* @getTask
* @method get
* @route http://localhost:4000/
* @description get task
* @parameters -
* @return success message, taskJson
******************************************/
export const getTask = asyncHandler(async(_req, res) => {
    const task = await taskModel.find()

    res.status(200).json({
        success: true,
        task
    })
})
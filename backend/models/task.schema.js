import mongoose from 'mongoose'

const taskSchema = mongoose.Schema(
    {
        task: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true
    }
)
export default mongoose.model('Task', taskSchema)
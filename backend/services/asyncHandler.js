function asyncHandler(fn) {
    return async function(req, res, next) {
        try {
            await fn(req, res, next)
        } catch (error) {
            res.status(error.code || 400).json({
                success: false,
                message: error.message
            })
        }
    }
}
export default asyncHandler
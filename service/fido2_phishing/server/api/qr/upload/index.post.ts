import multer from 'multer'
import {
    callNodeListener, createError, defineEventHandler
} from 'h3'


export default defineEventHandler(async(event) => {
    try {
        let originalFileName = ''
        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, 'public/images')
            },
            filename: (req, file, cbd) => {
                originalFileName = file.originalname
                console.log('filename originalFileName: ' + originalFileName)
                cbd(null, file.originalname)
            }
        })

        const upload = multer({
            storage: storage,
            fileFilter: (req, file, cb) => {
                console.log('fileFilter file.mimetype: ' + file.mimetype)
                if (file.mimetype == "image/png" || file.mimetype == "image/jpeg") {
                    cb(null, true)
                } else {
                    cb(new Error('Invalid file type'))
                }
            }
        })

        await callNodeListener(upload.single('file'), event.node.req, event.node.res)

        const path = `/images/${originalFileName}`
        return { 'message': path }
    } catch (error) {
        console.log(error)
        return createError({
            message: error.message,
            statusCode: 500,
            statusMessage: 'Something went wrong.'
        })
    }
})

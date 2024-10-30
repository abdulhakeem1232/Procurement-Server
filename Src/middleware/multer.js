const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../Config/cloudinary'); 

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'items',
        allowed_formats: ['jpg', 'png', 'jpeg'],
    },
});


const upload = multer({ storage: storage }).array('itemImages', 5);

const uploadMiddleware = (req, res, next) => {
    upload(req, res, (err) => {
        if (err) {
            console.error('Multer error:', err);
            return res.status(400).json({ success: false, message: 'File upload failed', error: err.message });
        }
        next();
    });
};

module.exports = uploadMiddleware;

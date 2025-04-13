const multer = require("multer");

const storage = multer.memoryStorage(); // If you're uploading to Cloudinary or using buffers
const upload = multer({ storage });

module.exports = upload;
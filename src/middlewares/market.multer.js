const multer = require ("multer");

const storage = multer.diskStorage({
    destination:"src/upload",
    filename:( req,file,cd )=>{
        cd(null,`${Date.now()}-${file.originalname}`)
    }
});

const upload = multer({storage});

const singleUpload = upload.single("file");

module.exports = singleUpload;

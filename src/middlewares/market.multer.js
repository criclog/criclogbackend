const multer = require ("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cd) {
        cd(null, path.join(__dirname,"/upload"))// Change this to '/tmp' for writable access
      },
    filename:( req,file,cd )=>{
        cd(null,`${Date.now()}-${file.originalname}`)
    }
});

const upload = multer({storage});

const singleUpload = upload.single("file");

module.exports = singleUpload;

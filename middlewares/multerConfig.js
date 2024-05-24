import multer from "multer";
export const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
// validate file type
const fileFilter = (req, file, cb) => {
  const fileTypes = ["image/jpeg", "image/png", "image/jpeg", "image/gif"];
  if (fileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    return cb(new Error("Invalid file Type. File must be jpg,png and Gif"));
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 1024 * 1024 * 2 }, //2Mb size limits
});
export default upload;

const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
exports.uploadData = (image) => {
  cloudinary.config({
    cloud_name: "dtujegrtj",
    api_key: "524365815556334",
    api_secret: "joUukRTVRxoBMSIVhINh63mAWsA",
  });

  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: "imageposts",
    },
  });

  const fileFilter = function (req, file, cb) {
    if (file.fieldname === image) {
      if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = "Only image files are allowed!";
        return cb(new Error("Only image files are allowed!"), false);
      }
    }
    cb(null, true);
  };

  const sizeInMB = 50;
  const maxSize = sizeInMB * 1000 * 1000;

  const upload = multer({
    storage,
    fileFilter,
    limits: {
      fileSize: maxSize,
    },
  }).fields([
    {
      name: image,
      maxCount: 1,
    },
  ]);

  return (req, res, next) => {
    upload(req, res, function (err) {
      if (req.fileValidationError) {
        return res.status(400).send({
          status: "Upload Failed!",
          message: req.fileValidationError,
        });
      }

      if (!req.files && !err) {
        return res.status(400).send({
          status: "Upload Failed!",
          message: "Please select file to upload!",
        });
      }

      if (err) {
        if (err.code === "LIMIT_FILE_SIZE") {
          return res.status(400).send({
            status: "Upload Failed!",
            message: "Max file sized 50MB",
          });
        }
        return res.status(400).send(err);
      }

      return next();
    });
  };
};

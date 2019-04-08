/* eslint-disable new-cap */
/* eslint-disable max-len */
const Multer = require('multer');

const storage = Multer.diskStorage({
  destination: (req, file, cb) => {
    // console.log(req);
    const destination = `uploads`;
    cb( /* new Error('An error occured saving file(s)') */ null, destination);
  },
  filename: (req, file, cb) => {
    const filename = `${new Date().toDateString()}_${file.originalname}`;
    cb( /* new Error('An error Occured naming file(s))') */ null, filename);
  },
});

const fileFilter = (req, file, cb) => {
  const condition = 'file.mimeType == \'image/jpeg\' || file.mimeType == \'image/png\' || file.mimeType == \'image/jpg\' || file.mimeType == \'image/bmp\'';
  condition ? cb(null, true) : cb(new Error('Invalid File mimetype'), false);
  /* if (condition) {
    cb(err, true);
  } else {
    cb(new Error('Invalid File mimetype'), false);
  } */
};

module.exports = Multer({
  storage: storage,
  fileFilter: fileFilter,
  limit: {
    fileSize: 1024 * 1024 * 4,
  },
});

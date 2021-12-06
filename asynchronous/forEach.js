const forEachSolacroup = (array, cb) => {
  for (let i = 0; i < array.length; i++) {
    cb(array[i]);
  }
};

module.exports = forEachSolacroup;

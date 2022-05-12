const { uuid } = require('uuidv4');

const generateUID = () => {
  return uuid();
}

module.exports = generateUID;
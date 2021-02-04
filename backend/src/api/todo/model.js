const restful = require('node-restful');

const schema = require('./schema');

module.exports = restful.model('todoSchema', schema);

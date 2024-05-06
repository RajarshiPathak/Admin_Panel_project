const mongoose = require('mongoose');

const MongoInstanceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  connectionString: { type: String, required: true },
  databases: [{ name: String }]
});

module.exports = mongoose.model('MongoInstance', MongoInstanceSchema);

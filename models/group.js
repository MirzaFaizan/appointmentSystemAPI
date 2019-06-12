var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GroupSchema = new Schema(
  {
    name: {type: String, max: 100},
    password: {type: String, max: 100}
  }
);

//Export model
module.exports = mongoose.model('Group',GroupSchema);

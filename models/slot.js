var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SlotSchema = new Schema(
  {
    name: {type: String, max: 100},
    day: {type: String, max: 100},
    from: {type: String, max: 100},
    to: {type: String, max: 100}
  }
);

//Export model
module.exports = mongoose.model('Slot',SlotSchema);

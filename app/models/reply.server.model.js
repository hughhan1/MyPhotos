var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ReplySchema = new Schema({
    name: String,
    email: String,
    comment: String
});

mongoose.model('Reply', ReplySchema);
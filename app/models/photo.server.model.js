var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PhotoSchema = new Schema({
    name: String,
    date: {
        type: Date,
        default: Date.now
    },
    location: {
    	name: String,
    	lat: Number,
        lon: Number
    },
});

mongoose.model('Photo', PhotoSchema);
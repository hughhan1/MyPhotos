var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PhotoSchema = new Schema({
    name: {
        type: String,
    },
    description: String,
    date: {
        type: Date,
        default: Date.now
    },
    location: {
    	name: String,
    	lat: Number,
        lon: Number
    },
    path: {
        type: String,
        required: true
    },
    filename: {
        type: String,
        required: true
    },
    extension: {
        type: String,
        required: true
    }
});

mongoose.model('Photo', PhotoSchema);
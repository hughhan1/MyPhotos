var mongoose = require('mongoose');
var validator = require('validator');
var Schema = mongoose.Schema;

var ReplySchema = new Schema({
    firstName: {
    	type: String,
    	trim: true,
    	required: 'First name is required.',
    	validate: [ validator.isAlpha, 'FIrst name is required (A-z).']
    },
    lastName: {
    	type: String,
    	trim: true,
    	required: 'Last name is required.',
    	validate: [ validator.isAlpha, 'Last name is required (A-z).']
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: 'Email is required.',
        validate: [ validator.isEmail, 'Invalid email.' ],
    },
    comment: String
});

mongoose.model('Reply', ReplySchema);
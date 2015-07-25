var Reply = require('mongoose').model('Reply');

exports.render = function(req, res) {
    res.render('reply', {
        title           : 'My Portfolio',
        firstNameErr    : '',
        lastNameErr     : '',
        emailErr        : ''
    });
};

exports.create = function(req, res, next) { 
    var reply = new Reply(req.body);
    reply.save(function(err) {
        if (err) {
            res.render('reply', {
                title           : 'My Portfolio',
                firstNameErr    : err.errors.firstName || '',
                lastNameErr     : err.errors.lastName || '',
                emailErr        : err.errors.email || ''
            });
        }
        else {
            console.log(reply);
            res.render('index', {
                title : 'My Portfolio',
                name  : reply.firstName
            });
        }
    });
};

exports.list = function(req, res, next) {
    Reply.find({}, function(err, replies) {
        if (err) {
            return next(err);
        }
        else {
            res.json(replies);
        }
    });
};

exports.read = function(req, res) {
    res.json(req.reply);
};

exports.replyByID = function(req, res, next, id) {
    Reply.findOne({
            _id: id
        }, 
        function(err, reply) {
            if (err) {
                return next(err);
            }
            else {
                req.reply = reply;
                next();
            }
        }
    );
};

exports.update = function(req, res, next) {
    Reply.findByIdAndUpdate(req.reply.id, req.body, function(err, reply) {
        if (err) {
            return next(err);
        }
        else {
            res.json(reply);
        }
    });
};

exports.delete = function(req, res, next) {
    req.reply.remove(function(err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(req.reply);
        }
    })
};
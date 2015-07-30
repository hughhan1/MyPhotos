var Reply = require('mongoose').model('Reply');

var getErrorMessage = function(err) {
    if (err.errors) {
        for (var errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } else {
        return 'Unknown server error';
    }
};

exports.render = function(req, res) {
    res.render('reply', {
        title           : 'Hugh Han',
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
                title           : 'Hugh Han',
                firstNameErr    : err.errors.firstName || '',
                lastNameErr     : err.errors.lastName || '',
                emailErr        : err.errors.email || ''
            });

            // return res.status(400).send({
            //     message: getErrorMessage(err)
            // });
        }
        else {
            console.log(reply);
            res.render('index', {
                title : 'Hugh Han',
                name  : reply.firstName
            });

            // res.json(reply);
        }
    });
};

exports.list = function(req, res) {
    Reply.find({}, function(err, replies) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(replies);
        }
    });
};

// exports.list = function(req, res, next) {
//     Reply.find({}, function(err, replies) {
//         if (err) {
//             return next(err);
//         }
//         else {
//             res.json(replies);
//         }
//     });
// };

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

            if (!reply) {
                return next(new Error('Failed to load reply ' + id));
            }

            req.reply = reply;
            next();
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
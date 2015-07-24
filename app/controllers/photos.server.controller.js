var Photo = require('mongoose').model('Photo');

exports.create = function(req, res, next) { 
    var photo = new Photo(req.body);
    photo.save(function(err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(photo);
        }
    });
};

exports.list = function(req, res, next) {
    Photo.find({}, function(err, photos) {
        if (err) {
            return next(err);
        }
        else {
            res.json(photos);
        }
    });
};

exports.read = function(req, res) {
    res.json(req.photo);
};

exports.photoByID = function(req, res, next, id) {
    Photo.findOne({
            _id: id
        }, 
        function(err, photo) {
            if (err) {
                return next(err);
            }
            else {
                req.photo = photo;
                next();
            }
        }
    );
};

exports.update = function(req, res, next) {
    Photo.findByIdAndUpdate(req.photo.id, req.body, function(err, photo) {
        if (err) {
            return next(err);
        }
        else {
            res.json(photo);
        }
    });
};

exports.delete = function(req, res, next) {
    req.photo.remove(function(err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(req.photo);
        }
    })
};
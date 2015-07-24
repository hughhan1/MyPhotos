var photos = require('../../app/controllers/photos.server.controller');

module.exports = function(app) {
    app.route('/photos')
    	.post(photos.create)
    	.get(photos.list);

    app.route('/photos/:photoId')
    	.get(photos.read)
    	.put(photos.update)
    	.delete(photos.delete);

    app.param('photoId', photos.photoByID);

};
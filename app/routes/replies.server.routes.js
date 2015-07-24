var replies = require('../../app/controllers/replies.server.controller');

module.exports = function(app) {
    app.route('/replies')
    	.post(replies.create)
    	.get(replies.list);

    app.route('/replies/:photoId')
    	.get(replies.read)
    	.put(replies.update)
    	.delete(replies.delete);

    app.param('photoId', replies.photoByID);

};
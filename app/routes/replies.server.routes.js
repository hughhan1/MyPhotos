var replies = require('../../app/controllers/replies.server.controller');

module.exports = function(app) {
    app.route('/replies')
    	.post(replies.create)
    	.get(replies.render);

    app.route('/replies/:replyId')
    	.get(replies.read)
    	.put(replies.update)
    	.delete(replies.delete);

    app.param('replyId', replies.replyByID);

};
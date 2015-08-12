angular.module('replies').factory('Replies', ['$resource',
    function($resource) {
        return $resource('api/replies/:replyId', {
            repliesId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
]);

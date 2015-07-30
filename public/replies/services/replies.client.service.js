angular.module('replies').factory('Replies', ['$resource',
    function($resource) {
        return $resource('api/replies/:todoId', {
            todoId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
]);

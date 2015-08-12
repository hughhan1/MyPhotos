angular.module('photos').factory('Photos', ['$resource',
    function($resource) {
        return $resource('api/photos/:photoId', {
            photoId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
]);

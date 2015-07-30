angular.module('photos').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/photos', {
            templateUrl: 'photos/views/list-photos.client.view.html'
        }).
        when('/photos/:photoId', {
            templateUrl: 'photos/views/view-photo.client.view.html'
        }).
    }
]);

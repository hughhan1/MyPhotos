angular.module('replies').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/replies', {
            templateUrl: 'replies/views/list-replies.client.view.html'
        }).
    }
]);

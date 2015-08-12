angular.module('photos').controller('PhotosController', ['$scope', '$routeParams', '$location', 'Photos',
    function($scope, $routeParams, $location, Photos) {

        $scope.find = function() {
            $scope.photos = Photos.query();
        };

        $scope.findOne = function() {
            $scope.photo = Photos.get({
                photoId: $routeParams.photoId
            });
        };
    }
]);

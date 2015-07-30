angular.module('photos').controller('PhotosController', ['$scope', '$routeParams', '$location', 'Photos',
    function($scope, $routeParams, $location, Authentication, Photos) {
        $scope.authentication = Authentication;

        $scope.create = function() {
            var photo = new Photos({
                title: this.title,
                comment: this.comment
            });

            photo.$save(function(response) {
                $location.path('photos/' + response._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.find = function() {
            $scope.photos = Photos.query();
        };

        $scope.findOne = function() {
            $scope.photo = Photos.get({
                photoId: $routeParams.photoId
            });
        };

        $scope.update = function() {
            $scope.photo.$update(function() {
                $location.path('photos/' + $scope.photo._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.delete = function(photo) {
            if (photo) {
                photo.$remove(function() {
                    for (var i in $scope.photos) {
                        if ($scope.photos[i] === photo) {
                            $scope.photos.splice(i, 1);
                        }
                    }
                });
            } else {
                $scope.photo.$remove(function() {
                    $location.path('photos');
                });
            }
        };
    }
]);

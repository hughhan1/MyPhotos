angular.module('replies').controller('RepliesController', ['$scope', '$routeParams', '$location', 'Replies',
    function($scope, $routeParams, $location, Authentication, Replies) {
        $scope.authentication = Authentication;

        $scope.create = function() {
            var reply = new Replies({
                title: this.title,
                comment: this.comment
            });

            reply.$save(function(response) {
                $location.path('replies/' + response._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.find = function() {
            $scope.replies = Replies.query();
        };

        $scope.findOne = function() {
            $scope.reply = Replies.get({
                replyId: $routeParams.replyId
            });
        };

        $scope.update = function() {
            $scope.reply.$update(function() {
                $location.path('replies/' + $scope.reply._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.delete = function(reply) {
            if (reply) {
                reply.$remove(function() {
                    for (var i in $scope.replies) {
                        if ($scope.replies[i] === reply) {
                            $scope.replies.splice(i, 1);
                        }
                    }
                });
            } else {
                $scope.reply.$remove(function() {
                    $location.path('replies');
                });
            }
        };
    }
]);

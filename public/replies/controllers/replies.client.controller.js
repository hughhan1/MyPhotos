angular.module('replies').controller('RepliesController', ['$scope', '$routeParams', '$location', 'Replies',
    function($scope, $routeParams, $location, Replies) {
        $scope.create = function() {
            var reply = new Replies({
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                comments: this.comments
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
    }
]);

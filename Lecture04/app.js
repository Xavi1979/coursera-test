(function () {
'use strict';

angular.module('MyFirstApp', [])

.controller('MyFirstController', function ($scope) {
        $scope.name = "Xavi";
        $scope.sayHello = function(){
            return "Hello Coursera";
        }
});

})();

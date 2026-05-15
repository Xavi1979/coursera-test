(function () {
'use strict';

angular.module('NameCalculator', [])

.controller('NameCalculatorController', function ($scope) {
    $scope.name = "Xavi";
    var totalNamevalue = calculatNumericForString($scope.name); 
    $scope.totalValue = totalNameValue;    

    $scope.displayNumeric = function(){        
        var totalStringValue = 0;
        $scope.totalStringValue = totalNamevalue;        
    };

    function calculatNumericForString(string){
        var totalStringValue = 0;
        for (var i=0; i < string.length; i++){
            totalNameValue += string.charCodeAt(i);
        }

        return totalStringValue;    
    }
}
);

})();

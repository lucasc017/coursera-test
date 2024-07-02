(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('myFirstController', function ($scope){
    $scope.name = ""
    $scope.totalValue = 0;

    $scope.displayNumeric = function () {
        $scope.totalValue = calculateNumericValForString($scope.name);
    }

    function calculateNumericValForString(string) {
        let ans = 0;
        for (let i = 0; i < string.length; i++){
            ans += string.charCodeAt(i);
        }

        return ans;
    }
});

})();
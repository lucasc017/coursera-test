(function () {
'use strict';
const ENJOY_MESSAGE = "Enjoy!";
const TOO_MUCH_MESSAGE = "Too much!";
const PLEASE_ENTER_DATA_MESSAGE = "Please enter data first";

angular.module('assigment1', [])

.controller('assigment1Controller', assigment1Controller);

assigment1Controller.$inject = ['$scope']
function assigment1Controller($scope){
    $scope.lunchList = "";
    $scope.message = "";

    $scope.whenClicked = function(){
        $scope.message = getAppropiateMessage($scope.lunchList);
    }

    function getAppropiateMessage(string){

        if (string.length === 0){
            return PLEASE_ENTER_DATA_MESSAGE;
        }

        let lunchArr = string.split(",");
        if (lunchArr.length <= 3){
            return ENJOY_MESSAGE;

        } else {
            return TOO_MUCH_MESSAGE;
            
        }
    }
}

})();
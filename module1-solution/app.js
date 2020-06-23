(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
  
    LunchCheckController.$inject = ['$scope'];
    
    function LunchCheckController($scope)
     {

        $scope.items = '';
        $scope.message = '';
        $scope.fontcolor ={};
        $scope.bordercolor = {};

        $scope.check = function (){
            let arrayOfItems = $scope.items.split(',');
            let counter = 0;

            arrayOfItems.forEach((item) => {
                if (item != false) {
                    counter++;
                }
            });

            if (counter > 0 && counter < 4){
                $scope.message = 'Enjoy!';
                $scope.fontcolor = {
                    "color": "green"
                  };
                  $scope.bordercolor = {
                    "border-color": "green"
                  };
            }
            else if(counter >= 4){
                $scope.message = 'Too much!';
                $scope.fontcolor = {
                    "color": "green"
                  };
                  $scope.bordercolor = {
                    "border-color": "green"
                  };                
            }
            else{
                $scope.message = 'Please enter data first';
                $scope.fontcolor = {
                    "color": "red"
                  };
                  $scope.bordercolor = {
                    "border-color": "red"
                  };
            }
        }
      }
    
    })();
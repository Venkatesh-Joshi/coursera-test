(function () {
  angular.module('ShoppingListCheckOff',[])
         .controller('ToBuyController', ToBuyController)
         .controller('AlreadyBoughtController', AlreadyBoughtController)
         .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

          //To buy list
         	ToBuyController.$inject =['ShoppingListCheckOffService'];
         	function ToBuyController (ShoppingListCheckOffService)
          {
         		var buy = this;
         		buy.items = ShoppingListCheckOffService.toBuyItems();
         		buy.removeItem = function(itemIndex){
         			ShoppingListCheckOffService.bought(itemIndex);
         		};
         	}

          //Already bought list
        	AlreadyBoughtController.$inject =['ShoppingListCheckOffService'];
        	function AlreadyBoughtController (ShoppingListCheckOffService)
          {
        		var bought = this;
        		bought.items = ShoppingListCheckOffService.boughtItems();
        	}

          //Shopping list service
        	function ShoppingListCheckOffService()
          {
        		var service = this;
            var toBuyItems =
            [
              {name: "Cookies",
               quantity: 10
              },
              {name: "Pencils",
               quantity: 5
              },
              {name: "Pens",
               quantity: 5
              },
              {name: "Notebooks",
               quantity: 10
              },
              {name: "Backpack",
               quantity: 15
              },
              {name: "Smart Phone",
               quantity: 20
              },
              {name: "Laptop",
               quantity: 3
              },
              {name: "Earphone",
               quantity: 25
              },
              {name: "Powerbank",
               quantity: 30
              },
              {name: "Headphone",
               quantity: 15
              },
            ];

        		var boughtItems = [];

          	service.bought = function(itemIndex) {
          			boughtItems.push(toBuyItems[itemIndex]);
          			toBuyItems.splice(itemIndex, 1);
          	};

          	service.boughtItems = function() {
          			return boughtItems;
          	};

          	service.toBuyItems = function() {
          			return toBuyItems;
          	};
          }

})();

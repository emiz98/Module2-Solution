(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListService', ShoppingListService);

ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
  var buyList = this;

  buyList.items = ShoppingListService.getItems();
  buyList.removeItem = function (itemIndex) {
      ShoppingListService.addItemToBought(itemIndex);
      ShoppingListService.removeItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
  var boughtList = this;

  boughtList.itemsBought = ShoppingListService.getItemsBought();
  boughtList.errorMessage="Nothing bought yet";
}


function ShoppingListService() {
  var service = this;
  var items = [
    {
      name: "Milk",
      quantity: "2 Bottles"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    },
    {
      name: "Coke",
      quantity: "3 Cans"
    },
    {
      name: "Biscuits",
      quantity: "20 Packets"
    }
  ];
  var itemsBought = [];

  service.getItems = function () {
    return items;
  };
  service.getItemsBought = function () {
    return itemsBought;
  };
  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };
  service.addItemToBought = function (itemIndex) {
    itemsBought.push(items[itemIndex]);
  }
}

})();

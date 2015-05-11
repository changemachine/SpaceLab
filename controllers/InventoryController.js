spacelab.controller('InventoryCtrl', function InventoryCtrl($scope, InventoryFactory) {
  $scope.InventoryFactory = InventoryFactory;
  $scope.door_opened = InventoryFactory.door_opened;
  $scope.inventory = InventoryFactory.inventory;



  $scope.show_inventory = function() {
    $scope.inventory = !$scope.inventory;
  };


// OBSOLETE.  DATA LOGIC BELONGS IN FACTORY.
  // InventoryFactory.open_door = function() {
  //   if (InventoryFactory.keycard === 1) {
  //     InventoryFactory.door_opened = 1;
  //     //  DESTINATION = QUARTERS
  //   }
  // console.log('DOOR: '+ InventoryFactory.door_opened);
  // };




});

spacelab.factory('InventoryFactory', function InventoryFactory() {
    var factory = {};

    factory.inventory = [];

    //STATES
    factory.door_opened = 0;
    //END OF STATES

    //ACTIONS
    factory.pickup = function (item) {
      factory.inventory.push(item);
      console.log(factory.inventory);
    };

    factory.open_door = function (key) {
      // if (factory.door_opened === 1) { destination = 'quarters'; } = = = BYPASS DIALOG, ENTER ROOM IF DOOR HAS BEEN OPENED
      // if (factory.keycards === 0) { $scope.door_msg = 'Locked!'; }  = = = CHANGE MESSAGE ON DOOR DIALOG = = =
      // if (factory.keycards === factory.door) { factory.door.msg = 'Locked!'; }
      //  = = = RECREATE AS OBJECTS: blueDoor [open, dialog ('locked' vs 'enter'), door = 'blue', etc].  Keycard then has key = 'blue', etc.
      if (factory.inventory.indexOf(key) !== -1) {
        factory.door_opened = 1;
      }
      console.log('door_opened = ' + factory.door_opened);
      console.log('door key: ' + key);
    };
    //END OF ACTIONS





    // OBSOLETE.  REFACTORED
    // factory.pickup_keycard = function (key) {
    //     factory.keycards.push(key);
    //     console.log(key);
    //     console.log(keycards);
    // };
    // factory.pickup_knife = function () {
    //     factory.murder_weapon = 1;
    // };
    // factory.use_lockbox = function () {
    //     factory.lockbox = 1;
    // };
    // factory.use_towel = function () {
    //     factory.towel = 1;
    // };
    // factory.use_soap = function () {
    //     factory.soap = 1;
    // };
    // factory.pickup_pda = function () {
    //     factory.pda = 1;
    // };
    // $scope.pickup_keycard = function() {
    //   InventoryFactory.pickup_keycard();
    // };
    // $scope.pickup_knife = function() {
    //   InventoryFactory.pickup_knife();
    // };
    //
    // $scope.pickup_pda = function() {
    //   InventoryFactory.pickup_pda();
    // };
    //
    // factory.use_dog_tags = function () {
    //     factory.dog_tags = 1;
    // };
    //// END PICKUP ITEMS



    return factory;
});

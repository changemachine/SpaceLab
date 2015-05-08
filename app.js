var spacelab = angular.module('spacelab', ['ui.router']);

spacelab.config(function($stateProvider) {

  $stateProvider.state('title', {
    url: '',
    views: {
      'scene': {
        templateUrl: 'partials/title.html',
        controller: 'PlotCtrl'
      },
    }
  });

  $stateProvider.state('start', {
    url: '1',
    views: {
      'scene': {
        templateUrl: 'partials/start.html',
        controller: 'PlotCtrl'
      },
    }
  });

  $stateProvider.state('lights_on', {
    url: '2',
    views: {
      'scene': {
        templateUrl: 'partials/scene.html',
        controller: 'InventoryCtrl'
      },
      'gui': {
        templateUrl: 'partials/gui.html',
        controller: 'InventoryCtrl'
      },
      'dialog': {
        templateUrl: 'partials/dialog.html',
        controller: 'InventoryCtrl'
      }
    }
  });

  $stateProvider.state('body_view', {
    url: '3',
    views: {
      'scene': {
        templateUrl: 'partials/body_view.html',
        controller: 'InventoryCtrl'
      },
      'gui': {
        templateUrl: 'partials/gui.html',
        controller: 'InventoryCtrl'
      },
      'dialog': {
        templateUrl: 'partials/dialog.html',
        controller: 'InventoryCtrl'
      }
    }
  });

  $stateProvider.state('crew_quarters', {
    url: '4',
    views: {
      'scene': {
        templateUrl: 'partials/crew_quarters.html',
        controller: 'InventoryCtrl'
      },
      'gui': {
        templateUrl: 'partials/gui.html',
        controller: 'InventoryCtrl'
      },
      'dialog': {
        templateUrl: 'partials/dialog.html',
        controller: 'InventoryCtrl'
      }
    }
  });

  $stateProvider.state('mirror', {
    url: '5',
    views: {
      'scene': {
        templateUrl: 'partials/mirror.html',
        controller: 'InventoryCtrl'
      },
    }
  });




});


var soundtrack = $("<audio id='soundtrack' src='audio/FoxSynergy_Blue_Space_08.mp3' autobuffer='auto' preload controls></audio>");
$("#soundtrack").append(soundtrack);
soundtrack.attr('autoplay','autoplay');

// $('#soundtrack')[0].play();

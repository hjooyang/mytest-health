// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ionic-datepicker', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('main', {
        url: '/main',
        templateUrl: 'templates/main.html'
      })
  .state('mc-main', {
        url: '/main/mc-main',
        templateUrl: 'templates/mc-main.html'
      })
  .state('mc-m-health', {
        url: '/main/mc-main/mc-m-health',
        templateUrl: 'templates/mc-m-health.html'
      })
  .state('mr-main', {
        url: '/main/mr-main',
        templateUrl: 'templates/mr-main.html',
        controller: 'MRMainCtrl'
      });
  /*
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.main', {
      url: '/main',
      views: {
        'menuContent': {
          templateUrl: 'templates/main.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
    .state('app.mc-main', {
      url: '/main/mc-main',
      views: {
        'menuContent': {
          templateUrl: 'templates/mc-main.html',
          controller: 'PlaylistCtrl'
        }
      }
    })
    .state('app.mc-m-health', {
      url: '/main/mc-main/mc-m-health',
      views: {
        'menuContent': {
          templateUrl: 'templates/mc-m-health.html',
          controller: 'PlaylistCtrl'
        }
      }
    });*/

  // .state('app.single', {
  //   url: '/playlists/:playlistId',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/playlist.html',
  //       controller: 'PlaylistCtrl'
  //     }
  //   }
  // });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/main');
});

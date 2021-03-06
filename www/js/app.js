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
  .state('cyber-counseling', {
        url: '/main/cyber-counseling',
        templateUrl: 'templates/cyber-counseling.html',
        controller: 'Messages'
      })
  .state('reservation', {
        url: '/main/reservation',
        templateUrl: 'templates/reservation.html',
        controller: 'MRMainCtrl'
      })
  .state('mcheck-reserv', {
        url: '/main/mcheck-reserv',
        templateUrl: 'templates/mcheck-reserve.html',
        controller: 'MRMainCtrl'
      })
  .state('simple-reserv', {
        url: '/main/simple-reserv',
        templateUrl: 'templates/simple-reserv.html',
        controller: 'MRMainCtrl'
      })

   // .state('mr-main-1', {
   //      url: '/main/mr-main/mr-main-1',
   //      templateUrl: 'templates/mr-main-1.html',
   //      controller: 'MRMainCtrl'
   //    })
   .state('mr-main-2', {
        url: '/main/mr-main/mr-main-1/mr-main-2',
        templateUrl: 'templates/mr-main-2.html',
        controller: 'MRMainCtrl'
      })
   .state('mr-main-3', {
        url: '/main/mr-main/mr-main-1/mr-main-2/mr-main-3',
        templateUrl: 'templates/mr-main-3.html',
        controller: 'MRMainCtrl'
      })
   .state('mr-main-4', {
        url: '/main/mr-main/mr-main-1/mr-main-2/mr-main-3/mr-main-4',
        templateUrl: 'templates/mr-main-4.html',
        controller: 'MRMainCtrl'
      })
   .state('confirm', {
        url: '/main/confirm',
        templateUrl: 'templates/confirm.html',
        controller: 'MRMainCtrl'
      })
   ;
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
})
.directive('input', function($timeout) {
  return {
    restrict: 'E',
    scope: {
      'returnClose': '=',
      'onReturn': '&',
      'onFocus': '&',
      'onBlur': '&'
    },
    link: function(scope, element, attr) {
      element.bind('focus', function(e) {
        if (scope.onFocus) {
          $timeout(function() {
            scope.onFocus();
          });
        }
      });
      element.bind('blur', function(e) {
        if (scope.onBlur) {
          $timeout(function() {
            scope.onBlur();
          });
        }
      });
      element.bind('keydown', function(e) {
        if (e.which == 13) {
          if (scope.returnClose) element[0].blur();
          if (scope.onReturn) {
            $timeout(function() {
              scope.onReturn();
            });
          }
        }
      });
    }
  }
})
;

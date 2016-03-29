angular.module('starter.controllers', ['ionic-datepicker'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('MRMainCtrl', function($scope, $stateParams) {
  console.log('test');
  $scope.currentDate = new Date();
  $scope.minDate = new Date(2016, 3, 21);
  $scope.maxDate = new Date(2016, 12, 31);

  $scope.datePickerCallback = function (val) {
      if (!val) { 
          console.log('Date not selected');
      } else {
          console.log('Selected date is : ', val);
      }
  };

  $scope.groups = [
    {
        name: 'ㅇㅇCenter',
        items: [
          { name: 'Premium', price: '3,000,000원', discount_p: '50%', discount_n: '20%'}, 
          { name: 'Gold Plus', price: '3,000,000원', discount_p: '30%', discount_n: '10%' },
          { name: 'Basic', price: '3,000,000원', discount_p: '20%', discount_n: '10%'}
         ],
         id:1
    },
    {
      name: '** Hospital',
      items: [
          { name: 'VIP', price: '3,000,000원', discount_p: '40%', discount_n: '20%'}, 
          { name: 'General', price: '3,000,000원', discount_p: '40%', discount_n: '10%'},
          { name: 'Basic', price: '3,000,000원', discount_p: '40%', discount_n: '20%'}
      ],
      id: 2
    }];

  $scope.motivations = [
    {id: 1, value: '전반적인 건강체크'},
    {id: 2, value: '가족력이나 질병의심'},
    {id: 3, value: '세밀한 건강체'}
  ];

  $scope.questions = [
    {id: 1, value: '1. Smoking Information'},
    {id: 2, value: '2. Smoking Information'},
    {id: 3, value: '3. Smoking Information'},
    {id: 4, value: '4. Height'},
    {id: 5, value: '5. Weight'},
    {id: 6, value: '6. heredity'}
  ];

  $scope.tests = [
    {id: 1, value: '기초, 생리기능검사'},
    {id: 2, value: '소변검사'},
    {id: 3, value: '대변검사'},
    {id: 4, value: '안과검사'},
    {id: 5, value: '고지혈증검사'},
    {id: 6, value: '혈액질환검사'},
    {id: 7, value: '간기능검사'},
    {id: 8, value: '심혈관계검사'},
    {id: 9, value: '당뇨검사'},
    {id: 10, value: '신장기능검사'},
    {id: 11, value: '간염검사'},
    {id: 12, value: '통풍검사'}
  ];

  // for (var i=0; i<$scope.groups.length; i++) {
  //   for (var j=0; j<3; j++) {
  //     $scope.groups[i].items.push(i + '-' + j);
  //   }
  // }
  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };


})
.controller('Messages', function($scope, $timeout, $ionicScrollDelegate) {

  $scope.hideTime = true;

  var alternate,
    isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();

  $scope.sendMessage = function() {
    alternate = !alternate;
    console.log($scope.hideTime);

    var d = new Date();
  d = d.toLocaleTimeString().replace(/:\d+ /, ' ');

    $scope.messages.push({
      userId: alternate ? '12345' : '54321',
      text: $scope.data.message,
      time: d
    });

    delete $scope.data.message;
    $ionicScrollDelegate.scrollBottom(true);

  };


  $scope.inputUp = function() {
    if (isIOS) $scope.data.keyboardHeight = 216;
    $timeout(function() {
      $ionicScrollDelegate.scrollBottom(true);
    }, 300);

  };

  $scope.inputDown = function() {
    if (isIOS) $scope.data.keyboardHeight = 0;
    $ionicScrollDelegate.resize();
  };

  $scope.closeKeyboard = function() {
    // cordova.plugins.Keyboard.close();
  };


  $scope.data = {};
  $scope.myId = '12345';
  $scope.messages = [];

});

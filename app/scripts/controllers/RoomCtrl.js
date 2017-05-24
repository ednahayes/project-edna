(function() {
    function RoomCtrl() {
      $scope.rooms = Room.all;
    }



    angular
        .module('projectEdna')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();

(function() {
    function HomeCtrl($scope, Room, Message) {
      var currentRoom = '';
      var currentRoomName = "Rooms";
      $scope.rooms = Room.all;
      $scope.openRoom = function(room){
        // Assign property of room title to display in template
        $scope.currentRoomTitle = room.$value;
        // Get messages for room clicked on
        // Assign them to controller property to list out in template
        $scope.currentRoomMessages = Message.getByRoomId(room.$id);
      }

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', HomeCtrl]);
})();

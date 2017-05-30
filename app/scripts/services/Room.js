(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("Rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;
    var newroomName = {};

    Room.add = function(newroomName) {
        //Use the firebase method $add here
        rooms.$add({
          name: newroomName
        });
    }

    return Room;
  }




  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();

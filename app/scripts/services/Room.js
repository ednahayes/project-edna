(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("Rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;
    var newroomName = {};
    Room.add = function(room) {
        //Use the firebase method $add here
        rooms.$add({newroomName: ''}).then(function(ref) {
          var id = ref.key;
          rooms.$indexFor(id);  //returns location in the array
        });
    }

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();

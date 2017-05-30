(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);


    Message.getByRoomId = function(roomId){
        // Filter the messages by their room ID.
      return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));

    };

    return Message;
  };


  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', 'Room', Message]);
})();

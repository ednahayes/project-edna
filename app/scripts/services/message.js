(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);


    Message.getByRoomId = function(roomId){
        // Filter the messages by their room ID.
      return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));

    };

    Message.send = function(content, user, roomId) {
      console.log(content);
      console.log(user);
      console.log(roomId);

    // Send method logic
        messages.$add({ content: content,
                        roomId: roomId,
					   	          username: user
                      });
    }
    return Message;
  }


  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();

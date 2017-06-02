(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);


    Message.getByRoomId = function(roomId){
        // Filter the messages by their room ID.
      return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));

    };

    Message.send = function(newMessage) {
    // Send method logic
        messages.$add({ content: message.content,
                        roomId: message.roomId,
					   	          sentAt: message.sentAt,
						            username: message.currentUser
                      });
    }
    return Message;
  }


  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();

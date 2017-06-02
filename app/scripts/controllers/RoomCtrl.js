(function() {
    function RoomCtrl(Room, Message, BlocChatCookies) {
      this.rooms = Room.all;
      this.createRoomForm = Room.add;
      this.currentRoomTitle = null;
      this.Message = {};


      this.openRoom = function(room) {
        this.currentRoomTitle = room;

        this.currentRoomMessages = Message.getByRoomId(this.currentRoomTitle.$id);

        }

        this.setUserName = function(username) {
          this.currentUser = BlocChatCookies.setUserName();
        }

        this.sendMessage = Message.send;

    };


    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', 'Message', 'BlocChatCookies', RoomCtrl]);
})();

(function() {
    function RoomCtrl(Room, Message) {
      this.rooms = Room.all;
      this.createRoomForm = Room.add;
      this.room = null;
      this.Message = {};


      this.openRoom = function(room) {
        this.currentRoomTitle = room;
        this.currentRoomMessages = Message.getByRoomId(this.currentRoomTitle.$id);

        }


      }


    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', 'Message', RoomCtrl]);
})();

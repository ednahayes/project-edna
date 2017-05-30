(function() {
    function RoomCtrl(Room, Message) {
      this.rooms = Room.all;
      this.createRoomForm = Room.add;
      this.room = null;
      this.Message = {};


      this.openRoom = function(room) {
      this.currentRoomTitle = room.name;
      this.currentRoomMessages = Message.getByRoomId;

        }


      }


    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();

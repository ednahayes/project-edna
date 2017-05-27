(function() {
    function RoomCtrl(Room) {
      this.rooms = Room.all;
      this.room = null;
      this.roomName = function(room) {
        this.room = room;
        return this.room;
      }

}


    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room',  RoomCtrl]);
})();

(function() {
    function RoomCtrl(Room) {
      this.rooms = Room.all;
      this.createRoomForm = Room.add;
      this.room = null;

}


    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room',  RoomCtrl]);
})();

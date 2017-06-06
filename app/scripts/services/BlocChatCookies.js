(function() {
  function BlocChatCookies($cookies) {
    var BlocChatCookies = {};
    // We need a way to...
    // Get the current username
    // Set a new username
    BlocChatCookies.setUserName = function (username) {
      $cookies.put('blocChatCurrentUser', username);
    }
    // (Using the $cookies service)
    var newCurrentUser = {};
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      // Do something to allow users to set their username
       currentUser = {username: newCurrentUser};
    } else {
      $cookies.blocChatCurrentUser = currentUser;
    }

    return BlocChatCookies;
  }

  angular
    .module('blocChat')
    .factory('BlocChatCookies', ['$cookies', BlocChatCookies]);
})();

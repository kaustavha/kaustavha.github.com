app = angular.module 'app', ['ngTouch']

app.controller 'MainController', ($scope) ->     
    $scope.change = ->
        chatRef =  new Firebase 'https://fiery-fire-2457.firebaseio.com/'
        chat =  new FirechatUI(chatRef, document.getElementById "firechat-wrapper")
        username = $scope.username.toString()
        pwd = $scope.pwd.toString()
        email = $scope.email.toString()
        auth = new FirebaseSimpleLogin chatRef, (err, user) ->
            if user
                chat.setUser user.id, username
                setTimeout ( -> chat._chat.enterRoom('UW')), 500
            else
                auth.createUser email, pwd, (err, user) ->
                    auth.login 'password', {
                        email: email
                        password: pwd
                        rememberMe: true
                    }
        angular.element('.fChat').css('display', 'block')
        angular.element('.login').css('display', 'none')
        return
    $scope.send = ->
        console.log 'button clicked'
        e = $.Event('keydown')
        e.which = 13
        $('textarea').trigger e
        return
    return
###
        `
        var chatRef = new Firebase('https://fiery-fire-2457.firebaseio.com/');
        var chat = new FirechatUI(chatRef, document.getElementById("firechat-wrapper"));
        var auth = new FirebaseSimpleLogin(chatRef, function(err, user) {
          if (user) {
            chat.setUser(user.id, $scope.username);
            setTimeout(function() {
              chat._chat.enterRoom('UW');
            }, 500);
          } else {
            auth.createUser($scope.email, $scope.pwd, function(err, u) {
              auth.login('password', {
                email: $scope.email,
                password: $scope.pwd,
                rememberMe: true
              }); 
            });           
          }
        })`
        angular.element('.fChat').css('display', 'block')
        angular.element('.login').css('display', 'none')
        return
    $scope.send = ->
        msg = $('#firechat-tab-content textarea').val();
        console.log msg
        chat = new FireChat(chatRef)
        chat.sendMessage 'UW', 'd', messageType='default', false
        return
###
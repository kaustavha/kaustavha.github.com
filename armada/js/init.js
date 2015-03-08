$(document).ready(function(){
   // cache the window object
   $window = $(window);
   $('section[data-type="background"]').each(function(){
     // declare the variable to affect the defined data-type
     var $scroll = $(this);
      $(window).scroll(function() {
        // HTML5 proves useful for helping with creating JS functions!
        // also, negative value because we're scrolling upwards
        var yPos = -($window.scrollTop() / $scroll.data('speed'));
        // background position
        var coords = '50% '+ yPos + 'px';
        // move the background
        $scroll.css({ backgroundPosition: coords });
      }); // end window scroll
   });  // end section function
}); // close out script
  var signupForm = document.getElementById('signup-form');
  var signupSuccess = document.getElementById('signup-success');
  var signupError = document.getElementById('signup-error');
  var signupBtn = document.getElementById('signup-button');
  var onSignupComplete = function(error) {
    signupBtn.disabled = false;
    if (error) {
      signupError.innerHTML = 'Sorry. Could not signup.';
    } else {
      signupSuccess.innerHTML = 'Thanks for signing up!';
      // hide the form
      signupForm.style.display = 'none';
    }
  };
  function signup(formObj) {
      // Store emails to firebase
      var myFirebaseRef = new Firebase("https://blistering-fire-6663.firebaseio.com/");
      myFirebaseRef.push({
        email: formObj.email.value
      }, onSignupComplete);
      signupBtn.disabled = true;
      return false;
  }
/* Create HTML5 element for IE */
document.createElement("section");

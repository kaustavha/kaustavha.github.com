var onSignupComplete, signup, signupBtn, signupError, signupForm, signupSuccess;

$(document).ready(function() {
  var $window;
  $window = $(window);
  $('section[data-type="background"]').each(function() {
    var $scroll;
    $scroll = $(this);
    $(window).scroll(function() {
      var coords, yPos;
      yPos = -($window.scrollTop() / $scroll.data('speed'));
      coords = '50% ' + yPos + 'px';
      $scroll.css({
        backgroundPosition: coords
      });
    });
  });
});

signupForm = document.getElementById('signup-form');

signupSuccess = document.getElementById('signup-success');

signupError = document.getElementById('signup-error');

signupBtn = document.getElementById('signup-button');

onSignupComplete = function(error) {
  signupBtn.disabled = false;
  if (error) {
    signupError.innerHTML = 'Sorry. Could not signup.';
  } else {
    signupSuccess.innerHTML = 'Thanks for signing up!';
    signupForm.style.display = 'none';
  }
};

signup = function(formObj) {
  var myFirebaseRef;
  myFirebaseRef = new Firebase('https://blistering-fire-6663.firebaseio.com/');
  myFirebaseRef.push({
    email: formObj.email.value
  }, onSignupComplete);
  signupBtn.disabled = true;
  return false;
};


/* Create HTML5 element for IE */

document.createElement('section');

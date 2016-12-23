(function(){

  'use strict';


  // the register trigger to flip the auth component.
  // and show the register form instead of login.
  let registerButton = document.querySelector('.js-register-open'),
      authComponent = document.querySelector('.c-authentication');

  registerButton.addEventListener('click', function (e) {
    e.preventDefault();
    authComponent.classList.add('state-register');
  });


})();

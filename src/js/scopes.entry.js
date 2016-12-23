(function(){

  'use strict';


  // the register trigger to flip the auth component.
  // and show the register form instead of login.
  let authComponent = document.querySelector('.c-authentication'),
      LoginBtn = document.querySelector('.c-authentication__submit button'),
      registerBtnOpen = document.querySelector('.js-register-open'),
      registerBtnClose = document.querySelector('.js-register-close');

  registerButton.addEventListener('click', function (e) {
    e.preventDefault();
    authComponent.classList.add('state-register');
  });


})();

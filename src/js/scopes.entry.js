(function(){

  'use strict';


  // the register trigger to flip the auth component.
  // and show the register form instead of login.
  let authComponent = document.querySelector('.c-authentication'),
      LoginBtn = document.querySelector('.c-authentication__submit button'),
      registerBtnOpen = document.querySelector('.js-register-open'),
      registerBtnClose = document.querySelector('.js-register-close');

  // activate the register pane.
  registerBtnOpen.addEventListener('click', function (e) {
    e.preventDefault();
    authComponent.classList.add('state-register');
  });

  // deactivate the register pane and show login form again.
  registerBtnClose.addEventListener('click', function (e) {
    e.preventDefault();
    authComponent.classList.remove('state-register');
  });

  // login the user to the app.
  LoginBtn.addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.add('state-loading');
  });


})();

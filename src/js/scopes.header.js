(function(){

  'use strict';


  if (document.querySelector('.s-header')) {
    let trigger = document.querySelector('.js-trigger'),
        header = document.querySelector('.s-header'),
        navChat = document.querySelector('.js-nav-main-chat'),
        logo = document.querySelector('.s-header .icon .logo'),
        backButton = document.querySelector('.js-back-button');

    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      header.classList.toggle('state-chat');
      navChat.classList.toggle('state-active');
      logo.classList.toggle('state-active');
      backButton.classList.toggle('state-active');
      this.classList.toggle('state-active');
    });

    backButton.addEventListener('click', function (e) {
      e.preventDefault();
      trigger.classList.toggle('state-active');
      header.classList.toggle('state-chat');
      navChat.classList.toggle('state-active');
      logo.classList.toggle('state-active');
      this.classList.toggle('state-active');
    });
  }


})();
